<!--  Generated from VueLayer plop template -->

<template>
  <div class="navbar bg-white shadow border-0 border-red-200 border-b overflow-hidden">
    <div class="navbar-start flex-row pl-1 justify-start">
      <div class="cursor-pointer" @click="onHomeClick">  <!-- top-[-8px] -->
        d;kfjhsdkgh
      </div>

    </div>
<!--    <div class="navbar-center">-->
<!--      &lt;!&ndash;        <h3 class="p-0 m-0 ml-5">{{ useUIStore().currentRoute.title }}</h3>&ndash;&gt;-->
<!--&lt;!&ndash;      <h1 class="p-0 m-0"></h1>&ndash;&gt;-->
<!--    </div>-->
<!--    <div class="navbar-end">-->
<!--      &lt;!&ndash; remain empty - this is where search.layer will live &ndash;&gt;-->
<!--    </div>-->
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { ROUTE_NAMES } from "@/enum";
  import { storeToRefs } from 'pinia'
  import { useUIStore } from "@/_stores";
  import { Signals } from "@/signals";
  import {onMounted, ref} from 'vue';
  import type { Ref } from 'vue';
  import type {IRoute} from "@/types";
  //  @ts-ignore

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = "NavLayer";

  const currentRoute: Ref<IRoute> = ref(useUIStore().currentRoute);

  // ////////////////////////////////////////////////////////////////////////////////////////////
  //  COMPUTED
  // const route: Ref<IRoute> = computed(() => {
  //   const routes = useRouter().options.routes
  //   return _find(routes, { "name": currentRoute.value.name });
  // })


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

  function onHomeClick() {
    useUIStore().goRoute(ROUTE_NAMES.HOME, {});
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    // console.log(`NavLayer onMounted!`);
  })

  // onUpdated(() => {
  //   console.log(`NavLayer onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`NavLayer unmounted!`);
  // })

</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>

</style>
