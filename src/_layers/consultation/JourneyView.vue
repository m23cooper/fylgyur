<!--  Generated from VueView plop template -->

<template>
    <div id="JourneyView" class="container">
      <h2 class="prose self-start p-2 border-b-2 border-fuchsia-700">JourneyView</h2>
      <div class="container p-5 flex flex-col gap-4 items-center" v-if="forms">
        <div class="" v-for="form in forms" :key="form.id">
          <JourneyCardComponent :form @click="onCardClick(form.name)"/>
        </div>
      </div>
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
  import JourneyCardComponent from "@/_layers/consultation/_components/JourneyCardComponent.vue";

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  // interface IJourneyViewProps
  // {
  //   blah: string;
  // }
  //
  // const props: Readonly<IJourneyViewProps> = withDefaults(defineProps<IJourneyViewProps>(), {
  //   blah: "",
  // });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  // const emit = defineEmits([ EMIT.SELECTED, ]);


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = "JourneyView";

  const _store = useConsultationStore();

  const {
    forms,
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
  function onCardClick(name:string): void {
    _store.setCurrentForm(name);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    console.log(`JourneyView onMounted!`);
    // _store.init();
  })

  // onUpdated(() => {
  //   console.log(`JourneyView onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`JourneyView unmounted!`);
  // })

</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>

</style>
