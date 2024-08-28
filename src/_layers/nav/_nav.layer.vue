<!--  Generated from VueLayer plop template -->

<template>
  <div class="navbar bg-slate-800 shadow border-0 border-red-200 border-b overflow-hidden">
    <div class="navbar-start flex-row pl-1 justify-start">
<!--        <HomeButton @click="onHomeClick"></HomeButton>-->
      <HOMEButton v-if="showHome" class="btn-sm btn-square btn-primary shadow hover:shadow-lg rounded" @click="onHomeClick" />
    </div>
    <div class="navbar-center">
<!--              <h3 class="p-0 m-0 ml-5">{{ useUIStore().selectedRoute?.title }}</h3>-->
              <h3 v-if="_userStore.userProfile" class="p-0 m-0 ml-5">Logged in as {{ _userStore.userProfile?.email }}</h3>
    </div>
    <div class="navbar-end">
      <div v-if="_userStore.isLoggedIn" class="pr-4">
        <button @click.prevent="_userStore.logout()">Logout</button>
      </div>
      <div v-else class="mr-5 space-x-4">
        <button @click.prevent="_userStore.login()">Sign in</button>
        <button @click.prevent="_userStore.register()">Sign up</button>
      </div>
    </div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { ROUTE_NAMES } from "@/enum";
  import { storeToRefs } from 'pinia'
  import {useUIStore, useUserStore} from "@/_stores";
  import { Signals } from "@/signals";
  import {computed, onMounted, ref} from 'vue';
  import type { Ref } from 'vue';
  import type {IRoute} from "@/types";
  import HOMEButton from "@/buttons/HOMEButton.vue";
  //  @ts-ignore

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = "NavLayer";

  // const selectedRoute: Ref<IRoute> = ref(useUIStore().selectedRoute);
  const _userStore = useUserStore();

  // ////////////////////////////////////////////////////////////////////////////////////////////
  //  COMPUTED
  const showHome = computed(() => {
    return useUIStore().selectedRoute.name !== ROUTE_NAMES.HOME;
  });


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

  function onHomeClick() {
    useUIStore().goRoute(ROUTE_NAMES.HOME, {});
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    // console.log(`NavLayer onMounted!`);
  })

  // onUpdated(() => {
  //   console.log(`NavLayer onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`NavLayer unmounted!`);
  // })

</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>

</style>
