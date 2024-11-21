<!--  Generated from VueLayer plop template -->

<template>
  <div class="alert alert-error shadow-lg">
    <div class="flex-shrink-0 text-blue-900">
      <FontIconComponent
        :icon-type="FontIconType.WARNING"
        :size="FontIconSize.LG"
        :rotate="FontIconRotate.NONE"
        :flip="FontIconFlip.NONE"
        :anim="FontIconAnimate.NONE"
        :clickable="false"
      ></FontIconComponent>
    </div>
    <div class="w-full">{{ props.errorMsg }}</div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import {
    FontIconType,
    FontIconRotate,
    FontIconSize,
    FontIconFlip,
    FontIconAnimate,
  } from '@/icons/FontIconConstants';
  import FontIconComponent from '@/icons/FontIconComponent.vue';
  import { ref } from 'vue';
  import { onMounted } from 'vue';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'LoginErrorLayer';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Public
  defineExpose({
    name: _name,
  });

  interface ILoginErrorComponentProps {
    errorMsg: string | null;
  }

  const props: Readonly<ILoginErrorComponentProps> = withDefaults(
    defineProps<ILoginErrorComponentProps>(),
    {
      errorMsg: '',
    }
  );

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Emits
  // const emit = defineEmits(['change', 'delete']);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Methods

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
