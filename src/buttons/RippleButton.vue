<!--  Generated from VueLayer plop template -->

<template>
  <button
      class="c-button"
      :type="props.type"
      name="button"
      ref="btn"
      @click="animateRipple"
  >
    <slot></slot>
    <transition-group>
      <span v-for="(ripple, i) in getRipples"
          class="ripple"
          :ref="'ripple-' + i"
          :key="'ripple' + i"
          :style="{ top: ripple.y + 'px', left: ripple.x + 'px' }"

          @animationend="rippleEnd(i)"
      >
      </span>
    </transition-group>
  </button>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { EMIT } from "@/enum";
  import { computed, onMounted, Ref, ref } from "vue";

  import { Signals } from "@/signals";
  import { filter as _filter } from 'lodash-es';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  interface IRippleButtonProps
  {
      type: "button" | "reset" | "submit" | undefined;
  }

  const props: Readonly<IRippleButtonProps> = withDefaults(defineProps<IRippleButtonProps>(), {
      type: "button",
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  const emit = defineEmits([ EMIT.CLICK, ]);



  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PRIVATE
  const _name: string = "RippleButton";



  interface IRipple {
    x: number;
    y:number;
    show: boolean;
  }

  const ripples:Ref<IRipple[]> = ref([]);
  const btn = ref();

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  GETTERS


  // const getApplicationUuid = computed(() => _getters.getApplicationUuid);



  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  COMPUTED
  const getRipples = computed(() => {
    return _filter(ripples.value, 'show');
  });



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
  function animateRipple(e) {
    let el = btn.value;
    let pos = el.getBoundingClientRect();
    ripples.value.push({
      x: e.clientX - pos.left,
      y: e.clientY - pos.top,
      show: true
    });
  }

  function rippleEnd(i) {
    ripples.value[i].show = false;
    emit(EMIT.CLICK);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  HOOKS
  onMounted( () => {
    //useStore().dispatch("load", getApplicationUuid);
  })

</script>

<!------------------------------------------------------------------------------------------------->


