<!--  Generated from VueLayer plop template -->

<template>
  <div id="HomeLayer" class="flex flex-col">
    <HeroView class="container" />
    <SignupForm class="container" @register="onRegister" />
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useUIStore, useUserStore } from '@/_stores';
  import HeroView from './HeroView.vue';
  import SignupForm from '@/_layers/forms/SignupForm.vue';
  import { ROUTE_NAMES } from '@/enum';
  import { AUTH_STATE } from '@/enum/AUTH_STATE';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'HomeLayer';

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
  async function onRegister() {
    console.log(`HomeLayer onRegister`);
    useUserStore().setAuthState(AUTH_STATE.REGISTER);
    await useUIStore().goRoute(ROUTE_NAMES.AUTH, {});
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    console.log(`HomeLayer onMounted!`);
    // _store.init();
  });

  // onUpdated(() => {
  //   console.log(`HomeLayer onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`HomeLayer unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
