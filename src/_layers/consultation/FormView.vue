<!--  Generated from VueView plop template -->

<template>
  <div id="FormView"
       v-if="currentForm !== null"
  >
    <component :is="formComponent" ref="asyncComp"></component>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
import {
  ref,
  onMounted,
  shallowRef,
  watch,
} from 'vue';
import type {
  ShallowRef, Component,
} from 'vue';
import {storeToRefs} from 'pinia'
import {useConsultationStore, useUIStore} from "@/_stores";
// import * as _components from './_components';
import {Signals} from "@/signals";
import * as utils from '@/utils/utils';
import _titleCase from "voca/title_case";
import ModalComponent from "@/_components/modal/ModalComponent.vue";
import {useFormKitContextById} from "@formkit/vue";

//////////////////////////////////////////////////////////////////////////////////////////////////
//  PROPS
// interface IFormViewProps
// {
//   blah: string;
// }
//
// const props: Readonly<IFormViewProps> = withDefaults(defineProps<IFormViewProps>(), {
//   blah: "",
// });

//////////////////////////////////////////////////////////////////////////////////////////////////
//  EMITS
// const emit = defineEmits([ EMIT.SELECTED, ]);


//////////////////////////////////////////////////////////////////////////////////////////////////
//  Private
const _name: string = "FormView";

const formComponent: ShallowRef<Component | null> = shallowRef(null);
const asyncComp = ref(null);


const _store = useConsultationStore();

const {
  currentForm,
} = storeToRefs(_store);


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
const loadFormVue = async () => {
  try {
    if (currentForm?.value) {
      console.log(`loadFormVue ${currentForm.value.name}`)
      useUIStore().showLoading(`Loading ${currentForm.value.title}`)
      const component = await import(`../../forms/${currentForm.value.name}.vue`)

      useUIStore().hideLoading();
      return component.default;
    }
  } catch (error) {
    console.error('Failed to load component:', error);
    return null;
  }
};

const loadFormComponent = async () => {
  formComponent.value = await loadFormVue()
  console.log(`loadFormComponent ${currentForm.value?.id}`)
  const {formRef, hello} = asyncComp.value
  const ctx = useFormKitContextById(currentForm.value.id, () => {
    _store.registerFormContext({ctx})
  })
}

//////////////////////////////////////////////////////////////////////////////////////////////////
//  WATCH
watch(currentForm, loadFormComponent)

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Hooks
onMounted(() => {
  console.log(`FormView onMounted!`);
  // loadFormComponent();
})

// onUpdated(() => {
//   console.log(`FormView onUpdated!`);
// })

// onUnmounted(() => {
//   console.log(`FormView unmounted!`);
// })

</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>

</style>
