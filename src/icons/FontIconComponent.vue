<!--  Generated from Vue Component template-->


<template>
  <div class="mx-auto my-auto text-center">
    <!-- IF -->
    <a v-if="props.clickable" key="isClickable" href="#" @click="emit(EMIT.CLICK)" class="cursor-pointer">
      <i :class="[
          props.iconType,
          props.size,
          props.rotate,
          props.flip,
          props.anim,
          props.classes,
          ]"></i>
    </a>
    <!-- ELSE -->
    <i v-else :class="[
        props.iconType,
        props.size,
        props.rotate,
        props.flip,
        props.anim,
        props.classes,
      ]"></i>
    <!-- END IF -->
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
import { EMIT } from "@/enum";
import {FontIconAnimate, FontIconFlip, FontIconRotate, FontIconSize} from "@/icons/FontIconConstants";
import {computed, Ref, ref} from 'vue';
// import { onMounted,  } from 'vue';
// import IPerson from "./IPerson";


//////////////////////////////////////////////////////////////////////////////////////////////////
//  Props
export interface IFontIcon
{
  iconType: string;
  size?: string;
  rotate?: string;
  flip?: string;
  anim?: string;
  clickable?: boolean;
  classes?: string;
}

const props: Readonly<IFontIcon> = withDefaults(defineProps<IFontIcon>(), {
  iconType: "",
  size: FontIconSize.LG,  // this defaults to fixed width
  rotate: FontIconRotate.NONE,
  flip: FontIconFlip.NONE,
  anim: FontIconAnimate.NONE,
  clickable: false,
  classes: "",
});

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Emits
const emit = defineEmits([ EMIT.CLICK, ]);

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Private
const _name: string = "FontIconComponent";

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Public
defineExpose({
  name: _name,
});


//////////////////////////////////////////////////////////////////////////////////////////////////
//  Methods


//////////////////////////////////////////////////////////////////////////////////////////////////
//  Hooks
// onMounted(() => {
//   console.log(`FontIconComponent mounted!`);
// })
// onUpdated(() => {
//   console.log(`FontIconComponent update!`);
// })
// onUnmounted(() => {
//   console.log(`FontIconComponent unmounted!`);
// })




</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>

</style>
