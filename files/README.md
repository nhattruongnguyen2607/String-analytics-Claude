# ☀️ CMES Solar Plant — Performance Analytics Dashboard

A **production-ready**, fully static performance analytics platform for solar plant monitoring, deployable to **GitHub Pages** with zero server requirements.

---

## 🚀 Quick Start

### GitHub Pages Deployment

1. **Fork / create** a new repository on GitHub
2. **Upload** all files (maintaining folder structure):
   ```
   /
   ├── index.html          ← Login page
   ├── dashboard.html      ← Main dashboard
   ├── reports.html        ← Reports + PDF/Excel export
   ├── import.html         ← Data import + master dataset
   ├── admin.html          ← Admin + user management
   ├── _config.yml         ← GitHub Pages config
   └── assets/
       ├── style.css       ← Shared styles
       ├── data.js         ← Plant data + KPI calculations
       └── auth.js         ← Authentication + RBAC
   ```
3. Go to **Settings → Pages → Source**: Select `main` branch, `/ (root)` folder
4. Your site will be live at: `https://yourusername.github.io/repo-name/`

### Custom Domain (Optional)

1. Create a `CNAME` file in the root containing your domain:
   ```
   analytics.yourcompany.com
   ```
2. Configure your DNS: Add a `CNAME` record pointing to `yourusername.github.io`
3. Enable **Enforce HTTPS** in GitHub Pages settings

---

## 🔑 Default Credentials

| Username | Password       | Role    | Access Level                    |
|----------|----------------|---------|---------------------------------|
| admin    | Admin@2026     | Admin   | Full access — all features      |
| manager  | Manager@2026   | Manager | Dashboard, Reports, Import      |
| analyst  | Analyst@2026   | Analyst | Dashboard + Reports only        |
| viewer   | Viewer@2026    | Viewer  | Dashboard read-only             |

> ⚠️ **Change default passwords** via Admin → User Management before going live.

---

## 📊 Features

### Dashboard
- **5 KPI cards**: Avg performance, low performers, trend slope, best/worst inverter
- **Daily trend chart** with min/max bands and threshold line
- **Performance distribution** histogram (7 buckets)
- **Low performers per day** bar chart
- **Inverter performance** horizontal bar chart
- **34×7 heatmap** with hover tooltips
- **Critical panels table** with severity classification
- **CSV export** of daily summaries
- **Sidebar filters**: Date, Inverter, Performance threshold

### Reports
- **Weekly report**: Full summary table + trend chart + insights
- **Monthly report**: Inverter-level performance overview
- **PDF export**: Multi-page report with header, KPIs, tables, anomalies
- **Excel export**: 3-sheet workbook (Daily Summary, Inverters, Anomalies)
- **Report schedules**: Configure automated report delivery (email config required)
- **AI-generated insights**: Automated textual analysis of trends and anomalies

### Data Import
- **Drag & drop** upload: CSV, JSON, XLSX/XLS
- **Auto-detection**: Month key derived from dataset dates
- **Upsert logic**: Updates existing month, appends new months
- **Confirmation**: Displays whether data was `ADDED` or `UPDATED`
- **Preview**: Stats + first 8 rows before committing
- **Master dataset**: Persistent storage across sessions (localStorage)
- **Export**: Master index CSV

### Admin Panel
- **User management**: Add, edit, disable, delete users
- **Role-based access control**: 4 roles with granular permissions
- **Permission matrix**: Visual role × permission grid
- **System settings**: Toggle feature flags
- **Audit log**: Tracks all admin actions with timestamps
- **Session management**: 8-hour session timeout

---

## 🔒 Security Notes

> This is a **static-site** application deployed to GitHub Pages. Since there is no server, authentication uses `localStorage` for session management. This is appropriate for internal tooling behind a private repository or an additional access layer (GitHub authentication).

**For production environments** with sensitive data, consider:
- Hosting behind an **OAuth proxy** (e.g. Cloudflare Access, AWS Cognito)
- Using a **private GitHub Pages** deployment (GitHub Teams/Enterprise)
- Migrating to a server-side framework (Next.js, FastAPI) for true server-side auth

---

## 📁 Data Format

Upload monthly data files in any of these formats:

```
date,name,label,Capacity,String Tilt,String Azimuth,Performance
2026-04-01,CMES-PR018-I01-M01-PV01,CMES-PR018-I01-M01-PV01,15.66,,, 0.91
```

**Required columns**: `date`, `name`, `Performance`  
**Optional columns**: `label`, `Capacity`, `String Tilt`, `String Azimuth`

---

## 🔄 Updating Data

### Monthly Data Update
1. Navigate to **Data Import**
2. Export your monthly data from your DataHub system
3. Drag & drop the CSV/XLSX file
4. Review the preview — the system auto-detects the month
5. Click **Commit Import** — the system will report `ADDED` or `UPDATED`

### Updating the Embedded Dataset
To update the pre-loaded plant data (in `assets/data.js`):

1. Export your DataHub data as CSV
2. Run the preprocessing script:
   ```bash
   python3 preprocess.py your_export.csv
   ```
3. Copy the output JSON objects into `assets/data.js`
4. Commit and push to GitHub

---

## 🛠 Maintenance

| Task | Frequency | Action |
|------|-----------|--------|
| Change admin password | Monthly | Admin → User Management → Edit |
| Import new monthly data | Monthly | Data Import page |
| Review anomaly report | Weekly | Reports → Weekly Report |
| Audit user access | Quarterly | Admin → User Management |
| Update embedded dataset | When new data available | Edit `assets/data.js` |

---

## 📦 Dependencies (CDN — no install required)

| Library | Version | Purpose |
|---------|---------|---------|
| Chart.js | 4.4.1 | All charts and graphs |
| SheetJS (xlsx) | 0.18.5 | Excel export + XLSX import |
| jsPDF | 2.5.1 | PDF report generation |
| jsPDF-AutoTable | 3.8.2 | PDF table formatting |
| PapaParse | 5.4.1 | CSV parsing |

All dependencies loaded from `cdnjs.cloudflare.com` — no npm/build step needed.

---

## 📄 License

Internal use — CMES Solar Plant Operations  
© 2026 CMES Energy. All rights reserved.
