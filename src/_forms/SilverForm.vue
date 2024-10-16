<!--  Generated from AsynchForm plop template -->

<template>
  <div id="SilverForm" class="container h-fill">
    <FormKit
      type="form"
      :id="_name"
      :name="_name"
      v-model="formModel"
      :actions="false"
      dirty-behaviour="compare"
      use-local-storage
    >
      <h2 class="prose font-bold text-xl mb-2">{{ _name }}</h2>
      <div class="grid grid-cols-12 gap-6 lg:gap-10">
        <!-- Replace this blah code -->
        <div class="flex flex-col col-span-6">
          <FormKit type="text" id="blah" name="blah" label="blah" />
        </div>
        <div class="flex flex-col col-span-6">
          <FormKit type="checkbox" id="blahbox" name="blahbox" label="Blah?" />
        </div>
        <!-- END Replace -->
        <!-- Do NOT remove!!! -->
        <div v-if="hasButtons" class="flex col-span-12 justify-end items-end">
          <slot name="formButtons"></slot>
        </div>
        <!-- END do not remove -->
      </div>
      <!--<pre>{{ formModel }}</pre>-->
    </FormKit>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { computed, onMounted, toRef, ModelRef } from 'vue';
  import { FormKit } from '@formkit/vue';
  import type { TAsynchFormProps } from '@/types';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  const {
    hasAsk = true,
    hasReset = true,
    hasSubmit = false,
    askLabel = 'Ask The AI Expert!',
    resetLabel = 'Reset',
    submitLabel = 'Submit',
  } = defineProps<TAsynchFormProps>();

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  // const emit = defineEmits([EMIT.REGISTER, EMIT.RESET, EMIT.SUBMIT,]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'SilverForm';

  const formModel: any = defineModel();

  // ////////////////////////////////////////////////////////////////////////////////////////////
  //  COMPUTED
  const hasButtons = computed(() => hasAsk || hasReset || hasSubmit);

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
  // function onRegisterClick() {
  //   emit(EMIT.REGISTER);
  // }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  WATCH

  // watch works directly on a ref
  // watch(ref, async () => {
  //
  // })

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    console.log(`SilverForm onMounted!`);
    // _store.init();
  });

  // onUpdated(() => {
  //   console.log(`SilverForm onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`SilverForm unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
