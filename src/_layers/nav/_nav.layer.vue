<!--  Generated from VueLayer plop template -->

<template>
  <div class="navbar bg-slate-900 shadow border-fuchsia-700 border-b-2">
    <div class="navbar-start flex-row pl-1 justify-start">
      <HOMEButton
        v-if="showHome"
        class="btn-sm btn-square btn-primary shadow hover:shadow-lg rounded hidden"
        @click="onHomeClick"
      />
    </div>
    <div class="navbar-center">
      <h3 v-if="userProfile" class="p-0 m-0 ml-5">
        Logged in as {{ userProfile?.email }}
      </h3>
    </div>
    <div class="navbar-end">
      <div v-if="_userStore.isLoggedIn" class="pr-4">
        <button
          class="btn btn-sm btn-primary shadow hover:shadow-lg"
          @click.prevent="onLogoutClick"
        >
          Logout
        </button>
      </div>
      <div v-else class="mr-5 space-x-4">
        <span class="font-bold">Already a member?</span>
        <button
          class="btn btn-sm btn-primary shadow hover:shadow-lg"
          @click.prevent="onLoginClick"
        >
          Sign in
        </button>
        <!--        <button @click.prevent="onRegisterClick">Sign up</button>-->
      </div>
    </div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { ROUTE_NAMES } from '@/enum';
  import { storeToRefs } from 'pinia';
  import { useUIStore, useUserStore } from '@/_stores';
  import { Signals } from '@/signals';
  import { computed, onMounted, ref } from 'vue';
  import HOMEButton from '@/buttons/HOMEButton.vue';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'NavLayer';

  const _uiStore = useUIStore();
  const _userStore = useUserStore();

  const { isLoggedIn, userProfile } = storeToRefs(_userStore);

  // ////////////////////////////////////////////////////////////////////////////////////////////
  //  COMPUTED
  const showHome = computed(() => {
    return _uiStore.selectedRoute.name !== ROUTE_NAMES.HOME;
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

  function onLoginClick() {
    _userStore.login();
  }

  // function onRegisterClick() {
  //   _userStore.register()
  // }

  function onLogoutClick() {
    _userStore.logout();
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    // console.log(`NavLayer onMounted!`);
  });

  // onUpdated(() => {
  //   console.log(`NavLayer onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`NavLayer unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
