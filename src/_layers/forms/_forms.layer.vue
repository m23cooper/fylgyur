<!--  Generated from VueLayer plop template -->

<template>
  <div id="FormsLayer" class="flex grid grid-cols-12 w-screen min-h-screen">
    <JourneyView class="col-span-2 border-r-2 border-fuchsia-700" />
    <FormView class="col-span-6 border-r-2 border-fuchsia-700" />
    <InsightView class="col-span-4" />
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

  // const {
  // } = storeToRefs(_store);

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
