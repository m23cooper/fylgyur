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
          Title lives here
        </div>
        <div id="LoginLayerForm" class="w-full self-center">
          <Vueform v-bind="vueform" />
        </div>

      </div>
      <LoginErrorComponent class="absolute bottom-0" v-show='showError' :errorMsg="login_error_msg" />
    </div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import LoginErrorComponent from "@/_layers/login/LoginErrorComponent.vue";
  import { storeToRefs} from 'pinia'
  import { useUIStore, } from "@/_stores";
  import {computed, ref} from 'vue';
  import { ROUTE_NAMES } from "@/enum";
  import { onMounted,  } from 'vue';
  //  @ts-ignore
  import fantastorical_logo from '@/assets/fantastorical_logo-md.png';
  import {useLoginVM} from "@/_layers/login/_login.vm";

  import ADDButton from "@/buttons/ADDButton.vue";

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = "LoginLayer";

  const _vm =  useLoginVM();
  // const _router = index;

  const {
    login_error_msg,
    login_email,
    login_password,
  } = storeToRefs(_vm);

  const vueform = ref({
        type: 'group',
        schema: {
          email: {
            type: 'text',
            inputType: 'email',
            placeholder: 'Email Address',
            columns: {
              container: 6,
              label: 12,
              wrapper: 12,
            },
            fieldName: 'email',
            rules: [
              'required',
              'max:255',
                'email',
            ],
          },
          password: {
            type: 'text',
            inputType: 'password',
            placeholder: 'password',
            columns: {
              container: 6,
              label: 12,
              wrapper: 12,
            },
            fieldName: 'password',
            rules: [
              'required',
              'max:255',
            ],
          },
        },
  });

  let submitted = false;
  const showError = computed(() => login_error_msg.value !== "");

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Public
  defineExpose({
    name: _name,
    submitted,
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

  async function onSubmit(params) {
    submitted = true;
    // if(!validated) return;

    await _vm?.login()
      .then ( (response) => {
        console.log(`LoginLayer - login success`);
        useUIStore().goRoute(ROUTE_NAMES.WELCOME, {});
      })
    .catch( (error) => {
      submitted = false;
    });
  }

  function onFocus(evt)
  {
    login_error_msg.value = "";
  }


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

