<!--  Generated from VueLayer plop template -->

<template>
  <div
      class="btn btn-xs btn-square bg-slate-700/75 shadow-lg"
      role="button"
      @click="onBack"
  >
    <FontIconComponent
        :icon-type="FontIconType.LOGOUT"
        :size="FontIconSize.LG"
        :rotate="FontIconRotate.ONE_EIGHTY"
        :flip="FontIconFlip.NONE"
        :anim="FontIconAnimate.NONE"
        :clickable="false"
    ></FontIconComponent>

  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { router } from "@/router";

  import { computed, onMounted } from "vue";
  import FontIconComponent from '@/icons/FontIconComponent.vue';
  import { FontIconType, FontIconSize, FontIconRotate, FontIconFlip, FontIconAnimate } from "@/icons/FontIconConstants";

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  interface IBackButtonComponentProps
  {
    to?: string | null;
    parentNav?: boolean;
  }

  const props: Readonly<IBackButtonComponentProps> = withDefaults(defineProps<IBackButtonComponentProps>(), {
    to: null,
    parentNav: false,
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  const emit = defineEmits(['call-nav', ]);


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PRIVATE
  const _name: string = "BackButtonComponent";




  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  GETTERS
  //

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
  //  METHODS
  function onBack() {
    if (props.parentNav) {
      emit("call-nav");
    } else if (props.to) {
      router.push({ name: props.to });
    } else {
      router.go(-1);
    }
  }



  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  HOOKS
  onMounted( () => {
    //useStore().dispatch("startTrace", getApplicationUuid);
  })

</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>

</style>
