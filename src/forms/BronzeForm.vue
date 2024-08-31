<!-- BronzeForm.vue -->

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
        page_title: {
          type: 'static',
          tag: 'h1',
          content: 'Bronze Form',
        },
        divider: {
          type: 'static',
          tag: 'hr',
        },
        container: {
          type: 'group',
          schema: {
            first_name: {
              type: 'text',
              placeholder: 'First name',
              columns: {
                container: 6,
                label: 12,
                wrapper: 12,
              },
              fieldName: 'First name',
              rules: [
                'required',
                'max:255',
              ],
            },
            last_name: {
              type: 'text',
              placeholder: 'Last name',
              columns: {
                container: 6,
                label: 12,
                wrapper: 12,
              },
              fieldName: 'Last name',
              rules: [
                'required',
                'max:255',
              ],
            },
          },
          description: 'Make sure it matches your legal name',
        },
        birthday: {
          type: 'date',
          placeholder: 'Birthday',
          fieldName: 'Birthday',
          rules: [
            'required',
          ],
          description: 'Your birthday is not visible others.',
          displayFormat: 'MMMM Do, YYYY',
        },
        country: {
          type: 'select',
          search: true,
          native: false,
          inputType: 'search',
          autocomplete: 'disabled',
          placeholder: 'Country',
          items: '/json/countries.json',
          default: 'AF',
        },
        state: {
          type: 'select',
          search: true,
          native: false,
          inputType: 'search',
          autocomplete: 'disabled',
          placeholder: 'State',
          items: '/json/states.json',
          conditions: [
            [
              'country',
              'in',
              [
                'US',
              ],
            ],
          ],
        },
        phone: {
          type: 'phone',
          placeholder: 'Phone',
          rules: [
            'required',
          ],
          fieldName: 'Phone',
          allowIncomplete: true,
          unmask: true,
        },
        email: {
          type: 'text',
          inputType: 'email',
          rules: [
            'required',
            'max:255',
            'email',
          ],
          placeholder: 'Email',
          fieldName: 'Email',
          description: 'You will receive a confirmation letter to this email.',
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