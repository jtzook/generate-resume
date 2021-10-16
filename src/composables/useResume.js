import { reactive } from 'vue';

export default function useResume() {
  const resumeOptions = reactive({
    resumeMode: 'classic',
  });

  const toggleResumeMode = () => {
    resumeOptions.resumeMode =
      resumeOptions.resumeMode === 'classic' ? 'modern' : 'classic';
  };

  return {
    resumeOptions,
    toggleResumeMode,
  };
}
