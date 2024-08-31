<!--  Generated from VueView plop template -->

<template>
    <div id="FormView"
         class="container"
    >
      <h2 class="prose self-start p-2">FormView</h2>
      <div
          v-if="currentFormName !== null"
          class="card rounded bg-white mx-10 p-8 text-slate-800"
      >
        <component :is="formComponent"></component>
      </div>
    </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
import {onMounted, onUpdated, onUnmounted, Ref, ref, computed, markRaw, shallowRef, watch} from 'vue';
  import { storeToRefs } from 'pinia'
  import {useConsultationStore, useUIStore} from "@/_stores";
  // import * as _components from './_components';
  import { Signals } from "@/signals";
  import * as utils from '@/utils/utils';
  import _titleCase from "voca/title_case";
  import ModalComponent from "@/_components/modal/ModalComponent.vue";

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

  const formComponent = shallowRef(null);

  const _store = useConsultationStore();

  const {
    currentFormName,
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
      const component = await import(`../../forms/${currentFormName.value}.vue`);
      return component.default;
    } catch (error) {
      console.error('Failed to load component:', error);
      return null;
    }
  };

  const loadFormComponent = async () => {
    formComponent.value = await loadFormVue();
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  WATCH
  watch(currentFormName, loadFormComponent)

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    console.log(`FormView onMounted!`);
    loadFormComponent();
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
