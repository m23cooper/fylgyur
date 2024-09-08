<!--  Generated from AsynchForm plop template -->

<template>
  <div id="PathfinderWhyForm" class="container h-fill">
    <FormKit
      type="form"
      :id="_name"
      :name="_name"
      v-model="formModel"
      :actions="false"
      #default="{ disabled, state, empty, dirty }"
      use-local-storage
    >
      <div class="container dev2">
        <FormKit type="multi-step" tab-style="progress">
          <!-- 1st step - 'Customer information' -->
          <FormKit
            type="step"
            name="customer_information"
            label="Welcome"
            next-label="Start Pathfinder"
            class="dev1"
          >
            <div class="flex flex-col gap-4">
              <h2 class="prose text-xl font-bold leading-tight">Welcome</h2>
              <FormKit
                type="text"
                label="Hello, what's your name?"
                placeholder="Name"
                validation="required"
              />
            </div>
          </FormKit>

          <!-- 2nd step - 'Getting Started' -->
          <FormKit
            type="step"
            name="getting_started"
            label="Getting Started"
            previous-label=""
            next-label="Your Passions"
          >
            <div class="flex flex-col gap-4">
              <h2 class="prose text-xl font-bold leading-tight">
                Getting Started
              </h2>
              <p class="text-lg">Okay, Let's jump right in!</p>
              <p class="text-lg">What gets you out of bed in the morning?</p>
              <p class="text-gray-700">
                These are the things that you really love and might do without
                pay
              </p>
              <FormKit
                type="textarea"
                id="getting_started_answer"
                placeholder="What gets you started?"
                validation="required"
              />
            </div>
          </FormKit>

          <!-- 3rd step - 'Your Passion' -->
          <FormKit
            type="step"
            name="your_passions"
            label="Your Passions"
            previous-label="Getting Started"
            next-label="Your Reasons"
          >
            <div class="flex flex-col gap-4">
              <h2 class="prose text-xl font-bold leading-tight">
                Your Passions
              </h2>
              <p class="text-lg">
                What are your preferences and interests that you naturally veer
                to?
              </p>
              <p class="text-lg">
                What are your personal and professional passions?
              </p>
              <p class="text-gray-700">
                Think about where your interests and preferences lie, both in
                terms of subject, but also lifestyle and passions.
              </p>
              <FormKit
                type="textarea"
                id="your_passions_answer"
                placeholder="What gets your blood pumping?!"
                validation="required"
              />
            </div>
          </FormKit>

          <!-- 4th step - 'Your Reasons' -->
          <FormKit
            type="step"
            name="your_reasons"
            label="Your Reasons"
            previous-label="Your Passions"
            next-label="Your Values"
          >
            <div class="flex flex-col gap-4">
              <h2 class="prose text-xl font-bold leading-tight">
                Your Reasons
              </h2>
              <p class="text-lg">
                Apart from making money, why are you doing this
              </p>
              <p class="text-gray-700">
                This can be anything from gaining more personal time, spending
                time with your family, travelling, reducing stress etc.
              </p>
              <FormKit
                type="textarea"
                id="your_reasons_answer"
                placeholder="Your Reasons?"
                validation="required"
              />
            </div>
          </FormKit>

          <!-- 5th step - 'Your Values' -->
          <FormKit
            type="step"
            name="your_values"
            label="Your Values"
            previous-label="Your Reasons"
            next-label="Your Story"
          >
            <div class="flex flex-col gap-4">
              <h2 class="prose text-xl font-bold leading-tight">Your Values</h2>
              <p class="text-lg">
                Articulate the values that you hold dear. What actions do these
                translate to?
              </p>
              <p class="text-gray-700">
                This is personal. How do you want to lead your life and what do
                you have to do to achieve this?
              </p>
              <FormKit
                type="textarea"
                id="your_values_answer"
                placeholder="Your Values?"
                validation="required"
              />
            </div>
          </FormKit>

          <!-- 6th step - 'Your Story' -->
          <FormKit
            type="step"
            name="your_story"
            label="Your Story"
            previous-label="Your Values"
            next-label=""
          >
            <div class="flex flex-col gap-4">
              <h2 class="prose text-xl font-bold leading-tight">
                What is your story?
              </h2>
              <p class="text-gray-700">
                What has motivated you so far and what has formed you and your
                thinking?
              </p>
              <FormKit
                type="textarea"
                id="your_story_answer"
                name="Your story answer"
                placeholder="Your Story"
                validation="required"
              />
            </div>
          </FormKit>
        </FormKit>
      </div>
    </FormKit>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { computed, onMounted, toRef, ModelRef } from 'vue';
  import { FormKit } from '@formkit/vue';
  import { TAsynchFormProps } from '@/types';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  PROPS
  const {
    hasAsk = true,
    hasReset = true,
    hasSubmit = false,
    askLabel = 'Ask The AI Expert!',
    resetLabel = 'Reset',
    submitLabel = 'Submit',
  } = defineProps<TAsynchFormProps>();

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  EMITS
  // const emit = defineEmits([EMIT.REGISTER, EMIT.RESET, EMIT.SUBMIT,]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = 'PathfinderWhyForm';

  const formModel: ModelRef<any> | undefined = defineModel();

  // ////////////////////////////////////////////////////////////////////////////////////////////
  //  COMPUTED
  const hasButtons = computed(() => hasAsk || hasReset || hasSubmit);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Public
  defineExpose({
    formModel: toRef(formModel),
    hello: _name,
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Provides - props for all children
  //  eg - provide("key", "value");

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  SIGNALS
  // Signals.PUSHER_NOTIFICATION.add(onPusherNotification, () => {})

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Methods
  // function onRegisterClick() {
  //   emit(EMIT.REGISTER);
  // }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  WATCH

  // watch works directly on a ref
  // watch(ref, async () => {
  //
  // })

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    console.log(`PathfinderWhyForm onMounted!`);
    // _store.init();
  });

  // onUpdated(() => {
  //   console.log(`PathfinderWhyForm onUpdated!`);
  // })

  // onUnmounted(() => {
  //   console.log(`PathfinderWhyForm unmounted!`);
  // })
</script>

<!------------------------------------------------------------------------------------------------->

<style scoped></style>
