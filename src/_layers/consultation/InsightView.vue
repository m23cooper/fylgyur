<!--  Generated from VueView plop template -->

<template>
  <div id="InsightView" class="container h-fill">
    <h2 class="prose self-start p-2">Insight View</h2>
    <pre class="container bg-white p-5 mx-5">:{{ formModel }}</pre>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { onMounted, onUpdated, onUnmounted, Ref, ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useConsultationStore } from '@/_stores';
  // import * as _components from './_components';
  import { Signals } from '@/signals';
  import * as utils from '@/utils/utils';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  // interface IInsightViewProps
  // {
  //   blah: string;
  // }
  //
  // const props: Readonly<IInsightViewProps> = withDefaults(defineProps<IInsightViewProps>(), {
  //   blah: "",
  // });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  // const emit = defineEmits([ EMIT.SELECTED, ]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'InsightView';

  const _store = useConsultationStore();

  const { formModel } = storeToRefs(_store);

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
    console.log(`InsightView onMounted!`);
    // _store.init();
  });

  // onUpdated(() => {
  //   console.log(`InsightView onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`InsightView unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
