<!--  Generated from VueView plop template -->

<template>
  <div id="RegisterView" class="container h-fill justify-center">
    <h3 class="prose text-2xl mb-6">Register for an account</h3>
    <div class="border-2 border-slate-500:10 p-4">
      <FormKit type="form" id="registerForm" @submit="onRegister">
        <FormKit
          type="email"
          ref="email"
          label="Email address"
          help="Please enter your email address."
          validation="required|email"
          validation-visibility="live"
          placeholder="Email"
        />
        <FormKit
          type="password"
          ref="password"
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
  import { onMounted, onUpdated, onUnmounted, Ref, ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useUserStore } from '@/_stores';
  import { Signals } from '@/signals';
  import { ROUTE_NAMES } from '@/enum';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  // interface IRegisterViewProps
  // {
  //   blah: string;
  // }
  //
  // const props: Readonly<IRegisterViewProps> = withDefaults(defineProps<IRegisterViewProps>(), {
  //   blah: "",
  // });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  // const emit = defineEmits([ EMIT.SELECTED, ]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'RegisterView';

  const email = ref('');
  const password = ref('');

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

  const onRegister = async () => {
    console.log(`${email.value} ${password.value}`);
    try {
      await _userStore.registerWithEmail({
        email: email.value,
        password: password.value,
      });
      alert('Registered successfully!');
    } catch (error: any) {
      alert('Error registering: ' + error.message);
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
    console.log(`RegisterView onMounted!`);
    // _store.init();
  });

  // onUpdated(() => {
  //   console.log(`RegisterView onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`RegisterView unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
