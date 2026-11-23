const columns = [
  { header: "Name", key: "name", width: 28 },
  { header: "Email", key: "email", width: 34 },
  { header: "Phone", key: "phone", width: 22 },
  { header: "Company / Experience", key: "company", width: 26 },
  { header: "Service / Interest", key: "service", width: 36 },
  { header: "Details & Message", key: "message", width: 64 },
  { header: "Source", key: "source", width: 22 },
  { header: "Submitted At (UTC)", key: "created_at", width: 28 },
];

export async function createLeadsWorkbook(leads) {
  const { default: ExcelJS } = await import("exceljs");
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Leads", {
    views: [{ state: "frozen", ySplit: 1 }],
  });
  sheet.columns = columns;
  for (const lead of leads) {
    sheet.addRow(columns.map(({ key }) => String(lead[key] ?? "")));
  }
  sheet.getRow(1).font = { bold: true };
  sheet.getColumn("message").alignment = { wrapText: true, vertical: "top" };
  sheet.autoFilter = `A1:H${sheet.rowCount}`;
  return workbook.xlsx.writeBuffer();
}

export async function downloadLeads(leads) {
  const buffer = await createLeadsWorkbook(leads);
  const url = URL.createObjectURL(
    new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = "growus-leads-" + new Date().toISOString().slice(0, 10) + ".xlsx";
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
