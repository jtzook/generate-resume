import html2pdf from "html2pdf.js";

export default function useResume() {
  // TODO: configure jsPDF ( https://github.com/MrRio/jsPDF )
  const exportToCSV = async (element) => {
    var opt = {
      margin: 1,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    const pdfObject = await html2pdf().from(element)
      // .set(opt)
      // .save();

    console.log(pdfObject)
  };

  return {
    exportToCSV,
  };
}
