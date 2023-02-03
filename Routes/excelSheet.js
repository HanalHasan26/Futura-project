const XLSX = require('xlsx')
const Student = require("../models/studentSchema")



const convertJsonToExcel =async () => {

  const Students = await Student.find({})
  console.log(Students);

  const workSheet = XLSX.utils.json_to_sheet(Students);
  const workBook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workBook, workSheet, "students")
  // Generate buffer
  XLSX.write(workBook, { bookType: 'xlsx', type: "buffer" })

  // Binary string
  XLSX.write(workBook, { bookType: "xlsx", type: "binary" })

  XLSX.writeFile(workBook, "studentsData.xlsx")

}
convertJsonToExcel()
