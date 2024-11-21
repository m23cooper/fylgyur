<!--  Generated from VueComponent plop template -->

<template>
  <div
    id="JourneyCardComponent"
    class="card rounded-md bg-base-200 min-h-24 hover:bg-base-500"
  >
    <div class="card-body p-2">
      <div class="card-title">{{ form?.title }}</div>
      <p>Form stats live here</p>
    </div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { EMIT } from '@/enum';
  import { computed, onMounted, Ref, ref } from 'vue';
  import type { TAsynchForm } from '@/types';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  interface IJourneyCardComponentProps {
    form: TAsynchForm | null;
  }

  const { form = null }: Readonly<IJourneyCardComponentProps> =
    defineProps<IJourneyCardComponentProps>();

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  // const emit = defineEmits([ EMIT.SELECTED, ]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PRIVATE
  const _name: string = 'JourneyCardComponent';

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
  onMounted(() => {
    //useStore().dispatch("load", getApplicationUuid);
  });
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
