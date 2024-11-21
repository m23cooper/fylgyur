<!--  Generated from VueView plop template -->

<template>
  <div id="LoginView" class="container">
    <h3
      class="prose text-primary text-xl border-b-[1px] border-accent pb-1 mb-5"
    >
      Login to an existing account
    </h3>
    <FormKit type="form" id="loginForm" @submit="onSubmit">
      <FormKit
        type="email"
        name="email"
        label="Email"
        validation="required|email"
        validation-visibility="dirty"
        placeholder="blah@blah.com"
      />
      <FormKit
        type="password"
        name="password"
        label="Password"
        placeholder="password"
        validation="required"
        validation-visibility="live"
        prefix-icon="password"
        suffix-icon="eyeClosed"
        @suffix-icon-click="handleIconClick"
        suffix-icon-class="hover:text-blue-500"
      />
    </FormKit>

    <!--      <div class="divider">OR</div>-->
    <!--      <SocialLoginView />-->
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useUIStore, useUserStore } from '@/_stores';
  import { ROUTE_NAMES } from '@/enum';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  // interface ILoginViewProps
  // {
  //   blah: string;
  // }
  //
  // const props: Readonly<ILoginViewProps> = withDefaults(defineProps<ILoginViewProps>(), {
  //   blah: "",
  // });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  // const emit = defineEmits([ EMIT.SELECTED, ]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'LoginView';

  // const email = ref('');
  // const password = ref('');
  // const loginForm = defineModel();

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

  async function onSubmit(formData, node) {
    console.log(`${formData.email} ${formData.password}`);
    try {
      const test = await _userStore.login({
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
    console.log(`LoginView onMounted!`);
    // _store.init();
  });

  // onUpdated(() => {
  //   console.log(`LoginView onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`LoginView unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
