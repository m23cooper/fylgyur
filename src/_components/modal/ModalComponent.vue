<!--  Generated from VueLayer plop template -->

<template>
  <Teleport to="body">
    <div
      class="absolute inset-0 flex items-center justify-center transition-all ease-in-out w-ful h-full bg-white/50 z-50 overflow-hidden"
    >
      <div
        class="card w-fit max-w-[90vw] h-fit max-h-[90vh] overflow-y-auto transition-all ease-in-out rounded-lg shadow-lg ring-teal-500"
      >
        <div
          class="navbar glass items-center min-h-[3rem] pointer-events-none"
          @click="null"
        >
          <div class="navbar-start text-lg font-semibold whitespace-nowrap">
            <slot name="title" class=""></slot>
          </div>
          <div class="navbar-end justify-end gap-3">
            <!--              <CLOSEButton class="btn btn-xs btn-primary btn-square shadow hover:shadow-lg rounded pointer-events-auto" @click="emit(EMIT.CLOSE)" />-->
          </div>
        </div>
        <div
          class="card-body pt-3 pb-0 px-3 overflow-y-auto flex flex-1 items-center"
        >
          <slot class="" name="content"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  // import CLOSEButton from "@/buttons/CLOSEButton.vue";
  import { computed, onMounted, Ref, ref } from 'vue';
  import { EMIT } from '@/enum';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  // interface IModalComponentProps
  // {
  //     data: any;
  // }
  //
  // const props: Readonly<IModalComponentProps> = withDefaults(defineProps<IModalComponentProps>(), {
  //     data: undefined,
  // });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  const emit = defineEmits([EMIT.CLOSE]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PRIVATE
  const _name: string = 'ModalComponent';

  const isDragging = ref(false);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  GETTERS

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  COMPUTED
  // const getContact = computed(() => {
  //   return getApplication.value.contact[0]?.number;
  // });

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
  function onSlotClose() {
    emit(EMIT.CLOSE);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  HOOKS
  onMounted(() => {
    //useStore().dispatch("load", getApplicationUuid);
  });
</script>

<!------------------------------------------------------------------------------------------------->
