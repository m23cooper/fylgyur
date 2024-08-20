<!--  Generated from VueLayer plop template -->

<template>
  <Transition name="slide-fade">
    <div
      v-if="note"
      class="alert absolute right-10 bottom-0 w-auto alert-success rounded-none rounded-t-lg shadow-xl cursor-pointer overflow-hidden"
      :class="['notification', notificationStyle]"
      @click="onClick"
    >
      <div class="">
        <FontIconComponent
            :icon-type="(note?.type === 'success') ? FontIconType.CHECK_CIRCLE : FontIconType.CLOSE"
            :size="FontIconSize.SM"
            :rotate="FontIconRotate.NONE"
            :flip="FontIconFlip.NONE"
            :anim="FontIconAnimate.NONE"
            :clickable="false"
            classes="text-white"
        ></FontIconComponent>

      </div>
      <div class="flex flex-col mb-10">
        <p class="text-left m-0">
          <strong>{{ note?.message }}</strong>
        </p>
        <p
            v-if="note?.content"
            v-html="note?.content"
            class="text-left m-0"
        ></p>
      </div>
    </div>
  </Transition>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { Signals } from "@/signals";
  import { INotification } from "@/types/INotification";
  import { computed, onMounted, ref, Ref } from "vue";
  import { FontIconType, FontIconSize, FontIconRotate, FontIconFlip, FontIconAnimate } from "@/icons/FontIconConstants";
  import FontIconComponent from '@/icons/FontIconComponent.vue';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  // interface INotificationComponentProps
  // {
  //   //   blah: string;
  // }

  // const props: Readonly<INotificationComponentProps> = withDefaults(defineProps<INotificationComponentProps>(), {
  //   //   blah: "",
  // });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  // const emit = defineEmits(['change', ]);



  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PRIVATE
  const _name: string = "NotificationLayer";

  Signals.NOTIFICATION.add(onNotification);

  const note: Ref<INotification | null> = ref(null);
  let timeout;
  const defaultDuration = 3000;
  const deltaY = 200

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  GETTERS

  // const showNotification = computed(() => _getters.showNotification);
  // const getNotificationType = computed(() => _getters.getNotificationType);
  // const getNotificationDuration = computed(() => _getters.getNotificationDuration || 3000);
  // const getNotificationMessage = computed(() => _getters.getNotificationMessage);
  // const getNotificationContent = computed(() => _getters.getNotificationContent);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  COMPUTED
  const notificationStyle = computed(() => {
    return {
      "alert-error": note.value?.type === "error",
      "alert-success": note.value?.type === "success"
    };
  });



  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  WATCH
  const watch = {

  }



  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  METHODS
  function onClick() {
    clearTimeout(timeout);
    close();
  }

  function onNotification(signal:any) {
    clearTimeout(timeout);
    note.value = signal;
    timeout = setTimeout(close, signal.duration || defaultDuration);
  }

  function close(): void {
    note.value = null;
  }



  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  HOOKS
  onMounted( () => {
    //useStore().dispatch("startTrace", getApplicationUuid);
  })

</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>
