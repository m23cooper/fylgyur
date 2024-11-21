<!--  Generated from AsynchForm plop template -->

<template>
  <div id="SignupForm" class="container h-fill">
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
        <div class="flex flex-col col-span-12">
          <FormKit
            type="email"
            id="email"
            name="email"
            label="email"
            validation="required"
            validation-visibility="live"
          />
        </div>
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
  import { computed, onMounted, toRef } from 'vue';
  import { FormKit } from '@formkit/vue';
  import { TAsynchFormProps } from '@/types';

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
  const _name: string = 'SignupForm';

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
    console.log(`SignupForm onMounted!`);
    // _store.init();
  });

  // onUpdated(() => {
  //   console.log(`SignupForm onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`SignupForm unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
