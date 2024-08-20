<!--  Generated from IconButton plop template -->

<template>
  <div class="btn hover:scale-110 transition" :class="{'btn-disabled': !isActive, 'loading': isLoading}" @click.stop="emit(EMIT.CLICK)">
    <FontIconComponent
        v-if="!isLoading"
        :icon-type="FontIconType.HEART_ADD"
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
  import { ref } from "vue";

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  interface IHEARTADDButtonProps
  {
    fontIconSize?: string;
    active?: boolean;
    loading?: boolean;
  }

  const props: Readonly<IHEARTADDButtonProps> = withDefaults(defineProps<IHEARTADDButtonProps>(), {
    fontIconSize: FontIconSize.LG,
    active: true,
    loading: false,
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  const emit = defineEmits([ EMIT.CLICK, ]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = "HEARTADDButton";

  const isActive = props.active;
  const isLoading = props.loading;

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Public
  defineExpose({
    isActive,
    isLoading,
  });

</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>

</style>
