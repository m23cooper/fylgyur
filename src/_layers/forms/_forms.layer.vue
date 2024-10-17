<!--  Generated from VueLayer plop template -->

<template>
  <div id="FormsLayer" class="flex flex-row columns-12 h-full">
    <JourneyView
      v-show="formCount > 1"
      class="basis-3/12 border-r-2 border-secondary p-5"
    />
    <FormView class="grow border-r-2 border-secondary p-5" />
    <InsightView v-show="currentForm" class="basis-6/12 p-5" />
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { onMounted, onUpdated, onUnmounted, Ref, ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useFormsStore, useUIStore } from '@/_stores';
  import { Signals } from '@/signals';
  import JourneyView from '@/_layers/forms/JourneyView.vue';
  import FormView from '@/_layers/forms/FormView.vue';
  import InsightView from '@/_layers/forms/InsightView.vue';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'FormsLayer';

  const _store = useFormsStore();

  const { formCount, currentForm } = storeToRefs(_store);

  // ////////////////////////////////////////////////////////////////////////////////////////////
  //  COMPUTED
  // const getContact = computed(() => {
  //   return getApplication.value.contact[0]?.number;
  // });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Public
  defineExpose({
    name: _name,
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Provides - props for all children
  //  eg - provide("key", "value");

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  WATCH
  // const watch = {
  //
  // }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  SIGNALS
  // Signals.PUSHER_NOTIFICATION.add(onPusherNotification, () => {})

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Methods
  //  function onPusherNotification(evt)
  //  {
  //      // handle event
  //  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    console.log(`FormsLayer onMounted!`);
    // _store.init();
  });

  // onUpdated(() => {
  //   console.log(`WelcomeLayer onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`WelcomeLayer unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
