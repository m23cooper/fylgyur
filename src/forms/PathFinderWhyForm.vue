<template>
  <div class="">
    <form :endpoint="false" @submit="handleSubmit">

      <!-- Defining Form Steps -->
      <FormSteps>

        <!-- 1st step - 'Customer information' -->
        <FormStep
          name="customer_information"
          label="Welcome"
          :elements="['contact_information']"
          :labels="{
            next: 'Start Pathfinder',
          }"
        />

        <!-- 2nd step - 'Getting Started' -->
        <FormStep
          name="getting_started"
          label="Getting Started"
          :elements="['getting_started', 'feedback']"
          :labels="{
            next: 'Your Passions',
          }"
        />

        <!-- 3rd step - 'Your Passion' -->
        <FormStep
          name="your_passion"
          label="Your Passion"
          :elements="['your_passion', 'feedback']"
          :labels="{
            next: 'Your Reasons',
            previous: 'Back'
          }"
        />

        <!-- 4th step - 'Your Reasons' -->
        <FormStep
          name="your_reasons"
          label="Your Reasons"
          :elements="['your_reasons', 'feedback']"
          :labels="{
            finish: 'Your Values',
            previous: 'Back'
          }"
        />
        
        <!-- 5th step - 'Your Values' -->
        <FormStep
          name="your_values"
          label="Your Values"
          :elements="['your_values', 'feedback']"
          :labels="{
            finish: 'Your Values',
            previous: 'Back'
          }"
        />
        
        <!-- 6th step - 'Your Story' -->
        <FormStep
          name="your_story"
          label="Your Story"
          :elements="['your_story', 'feedback']"
          :labels="{
            finish: 'Finish',
            previous: 'Back'
          }"
        />
      </FormSteps>

      <!-- Defining form elements -->
      <FormElements>

        <!-- 'Contact information' (email) -->
        <GroupElement name="contact_information">
          <template #label>
            <div class="text-lg leading-tight mb-4 mt-4">Hello, what's your name?</div>
          </template>
          <template #before>
            <div class="text-gray-700 mb-4">
              I will send your results to your email when we are finished.
            </div>
          </template>

          <TextElement
            name="firstname"
            default="name"
            placeholder="Name"
            :columns="12"
          />
        </GroupElement>

        <!-- 'Getting Started' -->
        <GroupElement name="getting_started">
          <template #label>
            <div class="text-lg leading-tight mb-4 mt-4">
              <p>Okay, Let's jump right in!</p>
              <p>What gets you out of bed in the morning?</p>
            </div>
          </template>
          <template #before>
            <div class="text-gray-700 mb-4">
              These are the things that you really love and might do without pay
            </div>
          </template>

          <TextareaElement 
            name="getting_started_answer"
            default="..."
            placeholder="What gets you started?"
            :columns="12"
            :rows="5" 
          />
        </GroupElement>

        <!-- 'Your Passion' -->
        <GroupElement name="your_passion">
          <template #label>
            <div class="text-lg leading-tight mb-4 mt-4">
              <p>What are your preferences and interests that you naturally veer to?</p>
              <p>What are your personal and professional passions?</p>
            </div>
          </template>
          <template #before>
            <div class="text-gray-700 mb-4">
              Think about where your interests and preferences lie, both in terms of subject, but also lifestyle and passions.
            </div>
          </template>

          <TextareaElement 
            name="your_passion_answer"
            default="..."
            placeholder="Your Passion?"
            :columns="12"
            :rows="5" 
          />
        </GroupElement>

        <!-- 'Your Reasons' -->
        <GroupElement name="your_reasons">
          <template #label>
            <div class="text-lg leading-tight mb-4 mt-4">
              <p>Apart from making money, why are you doing this?</p>
            </div>
          </template>
          <template #before>
            <div class="text-gray-700 mb-4">
              This can be anything from gaining more personal time, spending time with your family, travelling, reducing stress etc.
            </div>
          </template>

          <TextareaElement 
            name="your_reasons_answer"
            default="..."
            placeholder="Your Reasons?"
            :columns="12"
            :rows="5"
          />
        </GroupElement>

        <!-- 'Your Values' -->
        <GroupElement name="your_values">
          <template #label>
            <div class="text-lg leading-tight mb-4 mt-4">
              <p>Articulate the values that you hold dear. What actions do these translate to?</p>
            </div>
          </template>
          <template #before>
            <div class="text-gray-700 mb-4">
              This is personal. How do you want to lead your life and what do you have to do to achieve this?
            </div>
          </template>

          <TextareaElement 
            name="your_values_answer"
            default="..."
            placeholder="Your Values?"
            :columns="12"
            :rows="5"
          />
        </GroupElement>

        <!-- 'Your Story' -->
        <GroupElement name="your_story">
          <template #label>
            <div class="text-lg leading-tight mb-4 mt-4">
              <p>What is your story?</p>
            </div>
          </template>
          <template #before>
            <div class="text-gray-700 mb-4">
              What is motivating you to this point and what has formed you and your thinking?
            </div>
          </template>

          <TextareaElement 
            name="your_story_answer"
            default="..."
            placeholder="Your Story"
            :columns="12"
            :rows="5"
          />
        </GroupElement>

        <!-- 'Feedback' -->
        <GroupElement name="feedback">
          <ButtonElement 
            name="feedback"
            button-label="Feedback ..." 
            align="right" 
            button-class="bg-blue-700"
            @click="onClickFeedback"
          />
        </GroupElement>

      </FormElements>

      <FormStepsControls />
    </form>
  </div>
</template>

<script>
import { Vueform, useVueform } from '@vueform/vueform'

export default {
  mixins: [ Vueform ],
  setup: useVueform,
  data: () => ({
    vueform: {
      size: 'lg',
      validateOn: 'change|step',
      overrideClasses: {
        RadioElement: {
          wrapper: 'flex border border-gray-300 py-4 px-4 items-center cursor-pointer',
          text: 'w-full items-center',
        },
        CheckboxElement: {
          wrapper: 'flex border border-gray-300 py-4 px-4 items-center cursor-pointer',
          text: 'w-full items-center',
        },
      },
      addClasses: {
        RadioElement: {
          input: 'mb-1',
        },
        CheckboxElement: {
          input: 'mb-1',
        },
      }
    }
  }),
  computed: {
    
  },
  mounted() {
    
  }, 
  methods: {
    handleSubmit() {
      console.log('Form submitted')
    },
    onClickFeedback() {
      console.log('Feedback button clicked')
    }
  }
}
</script>

<style>
  .w-30 {
    width: 7.5rem;
  }
</style>