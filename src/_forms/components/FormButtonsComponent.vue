<!--  Generated from VueComponent plop template -->

<template>
  <div id="FormButtonsComponent" class="flex flex-row gap-5">
    <div
      v-if="hasReset"
      class="btn bg-primary text-primary-content hover:bg-secondary"
      @click.prevent="emit(EMIT.RESET)"
    >
      {{ resetLabel }}
    </div>
    <div
      v-if="hasAsk"
      class="btn bg-primary text-primary-content hover:bg-secondary"
      @click.prevent="emit(EMIT.ASK)"
    >
      {{ askLabel }}
    </div>
    <div
      v-if="hasSubmit"
      class="btn bg-primary text-primary-content hover:bg-secondary"
      @click.prevent="emit(EMIT.SUBMIT)"
    >
      {{ submitLabel }}
    </div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { EMIT } from '@/enum';
  import type { TAsynchFormProps } from '@/types';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  const {
    hasAsk = true,
    hasReset = true,
    hasSubmit = true,
    askLabel = 'Ask The AI Expert!',
    resetLabel = 'Reset',
    submitLabel = 'Submit',
  } = defineProps<TAsynchFormProps>();

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  const emit = defineEmits([EMIT.ASK, EMIT.RESET, EMIT.SUBMIT]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PRIVATE
  const _name: string = 'FormButtonsComponent';

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
  //      // handle event
  //  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  HOOKS
  // onMounted(() => {
  //   //useStore().dispatch("load", getApplicationUuid);
  // });
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
