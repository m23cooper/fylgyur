<!--  Generated from VueLayer plop template -->

<template>
  <div id="LogoutLayer" class="container h-fill">LOGOUT_LAYER</div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { onMounted, onUpdated, onUnmounted, Ref, ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useUIStore } from '@/_stores';
  import { Signals } from '@/signals';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'LogoutLayer';

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
    console.log(`LogoutLayer onMounted!`);
    // _store.init();
  });

  // onUpdated(() => {
  //   console.log(`LogoutLayer onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`LogoutLayer unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
