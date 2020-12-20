import html2pdf from 'html2pdf.js'

export default function useResume() {
  const exportToCSV = (element) => {
    const resumeClassName = 'resume-card'
    const resumeElement = element?.getElementsByClassName(resumeClassName)[0]

    if (!resumeElement) {
      throw Error(
        `[useResume] No elements found for class '${resumeClassName}'`
      )
    }

    // NOTE: configure jsPDF ( https://github.com/MrRio/jsPDF )
    const opts = {
      margin: 0,
      filename: 'resume.pdf',
      // html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    }

    html2pdf(resumeElement, opts)
  }

  return {
    exportToCSV,
  }
}
