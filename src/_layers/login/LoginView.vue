<!--  Generated from VueView plop template -->

<template>
  <div id="LoginView" class="container h-fill justify-center">
    <h3 class="prose text-2xl mb-6">Login to an existing account</h3>
    <div class="border-2 border-slate-500:10 p-4">
      <FormKit type="form" id="loginForm" @submit="onSubmit">
        <FormKit
          type="email"
          name="email"
          help="Please enter your email address."
          validation="required|email"
          validation-visibility="live"
          placeholder="Email"
        />
        <FormKit
          type="password"
          name="password"
          label="A fancy password input"
          value="mySecretPassword!"
          prefix-icon="password"
          suffix-icon="eyeClosed"
          @suffix-icon-click="handleIconClick"
          suffix-icon-class="hover:text-blue-500"
        />
      </FormKit>
    </div>
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
  const handleIconClick = (node, e) => {
    node.props.suffixIcon =
      node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye';
    node.props.type = node.props.type === 'password' ? 'text' : 'password';
  };

  const onSubmit = async (formData, node) => {
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
  };

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
