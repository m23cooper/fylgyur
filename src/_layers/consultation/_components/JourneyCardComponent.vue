<!--  Generated from VueComponent plop template -->

<template>
  <div
    id="JourneyCardComponent"
    class="card rounded-lg bg-base-100 w-full shadow-xl min-h-24 cursor-pointer hover:bg-base-300"
  >
    <div class="card-body p-2">
      <div class="card-title">{{ form.title }}</div>
      <p>Form stats live here</p>
    </div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { EMIT } from '@/enum';
  import { computed, onMounted, Ref, ref } from 'vue';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  interface IJourneyCardComponentProps {
    form: any;
  }

  const props: Readonly<IJourneyCardComponentProps> = withDefaults(
    defineProps<IJourneyCardComponentProps>(),
    {
      form: null,
    }
  );

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
