<!--  Generated from VueLayer plop template -->

<template>
    <div id="WelcomeLayer" class="container h-fill">
      <div class="dev4">WelcomeLayer</div>
    </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
    import { onMounted, onUpdated, onUnmounted, Ref, ref, computed } from 'vue';
    import { storeToRefs } from 'pinia'
    import { useUIStore } from "@/_stores";
    import { Signals } from "@/signals";


    //////////////////////////////////////////////////////////////////////////////////////////////////
    //  Private
    const _name: string = "WelcomeLayer";


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
      console.log(`WelcomeLayer onMounted!`);
      // _store.init();
    })

    // onUpdated(() => {
    //   console.log(`WelcomeLayer onUpdated!`);
    // })

    // onUnmounted(() => {
    //   console.log(`WelcomeLayer unmounted!`);
    // })

</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>

</style>
