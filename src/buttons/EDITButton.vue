<!--  Generated from IconButton plop template -->

<template>
  <div class="btn hover:scale-110 transition" @click.stop="emit(EMIT.CLICK)">
    <FontIconComponent
        :icon-type="FontIconType.EDIT"
        :fontIconSize="props.fontIconSize"
        :clickable="false"
    ></FontIconComponent>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { EMIT } from "@/enum";
  import { FontIconType, FontIconSize, FontIconRotate, FontIconFlip, FontIconAnimate } from "@/icons/FontIconConstants";
  import FontIconComponent from '@/icons/FontIconComponent.vue';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  interface IEDITButtonComponentProps
  {
    fontIconSize?: string;
  }

  const props: Readonly<IEDITButtonComponentProps> = withDefaults(defineProps<IEDITButtonComponentProps>(), {
    fontIconSize: FontIconSize.LG
  });

  const _name: string = "EDITButton";

  const emit = defineEmits([ EMIT.CLICK, ]);
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>

</style>
