<!--  Generated from IconButton plop template -->

<template>
  <div
    class="btn btn-warning drop-shadow-lg hover:scale-110 transition"
    @click.stop="emit(EMIT.CLICK)"
  >
    <FontIconComponent
      :icon-type="FontIconType.WARNING"
      :fontIconSize="props.fontIconSize"
      :clickable="false"
    ></FontIconComponent>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { EMIT } from '@/enum';
  import {
    FontIconType,
    FontIconSize,
    FontIconRotate,
    FontIconFlip,
    FontIconAnimate,
  } from '@/icons/FontIconConstants';
  import FontIconComponent from '@/icons/FontIconComponent.vue';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  interface IWARNINGButtonComponentProps {
    fontIconSize?: string;
  }

  const props: Readonly<IWARNINGButtonComponentProps> = withDefaults(
    defineProps<IWARNINGButtonComponentProps>(),
    {
      fontIconSize: FontIconSize.LG,
    }
  );

  const _name: string = 'WARNINGButton';

  const emit = defineEmits([EMIT.CLICK]);
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
