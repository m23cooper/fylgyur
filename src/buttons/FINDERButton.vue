<!--  Generated from IconButton plop template -->

<template>
  <div class="btn hover:scale-110 transition" @click.stop="emit(EMIT.CLICK)">
    <FontIconComponent
        :icon-type="FontIconType.FINDER"
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
  interface IFINDERButtonProps
  {
    fontIconSize?: string;
  }

  const props: Readonly<IFINDERButtonProps> = withDefaults(defineProps<IFINDERButtonProps>(), {
    fontIconSize: FontIconSize.LG
  });

  const _name: string = "FINDERButton";

  const emit = defineEmits([ EMIT.CLICK, ]);
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>

</style>
