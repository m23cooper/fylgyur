<!--  Generated from VueLayer plop template -->

<template>
  <div class="w-[4rem] flex flex-col h-full bg-slate-800/75 overflow-hidden">
    <div class="flex flex-grow mt-[4rem]">
      <ul>
        <MenuOptionComponent
          v-for="option in menuOptions"
          :key="option.menu"
          :menu-option="option"
          @click="onMenuOptionClicked"
        >
        </MenuOptionComponent>
      </ul>
    </div>
    <div v-if="useUserStore().isDevUser" class="flex flex-shrink">
      <div
        @click="onDevClick"
        class="cursor-pointer flex items-center w-[3rem] h-[3rem] m-2 text-white bg-red-700 rounded-lg hover:scale-110 transition"
      >
        <FontIconComponent
          :icon-type="FontIconType.DEV"
          :size="FontIconSize.LG"
          :rotate="FontIconRotate.NONE"
          :flip="FontIconFlip.NONE"
          :anim="FontIconAnimate.NONE"
        >
        </FontIconComponent>
      </div>
    </div>
    <div class="flex flex-shrink">
      <div
        @click="onLogoutClick"
        class="cursor-pointer flex items-center w-[3rem] h-[3rem] m-2 text-white bg-red-700 rounded-lg hover:scale-110 transition"
      >
        <FontIconComponent
          :icon-type="FontIconType.LOGOUT"
          :size="FontIconSize.LG"
          :rotate="FontIconRotate.NONE"
          :flip="FontIconFlip.NONE"
          :anim="FontIconAnimate.NONE"
        >
        </FontIconComponent>
      </div>
    </div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import MenuOptionComponent from '@/_layers/menu/MenuOptionComponent.vue';
  import { useUIStore, useUserStore } from '@/_stores';
  import { EMIT } from '@/enum';
  import FontIconComponent from '@/icons/FontIconComponent.vue';
  import {
    FontIconAnimate,
    FontIconFlip,
    FontIconRotate,
    FontIconSize,
    FontIconType,
  } from '@/icons/FontIconConstants';
  import { menuOptions } from '@/router/router';
  import { Signals } from '@/signals';
  import { onMounted } from 'vue';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  // interface IMenuProps
  // {
  //   blah: string;
  // }
  //
  // const props: Readonly<IMenuProps> = withDefaults(defineProps<IMenuProps>(), {
  //   blah: "",
  // });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  const emit = defineEmits([EMIT.CLICK]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'Menu';

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
  function onMenuOptionClicked({ routeName }) {
    useUIStore().goRoute(routeName, {});
    emit(EMIT.CLICK);
  }

  function onLogoutClick() {
    useUserStore().logout();
  }

  function onDevClick() {
    Signals.NOTIFICATION.dispatch({
      show: true,
      duration: 5000,
      type: 'success',
      message: 'Task added successfully!',
      content: 'Test from AppLayer',
    });
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    // console.log(`MenuLayer onMounted!`);
    // _store.init();
  });

  // onUpdated(() => {
  //   console.log(`MenuLayer onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`MenuLayer unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
