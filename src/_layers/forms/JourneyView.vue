<!--  Generated from VueView plop template -->

<template>
  <div id="JourneyView" class="container">
    <div class="container p-5 flex flex-col gap-4 items-center" v-if="forms">
      <div class="w-full" v-for="form in forms" :key="form.id">
        <JourneyCardComponent
          v-if="form.id !== currentForm.id"
          class="shadow-lg cursor-pointer"
          :form
          @click="onCardClick(form.id)"
        />
        <JourneyCardComponent
          v-else
          :form
          class="w-full border-fuchsia-700 border-4 cursor-default"
        />
      </div>
    </div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { onMounted, onUpdated, onUnmounted, Ref, ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useFormsStore, useUIStore } from '@/_stores';
  // import * as _components from './_components';
  import { Signals } from '@/signals';
  import * as utils from '@/utils/utils';
  import _titleCase from 'voca/title_case';
  import ADDButton from '@/buttons/ADDButton.vue';
  import EDITButton from '@/buttons/EDITButton.vue';
  import ModalComponent from '@/_components/modal/ModalComponent.vue';
  import JourneyCardComponent from '@/_layers/forms/_components/JourneyCardComponent.vue';

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
  const _name: string = 'JourneyView';

  const _store = useFormsStore();

  const { forms, currentForm } = storeToRefs(_store);

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
  function onCardClick(id: string): void {
    _store.setCurrentFormById({ id });
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    console.log(`JourneyView onMounted!`);
    // _store.init();
  });

  // onUpdated(() => {
  //   console.log(`JourneyView onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`JourneyView unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
