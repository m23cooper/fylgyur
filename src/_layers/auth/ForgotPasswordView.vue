<!--  Generated from VueView plop template -->

<template>
  <div id="ForgotPasswordView" class="container">
    <h3
      class="prose text-primary-content text-xl border-b-[1px] border-white pb-1 mb-5"
    >
      Forgot Password
    </h3>

    <FormKit type="form" name="forgot_password">
      <FormKit
        type="email"
        name="email"
        validation="required|email"
        placeholder="the email you signed up with"
      />
    </FormKit>
    <div class="prose w-full text-primary-content text-center mb-2">
      If we have your email on record we will send a reminder. Remember to check
      your spam if it doesn't arrive
    </div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { onMounted, onUpdated, onUnmounted, Ref, ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useUIStore, useUserStore } from '@/_stores';
  import { Signals } from '@/signals';
  import * as utils from '@/utils/utils';
  import ModalComponent from '@/_components/modal/ModalComponent.vue';
  import { AUTH_STATE } from '@/enum/AUTH_STATE';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  // interface IForgotPasswordViewProps
  // {
  //   blah: string;
  // }
  //
  // const props: Readonly<IForgotPasswordViewProps> = withDefaults(defineProps<IForgotPasswordViewProps>(), {
  //   blah: "",
  // });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  // const emit = defineEmits([ EMIT.SELECTED, ]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'ForgotPasswordView';

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
  //  SIGNALS
  // Signals.PUSHER_NOTIFICATION.add(onPusherNotification, () => {})

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Methods

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  WATCH

  // watch works directly on a ref
  // watch(ref, async () => {
  //
  // })

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    console.log(`ForgotPasswordView onMounted!`);
    // _store.init();
  });

  // onUpdated(() => {
  //   console.log(`ForgotPasswordView onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`ForgotPasswordView unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
