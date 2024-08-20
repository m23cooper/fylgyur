<!--  Generated from VueLayer plop template -->

<template>
  <button :disabled.boolean="props.processing">
    <span class="blink" v-if="props.processing">
      {{ props.processingText }}
    </span>
    <span v-else>
      {{ props.btnText }}
    </span>
  </button>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { computed, onMounted, Ref, ref } from "vue";

  import { Signals } from "@/signals";

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  interface ILoadingButtonProps
  {
    processing: boolean;
    btnText: string;
    processingText: string;
  }

  const props: Readonly<ILoadingButtonProps> = withDefaults(defineProps<ILoadingButtonProps>(), {
    processing: false,
    btnText: "Update",
    processingText: "Processing...",
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  // const emit = defineEmits(['change', ]);



  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PRIVATE
  const _name: string = "LoadingButton";




  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  GETTERS


  // const getApplicationUuid = computed(() => _getters.getApplicationUuid);



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

</style>
