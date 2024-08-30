<!--  Generated from VueView plop template -->

<template>
    <div id="JourneyView" class="container flex flex-col gap-4 h-fill items-center">
      <h2 class="self-start p-2">JourneyView</h2>
      <div class="card bg-base-100 w-96 shadow-xl" v-for="form in forms" :key="form.id">
        <div class="">{{ form.name }}</div>
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
