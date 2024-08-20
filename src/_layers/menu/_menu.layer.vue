<!--  Generated from VueLayer plop template -->

<template>
  <div class="absolute inset-0 w-[6rem] flex flex-col h-full bg-transparent pointer-events-none" @mouseleave="showMenu = false">
    <input id="menu-drawer" type="checkbox" class="drawer-toggle pointer-events-none" v-model="showMenu" />
<!--    <div class="drawer-content bg-transparent">-->
<!--      &lt;!&ndash; Page content here &ndash;&gt;-->
<!--      <label for="menu-drawer" class="drawer-button"></label>-->
<!--    </div>-->
    <div class="drawer-side fixed h-full bg-transparent z-10 pointer-events-auto">
      <label for="menu-drawer" class="drawer-overlay bg-none"></label>
      <MenuView
          @click="showMenu = false"
          @mouseleave="showMenu = false"
          @keyup.esc="onToggle"
      ></MenuView>
    </div>
    <div class="w-[20px] h-full bg-transparent cursor-pointer pointer-events-auto z-20" @mouseenter="showMenu = true" ></div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import MenuView from "@/_layers/menu/MenuView.vue";
  import { Signals } from "@/signals";
  import { useUIStore, useUserStore } from "@/_stores";
  import { onMounted, ref,  } from 'vue';


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = "MenuLayer";

  const showMenu = ref(false)

  // ////////////////////////////////////////////////////////////////////////////////////////////
  //  COMPUTED
  // const getContact = computed(() => {
  //   return getApplication.value.contact[0]?.number;
  // });

  // const currentRoute = computed(() => {
  //   return useUIStore().currentRoute
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
  Signals.LOGOUT.add(() => showMenu.value = false)


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Methods
  function onToggle() {
    showMenu.value = !showMenu.value;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    // console.log(`MenuLayer onMounted!`);
    const test = 1;
  })

  // onUpdated(() => {
  //   console.log(`MenuLayer onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`MenuLayer unmounted!`);
  // })

</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>

</style>
