<!--  Generated from VueView plop template -->

<template>
  <div
    id="FormView"
    v-if="currentForm !== null"
    class="container flex flex-col p-6"
  >
    <component
      class="container rounded-xl bg-slate-200 p-6 pb-0"
      :is="formComponent"
      ref="asyncCompRef"
      v-bind="currentForm.props"
    ></component>
    <pre>{{ formModel }}</pre>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import {
    ref,
    onMounted,
    shallowRef,
    watch,
    nextTick,
    toRef,
    ShallowRef,
    computed,
  } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useConsultationStore, useUIStore } from '@/_stores';
  // import * as _components from './_components';
  import { Signals } from '@/signals';
  import * as utils from '@/utils/utils';
  import _titleCase from 'voca/title_case';
  import ModalComponent from '@/_components/modal/ModalComponent.vue';
  import { useFormKitContextById, useInput } from '@formkit/vue';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  // interface IFormViewProps
  // {
  //   blah: string;
  // }
  //
  // const props: Readonly<IFormViewProps> = withDefaults(defineProps<IFormViewProps>(), {
  //   blah: "",
  // });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  // const emit = defineEmits([ EMIT.SELECTED, ]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'FormView';

  const formComponent: ShallowRef<any | null> = shallowRef(null);
  const asyncCompRef = ref(null);

  const _store = useConsultationStore();

  const { currentForm } = storeToRefs(_store);

  // ////////////////////////////////////////////////////////////////////////////////////////////
  //  COMPUTED
  const formModel = computed(() => {
    //  @ts-expect-error:  can't be arsed to hunt the type down
    return asyncCompRef?.value?.formModel;
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Public
  defineExpose({
    name: _name,
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Provides - props for all children
  //  eg - provide("key", "value");

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  SIGNALS
  // Signals.PUSHER_NOTIFICATION.add(onPusherNotification, () => {})

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Methods

  const loadFormComponent = async () => {
    formComponent.value = await loadFormVue();
    console.log(`loadFormComponent ${currentForm.value?.id}`);
    //  wait for the component to be populated
    await nextTick(() => {
      //  @ts-expect-error:  can't be arsed to hunt the type down
      const { hello } = asyncCompRef.value;
      if (hello !== currentForm.value?.id) {
        throw new Error('Disjoint in form data');
      }

      _store.registerFormModel({ fM: formModel });

      let ctx;
      ctx = useFormKitContextById(currentForm.value.id, () => {
        _store.registerFormContext({ ctx });
      });
    });
  };

  const loadFormVue = async () => {
    try {
      console.log(`loadFormVue ${currentForm.value.name}`);
      useUIStore().showLoading(`Loading ${currentForm.value.title}`);
      const component = await import(
        `../../_forms/${currentForm.value.name}.vue`
      );
      useUIStore().hideLoading();
      return component.default;
    } catch (error) {
      useUIStore().hideLoading();
      console.error('Failed to load component:', error);
      return null;
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  WATCH
  watch(currentForm, loadFormComponent);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    console.log(`FormView onMounted!`);
    // loadFormComponent();
  });

  // onUpdated(() => {
  //   console.log(`FormView onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`FormView unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
