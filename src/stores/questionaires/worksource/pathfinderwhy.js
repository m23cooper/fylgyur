import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePathFinderStore = defineStore('pathFinderWhy', () => {
  const passions = ref('')
  const reasons = ref('')
  const values = ref('')
  const story = ref('')

  return { passions, reasons, values, story }
})
