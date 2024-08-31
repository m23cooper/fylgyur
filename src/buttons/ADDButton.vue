<!--  Generated from IconButton plop template -->

<template>
  <div class="btn btn-primary hover:scale-110 transition" @click.stop="emit(EMIT.CLICK)">
    <FontIconComponent
        :icon-type="FontIconType.ADD"
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
  interface IADDButtonComponentProps
  {
    fontIconSize?: string;
  }

  const props: Readonly<IADDButtonComponentProps> = withDefaults(defineProps<IADDButtonComponentProps>(), {
    fontIconSize: FontIconSize.LG
  });

  const _name: string = "ADDButton";

  const emit = defineEmits([ EMIT.CLICK, ]);
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>

</style>
