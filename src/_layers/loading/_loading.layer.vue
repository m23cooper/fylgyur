<!--  Generated from VueLayer plop template -->

<template>

  <div v-if="isLoading"
    class="absolute
      inset-0
      flex
      items-center
      justify-center
      bg-white-700/50
      backdrop-blur-sm"
  >
    <div class="loadingio-spinner-double-ring-uk5hzehfim">
      <div class="ldio-70wkpmdk6gq">
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="text-xl">{{ loadingMsg }}</div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { useUIStore } from "@/_stores";
  import { storeToRefs } from "pinia";
  import { onMounted,  } from "vue";


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  // interface ILoadingComponentProps
  // {
  //   blah: string;
  // }
  //
  // const props: Readonly<ILoadingComponentProps> = withDefaults(defineProps<ILoadingComponentProps>(), {
  //   blah: "",
  // });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  // const emit = defineEmits(['change', ]);



  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PRIVATE
  const _name: string = "LoadingLayer";


  const {
    isLoading,
    loadingMsg,
  } = storeToRefs(useUIStore());


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
  //  function onSomething(evt)
  //  {
  //      // on event
  //  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  HOOKS
  onMounted( () => {
    //useStore().dispatch("load", getApplicationUuid);
  })

</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>
.loading {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  align-items: center;
  justify-content: center;
  pointer-events: all;
  z-index: 9999999;
}

@keyframes ldio-70wkpmdk6gq {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.ldio-70wkpmdk6gq div {
  box-sizing: border-box !important;
}
.ldio-70wkpmdk6gq > div {
  position: absolute;
  width: 144px;
  height: 144px;
  top: 28px;
  left: 28px;
  border-radius: 50%;
  border: 16px solid #000;
  border-color: #2c3e50 transparent #2c3e50 transparent;
  animation: ldio-70wkpmdk6gq 1s linear infinite;
}

.ldio-70wkpmdk6gq > div:nth-child(2),
.ldio-70wkpmdk6gq > div:nth-child(4) {
  width: 108px;
  height: 108px;
  top: 46px;
  left: 46px;
  animation: ldio-70wkpmdk6gq 1s linear infinite reverse;
}
.ldio-70wkpmdk6gq > div:nth-child(2) {
  border-color: transparent $red transparent $red;
}
.ldio-70wkpmdk6gq > div:nth-child(3) {
  border-color: transparent;
}
.ldio-70wkpmdk6gq > div:nth-child(3) div {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}
.ldio-70wkpmdk6gq > div:nth-child(3) div:after,
.ldio-70wkpmdk6gq > div:nth-child(3) div:before {
  content: "";
  display: block;
  position: absolute;
  width: 16px;
  height: 16px;
  top: -16px;
  left: 48px;
  background: #2c3e50;
  border-radius: 50%;
  box-shadow: 0 128px 0 0 #2c3e50;
}
.ldio-70wkpmdk6gq > div:nth-child(3) div:after {
  left: -16px;
  top: 48px;
  box-shadow: 128px 0 0 0 #2c3e50;
}

.ldio-70wkpmdk6gq > div:nth-child(4) {
  border-color: transparent;
}
.ldio-70wkpmdk6gq > div:nth-child(4) div {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}
.ldio-70wkpmdk6gq > div:nth-child(4) div:after,
.ldio-70wkpmdk6gq > div:nth-child(4) div:before {
  content: "";
  display: block;
  position: absolute;
  width: 16px;
  height: 16px;
  top: -16px;
  left: 30px;
  background: $red;
  border-radius: 50%;
  box-shadow: 0 92px 0 0 $red;
}
.ldio-70wkpmdk6gq > div:nth-child(4) div:after {
  left: -16px;
  top: 30px;
  box-shadow: 92px 0 0 0 $red;
}
.loadingio-spinner-double-ring-uk5hzehfim {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: transparent;
  transform: scale(0.5);
}
.ldio-70wkpmdk6gq {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
  /* see note above */
}
.ldio-70wkpmdk6gq div {
  box-sizing: content-box;
}
/* generated by https://loading.io/ */
</style>
