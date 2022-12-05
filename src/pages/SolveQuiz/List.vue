<template>
<div class="p-8">
  <h1 class="capitalize text-4xl my-4">{{user.user}}</h1>
      <div class="flex row my-3" >
        <button :disabled="quiz.isAnswered" @click="getItem(quiz)" v-for="(quiz, index) in quizzes" :key="index" :class="!quiz.isAnswered ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 hover:bg-gray-700'"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded m-2">
          <span class="text-xl">{{index + 1}}</span><span class="mx-2 text-red-700 text-xs">{{quiz.type}}</span>
        </button>
      </div>
      <div class="shadow-lg p-4" >
        <h1 class="my-4">{{currentItem[Util.localeKey('questionName')]}}</h1>
        <div   class="flex justify-between p-2" v-for="(item, i) in currentItem.answers" :key="i">
          <h2>
            {{item[Util.localeKey('answers')]}}
          </h2>
          <input v-if="currentItem.type === 'single'" v-model="form.answerId" :value="item.id" style="width: 30px; height: 30px;" type="radio"/>
          <input v-if="currentItem.type === 'multiple'" v-model="form.answerIds" :value="item.id" style="width: 30px; height: 30px;" type="checkbox"/>
        </div>
        <button @click="submitAnswer" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded m-2">
          Submit
        </button>
      </div>
</div>
</template>
<script setup>
import {TokenService} from "@/store/storage.service";
import {useUserStore} from "@/store";
import Util from "@/global/utils";
import { useI18n } from "vue-i18n";
import {onMounted, ref} from 'vue'
const {t} = useI18n()

const user =  ref({})
const quizzes = ref([])
const sortedQuizzes = ref([])
const form = ref({
answerId: '',
  answerIds: []
})
const currentItem = ref({})
function getQuizzes() {
  let arr = useUserStore().getQuiz()
  quizzes.value = arr.filter(el => el.type === 'single' || el.type === 'multiple')
  sortedQuizzes.value = arr.filter(el => el.type === 'writing')
}
function getItem(quiz) {
  form.value = {}
currentItem.value = quiz
}
function submitAnswer() {
  console.log(form.value)
}
onMounted(() => {
getQuizzes()
  user.value = JSON.parse(TokenService.getUser())
})


</script>

<style scoped>

</style>