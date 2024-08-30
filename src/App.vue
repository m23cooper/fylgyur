<!--  Generated from VueLayer plop template -->

<template>
  <div id="app" class="w-screen min-h-screen">
    <div v-if="!isInit">
      <div class="flex flex-col w-screen min-h-screen">
        <NavLayer class="fixed h-[5rem] z-[5]"></NavLayer>
        <router-view key="routerView" v-slot="{ Component }" class="mt-[5rem] z-[1]">
          <transition
              mode="out-in"
              :css="false"
              @before-enter="anims.beforeNavEnter"
              @enter="anims.enterNav"
              @before-leave="anims.beforeNavLeave"
              @leave="anims.leaveNav">
            <component :is="Component" class=" flex w-full"/>
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

  import NavLayer from '@/_layers/nav/_nav.layer.vue';
  import NotificationLayer from "@/_layers/notification/_notification.layer.vue";
  import * as anims from '@/utils/animation'
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


  // Signals.LOGIN.add(onLogin);

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
  // async function onLogin()
  // {
  //
  // }



  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks

  onBeforeMount(async () => {
    console.log(`AppLayer onBeforeMount!`);

    //  get all data from local storage
    await _userStore.init();

    // populate the Router and get startup url query
    _uiStore.init();
  })

  onMounted( async () => {
    console.log("App.onMounted");
    // const isLoggedIn = await kindeClient.isAuthenticated();
    // console.log("App.onMounted " + isLoggedIn);
    _uiStore.onAppLoaded()
  })

  // onUpdated(() => {
  //   console.log(`AppLayer onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`AppLayer onUnmounted!`);
  // })

</script>

<!------------------------------------------------------------------------------------------------->

