<!--  Generated from VueLayer plop template -->

<template>
  <li class="text-white w-[4rem] h-[4rem] hover:bg-red-700 flex items-center "
      :class="{
        'disabled': isSelected,
       'cursor-pointer hover:!scale-110 transition': !isSelected,
       'pl-[3px] border-stone-400 dark:border-stone-900 border-r-[3px] !text-red-700 hover:!bg-transparent': isSelected,
      }"
      @click="emit(EMIT.CLICK, {routeName: props.menuOption.name, })">
    <FontIconComponent
        :icon-type="props.menuOption.fontIconType"
        :size="FontIconSize.LG"
        :rotate="FontIconRotate.NONE"
    ></FontIconComponent>
  </li>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
import { EMIT } from "@/enum";
import { IRoute, } from "@/types";
import { FontIconType, FontIconSize, FontIconRotate, FontIconFlip, FontIconAnimate } from "@/icons/FontIconConstants";
import FontIconComponent from '@/icons/FontIconComponent.vue';
import { useUIStore } from "@/_stores";
import { computed, onMounted } from "vue";

//////////////////////////////////////////////////////////////////////////////////////////////////
//  PROPS
interface IProps {
  menuOption: any;
}

const props: Readonly<IProps> = withDefaults(defineProps<IProps>(), {
  menuOption: <IRoute>{},
});

//////////////////////////////////////////////////////////////////////////////////////////////////
//  EMITS
const emit = defineEmits([ EMIT.CLICK,]);


//////////////////////////////////////////////////////////////////////////////////////////////////
//  PRIVATE
const _name: string = "MenuOptionComponent";


//////////////////////////////////////////////////////////////////////////////////////////////////
//  COMPUTED
const isSelected = computed(() => {
  const currentRoute = useUIStore().currentRoute;
  return props.menuOption.name === currentRoute.name;
})


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
//      // on event
//  }

//////////////////////////////////////////////////////////////////////////////////////////////////
//  HOOKS
onMounted(() => {
  //useStore().dispatch("load", getApplicationUuid);
  const test = 1
})

</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>

</style>
