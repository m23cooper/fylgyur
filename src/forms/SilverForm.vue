<template>
  <Vueform v-bind="vueform" />
</template>

<script>
export default {
  data: () => ({
    vueform: {
      schema: {
        form_title: {
          type: 'static',
          content: 'SilverForm',
          tag: 'h2',
        },
        divider: {
          type: 'static',
          tag: 'hr',
        },
        first_name: {
          type: 'text',
          label: 'First name',
          rules: [
            'required',
            'max:255',
          ],
          columns: {
            container: 6,
            label: 12,
            wrapper: 12,
          },
          default: 'John',
        },
        last_name: {
          type: 'text',
          label: 'Last name',
          rules: [
            'required',
            'max:255',
          ],
          columns: {
            container: 6,
            label: 12,
            wrapper: 12,
          },
          default: 'Doe',
        },
        display_name: {
          type: 'text',
          label: 'Display name',
          rules: [
            'required',
            'max:255',
            'alpha_num',
          ],
          default: 'johndoe',
          addons: {
            before: 'mydomain.com/',
          },
        },
        birthday: {
          type: 'date',
          label: 'Date of birth',
          rules: [
            'required',
          ],
          default: '1989-07-07',
          displayFormat: 'MMMM Do, YYYY',
          columns: {
            container: 6,
          },
        },
        gender: {
          type: 'radiogroup',
          items: [
            'Male',
            'Female',
            'Other',
            'I prefer not to say',
          ],
          label: 'Gender',
          rules: [
            'required',
          ],
        },
      },
    }
  })
}
</script>