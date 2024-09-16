<!--  Generated from VueLayer plop template -->

<template>
  <div>
    <div class="container">
      <div
        class="pane bg-white p-10 shadow-xl rounded-xl w-1/3 xl:w-1/5 min-w-fit mx-auto mt-10"
      >
        <LoginView />
        <div class="divider">OR</div>
        <SocialLoginView />
      </div>
      <LoginErrorComponent
        class="absolute bottom-0"
        v-show="showError"
        :errorMsg
      />
    </div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import LoginErrorComponent from '@/_layers/login/LoginErrorComponent.vue';
  import { useUserStore } from '@/_stores';
  import { ROUTE_NAMES } from '@/enum';
  import { computed, onMounted, ref } from 'vue';
  import fantastorical_logo from '@/assets/fantastorical_logo-md.png';
  import LoginView from '@/_layers/login/LoginView.vue';
  import SocialLoginView from '@/_layers/login/SocialLoginView.vue';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'LoginLayer';

  const { login, register, logout } = useUserStore();
  const errorMsg = ref<string | null>(null);
  const showError = computed(() => errorMsg.value != null);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Public
  defineExpose({
    name: _name,
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Props
  // interface IProps
  // {
  //   blah: string;
  // }
  //
  // const props: Readonly<IProps> = withDefaults(defineProps<IProps>(), {
  //   blah: "",
  // });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Emits
  // const emit = defineEmits(['change', 'delete']);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Methods

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    // console.log(`LoginLayer onMounted!`);
    //_vm?.fetchStats();
  });

  // onUpdated(() => {
  //   console.log(`LoginLayer onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`LoginLayer unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->
