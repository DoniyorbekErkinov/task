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
  <div class="shadow-lg p-4 my-4" >
    <h1 class="text-4xl">{{ sortedQuizzes[Util.localeKey('questionName')] }} </h1><span class="text-4xl my-5 " v-if="sortedQuizzes.isAnswered">Answered</span>
              <div class="mx-3 md:flex mb-2">
                <editor
                    :disabled="sortedQuizzes.isAnswered"
                    api-key="no-api-key"
                    v-model="form.essay"
                    :init="{
                     height: 300,
                     width: 800,
                     menubar: false,
                     plugins: [
                       'advlist autolink lists link image charmap print preview anchor',
                       'searchreplace visualblocks code fullscreen',
                       'insertdatetime media table paste code help wordcount'
                     ],
                     toolbar:
                       'undo redo | formatselect | bold italic backcolor | \
                       alignleft aligncenter alignright alignjustify | \
                       bullist numlist outdent indent | removeformat | help'
                   }"
                />
              </div>
    <button :disabled="sortedQuizzes.isAnswered" @click="submitEssay" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded m-2">
      Submit
    </button>
  </div>
  <div class="flex justify-end">
    <button  @click="finish" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded m-2">
      Submit
    </button>
  </div>
</div>
</template>
<script setup>
import {TokenService} from "@/store/storage.service";
import {useUserStore} from "@/store";
import Util from "@/global/utils";
import Editor from '@tinymce/tinymce-vue'
import { useI18n } from "vue-i18n";
import {onMounted, ref} from 'vue'
import router from "@/router";
const {t} = useI18n()

const user =  ref({})
const quizzes = ref([])
const sortedQuizzes = ref({})
const form = ref({
answerId: '',
  answerIds: [],
  essay: ""
})
const currentItem = ref({})
function getQuizzes() {
  let arr = useUserStore().getQuiz()
  quizzes.value = arr.filter(el => el.type === 'single' || el.type === 'multiple')
  sortedQuizzes.value = arr.filter(el => el.type === 'writing')[0]
}
function getItem(quiz) {
  form.value = {
    essay: {},
    answerId: '',
    answerIds: []
  }
currentItem.value = quiz
}
function submitAnswer() {
  console.log(form.value)
  let arr = JSON.parse(TokenService.getQuiz())
  arr.forEach(el => {
    if(el.id === currentItem.value.id) {
      el.isAnswered = true
      el.answers.forEach(e => {
        if(e.id === form.value.answerIds[0] || e.id === form.value.answerIds[1] || e.id === form.value.answerIds[2]) {
          e.answered = true
        }
      })
    }
  })
  TokenService.setQuiz(arr)
  currentItem.value = {}
  getQuizzes()
}
function submitEssay() {
  let arr = JSON.parse(TokenService.getQuiz())
  arr.forEach(el => {
    if(el.id === sortedQuizzes.value.id) {
      el.isAnswered = true
      el.answers = form.value.essay
    }
  })
  console.log(arr)
  TokenService.setQuiz(arr)
  currentItem.value = {}
  getQuizzes()
}
function finish() {
  user.value.solvedQuiz = true
  TokenService.setUser(user.value)
  router.push('/result-quiz')
}
onMounted(() => {
getQuizzes()
  user.value = JSON.parse(TokenService.getUser())
})


</script>

<style scoped>

</style>