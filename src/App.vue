<!--  Generated from VueLayer plop template -->

<template>
  <div id="app" class="w-screen min-h-screen">
    <div v-if="!isInit">
      <div v-if="isLoggedIn" class="flex flex-row">
        <div class="flex flex-col w-screen min-h-screen">
          <NavLayer class="h-[4rem] z-[5] fixed dev7"></NavLayer>
          <router-view key="routerView" v-slot="{ Component }" class="mt-[4rem] p-4 z-[1]">
            <transition
                mode="out-in"
                :css="false"
                @before-enter="anims.beforeNavEnter"
                @enter="anims.enterNav"
                @before-leave="anims.beforeNavLeave"
                @leave="anims.leaveNav">
              <component :is="Component" class="w-full"/>
            </transition>
          </router-view>
        </div>
      </div>
      <LoginLayer v-if="!isLoggedIn" />
      <NotificationLayer class="z-[20]" />
    </div>
    <LoadingLayer class="z-25" v-if="isLoading" />
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { Signals } from "@/signals";
  import { useUIStore, useUserStore, } from "@/_stores";
  import { StoreGeneric, storeToRefs } from "pinia";
  import { nextTick, onBeforeMount, onMounted, ref } from 'vue';
  import LoadingLayer from "@/_layers/loading/_loading.layer.vue";
  import LoginLayer from "@/_layers/login/_login.layer.vue";
  import MenuLayer from '@/_layers/menu/_menu.layer.vue';
  import NavLayer from '@/_layers/nav/_nav.layer.vue';
  import NotificationLayer from "@/_layers/notification/_notification.layer.vue";
  import * as anims from '@/utils/animation'
  import {useDeviceStore} from "@/_stores/_device.store";

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = "AppLayer";

  // const _router = router;

  const _uiStore = useUIStore();
  const _userStore = useUserStore();

  const {
    isInit,
    isLoading,
  } = storeToRefs(<StoreGeneric>_uiStore);

  const {
    isLoggedIn
  } = storeToRefs(<StoreGeneric>_userStore);

  let isHidden = ref(true);

  Signals.LOGIN.add(onLogin);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Public
  defineExpose({
    name: _name,
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Provides - props for all children
  //  eg - provide("key", "value");


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Emits
  // const emit = defineEmits(['change', 'delete']);


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Methods
  async function onLogin()
  {
    // await useDeviceStore().init();

    // await nextTick(async() => {
    //   await useUtilStore().init();
    //   await useProviderStore().init()
    //   await useApplicationStore().init()
    //   await usePensionStore().init()
    //   await useEmploymentStore().init()
    // })
  }



  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks

  onBeforeMount(async () => {
    // console.log(`AppLayer onMounted!`);
    //
    // _uiStore.changeTheme({ theme: "business", });

    // try and rejoin a session
    // check any stored token is recognised by the backend
    // Router has already called checkUserAccess so user store is initialised
    if(_userStore.isLoggedIn) await _userStore.loadLoggedInUser();

    await nextTick(async() => {
      _uiStore.isInit = false;
      _uiStore.isLoading = false;
    })
  })

  // onUpdated(() => {
  //   console.log(`AppLayer onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`AppLayer unmounted!`);
  // })

</script>

<!------------------------------------------------------------------------------------------------->

