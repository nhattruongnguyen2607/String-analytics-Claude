// ============================================================
// AUTHENTICATION & ROLE-BASED ACCESS CONTROL
// Solar Plant Performance Dashboard
// ============================================================

const AUTH_KEY = 'solar_auth_session';
const USERS_KEY = 'solar_users';

const DEFAULT_USERS = [
  { id: 1, username: 'admin',    password: btoa('Admin@2026'),   role: 'admin',   name: 'System Admin',     email: 'admin@cmes.com',    active: true,  createdAt: '2026-01-01' },
  { id: 2, username: 'manager',  password: btoa('Manager@2026'), role: 'manager', name: 'Plant Manager',    email: 'manager@cmes.com',  active: true,  createdAt: '2026-01-01' },
  { id: 3, username: 'analyst',  password: btoa('Analyst@2026'), role: 'analyst', name: 'Data Analyst',     email: 'analyst@cmes.com',  active: true,  createdAt: '2026-01-01' },
  { id: 4, username: 'viewer',   password: btoa('Viewer@2026'),  role: 'viewer',  name: 'Read-only User',   email: 'viewer@cmes.com',   active: true,  createdAt: '2026-01-01' }
];

const ROLE_PERMISSIONS = {
  admin:   { dashboard: true, reports: true, import: true, admin: true, export: true },
  manager: { dashboard: true, reports: true, import: true, admin: false, export: true },
  analyst: { dashboard: true, reports: true, import: false, admin: false, export: true },
  viewer:  { dashboard: true, reports: false, import: false, admin: false, export: false }
};

const Auth = {
  init() {
    if (!localStorage.getItem(USERS_KEY)) {
      localStorage.setItem(USERS_KEY, JSON.stringify(DEFAULT_USERS));
    }
  },

  getUsers() {
    try { return JSON.parse(localStorage.getItem(USERS_KEY)) || DEFAULT_USERS; }
    catch { return DEFAULT_USERS; }
  },

  saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },

  login(username, password) {
    const users = this.getUsers();
    const user = users.find(u => u.username === username && u.password === btoa(password) && u.active);
    if (!user) return { success: false, error: 'Invalid credentials or account disabled.' };
    const session = {
      userId: user.id, username: user.username, role: user.role,
      name: user.name, email: user.email,
      loginAt: new Date().toISOString(),
      expires: new Date(Date.now() + 8 * 3600 * 1000).toISOString()
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(session));
    return { success: true, session };
  },

  logout() {
    localStorage.removeItem(AUTH_KEY);
    window.location.href = 'index.html';
  },

  getSession() {
    try {
      const raw = localStorage.getItem(AUTH_KEY);
      if (!raw) return null;
      const session = JSON.parse(raw);
      if (new Date(session.expires) < new Date()) {
        localStorage.removeItem(AUTH_KEY);
        return null;
      }
      return session;
    } catch { return null; }
  },

  requireAuth(redirectTo = 'index.html') {
    const session = this.getSession();
    if (!session) { window.location.href = redirectTo; return null; }
    return session;
  },

  can(permission) {
    const session = this.getSession();
    if (!session) return false;
    return ROLE_PERMISSIONS[session.role]?.[permission] || false;
  },

  requirePermission(permission) {
    if (!this.can(permission)) {
      document.body.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#0a0f1e;color:#fff;font-family:sans-serif;flex-direction:column;gap:1rem;">
          <div style="font-size:3rem;">🔒</div>
          <h2>Access Denied</h2>
          <p style="color:#94a3b8;">You don't have permission to view this page.</p>
          <a href="dashboard.html" style="color:#38bdf8;text-decoration:none;">← Back to Dashboard</a>
        </div>`;
      return false;
    }
    return true;
  },

  addUser(userData) {
    const users = this.getUsers();
    const newUser = {
      id: Date.now(),
      username: userData.username,
      password: btoa(userData.password),
      role: userData.role,
      name: userData.name,
      email: userData.email,
      active: true,
      createdAt: new Date().toISOString().split('T')[0]
    };
    users.push(newUser);
    this.saveUsers(users);
    return newUser;
  },

  updateUser(id, updates) {
    const users = this.getUsers();
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return false;
    if (updates.password) updates.password = btoa(updates.password);
    users[idx] = { ...users[idx], ...updates };
    this.saveUsers(users);
    return true;
  },

  deleteUser(id) {
    const session = this.getSession();
    if (session?.userId === id) return false; // Can't delete self
    const users = this.getUsers().filter(u => u.id !== id);
    this.saveUsers(users);
    return true;
  },

  getRoleBadgeClass(role) {
    return { admin: 'badge-admin', manager: 'badge-manager', analyst: 'badge-analyst', viewer: 'badge-viewer' }[role] || 'badge-viewer';
  }
};

// Auto-init
Auth.init();

// Inject nav user info helper
function renderUserBadge(containerId) {
  const session = Auth.getSession();
  if (!session) return;
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `
    <span class="nav-user-name">${session.name}</span>
    <span class="nav-role-badge ${Auth.getRoleBadgeClass(session.role)}">${session.role}</span>
    <button class="btn-logout" onclick="Auth.logout()">Sign Out</button>
  `;
}
