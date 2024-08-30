<!--  Generated from VueView plop template -->

<template>
    <div id="FormView" class="container h-fill">
      <h2 class="self-start p-2">FormView</h2>
    </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { onMounted, onUpdated, onUnmounted, Ref, ref, computed } from 'vue';
  import { storeToRefs } from 'pinia'
  import {useConsultationStore, useUIStore} from "@/_stores";
  // import * as _components from './_components';
  import { Signals } from "@/signals";
  import * as utils from '@/utils/utils';
  import _titleCase from "voca/title_case";
  import ADDButton from "@/buttons/ADDButton.vue";
  import EDITButton from "@/buttons/EDITButton.vue";
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

  const _store = useConsultationStore();

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
  //  WATCH
  // const watch = {
  //
  // }


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  SIGNALS
  // Signals.PUSHER_NOTIFICATION.add(onPusherNotification, () => {})


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Methods
  //  function onPusherNotification(evt)
  //  {
  //      // handle event
  //  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    console.log(`FormView onMounted!`);
    // _store.init();
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
