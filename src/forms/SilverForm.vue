<template>
  <div class="bg-white h-full py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2
        class="text-slate-900 text-xl font-bold inline sm:block lg:inline xl:block"
      >
        Silver Form
      </h2>
      <div class="w-full tracking-tight text-gray-900 mt-10">
        <FormKit
          type="form"
          :id="name"
          :name="name"
          v-model="formModel"
          :actions="false"
          #default="{ disabled, state }"
          use-local-storage
        >
          <div class="grid grid-cols-12 gap-10 lg:gap-8">
            <div class="flex flex-col col-span-6 justify-end">
              <FormKit type="text" name="first_name" label="Your passions" />
            </div>
            <div class="flex flex-col col-span-6">
              <FormKit
                type="checkbox"
                name="general"
                label="What advice are you looking for?"
              />
            </div>
            <div
              v-if="hasButtons"
              class="flex flex-row col-span-12 justify-stretch"
            >
              <FormKit
                v-if="hasRegister"
                type="button"
                :disabled="disabled as boolean"
                :label="registerLabel"
                @click.prevent="onRegisterClick"
              />
              <FormKit
                v-if="hasReset"
                type="button"
                :label="resetLabel"
                @click.prevent="onResetClick"
              />
              <FormKit
                v-if="hasSubmit"
                type="button"
                :label="submitLabel"
                @click.prevent="onSubmitClick"
              />
            </div>
          </div>
          <div>
            <pre>Dirty = {{ state }}</pre>
          </div>
        </FormKit>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, Ref, onMounted, computed, toRef } from 'vue';
  import { FormKit } from '@formkit/vue';
  import { reset as resetForm } from '@formkit/core';
  import { EMIT } from '@/enum';
  import { IAsynchFormProps } from '@/types';

  const {
    hasReset = true,
    hasRegister = false,
    hasSubmit = true,
    registerLabel = 'Register',
    resetLabel = 'Reset',
    submitLabel = 'Submit',
  } = defineProps<IAsynchFormProps>();

  const name = 'SilverForm';

  const formModel: Ref = ref(null);

  const emit = defineEmits([EMIT.REGISTER, EMIT.RESET, EMIT.SUBMIT]);

  const hasButtons = computed(() => hasReset || hasRegister || hasSubmit);

  function onRegisterClick() {
    emit(EMIT.REGISTER);
  }

  function onResetClick() {
    emit(EMIT.RESET);
    resetForm(name);
  }

  function onSubmitClick() {
    emit(EMIT.SUBMIT);
  }

  defineExpose({
    formModel: toRef(formModel),
    hello: name,
  });

  onMounted(() => {
    // form.value = useFormKitNode('form');
  });
</script>

<style scoped>
  /* Add any custom styles here */
</style>
