<!--  Generated from VueLayer plop template -->

<template>
    <div id="HomeLayer" class="flex flex-col">
      <HeroView />
      <MentorView class="container" />
    </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
    import { onMounted, onUpdated, onUnmounted, Ref, ref, computed } from 'vue';
    import { storeToRefs } from 'pinia'
    import { useUIStore } from "@/_stores";
    import { Signals } from "@/signals";
    import HeroView from './HeroView.vue'
    import MentorView from "./MentorView_old.vue";


    //////////////////////////////////////////////////////////////////////////////////////////////////
    //  Private
    const _name: string = "HomeLayer";


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
    //  function onPusherNotification(evt)
    //  {
    //      // handle event
    //  }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    //  Hooks
    onMounted(() => {
      console.log(`HomeLayer onMounted!`);
      // _store.init();
    })

    // onUpdated(() => {
    //   console.log(`HomeLayer onUpdated!`);
    // })

    // onUnmounted(() => {
    //   console.log(`HomeLayer unmounted!`);
    // })

</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>

</style>
