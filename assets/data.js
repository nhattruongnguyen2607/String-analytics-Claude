// ============================================================
// SOLAR PLANT PERFORMANCE DATA (pre-processed from export)
// Source: datahub_export_plant_daily_20260316_091153.xlsx
// ============================================================

const PLANT_DATA = {
  meta: {
    plant: "CMES Solar Plant",
    totalPanels: 3214,
    totalInverters: 34,
    dataRange: { start: "2026-03-09", end: "2026-03-15" },
    capacity: 15.66,  // kWp (primary)
    lastUpdated: "2026-03-15"
  },

  daily: [
    {"date":"2026-03-09","avg":0.8572,"min":0.09,"max":1.0,"count":3214,"std":0.1128},
    {"date":"2026-03-10","avg":0.8525,"min":0.0,"max":1.0,"count":3214,"std":0.1247},
    {"date":"2026-03-11","avg":0.8512,"min":0.0,"max":1.0,"count":3214,"std":0.1357},
    {"date":"2026-03-12","avg":0.8570,"min":-0.01,"max":1.0,"count":3214,"std":0.1270},
    {"date":"2026-03-13","avg":0.8272,"min":-0.01,"max":1.0,"count":3214,"std":0.1408},
    {"date":"2026-03-14","avg":0.8144,"min":-0.01,"max":1.0,"count":3214,"std":0.1808},
    {"date":"2026-03-15","avg":0.6018,"min":-0.03,"max":1.0,"count":3214,"std":0.3335}
  ],

  inverters: [
    {"inverter":"I01","avg":0.8346,"count":2646},
    {"inverter":"I02","avg":0.7978,"count":2597},
    {"inverter":"I03","avg":0.7935,"count":2527},
    {"inverter":"I04","avg":0.7886,"count":2422},
    {"inverter":"I05","avg":0.7978,"count":1729},
    {"inverter":"I06","avg":0.8166,"count":1603},
    {"inverter":"I07","avg":0.7932,"count":1260},
    {"inverter":"I08","avg":0.7584,"count":980},
    {"inverter":"I09","avg":0.8415,"count":917},
    {"inverter":"I10","avg":0.8370,"count":700},
    {"inverter":"I11","avg":0.8291,"count":602},
    {"inverter":"I12","avg":0.7977,"count":483},
    {"inverter":"I13","avg":0.8071,"count":490},
    {"inverter":"I14","avg":0.8062,"count":476},
    {"inverter":"I15","avg":0.8198,"count":343},
    {"inverter":"I16","avg":0.8025,"count":350},
    {"inverter":"I17","avg":0.8040,"count":322},
    {"inverter":"I18","avg":0.7638,"count":245},
    {"inverter":"I19","avg":0.7529,"count":245},
    {"inverter":"I20","avg":0.9129,"count":35},
    {"inverter":"I21","avg":0.8716,"count":105},
    {"inverter":"I22","avg":0.8670,"count":105},
    {"inverter":"I23","avg":0.8706,"count":105},
    {"inverter":"I24","avg":0.8688,"count":105},
    {"inverter":"I25","avg":0.8626,"count":112},
    {"inverter":"I26","avg":0.8619,"count":112},
    {"inverter":"I27","avg":0.8688,"count":112},
    {"inverter":"I28","avg":0.8612,"count":105},
    {"inverter":"I29","avg":0.8595,"count":112},
    {"inverter":"I30","avg":0.8647,"count":112},
    {"inverter":"I31","avg":0.8841,"count":105},
    {"inverter":"I32","avg":0.8792,"count":112},
    {"inverter":"I33","avg":0.8591,"count":112},
    {"inverter":"I34","avg":0.8638,"count":112}
  ],

  lowPerformance: [
    {"date":"2026-03-09","low_count":496},
    {"date":"2026-03-10","low_count":673},
    {"date":"2026-03-11","low_count":615},
    {"date":"2026-03-12","low_count":506},
    {"date":"2026-03-13","low_count":844},
    {"date":"2026-03-14","low_count":775},
    {"date":"2026-03-15","low_count":1753}
  ],

  distribution: [
    {"bucket":"< 0%","count":74,"color":"#ef4444"},
    {"bucket":"0–50%","count":1841,"color":"#f97316"},
    {"bucket":"50–70%","count":1466,"color":"#eab308"},
    {"bucket":"70–80%","count":2762,"color":"#84cc16"},
    {"bucket":"80–90%","count":8931,"color":"#22c55e"},
    {"bucket":"90–95%","count":4919,"color":"#10b981"},
    {"bucket":"95–100%","count":2505,"color":"#06b6d4"}
  ],

  worstPanels: [
    {"panel":"CMES-PR045-I08-M02-PV04","avg_perf":0.0157},
    {"panel":"CMES-PR045-I08-M01-PV02","avg_perf":0.0186},
    {"panel":"CMES-PR045-I08-M03-PV06","avg_perf":0.0229},
    {"panel":"CMES-PR023-I02-M05-PV09","avg_perf":0.0314},
    {"panel":"CMES-PR045-I07-M10-PV19","avg_perf":0.0543},
    {"panel":"CMES-PR045-I08-M03-PV05","avg_perf":0.0686},
    {"panel":"CMES-PR045-I08-M02-PV03","avg_perf":0.0743},
    {"panel":"CMES-PR045-I07-M07-PV13","avg_perf":0.0771},
    {"panel":"CMES-PR045-I08-M04-PV07","avg_perf":0.0814},
    {"panel":"CMES-PR045-I07-M05-PV09","avg_perf":0.0900},
    {"panel":"CMES-PR045-I08-M01-PV01","avg_perf":0.0929},
    {"panel":"CMES-PR045-I08-M06-PV11","avg_perf":0.1186},
    {"panel":"CMES-PR045-I07-M03-PV06","avg_perf":0.1371},
    {"panel":"CMES-PR045-I08-M05-PV09","avg_perf":0.1429},
    {"panel":"CMES-PR025-I02-M10-PV20","avg_perf":0.1471},
    {"panel":"CMES-PR025-I02-M05-PV09","avg_perf":0.1500},
    {"panel":"CMES-PR045-I07-M09-PV17","avg_perf":0.1571},
    {"panel":"CMES-PR026-I03-M06-PV12","avg_perf":0.1629},
    {"panel":"CMES-PR025-I02-M10-PV19","avg_perf":0.1829},
    {"panel":"CMES-PR045-I07-M08-PV15","avg_perf":0.1843}
  ],

  heatmap: [
    {"date":"2026-03-09","inverter":"I01","avg":0.8802},{"date":"2026-03-09","inverter":"I02","avg":0.8487},{"date":"2026-03-09","inverter":"I03","avg":0.8491},{"date":"2026-03-09","inverter":"I04","avg":0.8345},{"date":"2026-03-09","inverter":"I05","avg":0.8521},{"date":"2026-03-09","inverter":"I06","avg":0.8773},{"date":"2026-03-09","inverter":"I07","avg":0.8609},{"date":"2026-03-09","inverter":"I08","avg":0.8256},{"date":"2026-03-09","inverter":"I09","avg":0.8866},{"date":"2026-03-09","inverter":"I10","avg":0.8775},{"date":"2026-03-09","inverter":"I11","avg":0.8736},{"date":"2026-03-09","inverter":"I12","avg":0.8591},{"date":"2026-03-09","inverter":"I13","avg":0.8543},{"date":"2026-03-09","inverter":"I14","avg":0.8618},{"date":"2026-03-09","inverter":"I15","avg":0.8812},{"date":"2026-03-09","inverter":"I16","avg":0.8668},{"date":"2026-03-09","inverter":"I17","avg":0.8663},{"date":"2026-03-09","inverter":"I18","avg":0.8340},{"date":"2026-03-09","inverter":"I19","avg":0.8126},{"date":"2026-03-09","inverter":"I20","avg":0.9360},{"date":"2026-03-09","inverter":"I21","avg":0.8527},{"date":"2026-03-09","inverter":"I22","avg":0.8540},{"date":"2026-03-09","inverter":"I23","avg":0.8440},{"date":"2026-03-09","inverter":"I24","avg":0.8500},{"date":"2026-03-09","inverter":"I25","avg":0.8606},{"date":"2026-03-09","inverter":"I26","avg":0.8488},{"date":"2026-03-09","inverter":"I27","avg":0.8550},{"date":"2026-03-09","inverter":"I28","avg":0.8640},{"date":"2026-03-09","inverter":"I29","avg":0.8412},{"date":"2026-03-09","inverter":"I30","avg":0.8388},{"date":"2026-03-09","inverter":"I31","avg":0.8660},{"date":"2026-03-09","inverter":"I32","avg":0.8444},{"date":"2026-03-09","inverter":"I33","avg":0.8262},{"date":"2026-03-09","inverter":"I34","avg":0.8350},
    {"date":"2026-03-10","inverter":"I01","avg":0.8804},{"date":"2026-03-10","inverter":"I02","avg":0.8447},{"date":"2026-03-10","inverter":"I03","avg":0.8304},{"date":"2026-03-10","inverter":"I04","avg":0.8292},{"date":"2026-03-10","inverter":"I05","avg":0.8357},{"date":"2026-03-10","inverter":"I06","avg":0.8552},{"date":"2026-03-10","inverter":"I07","avg":0.8508},{"date":"2026-03-10","inverter":"I08","avg":0.8124},{"date":"2026-03-10","inverter":"I09","avg":0.8779},{"date":"2026-03-10","inverter":"I10","avg":0.8809},{"date":"2026-03-10","inverter":"I11","avg":0.8770},{"date":"2026-03-10","inverter":"I12","avg":0.8565},{"date":"2026-03-10","inverter":"I13","avg":0.8647},{"date":"2026-03-10","inverter":"I14","avg":0.8679},{"date":"2026-03-10","inverter":"I15","avg":0.8743},{"date":"2026-03-10","inverter":"I16","avg":0.8432},{"date":"2026-03-10","inverter":"I17","avg":0.8528},{"date":"2026-03-10","inverter":"I18","avg":0.8277},{"date":"2026-03-10","inverter":"I19","avg":0.8263},{"date":"2026-03-10","inverter":"I20","avg":0.9100},{"date":"2026-03-10","inverter":"I21","avg":0.8987},{"date":"2026-03-10","inverter":"I22","avg":0.8907},{"date":"2026-03-10","inverter":"I23","avg":0.8987},{"date":"2026-03-10","inverter":"I24","avg":0.8940},{"date":"2026-03-10","inverter":"I25","avg":0.8644},{"date":"2026-03-10","inverter":"I26","avg":0.8694},{"date":"2026-03-10","inverter":"I27","avg":0.8750},{"date":"2026-03-10","inverter":"I28","avg":0.8620},{"date":"2026-03-10","inverter":"I29","avg":0.8831},{"date":"2026-03-10","inverter":"I30","avg":0.8900},{"date":"2026-03-10","inverter":"I31","avg":0.9227},{"date":"2026-03-10","inverter":"I32","avg":0.9212},{"date":"2026-03-10","inverter":"I33","avg":0.9006},{"date":"2026-03-10","inverter":"I34","avg":0.9038},
    {"date":"2026-03-11","inverter":"I01","avg":0.8852},{"date":"2026-03-11","inverter":"I02","avg":0.8445},{"date":"2026-03-11","inverter":"I03","avg":0.8410},{"date":"2026-03-11","inverter":"I04","avg":0.8308},{"date":"2026-03-11","inverter":"I05","avg":0.8477},{"date":"2026-03-11","inverter":"I06","avg":0.8635},{"date":"2026-03-11","inverter":"I07","avg":0.8343},{"date":"2026-03-11","inverter":"I08","avg":0.8070},{"date":"2026-03-11","inverter":"I09","avg":0.8788},{"date":"2026-03-11","inverter":"I10","avg":0.8715},{"date":"2026-03-11","inverter":"I11","avg":0.8671},{"date":"2026-03-11","inverter":"I12","avg":0.8475},{"date":"2026-03-11","inverter":"I13","avg":0.8493},{"date":"2026-03-11","inverter":"I14","avg":0.8518},{"date":"2026-03-11","inverter":"I15","avg":0.8629},{"date":"2026-03-11","inverter":"I16","avg":0.8356},{"date":"2026-03-11","inverter":"I17","avg":0.8422},{"date":"2026-03-11","inverter":"I18","avg":0.8163},{"date":"2026-03-11","inverter":"I19","avg":0.8011},{"date":"2026-03-11","inverter":"I20","avg":0.9200},{"date":"2026-03-11","inverter":"I21","avg":0.8727},{"date":"2026-03-11","inverter":"I22","avg":0.8680},{"date":"2026-03-11","inverter":"I23","avg":0.8653},{"date":"2026-03-11","inverter":"I24","avg":0.8640},{"date":"2026-03-11","inverter":"I25","avg":0.8675},{"date":"2026-03-11","inverter":"I26","avg":0.8681},{"date":"2026-03-11","inverter":"I27","avg":0.8688},{"date":"2026-03-11","inverter":"I28","avg":0.8533},{"date":"2026-03-11","inverter":"I29","avg":0.8669},{"date":"2026-03-11","inverter":"I30","avg":0.8725},{"date":"2026-03-11","inverter":"I31","avg":0.8820},{"date":"2026-03-11","inverter":"I32","avg":0.8825},{"date":"2026-03-11","inverter":"I33","avg":0.8688},{"date":"2026-03-11","inverter":"I34","avg":0.8775},
    {"date":"2026-03-12","inverter":"I01","avg":0.8914},{"date":"2026-03-12","inverter":"I02","avg":0.8545},{"date":"2026-03-12","inverter":"I03","avg":0.8459},{"date":"2026-03-12","inverter":"I04","avg":0.8375},{"date":"2026-03-12","inverter":"I05","avg":0.8538},{"date":"2026-03-12","inverter":"I06","avg":0.8676},{"date":"2026-03-12","inverter":"I07","avg":0.8524},{"date":"2026-03-12","inverter":"I08","avg":0.7966},{"date":"2026-03-12","inverter":"I09","avg":0.8836},{"date":"2026-03-12","inverter":"I10","avg":0.8660},{"date":"2026-03-12","inverter":"I11","avg":0.8702},{"date":"2026-03-12","inverter":"I12","avg":0.8483},{"date":"2026-03-12","inverter":"I13","avg":0.8566},{"date":"2026-03-12","inverter":"I14","avg":0.8571},{"date":"2026-03-12","inverter":"I15","avg":0.8769},{"date":"2026-03-12","inverter":"I16","avg":0.8478},{"date":"2026-03-12","inverter":"I17","avg":0.8550},{"date":"2026-03-12","inverter":"I18","avg":0.8340},{"date":"2026-03-12","inverter":"I19","avg":0.8337},{"date":"2026-03-12","inverter":"I20","avg":0.9060},{"date":"2026-03-12","inverter":"I21","avg":0.8813},{"date":"2026-03-12","inverter":"I22","avg":0.8673},{"date":"2026-03-12","inverter":"I23","avg":0.8647},{"date":"2026-03-12","inverter":"I24","avg":0.8593},{"date":"2026-03-12","inverter":"I25","avg":0.8625},{"date":"2026-03-12","inverter":"I26","avg":0.8631},{"date":"2026-03-12","inverter":"I27","avg":0.8669},{"date":"2026-03-12","inverter":"I28","avg":0.8527},{"date":"2026-03-12","inverter":"I29","avg":0.8619},{"date":"2026-03-12","inverter":"I30","avg":0.8738},{"date":"2026-03-12","inverter":"I31","avg":0.8820},{"date":"2026-03-12","inverter":"I32","avg":0.8856},{"date":"2026-03-12","inverter":"I33","avg":0.8656},{"date":"2026-03-12","inverter":"I34","avg":0.8738},
    {"date":"2026-03-13","inverter":"I01","avg":0.8570},{"date":"2026-03-13","inverter":"I02","avg":0.8189},{"date":"2026-03-13","inverter":"I03","avg":0.8178},{"date":"2026-03-13","inverter":"I04","avg":0.8001},{"date":"2026-03-13","inverter":"I05","avg":0.8238},{"date":"2026-03-13","inverter":"I06","avg":0.8458},{"date":"2026-03-13","inverter":"I07","avg":0.8202},{"date":"2026-03-13","inverter":"I08","avg":0.7710},{"date":"2026-03-13","inverter":"I09","avg":0.8494},{"date":"2026-03-13","inverter":"I10","avg":0.8255},{"date":"2026-03-13","inverter":"I11","avg":0.8298},{"date":"2026-03-13","inverter":"I12","avg":0.8109},{"date":"2026-03-13","inverter":"I13","avg":0.8240},{"date":"2026-03-13","inverter":"I14","avg":0.8237},{"date":"2026-03-13","inverter":"I15","avg":0.8792},{"date":"2026-03-13","inverter":"I16","avg":0.8412},{"date":"2026-03-13","inverter":"I17","avg":0.8487},{"date":"2026-03-13","inverter":"I18","avg":0.8377},{"date":"2026-03-13","inverter":"I19","avg":0.8269},{"date":"2026-03-13","inverter":"I20","avg":0.9060},{"date":"2026-03-13","inverter":"I21","avg":0.8593},{"date":"2026-03-13","inverter":"I22","avg":0.8633},{"date":"2026-03-13","inverter":"I23","avg":0.8267},{"date":"2026-03-13","inverter":"I24","avg":0.8347},{"date":"2026-03-13","inverter":"I25","avg":0.8488},{"date":"2026-03-13","inverter":"I26","avg":0.8456},{"date":"2026-03-13","inverter":"I27","avg":0.8569},{"date":"2026-03-13","inverter":"I28","avg":0.8513},{"date":"2026-03-13","inverter":"I29","avg":0.8394},{"date":"2026-03-13","inverter":"I30","avg":0.8444},{"date":"2026-03-13","inverter":"I31","avg":0.8513},{"date":"2026-03-13","inverter":"I32","avg":0.8481},{"date":"2026-03-13","inverter":"I33","avg":0.8275},{"date":"2026-03-13","inverter":"I34","avg":0.8381},
    {"date":"2026-03-14","inverter":"I01","avg":0.8618},{"date":"2026-03-14","inverter":"I02","avg":0.8345},{"date":"2026-03-14","inverter":"I03","avg":0.8334},{"date":"2026-03-14","inverter":"I04","avg":0.8269},{"date":"2026-03-14","inverter":"I05","avg":0.8125},{"date":"2026-03-14","inverter":"I06","avg":0.8244},{"date":"2026-03-14","inverter":"I07","avg":0.7441},{"date":"2026-03-14","inverter":"I08","avg":0.7479},{"date":"2026-03-14","inverter":"I09","avg":0.8474},{"date":"2026-03-14","inverter":"I10","avg":0.8269},{"date":"2026-03-14","inverter":"I11","avg":0.8108},{"date":"2026-03-14","inverter":"I12","avg":0.7578},{"date":"2026-03-14","inverter":"I13","avg":0.7830},{"date":"2026-03-14","inverter":"I14","avg":0.7728},{"date":"2026-03-14","inverter":"I15","avg":0.7041},{"date":"2026-03-14","inverter":"I16","avg":0.7568},{"date":"2026-03-14","inverter":"I17","avg":0.7496},{"date":"2026-03-14","inverter":"I18","avg":0.6826},{"date":"2026-03-14","inverter":"I19","avg":0.6657},{"date":"2026-03-14","inverter":"I20","avg":0.9000},{"date":"2026-03-14","inverter":"I21","avg":0.8813},{"date":"2026-03-14","inverter":"I22","avg":0.8813},{"date":"2026-03-14","inverter":"I23","avg":0.8593},{"date":"2026-03-14","inverter":"I24","avg":0.8580},{"date":"2026-03-14","inverter":"I25","avg":0.8438},{"date":"2026-03-14","inverter":"I26","avg":0.8519},{"date":"2026-03-14","inverter":"I27","avg":0.8706},{"date":"2026-03-14","inverter":"I28","avg":0.8633},{"date":"2026-03-14","inverter":"I29","avg":0.8288},{"date":"2026-03-14","inverter":"I30","avg":0.8356},{"date":"2026-03-14","inverter":"I31","avg":0.8580},{"date":"2026-03-14","inverter":"I32","avg":0.8500},{"date":"2026-03-14","inverter":"I33","avg":0.8194},{"date":"2026-03-14","inverter":"I34","avg":0.8162},
    {"date":"2026-03-15","inverter":"I01","avg":0.5864},{"date":"2026-03-15","inverter":"I02","avg":0.5386},{"date":"2026-03-15","inverter":"I03","avg":0.5368},{"date":"2026-03-15","inverter":"I04","avg":0.5613},{"date":"2026-03-15","inverter":"I05","avg":0.5588},{"date":"2026-03-15","inverter":"I06","avg":0.5825},{"date":"2026-03-15","inverter":"I07","avg":0.5899},{"date":"2026-03-15","inverter":"I08","avg":0.5486},{"date":"2026-03-15","inverter":"I09","avg":0.6665},{"date":"2026-03-15","inverter":"I10","avg":0.7107},{"date":"2026-03-15","inverter":"I11","avg":0.6750},{"date":"2026-03-15","inverter":"I12","avg":0.6035},{"date":"2026-03-15","inverter":"I13","avg":0.6177},{"date":"2026-03-15","inverter":"I14","avg":0.6087},{"date":"2026-03-15","inverter":"I15","avg":0.6602},{"date":"2026-03-15","inverter":"I16","avg":0.6258},{"date":"2026-03-15","inverter":"I17","avg":0.6137},{"date":"2026-03-15","inverter":"I18","avg":0.5143},{"date":"2026-03-15","inverter":"I19","avg":0.5040},{"date":"2026-03-15","inverter":"I20","avg":0.9120},{"date":"2026-03-15","inverter":"I21","avg":0.8553},{"date":"2026-03-15","inverter":"I22","avg":0.8440},{"date":"2026-03-15","inverter":"I23","avg":0.9353},{"date":"2026-03-15","inverter":"I24","avg":0.9213},{"date":"2026-03-15","inverter":"I25","avg":0.8906},{"date":"2026-03-15","inverter":"I26","avg":0.8862},{"date":"2026-03-15","inverter":"I27","avg":0.8881},{"date":"2026-03-15","inverter":"I28","avg":0.8820},{"date":"2026-03-15","inverter":"I29","avg":0.8950},{"date":"2026-03-15","inverter":"I30","avg":0.8981},{"date":"2026-03-15","inverter":"I31","avg":0.9267},{"date":"2026-03-15","inverter":"I32","avg":0.9225},{"date":"2026-03-15","inverter":"I33","avg":0.9056},{"date":"2026-03-15","inverter":"I34","avg":0.9025}
  ]
};

  // Per-plant daily averages
  plantDaily: [
    {"plant":"PR018","date":"2026-03-09","avg":0.9400,"count":52},{"plant":"PR018","date":"2026-03-10","avg":0.9415,"count":52},{"plant":"PR018","date":"2026-03-11","avg":0.9312,"count":52},{"plant":"PR018","date":"2026-03-12","avg":0.9587,"count":52},{"plant":"PR018","date":"2026-03-13","avg":0.9504,"count":52},{"plant":"PR018","date":"2026-03-14","avg":0.9521,"count":52},{"plant":"PR018","date":"2026-03-15","avg":0.9558,"count":52},
    {"plant":"PR023","date":"2026-03-09","avg":0.9110,"count":40},{"plant":"PR023","date":"2026-03-10","avg":0.9138,"count":40},{"plant":"PR023","date":"2026-03-11","avg":0.9170,"count":40},{"plant":"PR023","date":"2026-03-12","avg":0.9405,"count":40},{"plant":"PR023","date":"2026-03-13","avg":0.9230,"count":40},{"plant":"PR023","date":"2026-03-14","avg":0.9468,"count":40},{"plant":"PR023","date":"2026-03-15","avg":0.6010,"count":40},
    {"plant":"PR024","date":"2026-03-09","avg":0.9244,"count":54},{"plant":"PR024","date":"2026-03-10","avg":0.9276,"count":54},{"plant":"PR024","date":"2026-03-11","avg":0.9487,"count":54},{"plant":"PR024","date":"2026-03-12","avg":0.9320,"count":54},{"plant":"PR024","date":"2026-03-13","avg":0.9333,"count":54},{"plant":"PR024","date":"2026-03-14","avg":0.9502,"count":54},{"plant":"PR024","date":"2026-03-15","avg":0.9041,"count":54},
    {"plant":"PR025","date":"2026-03-09","avg":0.5470,"count":66},{"plant":"PR025","date":"2026-03-10","avg":0.4988,"count":66},{"plant":"PR025","date":"2026-03-11","avg":0.4424,"count":66},{"plant":"PR025","date":"2026-03-12","avg":0.5176,"count":66},{"plant":"PR025","date":"2026-03-13","avg":0.5048,"count":66},{"plant":"PR025","date":"2026-03-14","avg":0.5761,"count":66},{"plant":"PR025","date":"2026-03-15","avg":0.3485,"count":66},
    {"plant":"PR026","date":"2026-03-09","avg":0.6085,"count":54},{"plant":"PR026","date":"2026-03-10","avg":0.7931,"count":54},{"plant":"PR026","date":"2026-03-11","avg":0.7763,"count":54},{"plant":"PR026","date":"2026-03-12","avg":0.7565,"count":54},{"plant":"PR026","date":"2026-03-13","avg":0.5983,"count":54},{"plant":"PR026","date":"2026-03-14","avg":0.7911,"count":54},{"plant":"PR026","date":"2026-03-15","avg":0.7698,"count":54},
    {"plant":"PR028","date":"2026-03-09","avg":0.9288,"count":40},{"plant":"PR028","date":"2026-03-10","avg":0.9450,"count":40},{"plant":"PR028","date":"2026-03-11","avg":0.9238,"count":40},{"plant":"PR028","date":"2026-03-12","avg":0.9475,"count":40},{"plant":"PR028","date":"2026-03-13","avg":0.9582,"count":40},{"plant":"PR028","date":"2026-03-14","avg":0.9135,"count":40},{"plant":"PR028","date":"2026-03-15","avg":0.2478,"count":40},
    {"plant":"PR029","date":"2026-03-09","avg":0.8259,"count":90},{"plant":"PR029","date":"2026-03-10","avg":0.8544,"count":90},{"plant":"PR029","date":"2026-03-11","avg":0.8364,"count":90},{"plant":"PR029","date":"2026-03-12","avg":0.8621,"count":90},{"plant":"PR029","date":"2026-03-13","avg":0.8797,"count":90},{"plant":"PR029","date":"2026-03-14","avg":0.8217,"count":90},{"plant":"PR029","date":"2026-03-15","avg":0.1334,"count":90},
    {"plant":"PR030","date":"2026-03-09","avg":0.8910,"count":126},{"plant":"PR030","date":"2026-03-10","avg":0.9032,"count":126},{"plant":"PR030","date":"2026-03-11","avg":0.9427,"count":126},{"plant":"PR030","date":"2026-03-12","avg":0.9360,"count":126},{"plant":"PR030","date":"2026-03-13","avg":0.9013,"count":126},{"plant":"PR030","date":"2026-03-14","avg":0.9344,"count":126},{"plant":"PR030","date":"2026-03-15","avg":0.0544,"count":126},
    {"plant":"PR033","date":"2026-03-09","avg":0.9159,"count":145},{"plant":"PR033","date":"2026-03-10","avg":0.9488,"count":145},{"plant":"PR033","date":"2026-03-11","avg":0.9354,"count":145},{"plant":"PR033","date":"2026-03-12","avg":0.9304,"count":145},{"plant":"PR033","date":"2026-03-13","avg":0.9410,"count":145},{"plant":"PR033","date":"2026-03-14","avg":0.9223,"count":145},{"plant":"PR033","date":"2026-03-15","avg":0.9368,"count":145},
    {"plant":"PR034","date":"2026-03-09","avg":0.8548,"count":119},{"plant":"PR034","date":"2026-03-10","avg":0.8299,"count":119},{"plant":"PR034","date":"2026-03-11","avg":0.8545,"count":119},{"plant":"PR034","date":"2026-03-12","avg":0.8473,"count":119},{"plant":"PR034","date":"2026-03-13","avg":0.7952,"count":119},{"plant":"PR034","date":"2026-03-14","avg":0.8246,"count":119},{"plant":"PR034","date":"2026-03-15","avg":0.8261,"count":119},
    {"plant":"PR035","date":"2026-03-09","avg":0.8297,"count":73},{"plant":"PR035","date":"2026-03-10","avg":0.8336,"count":73},{"plant":"PR035","date":"2026-03-11","avg":0.8607,"count":73},{"plant":"PR035","date":"2026-03-12","avg":0.8632,"count":73},{"plant":"PR035","date":"2026-03-13","avg":0.7953,"count":73},{"plant":"PR035","date":"2026-03-14","avg":0.8575,"count":73},{"plant":"PR035","date":"2026-03-15","avg":0.2914,"count":73},
    {"plant":"PR036","date":"2026-03-09","avg":0.9402,"count":64},{"plant":"PR036","date":"2026-03-10","avg":0.9433,"count":64},{"plant":"PR036","date":"2026-03-11","avg":0.9397,"count":64},{"plant":"PR036","date":"2026-03-12","avg":0.9317,"count":64},{"plant":"PR036","date":"2026-03-13","avg":0.9309,"count":64},{"plant":"PR036","date":"2026-03-14","avg":0.9291,"count":64},{"plant":"PR036","date":"2026-03-15","avg":0.9488,"count":64},
    {"plant":"PR037","date":"2026-03-09","avg":0.8829,"count":91},{"plant":"PR037","date":"2026-03-10","avg":0.8668,"count":91},{"plant":"PR037","date":"2026-03-11","avg":0.8847,"count":91},{"plant":"PR037","date":"2026-03-12","avg":0.8830,"count":91},{"plant":"PR037","date":"2026-03-13","avg":0.9041,"count":91},{"plant":"PR037","date":"2026-03-14","avg":0.9353,"count":91},{"plant":"PR037","date":"2026-03-15","avg":0.9258,"count":91},
    {"plant":"PR039","date":"2026-03-09","avg":0.9198,"count":98},{"plant":"PR039","date":"2026-03-10","avg":0.9252,"count":98},{"plant":"PR039","date":"2026-03-11","avg":0.9118,"count":98},{"plant":"PR039","date":"2026-03-12","avg":0.9151,"count":98},{"plant":"PR039","date":"2026-03-13","avg":0.8142,"count":98},{"plant":"PR039","date":"2026-03-14","avg":0.8327,"count":98},{"plant":"PR039","date":"2026-03-15","avg":0.9130,"count":98},
    {"plant":"PR040","date":"2026-03-09","avg":0.8952,"count":104},{"plant":"PR040","date":"2026-03-10","avg":0.8197,"count":104},{"plant":"PR040","date":"2026-03-11","avg":0.8949,"count":104},{"plant":"PR040","date":"2026-03-12","avg":0.8747,"count":104},{"plant":"PR040","date":"2026-03-13","avg":0.8868,"count":104},{"plant":"PR040","date":"2026-03-14","avg":0.9099,"count":104},{"plant":"PR040","date":"2026-03-15","avg":0.4034,"count":104},
    {"plant":"PR041","date":"2026-03-09","avg":0.8594,"count":96},{"plant":"PR041","date":"2026-03-10","avg":0.8271,"count":96},{"plant":"PR041","date":"2026-03-11","avg":0.8531,"count":96},{"plant":"PR041","date":"2026-03-12","avg":0.8441,"count":96},{"plant":"PR041","date":"2026-03-13","avg":0.8417,"count":96},{"plant":"PR041","date":"2026-03-14","avg":0.7883,"count":96},{"plant":"PR041","date":"2026-03-15","avg":0.8475,"count":96},
    {"plant":"PR042","date":"2026-03-09","avg":0.8685,"count":510},{"plant":"PR042","date":"2026-03-10","avg":0.8999,"count":510},{"plant":"PR042","date":"2026-03-11","avg":0.8835,"count":510},{"plant":"PR042","date":"2026-03-12","avg":0.8767,"count":510},{"plant":"PR042","date":"2026-03-13","avg":0.8614,"count":510},{"plant":"PR042","date":"2026-03-14","avg":0.8592,"count":510},{"plant":"PR042","date":"2026-03-15","avg":0.9054,"count":510},
    {"plant":"PR043","date":"2026-03-09","avg":0.8919,"count":54},{"plant":"PR043","date":"2026-03-10","avg":0.8867,"count":54},{"plant":"PR043","date":"2026-03-11","avg":0.9391,"count":54},{"plant":"PR043","date":"2026-03-12","avg":0.9441,"count":54},{"plant":"PR043","date":"2026-03-13","avg":0.8161,"count":54},{"plant":"PR043","date":"2026-03-14","avg":0.8874,"count":54},{"plant":"PR043","date":"2026-03-15","avg":0.3719,"count":54},
    {"plant":"PR045","date":"2026-03-09","avg":0.7750,"count":179},{"plant":"PR045","date":"2026-03-10","avg":0.7291,"count":179},{"plant":"PR045","date":"2026-03-11","avg":0.7077,"count":179},{"plant":"PR045","date":"2026-03-12","avg":0.6593,"count":179},{"plant":"PR045","date":"2026-03-13","avg":0.5528,"count":179},{"plant":"PR045","date":"2026-03-14","avg":0.6287,"count":179},{"plant":"PR045","date":"2026-03-15","avg":0.6278,"count":179},
    {"plant":"PR046","date":"2026-03-09","avg":0.9049,"count":47},{"plant":"PR046","date":"2026-03-10","avg":0.8685,"count":47},{"plant":"PR046","date":"2026-03-11","avg":0.8757,"count":47},{"plant":"PR046","date":"2026-03-12","avg":0.8874,"count":47},{"plant":"PR046","date":"2026-03-13","avg":0.9081,"count":47},{"plant":"PR046","date":"2026-03-14","avg":0.8732,"count":47},{"plant":"PR046","date":"2026-03-15","avg":0.4596,"count":47},
    {"plant":"PR047","date":"2026-03-09","avg":0.8703,"count":62},{"plant":"PR047","date":"2026-03-10","avg":0.8600,"count":62},{"plant":"PR047","date":"2026-03-11","avg":0.8660,"count":62},{"plant":"PR047","date":"2026-03-12","avg":0.8444,"count":62},{"plant":"PR047","date":"2026-03-13","avg":0.8753,"count":62},{"plant":"PR047","date":"2026-03-14","avg":0.8529,"count":62},{"plant":"PR047","date":"2026-03-15","avg":0.6863,"count":62},
    {"plant":"PR048","date":"2026-03-09","avg":0.9284,"count":51},{"plant":"PR048","date":"2026-03-10","avg":0.9159,"count":51},{"plant":"PR048","date":"2026-03-11","avg":0.9282,"count":51},{"plant":"PR048","date":"2026-03-12","avg":0.9259,"count":51},{"plant":"PR048","date":"2026-03-13","avg":0.9371,"count":51},{"plant":"PR048","date":"2026-03-14","avg":0.9276,"count":51},{"plant":"PR048","date":"2026-03-15","avg":0.7267,"count":51},
    {"plant":"PR049","date":"2026-03-09","avg":0.7592,"count":87},{"plant":"PR049","date":"2026-03-10","avg":0.6494,"count":87},{"plant":"PR049","date":"2026-03-11","avg":0.6174,"count":87},{"plant":"PR049","date":"2026-03-12","avg":0.7398,"count":87},{"plant":"PR049","date":"2026-03-13","avg":0.6554,"count":87},{"plant":"PR049","date":"2026-03-14","avg":0.5860,"count":87},{"plant":"PR049","date":"2026-03-15","avg":0.2091,"count":87},
    {"plant":"PR050","date":"2026-03-09","avg":0.9659,"count":54},{"plant":"PR050","date":"2026-03-10","avg":0.9656,"count":54},{"plant":"PR050","date":"2026-03-11","avg":0.9630,"count":54},{"plant":"PR050","date":"2026-03-12","avg":0.9657,"count":54},{"plant":"PR050","date":"2026-03-13","avg":0.9628,"count":54},{"plant":"PR050","date":"2026-03-14","avg":0.9600,"count":54},{"plant":"PR050","date":"2026-03-15","avg":0.6806,"count":54},
    {"plant":"PR061","date":"2026-03-09","avg":0.9224,"count":89},{"plant":"PR061","date":"2026-03-10","avg":0.9193,"count":89},{"plant":"PR061","date":"2026-03-11","avg":0.9234,"count":89},{"plant":"PR061","date":"2026-03-12","avg":0.9200,"count":89},{"plant":"PR061","date":"2026-03-13","avg":0.9202,"count":89},{"plant":"PR061","date":"2026-03-14","avg":0.9354,"count":89},{"plant":"PR061","date":"2026-03-15","avg":0.6849,"count":89},
    {"plant":"PR063","date":"2026-03-09","avg":0.8090,"count":376},{"plant":"PR063","date":"2026-03-10","avg":0.7761,"count":376},{"plant":"PR063","date":"2026-03-11","avg":0.7613,"count":376},{"plant":"PR063","date":"2026-03-12","avg":0.8055,"count":376},{"plant":"PR063","date":"2026-03-13","avg":0.7997,"count":376},{"plant":"PR063","date":"2026-03-14","avg":0.5516,"count":376},{"plant":"PR063","date":"2026-03-15","avg":0.2284,"count":376},
    {"plant":"PR065","date":"2026-03-09","avg":0.9592,"count":62},{"plant":"PR065","date":"2026-03-10","avg":0.8695,"count":62},{"plant":"PR065","date":"2026-03-11","avg":0.9197,"count":62},{"plant":"PR065","date":"2026-03-12","avg":0.9148,"count":62},{"plant":"PR065","date":"2026-03-13","avg":0.7739,"count":62},{"plant":"PR065","date":"2026-03-14","avg":0.8877,"count":62},{"plant":"PR065","date":"2026-03-15","avg":0.1977,"count":62},
    {"plant":"PR066","date":"2026-03-09","avg":0.8641,"count":211},{"plant":"PR066","date":"2026-03-10","avg":0.8757,"count":211},{"plant":"PR066","date":"2026-03-11","avg":0.8654,"count":211},{"plant":"PR066","date":"2026-03-12","avg":0.8704,"count":211},{"plant":"PR066","date":"2026-03-13","avg":0.8248,"count":211},{"plant":"PR066","date":"2026-03-14","avg":0.8799,"count":211},{"plant":"PR066","date":"2026-03-15","avg":0.4968,"count":211},
    {"plant":"PR068","date":"2026-03-09","avg":0.8670,"count":94},{"plant":"PR068","date":"2026-03-10","avg":0.8974,"count":94},{"plant":"PR068","date":"2026-03-11","avg":0.8861,"count":94},{"plant":"PR068","date":"2026-03-12","avg":0.8913,"count":94},{"plant":"PR068","date":"2026-03-13","avg":0.8141,"count":94},{"plant":"PR068","date":"2026-03-14","avg":0.8516,"count":94},{"plant":"PR068","date":"2026-03-15","avg":0.8405,"count":94},
    {"plant":"PR075","date":"2026-03-09","avg":0.9377,"count":26},{"plant":"PR075","date":"2026-03-10","avg":0.9581,"count":26},{"plant":"PR075","date":"2026-03-11","avg":0.9562,"count":26},{"plant":"PR075","date":"2026-03-12","avg":0.9646,"count":26},{"plant":"PR075","date":"2026-03-13","avg":0.9273,"count":26},{"plant":"PR075","date":"2026-03-14","avg":0.9542,"count":26},{"plant":"PR075","date":"2026-03-15","avg":0.4542,"count":26}
  ],

  // Per-plant inverter averages
  plantInverters: [
    {"plant":"PR018","inverter":"I01","avg":0.9421},{"plant":"PR018","inverter":"I02","avg":0.9251},{"plant":"PR018","inverter":"I03","avg":0.9394},{"plant":"PR018","inverter":"I04","avg":0.9491},{"plant":"PR018","inverter":"I05","avg":0.9686},{"plant":"PR018","inverter":"I06","avg":0.9579},
    {"plant":"PR023","inverter":"I01","avg":0.8686},{"plant":"PR023","inverter":"I02","avg":0.8094},{"plant":"PR023","inverter":"I03","avg":0.8907},{"plant":"PR023","inverter":"I04","avg":0.9473},
    {"plant":"PR024","inverter":"I01","avg":0.9077},{"plant":"PR024","inverter":"I02","avg":0.9152},{"plant":"PR024","inverter":"I03","avg":0.9432},{"plant":"PR024","inverter":"I04","avg":0.9609},
    {"plant":"PR025","inverter":"I01","avg":0.9432},{"plant":"PR025","inverter":"I02","avg":0.3348},{"plant":"PR025","inverter":"I03","avg":0.3551},{"plant":"PR025","inverter":"I04","avg":0.3493},
    {"plant":"PR026","inverter":"I01","avg":0.9363},{"plant":"PR026","inverter":"I02","avg":0.8109},{"plant":"PR026","inverter":"I03","avg":0.5022},{"plant":"PR026","inverter":"I04","avg":0.6511},
    {"plant":"PR028","inverter":"I01","avg":0.7971},{"plant":"PR028","inverter":"I02","avg":0.7996},{"plant":"PR028","inverter":"I03","avg":0.7990},{"plant":"PR028","inverter":"I04","avg":0.9554},
    {"plant":"PR029","inverter":"I01","avg":0.7539},{"plant":"PR029","inverter":"I02","avg":0.7518},{"plant":"PR029","inverter":"I03","avg":0.7467},{"plant":"PR029","inverter":"I04","avg":0.7392},{"plant":"PR029","inverter":"I05","avg":0.7198},{"plant":"PR029","inverter":"I06","avg":0.7487},{"plant":"PR029","inverter":"I07","avg":0.8771},
    {"plant":"PR030","inverter":"I01","avg":0.7878},{"plant":"PR030","inverter":"I02","avg":0.7845},{"plant":"PR030","inverter":"I03","avg":0.8092},{"plant":"PR030","inverter":"I04","avg":0.7922},{"plant":"PR030","inverter":"I05","avg":0.7837},{"plant":"PR030","inverter":"I06","avg":0.8105},{"plant":"PR030","inverter":"I07","avg":0.7714},{"plant":"PR030","inverter":"I08","avg":0.7879},{"plant":"PR030","inverter":"I09","avg":0.8034},{"plant":"PR030","inverter":"I10","avg":0.9400},
    {"plant":"PR033","inverter":"I01","avg":0.9380},{"plant":"PR033","inverter":"I02","avg":0.9348},{"plant":"PR033","inverter":"I03","avg":0.9400},{"plant":"PR033","inverter":"I04","avg":0.9545},{"plant":"PR033","inverter":"I05","avg":0.9288},{"plant":"PR033","inverter":"I06","avg":0.9491},{"plant":"PR033","inverter":"I07","avg":0.9360},{"plant":"PR033","inverter":"I08","avg":0.9381},{"plant":"PR033","inverter":"I09","avg":0.8943},{"plant":"PR033","inverter":"I10","avg":0.9368},{"plant":"PR033","inverter":"I11","avg":0.9143},
    {"plant":"PR034","inverter":"I01","avg":0.8479},{"plant":"PR034","inverter":"I02","avg":0.8274},{"plant":"PR034","inverter":"I03","avg":0.7785},{"plant":"PR034","inverter":"I04","avg":0.8549},{"plant":"PR034","inverter":"I05","avg":0.8414},{"plant":"PR034","inverter":"I06","avg":0.7875},{"plant":"PR034","inverter":"I07","avg":0.8590},{"plant":"PR034","inverter":"I08","avg":0.8460},{"plant":"PR034","inverter":"I09","avg":0.8535},
    {"plant":"PR035","inverter":"I01","avg":0.7829},{"plant":"PR035","inverter":"I02","avg":0.7423},{"plant":"PR035","inverter":"I03","avg":0.7510},{"plant":"PR035","inverter":"I04","avg":0.7581},{"plant":"PR035","inverter":"I05","avg":0.6394},{"plant":"PR035","inverter":"I06","avg":0.8086},{"plant":"PR035","inverter":"I07","avg":0.9240},
    {"plant":"PR036","inverter":"I11","avg":0.9202},{"plant":"PR036","inverter":"I12","avg":0.9151},{"plant":"PR036","inverter":"I13","avg":0.9339},{"plant":"PR036","inverter":"I14","avg":0.9321},{"plant":"PR036","inverter":"I15","avg":0.9565},{"plant":"PR036","inverter":"I16","avg":0.9484},{"plant":"PR036","inverter":"I17","avg":0.9358},
    {"plant":"PR037","inverter":"I01","avg":0.8836},{"plant":"PR037","inverter":"I02","avg":0.8866},{"plant":"PR037","inverter":"I03","avg":0.8802},{"plant":"PR037","inverter":"I04","avg":0.9005},{"plant":"PR037","inverter":"I05","avg":0.9298},{"plant":"PR037","inverter":"I06","avg":0.9302},{"plant":"PR037","inverter":"I07","avg":0.8946},{"plant":"PR037","inverter":"I08","avg":0.8793},{"plant":"PR037","inverter":"I09","avg":0.8926},{"plant":"PR037","inverter":"I10","avg":0.8971},
    {"plant":"PR039","inverter":"I01","avg":0.8804},{"plant":"PR039","inverter":"I02","avg":0.8898},{"plant":"PR039","inverter":"I03","avg":0.9059},{"plant":"PR039","inverter":"I04","avg":0.9100},{"plant":"PR039","inverter":"I05","avg":0.8919},{"plant":"PR039","inverter":"I06","avg":0.9254},{"plant":"PR039","inverter":"I07","avg":0.8046},{"plant":"PR039","inverter":"I08","avg":0.9096},{"plant":"PR039","inverter":"I09","avg":0.8940},{"plant":"PR039","inverter":"I10","avg":0.8858},
    {"plant":"PR040","inverter":"I01","avg":0.8156},{"plant":"PR040","inverter":"I02","avg":0.8105},{"plant":"PR040","inverter":"I03","avg":0.8154},{"plant":"PR040","inverter":"I04","avg":0.8136},{"plant":"PR040","inverter":"I05","avg":0.8087},{"plant":"PR040","inverter":"I06","avg":0.8097},{"plant":"PR040","inverter":"I07","avg":0.8317},{"plant":"PR040","inverter":"I08","avg":0.7800},{"plant":"PR040","inverter":"I09","avg":0.8971},
    {"plant":"PR041","inverter":"I01","avg":0.8421},{"plant":"PR041","inverter":"I02","avg":0.8465},{"plant":"PR041","inverter":"I03","avg":0.8176},{"plant":"PR041","inverter":"I04","avg":0.8351},{"plant":"PR041","inverter":"I05","avg":0.8396},{"plant":"PR041","inverter":"I06","avg":0.8541},{"plant":"PR041","inverter":"I07","avg":0.7293},
    {"plant":"PR042","inverter":"I01","avg":0.8802},{"plant":"PR042","inverter":"I02","avg":0.8894},{"plant":"PR042","inverter":"I03","avg":0.8902},{"plant":"PR042","inverter":"I04","avg":0.8709},{"plant":"PR042","inverter":"I05","avg":0.8924},{"plant":"PR042","inverter":"I06","avg":0.9003},{"plant":"PR042","inverter":"I07","avg":0.9048},{"plant":"PR042","inverter":"I08","avg":0.8871},{"plant":"PR042","inverter":"I09","avg":0.8942},{"plant":"PR042","inverter":"I10","avg":0.9122},{"plant":"PR042","inverter":"I11","avg":0.8644},{"plant":"PR042","inverter":"I12","avg":0.8569},{"plant":"PR042","inverter":"I13","avg":0.9034},{"plant":"PR042","inverter":"I14","avg":0.9045},{"plant":"PR042","inverter":"I15","avg":0.9047},{"plant":"PR042","inverter":"I16","avg":0.8826},{"plant":"PR042","inverter":"I17","avg":0.8782},{"plant":"PR042","inverter":"I18","avg":0.8830},{"plant":"PR042","inverter":"I19","avg":0.8851},{"plant":"PR042","inverter":"I20","avg":0.8800},{"plant":"PR042","inverter":"I21","avg":0.8716},{"plant":"PR042","inverter":"I22","avg":0.8670},{"plant":"PR042","inverter":"I23","avg":0.8706},{"plant":"PR042","inverter":"I24","avg":0.8688},{"plant":"PR042","inverter":"I25","avg":0.8626},{"plant":"PR042","inverter":"I26","avg":0.8619},{"plant":"PR042","inverter":"I27","avg":0.8688},{"plant":"PR042","inverter":"I28","avg":0.8612},{"plant":"PR042","inverter":"I29","avg":0.8595},{"plant":"PR042","inverter":"I30","avg":0.8647},{"plant":"PR042","inverter":"I31","avg":0.8841},{"plant":"PR042","inverter":"I32","avg":0.8792},{"plant":"PR042","inverter":"I33","avg":0.8591},{"plant":"PR042","inverter":"I34","avg":0.8638},
    {"plant":"PR043","inverter":"I01","avg":0.8099},{"plant":"PR043","inverter":"I02","avg":0.8495},{"plant":"PR043","inverter":"I03","avg":0.8279},{"plant":"PR043","inverter":"I04","avg":0.8017},{"plant":"PR043","inverter":"I05","avg":0.8195},
    {"plant":"PR045","inverter":"I01","avg":0.7266},{"plant":"PR045","inverter":"I02","avg":0.6841},{"plant":"PR045","inverter":"I03","avg":0.7540},{"plant":"PR045","inverter":"I04","avg":0.5419},{"plant":"PR045","inverter":"I05","avg":0.5726},{"plant":"PR045","inverter":"I06","avg":0.6686},{"plant":"PR045","inverter":"I07","avg":0.2363},{"plant":"PR045","inverter":"I08","avg":0.1215},{"plant":"PR045","inverter":"I09","avg":0.9056},{"plant":"PR045","inverter":"I10","avg":0.8019},{"plant":"PR045","inverter":"I11","avg":0.9204},{"plant":"PR045","inverter":"I12","avg":0.8467},{"plant":"PR045","inverter":"I13","avg":0.8421},{"plant":"PR045","inverter":"I14","avg":0.7760},{"plant":"PR045","inverter":"I15","avg":0.8264},{"plant":"PR045","inverter":"I16","avg":0.5693},
    {"plant":"PR046","inverter":"I01","avg":0.9009},{"plant":"PR046","inverter":"I02","avg":0.7939},{"plant":"PR046","inverter":"I03","avg":0.7788},{"plant":"PR046","inverter":"I04","avg":0.8019},{"plant":"PR046","inverter":"I05","avg":0.9907},
    {"plant":"PR047","inverter":"I01","avg":0.8388},{"plant":"PR047","inverter":"I02","avg":0.8462},{"plant":"PR047","inverter":"I03","avg":0.8246},{"plant":"PR047","inverter":"I04","avg":0.7687},{"plant":"PR047","inverter":"I05","avg":0.8826},{"plant":"PR047","inverter":"I06","avg":0.8964},{"plant":"PR047","inverter":"I07","avg":0.9052},
    {"plant":"PR048","inverter":"I01","avg":0.8869},{"plant":"PR048","inverter":"I02","avg":0.8942},{"plant":"PR048","inverter":"I03","avg":0.9069},{"plant":"PR048","inverter":"I04","avg":0.9621},
    {"plant":"PR049","inverter":"I01","avg":0.5907},{"plant":"PR049","inverter":"I02","avg":0.5873},{"plant":"PR049","inverter":"I03","avg":0.5938},{"plant":"PR049","inverter":"I04","avg":0.5993},{"plant":"PR049","inverter":"I05","avg":0.5785},{"plant":"PR049","inverter":"I06","avg":0.5934},{"plant":"PR049","inverter":"I07","avg":0.6224},{"plant":"PR049","inverter":"I08","avg":0.9929},
    {"plant":"PR050","inverter":"I01","avg":0.8986},{"plant":"PR050","inverter":"I02","avg":0.9295},{"plant":"PR050","inverter":"I03","avg":0.9327},{"plant":"PR050","inverter":"I04","avg":0.9249},{"plant":"PR050","inverter":"I05","avg":0.9307},{"plant":"PR050","inverter":"I06","avg":0.9721},
    {"plant":"PR061","inverter":"I01","avg":0.8668},{"plant":"PR061","inverter":"I02","avg":0.8709},{"plant":"PR061","inverter":"I03","avg":0.8705},{"plant":"PR061","inverter":"I04","avg":0.8912},{"plant":"PR061","inverter":"I05","avg":0.9045},{"plant":"PR061","inverter":"I06","avg":0.9102},{"plant":"PR061","inverter":"I07","avg":0.9035},{"plant":"PR061","inverter":"I08","avg":0.9671},
    {"plant":"PR063","inverter":"I01","avg":0.6616},{"plant":"PR063","inverter":"I02","avg":0.6608},{"plant":"PR063","inverter":"I03","avg":0.6937},{"plant":"PR063","inverter":"I04","avg":0.6578},{"plant":"PR063","inverter":"I05","avg":0.6686},{"plant":"PR063","inverter":"I06","avg":0.6698},{"plant":"PR063","inverter":"I07","avg":0.7127},{"plant":"PR063","inverter":"I08","avg":0.6621},{"plant":"PR063","inverter":"I09","avg":0.6954},{"plant":"PR063","inverter":"I10","avg":0.6784},{"plant":"PR063","inverter":"I11","avg":0.6637},{"plant":"PR063","inverter":"I12","avg":0.6766},{"plant":"PR063","inverter":"I13","avg":0.6680},{"plant":"PR063","inverter":"I14","avg":0.6889},{"plant":"PR063","inverter":"I15","avg":0.6747},{"plant":"PR063","inverter":"I16","avg":0.6709},{"plant":"PR063","inverter":"I17","avg":0.6759},{"plant":"PR063","inverter":"I18","avg":0.6744},{"plant":"PR063","inverter":"I19","avg":0.6537},{"plant":"PR063","inverter":"I20","avg":0.9348},
    {"plant":"PR065","inverter":"I01","avg":0.7914},{"plant":"PR065","inverter":"I02","avg":0.8037},{"plant":"PR065","inverter":"I03","avg":0.7896},{"plant":"PR065","inverter":"I04","avg":0.7789},{"plant":"PR065","inverter":"I05","avg":0.7732},{"plant":"PR065","inverter":"I06","avg":0.8357},
    {"plant":"PR066","inverter":"I01","avg":0.8210},{"plant":"PR066","inverter":"I02","avg":0.8139},{"plant":"PR066","inverter":"I03","avg":0.8233},{"plant":"PR066","inverter":"I04","avg":0.8113},{"plant":"PR066","inverter":"I05","avg":0.8130},{"plant":"PR066","inverter":"I06","avg":0.8155},{"plant":"PR066","inverter":"I07","avg":0.8144},{"plant":"PR066","inverter":"I08","avg":0.8022},{"plant":"PR066","inverter":"I09","avg":0.8064},{"plant":"PR066","inverter":"I10","avg":0.7999},{"plant":"PR066","inverter":"I11","avg":0.8079},{"plant":"PR066","inverter":"I12","avg":0.8136},{"plant":"PR066","inverter":"I13","avg":0.8005},{"plant":"PR066","inverter":"I14","avg":0.8117},{"plant":"PR066","inverter":"I15","avg":0.8043},
    {"plant":"PR068","inverter":"I01","avg":0.8536},{"plant":"PR068","inverter":"I02","avg":0.8843},{"plant":"PR068","inverter":"I03","avg":0.8605},{"plant":"PR068","inverter":"I04","avg":0.8407},{"plant":"PR068","inverter":"I05","avg":0.8574},{"plant":"PR068","inverter":"I06","avg":0.8702},{"plant":"PR068","inverter":"I07","avg":0.8900},{"plant":"PR068","inverter":"I08","avg":0.8136},
    {"plant":"PR075","inverter":"I01","avg":0.8724},{"plant":"PR075","inverter":"I02","avg":0.8731},{"plant":"PR075","inverter":"I03","avg":0.9529}
  ],

  // Summary per plant (weekly avg)
  get plants() {
    const map = {};
    this.plantDaily.forEach(r => {
      if (!map[r.plant]) map[r.plant] = { plant: r.plant, totalAvg: 0, days: 0, panels: r.count };
      map[r.plant].totalAvg += r.avg;
      map[r.plant].days++;
    });
    return Object.values(map).map(p => ({ plant: p.plant, avg: +(p.totalAvg / p.days).toFixed(4), panels: p.panels })).sort((a,b) => a.plant.localeCompare(b.plant));
  }
};

// ============================================================
// KPI CALCULATIONS
// ============================================================
const KPI = {
  weeklyAvgPerformance: () => {
    const avg = PLANT_DATA.daily.reduce((s, d) => s + d.avg, 0) / PLANT_DATA.daily.length;
    return (avg * 100).toFixed(2);
  },
  totalLowPerformers: () => PLANT_DATA.lowPerformance.reduce((s, d) => s + d.low_count, 0),
  anomalyRate: () => {
    const total = PLANT_DATA.daily.reduce((s, d) => s + d.count, 0);
    const low = PLANT_DATA.lowPerformance.reduce((s, d) => s + d.low_count, 0);
    return ((low / total) * 100).toFixed(1);
  },
  bestInverter: () => {
    const best = PLANT_DATA.inverters.reduce((a, b) => a.avg > b.avg ? a : b);
    return { inverter: best.inverter, avg: (best.avg * 100).toFixed(1) };
  },
  worstInverter: () => {
    const worst = PLANT_DATA.inverters.reduce((a, b) => a.avg < b.avg ? a : b);
    return { inverter: worst.inverter, avg: (worst.avg * 100).toFixed(1) };
  },
  trendSlope: () => {
    const avgs = PLANT_DATA.daily.map(d => d.avg);
    const n = avgs.length;
    const xs = avgs.map((_, i) => i);
    const xMean = xs.reduce((a, b) => a + b) / n;
    const yMean = avgs.reduce((a, b) => a + b) / n;
    const num = xs.reduce((s, x, i) => s + (x - xMean) * (avgs[i] - yMean), 0);
    const den = xs.reduce((s, x) => s + (x - xMean) ** 2, 0);
    return (num / den * 100).toFixed(3);
  }
};

// ============================================================
// MASTER DATASET (localStorage-backed)
// ============================================================
const MasterDataset = {
  KEY: 'solar_master_dataset',
  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      return raw ? JSON.parse(raw) : { months: {}, lastUpdated: null };
    } catch { return { months: {}, lastUpdated: null }; }
  },
  save(data) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
  },
  upsert(monthKey, rows) {
    const dataset = this.load();
    const isUpdate = !!dataset.months[monthKey];
    dataset.months[monthKey] = { rows, uploadedAt: new Date().toISOString() };
    dataset.lastUpdated = new Date().toISOString();
    this.save(dataset);
    return isUpdate ? 'updated' : 'added';
  },
  getMonths() {
    return Object.keys(this.load().months).sort();
  }
};
