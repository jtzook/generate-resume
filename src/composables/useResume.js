export default function useResume() {
  const exportToCSV = (elementId) => {
    // TODO: get document node, see html2pdf-usage
    console.log("elementId", elementId);
  };

  return {
    exportToCSV,
  };
}
