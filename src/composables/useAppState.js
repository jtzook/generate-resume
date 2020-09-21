import { ref } from 'vue';

export default function useAppState() {
  const showSidebar = ref(false);

  const toggleSidebar = () => {
    showSidebar = !showSidebar;
  };

  return {
    showSidebar,
    toggleSidebar,
  };
}
