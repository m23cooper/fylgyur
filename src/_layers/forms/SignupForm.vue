<template>
  <div class="bg-white h-full py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2
        class="text-slate-900 text-xl font-bold inline sm:block lg:inline xl:block"
      >
        Want to try our AI pathfinder tool?
      </h2>
      {{ ' ' }}
      <p class="inline sm:block lg:inline xl:block">
        Sign up for our newsletter.
      </p>
      <div class="w-full tracking-tight text-gray-900 mt-10">
        <FormKit
          type="form"
          id="formId"
          ref="formRef"
          :actions="false"
          #default="{ disabled, empty }"
          use-local-storage
        >
          <div class="grid grid-cols-12 gap-10 lg:gap-8">
            <div class="flex flex-col col-span-6 justify-end">
              <FormKit type="group" id="full_name">
                <FormKit type="text" id="first_name" label="First Name" />
                <FormKit type="text" id="family_name" label="Family Name" />
              </FormKit>
              <FormKit type="text" id="occupation" label="Occupation" />
            </div>
            <div class="flex flex-col col-span-6">
              <FormKit
                type="textarea"
                id="general"
                label="What advice are you looking for?"
              />
              <FormKit
                type="email"
                id="email"
                label="Email Address"
                placeholder="Enter your email"
                validation="email"
                validation-visibility="live"
              />
            </div>
            <div class="flex flex-row col-span-12 justify-center">
              <FormKit
                type="button"
                label="Clear"
                @click.prevent="onResetClick"
              />
              <FormKit
                type="button"
                :disabled="disabled as boolean"
                label="Register"
                @click.prevent="onRegisterClick"
              />
            </div>
          </div>
        </FormKit>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, Ref, onMounted } from 'vue';
  import { FormKit, FormKitComponent } from '@formkit/vue';
  import { reset as resetForm } from '@formkit/core';
  import { EMIT } from '@/enum';

  const formRef: Ref<FormKitComponent | null> = ref(null);

  const emit = defineEmits([EMIT.REGISTER, EMIT.RESET]);

  function onRegisterClick() {
    console.log('SIgnupForm.onRegisterClick');
    emit(EMIT.REGISTER);
  }

  function onResetClick() {
    emit(EMIT.RESET);
    resetForm('formId');
  }

  onMounted(() => {
    // form.value = useFormKitNode('form');
  });
</script>

<style scoped>
  /* Add any custom styles here */
</style>
