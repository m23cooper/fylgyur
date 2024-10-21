<!--  Generated from VueView plop template -->

<template>
  <div id="ResetPasswordView" class="container">
    <h3
      class="prose text-primary-content text-xl border-b-[1px] border-white pb-1 mb-5"
    >
      Reset your password
    </h3>
    <FormKit type="form" id="resetPasswordForm" @submit="onReset">
      <FormKit
        type="password"
        ref="current"
        label="Current password"
        prefix-icon="password"
        suffix-icon="eyeClosed"
        @suffix-icon-click="handleIconClick"
        suffix-icon-class="hover:text-blue-500"
      />
      <FormKit
        type="password"
        ref="new"
        label="New password"
        prefix-icon="password"
        suffix-icon="eyeClosed"
        @suffix-icon-click="handleIconClick"
        suffix-icon-class="hover:text-blue-500"
      />
      <FormKit
        type="password"
        ref="confirm"
        label="Confirm new password"
        prefix-icon="password"
        suffix-icon="eyeClosed"
        @suffix-icon-click="handleIconClick"
        suffix-icon-class="hover:text-blue-500"
      />
    </FormKit>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { onMounted, onUpdated, onUnmounted, Ref, ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useUIStore, useUserStore } from '@/_stores';
  import { ROUTE_NAMES } from '@/enum';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  // interface IResetPasswordViewProps
  // {
  //   blah: string;
  // }
  //
  // const props: Readonly<IResetPasswordViewProps> = withDefaults(defineProps<IResetPasswordViewProps>(), {
  //   blah: "",
  // });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  // const emit = defineEmits([ EMIT.SELECTED, ]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'ResetPasswordView';

  const _userStore = useUserStore();

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
  function handleIconClick(node, e) {
    node.props.suffixIcon =
      node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye';
    node.props.type = node.props.type === 'password' ? 'text' : 'password';
  }

  async function onReset(formData, node) {
    console.log(`${formData.email} ${formData.password}`);
    try {
      const test = await _userStore.loginWithEmail({
        email: formData.email,
        password: formData.password,
      });
      if (_userStore.isLoggedIn) {
        alert('Logged in successfully!');
        await useUIStore().goRoute(ROUTE_NAMES.FORMS, {});
      }
    } catch (error: any) {
      alert('Error logging in: ' + error.message);
    }
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
    console.log(`ResetPasswordView onMounted!`);
    // _store.init();
  });

  // onUpdated(() => {
  //   console.log(`ResetPasswordView onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`ResetPasswordView unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
