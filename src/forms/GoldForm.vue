<!-- GoldForm.vue -->

<script>
import { ref } from 'vue'
import { useVueform, Vueform } from '@vueform/vueform'

export default {
  mixins: [Vueform],
  setup(props, context)
  {
    const form = useVueform(props, context)

    const vueform = ref({
      size: 'md',
      displayErrors: false,
      schema: {
        h2_2: {
          type: 'static',
          tag: 'h2',
          content: 'Rooms',
          top: '1',
        },
        divider_4: {
          type: 'static',
          tag: 'hr',
        },
        guests_count: {
          type: 'text',
          inputType: 'number',
          rules: [
            'required',
            'integer',
          ],
          autocomplete: 'off',
          label: 'How many guests can stay?',
          columns: {
            wrapper: 2,
          },
          default: '4',
        },
        bathroom_count: {
          type: 'text',
          inputType: 'number',
          rules: [
            'required',
            'numeric',
          ],
          autocomplete: 'off',
          label: 'How many bathrooms?',
          columns: {
            wrapper: 2,
          },
          default: '2',
        },
        size: {
          type: 'text',
          inputType: 'number',
          rules: [
            'nullable',
            'numeric',
          ],
          autocomplete: 'off',
          label: 'How big is this apartment? (optional)',
          columns: {
            wrapper: 2,
          },
          addons: {
            after: 'm2',
          },
          default: '75',
        },
        divider_16: {
          type: 'static',
          tag: 'hr',
          bottom: '1',
          top: '1',
        },
        h2_14: {
          type: 'static',
          tag: 'h2',
          content: 'Complete',
          top: '1',
        },
        divider_27: {
          type: 'static',
          tag: 'hr',
        },
        terms_1: {
          type: 'checkbox',
          text: 'I certify that this is a legitimate accommodation business with all necessary licenses and permits, which can be shown upon first request. Mydomain.com B.V. reserves the right to verify and investigate any details provided in this registration.',
          fieldName: 'Registration rights',
          rules: [
            'accepted',
          ],
        },
        terms_2: {
          type: 'checkbox',
          text: 'I have read, accepted, and agreed to the Terms and Conditions and Privacy Policy.',
          fieldName: 'Terms',
          rules: [
            'accepted',
          ],
        },
        divider_28: {
          type: 'static',
          tag: 'hr',
          bottom: '1',
          top: '1',
        },
      },
    })

    return {
      ...form,
      vueform,
    }
  }
}
</script>