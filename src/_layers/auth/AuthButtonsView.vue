<!--  Generated from VueView plop template -->

<template>
  <div id="AuthButtonsView" class="flex flex-col w-fit gap-3 mt-5 mx-auto">
    <div v-if="showLogin" class="btn btn-sm btn-accent" @click="onLoginClick">
      Back to login
    </div>
    <div
      v-if="showRegister"
      class="btn btn-sm btn-accent"
      @click="onRegisterClick"
    >
      I need to register
    </div>
    <div v-if="showForgot" class="btn btn-sm btn-accent" @click="onForgotClick">
      Forgot password?
    </div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { onMounted, onUpdated, onUnmounted, Ref, ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useUIStore, useUserStore } from '@/_stores';
  import { AUTH_STATE } from '@/enum/AUTH_STATE';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  // interface IAuthButtonsViewProps
  // {
  //   blah: string;
  // }
  //
  // const props: Readonly<IAuthButtonsViewProps> = withDefaults(defineProps<IAuthButtonsViewProps>(), {
  //   blah: "",
  // });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  // const emit = defineEmits([ EMIT.SELECTED, ]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'AuthButtonsView';

  const _userStore = useUserStore();

  const { authState } = storeToRefs(_userStore);

  // ////////////////////////////////////////////////////////////////////////////////////////////
  //  COMPUTED
  const showRegister = computed(() => authState.value !== AUTH_STATE.REGISTER);
  const showForgot = computed(
    () => authState.value !== AUTH_STATE.FORGOT_PASSWORD,
  );
  const showLogin = computed(() => authState.value !== AUTH_STATE.LOGIN);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Public
  defineExpose({
    name: _name,
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
    _userStore.setAuthState(AUTH_STATE.REGISTER);
  }

  function onLoginClick() {
    _userStore.setAuthState(AUTH_STATE.LOGIN);
  }

  function onForgotClick() {
    _userStore.setAuthState(AUTH_STATE.FORGOT_PASSWORD);
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
    console.log(`AuthButtonsView onMounted!`);
    // _store.init();
  });

  // onUpdated(() => {
  //   console.log(`AuthButtonsView onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`AuthButtonsView unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
