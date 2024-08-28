<script>
import ThePathFinderWhy from './questionaires/worksource/ThePathFinderWhy.vue'

export default {
  props: {
    email: String
  },
  components: {
    ThePathFinderWhy
  },
  data() {
    return {
      content: {
        0: {text: "Hi, Welcome to the Mentoring Hub. Please start with the questions on the left and I'll help guide you as you go."},
      },
      interval: 0
    }
  },
  mounted() {
    
    this.loadData();

    this.interval = setInterval(function () {
      this.loadData();
    }.bind(this), 500000);
  },
  beforeUnmount(){
    console.log("unmount")
    clearInterval(this.interval);
  },
  methods: {
    parseData(entries) {
      console.log("Parse Data")
      entries.forEach(function(value, index) {
        if(this.email === value[1])
          this.content[index] = { text: value[7] }
      }, this)
    },
    loadData(){
      console.log("Load Data from Google Sheets API")
      fetch('https://sheets.googleapis.com/v4/spreadsheets/1bGLpqF_3oiAH7H39vjrfhi0DbPc7rkh_QC_sl9FNvQQ/values/Sheet1?alt=json&key=AIzaSyBBG7Qm_J2XjMJg5W09cZL3gj1yQSoE4Yg')
        .then(res => res.json())
        .then(data => this.parseData(data.values))
    }
  }
}
</script>

<template>
  <div class="bg-white pt-24 pb-2 sm:pt-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <p class="text-base font-semibold leading-7 text-indigo-600">Let's Begin</p>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</h1>
        <div class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
          <ThePathFinderWhy />
          <div class="overflow-y-auto" style="height:690px">
            <p v-for="data in content" class="mb-8">{{ data.text }}</p>          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
