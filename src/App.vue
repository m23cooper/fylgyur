<!--  Generated from VueLayer plop template -->

<template>
  <div id="app" class="w-screen min-h-screen">
    <div v-if="!isInit">
      <div class="flex flex-col w-screen min-h-screen dev2">
        <NavLayer class="h-[4rem] z-[5] fixed dev6"></NavLayer>
        <router-view key="routerView" v-slot="{ Component }" class="mt-[4rem] p-4 z-[1] dev2">
          <transition
              mode="out-in"
              :css="false"
              @before-enter="anims.beforeNavEnter"
              @enter="anims.enterNav"
              @before-leave="anims.beforeNavLeave"
              @leave="anims.leaveNav">
            <component :is="Component" class=" flex w-full dev5"/>
          </transition>
        </router-view>
      </div>
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

  import MenuLayer from '@/_layers/menu/_menu.layer.vue';
  import NavLayer from '@/_layers/nav/_nav.layer.vue';
  import NotificationLayer from "@/_layers/notification/_notification.layer.vue";
  import * as anims from '@/utils/animation'
  import {useDeviceStore} from "@/_stores/_device.store";
  import {kindeClient} from "@/kinde/kindeClient";
  import {useRouter} from "vue-router";

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = "AppLayer";

  const _router = useRouter();

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
    console.log(`AppLayer onBeforeMount!`);
    //
    // _uiStore.changeTheme({ theme: "business", });



    await nextTick(async() => {
      _uiStore.onAppLoaded()
    })
  })

  onMounted( async () => {
    console.log("App.onMounted");
    // try {
    //   await kindeClient.handleRedirectToApp(new URL(window.location.toString()));
    //   // Redirect to Home page, etc...
    // } catch (error) {
    //   console.error("ERROR handleRedirect", error);
    // }
  })

  // onUpdated(() => {
  //   console.log(`AppLayer onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`AppLayer unmounted!`);
  // })

</script>

<!------------------------------------------------------------------------------------------------->

