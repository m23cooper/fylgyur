<!--  Generated from VueLayer plop template -->

<template>
  <div id="AuthLayer" class="container h-fill">
    <div
      class="container w-fit bg-stone-200 text-primary pt-5 pb-3 px-8 shadow-xl rounded-md mt-10 transition-transform"
    >
      <LoggedOutView v-show="showLoggedOut" />
      <LoginView v-show="showLogin" />
      <RegisterView v-show="showRegister" />
      <ForgotPasswordView v-show="showForgot" />
      <ResetPasswordView v-show="showReset" />
    </div>
    <AuthButtonsView v-if="showButtons" />
    <LoginErrorComponent
      class="absolute bottom-0"
      v-show="showError"
      :errorMsg
    />
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { onMounted, onUpdated, onUnmounted, Ref, ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useUIStore, useUserStore } from '@/_stores';
  import { Signals } from '@/signals';
  import LoginErrorComponent from '@/_layers/auth/AuthErrorComponent.vue';
  import LoginView from '@/_layers/auth/LoginView.vue';
  import { AUTH_STATE } from '@/enum/AUTH_STATE';
  import RegisterView from '@/_layers/auth/RegisterView.vue';
  import ForgotPasswordView from '@/_layers/auth/ForgotPasswordView.vue';
  import AuthButtonsView from '@/_layers/auth/AuthButtonsView.vue';
  import LoggedOutView from '@/_layers/auth/LoggedOutView.vue';
  import ResetPasswordView from '@/_layers/auth/ResetPasswordView.vue';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'AuthLayer';

  const { authState } = storeToRefs(useUserStore());

  const errorMsg = ref<string | null>(null);

  // ////////////////////////////////////////////////////////////////////////////////////////////
  //  COMPUTED
  const showLogin = computed(
    () =>
      authState.value === AUTH_STATE.LOGIN ||
      authState.value === AUTH_STATE.LOGGED_OUT,
  );
  const showRegister = computed(() => authState.value === AUTH_STATE.REGISTER);
  const showReset = computed(
    () => authState.value === AUTH_STATE.RESET_PASSWORD,
  );
  const showForgot = computed(
    () => authState.value === AUTH_STATE.FORGOT_PASSWORD,
  );
  const showLoggedOut = computed(
    () => authState.value === AUTH_STATE.LOGGED_OUT,
  );
  const showButtons = computed(
    () => authState.value !== AUTH_STATE.RESET_PASSWORD,
  );
  const showError = computed(() => errorMsg.value != null);

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
    console.log(`AuthLayer onMounted!`);
    // _store.init();
  });

  // onUpdated(() => {
  //   console.log(`AuthLayer onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`AuthLayer unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
