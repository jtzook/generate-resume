import { reactive } from "vue";

export default function useAppState() {
  const appState = reactive({
    showSidebar: false,
  });

  const toggleSidebar = () => {
    console.log("toggling sidebar", toggleSidebar);
    appState.showSidebar = !appState.showSidebar;
  };

  return {
    appState,
    toggleSidebar,
  };
}
