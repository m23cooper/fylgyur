<!--  Generated from VueLayer plop template -->

<template>
  <div>
    <div class="absolute
      inset-0
      flex
      items-center
      justify-center">
      <div class="pane
        bg-white
        p-10
        shadow-xl
        rounded-xl
        w-1/3
        xl:w-1/5
        min-w-fit"
      >
        <div class="font-medium self-center text-xl text-gray-800 mb-5">
  <!--        <img :src="fantastorical_logo"  class="h-[4rem]" alt="Powered by Fantastorical." title="Powered by Fantastorical.">-->
          LOGIN
        </div>


      </div>
      <LoginErrorComponent class="absolute bottom-0" v-show='showError' :errorMsg />
    </div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import LoginErrorComponent from "@/_layers/login/LoginErrorComponent.vue";
  import { useUserStore, } from "@/_stores";
  import { ROUTE_NAMES } from "@/enum";
  import {computed, onMounted, ref,} from 'vue';
  //  @ts-ignore
  import fantastorical_logo from '@/assets/fantastorical_logo-md.png';


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = "LoginLayer";

  const { login, register, logout } = useUserStore();
  const errorMsg = ref<string | null>(null);
  const showError = computed( () => errorMsg.value != null);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Public
  defineExpose({
    name: _name,
  })


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
  })

  // onUpdated(() => {
  //   console.log(`LoginLayer onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`LoginLayer unmounted!`);
  // })

</script>

<!------------------------------------------------------------------------------------------------->

