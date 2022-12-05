<template>
<div class="p-8">
  <div class="shadow-lg rounded p-4">
    <div class="grid grid-cols-4 gap-2" >
      <div v-for="(item, i) in quizzes" :key="i" class="border-solid border-2 border-gray-300 p-4 rounded-lg shadow-lg">
        <h2 class="text-black-700 text-2xl">{{item[Util.localeKey('questionName')]}}</h2>
        <div class="flex column my-2" v-for="(q, index) in item.answers" :key="index" :class="q.answered && q.isCorrect ? 'text-green-500' : q.answered && !q.isCorrect ? 'text-red-500' : 'text-black-400'">
          {{q[Util.localeKey('answers')]}}
        </div>
      </div>
    </div>
  </div>
  <div class="my-4 p-6">
    <p class="text-xl my-2">Essay Content</p>
    <p class="text-lg">
      {{Util.htmlToText(sortedQuizzes.answers)}}
    </p>
  </div>
</div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {TokenService} from "@/store/storage.service";
import {useUserStore} from "@/store";
import Util from "@/global/utils";
const user =  ref({})
const quizzes = ref([])
const sortedQuizzes = ref({})

function getQuizzes() {
  let arr = useUserStore().getQuiz()
  quizzes.value = arr.filter(el => el.type === 'single' || el.type === 'multiple')
  sortedQuizzes.value = arr.filter(el => el.type === 'writing')[0]
  console.log(sortedQuizzes.value)
}

onMounted(() => {
  getQuizzes()
  user.value = JSON.parse(TokenService.getUser())
})
</script>

<style scoped>

</style>