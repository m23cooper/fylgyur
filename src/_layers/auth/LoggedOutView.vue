<!--  Generated from VueView plop template -->

<template>
  <div id="LoggedOutView" class="container">
    <h3
      class="prose text-primary-content text-xl border-b-[1px] border-white pb-1 mb-5"
    >
      Logged out
    </h3>
    You have been logged out
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { onMounted, onUpdated, onUnmounted, Ref, ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useUIStore, useUserStore } from '@/_stores';
  import { Signals } from '@/signals';
  import * as utils from '@/utils/utils';
  import ModalComponent from '@/_components/modal/ModalComponent.vue';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  // interface ILoggedOutViewProps
  // {
  //   blah: string;
  // }
  //
  // const props: Readonly<ILoggedOutViewProps> = withDefaults(defineProps<ILoggedOutViewProps>(), {
  //   blah: "",
  // });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  // const emit = defineEmits([ EMIT.SELECTED, ]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'LoggedOutView';

  const _userStore = useUserStore();

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
  //  SIGNALS
  // Signals.PUSHER_NOTIFICATION.add(onPusherNotification, () => {})

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Methods
  //  function onPusherNotification(evt)
  //  {
  //      // handle event
  //  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  WATCH

  // watch works directly on a ref
  // watch(ref, async () => {
  //
  // })

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    console.log(`LoggedOutView onMounted!`);
    // _store.init();
  });

  // onUpdated(() => {
  //   console.log(`LoggedOutView onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`LoggedOutView unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
