<!--  Generated from VueComponent plop template -->

<template>
  <div id="FormButtonsComponent" class="flex flex-row gap-5">
    <div
      v-if="hasReset"
      class="btn bg-primary text-primary-content hover:bg-secondary"
      :class="{ 'btn-disabled': !isResetEnabled }"
      @click.prevent="emit(EMIT.RESET)"
    >
      {{ resetLabel }}
    </div>
    <div
      v-if="hasAsk"
      class="btn bg-primary text-primary-content hover:bg-secondary"
      :class="{ 'btn-disabled': !isAskEnabled }"
      @click.prevent="emit(EMIT.ASK)"
    >
      {{ askLabel }}
    </div>
    <div
      v-if="hasSubmit"
      class="btn bg-primary text-primary-content hover:bg-secondary"
      :class="{ 'btn-disabled': !isSubmitEnabled }"
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
  import { useFormKitContext } from '@formkit/vue';
  import { computed } from 'vue';
  import { useFormsStore } from '@/_stores';
  import { storeToRefs } from 'pinia';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  type ExtendedProps = TAsynchFormProps & { test?: string };
  const {
    hasAsk = true,
    hasReset = true,
    hasSubmit = false,
    askLabel = 'Ask The AI Expert!',
    resetLabel = 'Reset',
    submitLabel = 'Submit',
  } = defineProps<ExtendedProps>();

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  const emit = defineEmits([EMIT.ASK, EMIT.RESET, EMIT.SUBMIT]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PRIVATE
  const _name: string = 'FormButtonsComponent';

  // const { formContext } = storeToRefs(useFormsStore());
  const formContext = useFormKitContext();

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  GETTERS
  // const getApplicationUuid = computed(() => _getters.getApplicationUuid);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  COMPUTED
  // const getContact = computed(() => {
  //   return getApplication.value.contact[0]?.number;
  // });
  const isAskEnabled = computed(() => formContext.value?.state.valid);
  const isResetEnabled = computed(() => !formContext.value?.state.empty);
  const isSubmitEnabled = computed(() => formContext.value?.state.valid);

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
