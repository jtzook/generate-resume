export default function useResume() {
  const exportToCSV = (template) => {
    // TODO: get document node, see html2pdf-usage
    console.log("template", template);
  };

  return {
    exportToCSV,
  };
}
