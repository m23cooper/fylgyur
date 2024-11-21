<!--  Generated from VueView plop template -->

<template>
  <div id="SocialLoginView" class="container flex flex-col gap-3">
    <div class="btn" @click="signInWithGoogle">Sign in with Google</div>
    <div class="btn" @click="signInWithFacebook">Sign in with Facebook</div>
    <div class="btn" @click="signInWithTwitter">Sign in with Twitter</div>
    <div class="btn" @click="signInWithGithub">Sign in with GitHub</div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { onMounted, onUpdated, onUnmounted, Ref, ref, computed } from 'vue';
  import { useUserStore } from '@/_stores';
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  // interface ISocialLoginViewProps
  // {
  //   blah: string;
  // }
  //
  // const props: Readonly<ISocialLoginViewProps> = withDefaults(defineProps<ISocialLoginViewProps>(), {
  //   blah: "",
  // });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  // const emit = defineEmits([ EMIT.SELECTED, ]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'SocialLoginView';

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
  const signInWithGoogle = async () => {
    try {
      await _userStore.signInWithGoogle();
    } catch {}
  };
  const signInWithFacebook = async () => {
    try {
      await _userStore.signInWithFacebook();
    } catch {}
  };
  const signInWithTwitter = async () => {
    try {
      await _userStore.signInWithTwitter();
      alert('WTF!');
    } catch (error) {
      alert(error);
    }
  };
  const signInWithGithub = async () => {
    try {
      await _userStore.signInWithGithub();
    } catch {}
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
    console.log(`SocialLoginView onMounted!`);
    // _store.init();
  });

  // onUpdated(() => {
  //   console.log(`SocialLoginView onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`SocialLoginView unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
