<!--  Generated from VueLayer plop template -->

<template>
  <div class="loading-section">
    <div v-if="props.loadingState !== ''">
      <div v-if="props.loadingState == null">no data</div>
      <slot v-else></slot>
    </div>
    <div class="blink loading-text" v-else>loading...</div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { computed, onMounted, Ref, ref } from 'vue';

  import { Signals } from '@/signals';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  interface ILoadingSectionComponentProps {
    loadingState: any | undefined;
  }

  const props: Readonly<ILoadingSectionComponentProps> = withDefaults(
    defineProps<ILoadingSectionComponentProps>(),
    {
      loadingState: '',
    }
  );

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  // const emit = defineEmits(['change', ]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PRIVATE
  const _name: string = 'LoadingSectionComponent';

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
  onMounted(() => {
    //useStore().dispatch("load", getApplicationUuid);
  });
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
