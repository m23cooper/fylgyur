<!--  Generated from AsynchForm plop template -->

<template>
  <div id="GoldForm" class="container h-fill">
    <FormKit
        type="form"
        :id="_name"
        :name="_name"
        v-model="formModel"
        :actions="false"
        #default="{ disabled, state }"
        use-local-storage
    >
      <div class="grid grid-cols-12 gap-10 lg:gap-8">
        <div class="flex flex-col col-span-6 justify-end">
          <FormKit type="text" name="blah" label="blah"/>
        </div>
        <div class="flex flex-col col-span-6">
          <FormKit
              type="checkbox"
              name="blahbox"
              label="Blah?"
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
    </FormKit>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import {computed, ref, Ref, onMounted, toRef} from 'vue';
  import {FormKit} from '@formkit/vue';
  import {reset as resetForm} from '@formkit/core';
  import {EMIT} from '@/enum';
  import {IAsynchFormProps} from '@/types';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  const {
    hasReset = true,
    hasRegister = false,
    hasSubmit = true,
    registerLabel = 'Register',
    resetLabel = 'Reset',
    submitLabel = 'Submit',
  } = defineProps<IAsynchFormProps>();

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  const emit = defineEmits([EMIT.REGISTER, EMIT.RESET, EMIT.SUBMIT,]);


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = "GoldForm";

  const formModel: Ref = ref(null);


  // ////////////////////////////////////////////////////////////////////////////////////////////
  //  COMPUTED
  const hasButtons = computed(() => hasReset || hasRegister || hasSubmit);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Public
  defineExpose({
    formModel: toRef(formModel),
    hello: _name,
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Provides - props for all children
  //  eg - provide("key", "value");


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  SIGNALS
  // Signals.PUSHER_NOTIFICATION.add(onPusherNotification, () => {})


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Methods
  function onRegisterClick() {
    emit(EMIT.REGISTER);
  }

  function onResetClick() {
    emit(EMIT.RESET);
    resetForm(_name);
  }

  function onSubmitClick() {
    emit(EMIT.SUBMIT);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  WATCH

  // watch works directly on a ref
  // watch(ref, async () => {
  //
  // })

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    console.log(`GoldFormView onMounted!`);
    // _store.init();
  })

  // onUpdated(() => {
  //   console.log(`GoldFormView onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`GoldFormView unmounted!`);
  // })

</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>

</style>
