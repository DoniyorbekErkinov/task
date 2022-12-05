<template>
  <div class="p-8">
    <div class="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
      <h4 class="text-xl font-bold text-gray-800 tracking-widest uppercase text-center">Create or Update Quiz</h4>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="questionUz">
              Question Uz
            </label>
            <input v-model="form.questionNameUz" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="questionUz" type="text" placeholder="Question Uz">
          </div>
          <div class="md:w-1/3 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="questionRu">
              Question Ru
            </label>
            <input v-model="form.questionNameRu" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="questionRu" type="text" placeholder="Question Ru">
          </div>
          <div class="md:w-1/3 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="questionEn">
              Question Ru
            </label>
            <input v-model="form.questionNameEn" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="questionEn" type="text" placeholder="Question EN">
          </div>
        </div>
        <ul class="flex justify-start items-center my-5 ">
          <template v-for="(tab, index) in tabs" :key="index">
            <li class="cursor-pointer py-2 px-4 text-gray-500 border-b-8"
                :class="activeTab === index ? 'text-slate-700 border-slate-500' : ''" @click="changeTab(index)"
                v-text="tab"></li>
          </template>
        </ul>
        <!--  Answers  -->
        <div v-if="activeTab === 0">
          <div class="-mx-3 md:flex mb-2">
            <div class="md:w-1/4 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="answerUz">
                Answer Uz
              </label>
              <input v-model="form.answersUz" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="answerUz" type="text">
            </div>
            <div class="md:w-1/4 px-3">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="answerRu">
                Answer RU
              </label>
              <input v-model="form.answersRu" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="answerRu" type="text">
            </div>
            <div class="md:w-1/4 px-3">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="answerEn">
                Answer En
              </label>
              <input v-model="form.answersEn" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="answerEn" type="text">
            </div>
            <div class="md:w-1/4 px-3" style="display: flex; align-items: center; flex-direction: row; justify-content: center">
              <label class="block uppercase tracking-wide text-grey-darker text-md mr-3 font-bold mt-5" >
                Is True
              </label>
              <input v-model="form.isCorrect" type="checkbox" style="width: 40px; height: 30px" class="mt-5">
            </div>
          </div>
          <div class="flex justify-end my-5">
            <button @click="createAnswer" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Add Answer</button>
          </div>
          <table class="table-auto  w-full">
                  <thead class="text-xs font-semibold uppercase text-gray-500 bg-gray-100 ">
                  <tr>
                    <th class="p-2">
                      <div class="font-semibold text-center">Answer Uz</div>
                    </th>
                    <th class="p-2">
                      <div class="font-semibold text-center">Answers Ru</div>
                    </th>
                    <th class="p-2">
                      <div class="font-semibold text-center">Answers En</div>
                    </th>
                    <th class="p-2">
                      <div class="font-semibold text-center">Is Correct</div>
                    </th>
                  </tr>
                  </thead>
                  <tbody class="text-sm divide-y divide-gray-100">
                  <tr v-for="(item, i) in form.answers" :key="i">
                    <td class="p-2">
                      <div class="font-semibold text-center">{{item.answersUz}}</div>
                    </td>
                    <td class="p-2">
                      <div class="font-semibold text-center">{{item.answersRu}}</div>
                    </td>
                    <td class="p-2">
                      <div class="font-semibold text-center">{{item.answersEn}}</div>
                    </td>
                    <td class="p-2">
                      <div class="font-semibold text-center">{{item.isCorrect}}</div>
                    </td>
                  </tr>
                  </tbody>
                </table>
        </div>
        <div v-if="activeTab === 1">
          <div class="-mx-3 md:flex mb-2">
            <div class="md:w-1/4 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="answerUz">
                Answer Uz
              </label>
              <input v-model="form.answersUz" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="answerUz" type="text">
            </div>
            <div class="md:w-1/4 px-3">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="answerRu">
                Answer RU
              </label>
              <input v-model="form.answersRu" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="answerRu" type="text">
            </div>
            <div class="md:w-1/4 px-3">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="answerEn">
                Answer En
              </label>
              <input v-model="form.answersEn" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="answerEn" type="text">
            </div>
            <div class="md:w-1/4 px-3" style="display: flex; align-items: center; flex-direction: row; justify-content: center">
              <label class="block uppercase tracking-wide text-grey-darker text-md mr-3 font-bold mt-5" >
                Is True
              </label>
              <input v-model="form.isCorrect" type="checkbox" style="width: 40px; height: 30px" class="mt-5">
            </div>
          </div>
          <div class="flex justify-end my-5">
            <button @click="createAnswer" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Add Answer</button>
          </div>
          <table class="table-auto  w-full">
            <thead class="text-xs font-semibold uppercase text-gray-500 bg-gray-100 ">
            <tr>
              <th class="p-2">
                <div class="font-semibold text-center">Answer Uz</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-center">Answers Ru</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-center">Answers En</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-center">Is Correct</div>
              </th>
            </tr>
            </thead>
            <tbody class="text-sm divide-y divide-gray-100">
            <tr v-for="(item, i) in form.answers" :key="i">
              <td class="p-2">
                <div class="font-semibold text-center">{{item.answersUz}}</div>
              </td>
              <td class="p-2">
                <div class="font-semibold text-center">{{item.answersRu}}</div>
              </td>
              <td class="p-2">
                <div class="font-semibold text-center">{{item.answersEn}}</div>
              </td>
              <td class="p-2">
                <div class="font-semibold text-center">{{item.isCorrect}}</div>
              </td>

            </tr>
            </tbody>
          </table>
        </div>
        <div v-if="activeTab === 2">
          <div class="md:w-1/4 px-3">
            <p class="text-4xl">
              Writing Task
            </p>
          </div>
<!--          <div class="-mx-3 md:flex mb-2">-->
<!--            <editor-->
<!--                api-key="no-api-key"-->
<!--                :init="{-->
<!--         height: 500,-->
<!--         menubar: false,-->
<!--         plugins: [-->
<!--           'advlist autolink lists link image charmap print preview anchor',-->
<!--           'searchreplace visualblocks code fullscreen',-->
<!--           'insertdatetime media table paste code help wordcount'-->
<!--         ],-->
<!--         toolbar:-->
<!--           'undo redo | formatselect | bold italic backcolor | \-->
<!--           alignleft aligncenter alignright alignjustify | \-->
<!--           bullist numlist outdent indent | removeformat | help'-->
<!--       }"-->
<!--            />-->
<!--          </div>-->
        </div>
      </div>
      <div class="flex justify-end">
        <button @click="createQuiz" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Add Quiz</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// import Editor from '@tinymce/tinymce-vue'
import {useUserStore} from "@/store";
import {onMounted, ref} from "vue";
import router from "@/router";
import {useRoute} from 'vue-router'
import {TokenService} from "@/store/storage.service";
const currentId = ref(0)
const activeTab = ref(0)
const tabs = ref([
  "Question Type Single",
  "Question Type Multiple",
  "Question Type Writing",
])
const form = ref({
  answers: [],
  questionNameEn: "",
  questionNameRu: "",
  questionNameUz: "",
  answersUz: "",
  answersRu: "",
  answersEn: "",
  isCorrect: false,
  type: 'single'
})
function changeTab(index) {
  activeTab.value = index
  form.value.answersUz = "";
  form.value.answersRu = "";
  form.value.answersEn = "";
}
function createQuiz() {
  if (activeTab.value === 0) {
    form.value.type = 'single' ;
  } else if(activeTab.value === 1) {
    form.value.type = 'multiple'
  } else {
    form.value.type = 'writing'
  }
  if(currentId.value === 0) {
    useUserStore().addQuiz(form.value)
  } else {
    useUserStore().updateQuiz(form.value)
  }
  router.push('/quizzes')
}
function createAnswer() {
  let variation = {};
  if(activeTab.value !== 2) {
    if (
        form.value.answersUz === "" ||
        form.value.answersRu === "" ||
        form.value.answersEn === ""
    ) {
      console.log("error.invalid");
    } else {
      let validation = 0;
      let answer = form.value.answers;
      variation = {
        answersUz:form.value.answersUz,
        answersRu:form.value.answersRu,
        answersEn:form.value.answersEn,
        isCorrect: form.value.isCorrect,
      };
      if (answer.length > 0) {
        answer.forEach((item) => {
          if (variation.isCorrect === true && item?.isCorrect === true) {
            validation += 1;
          }
        });
      }
      if(activeTab.value === 0) {
        if (validation > 1 || validation !== 0) {
          form.value.isCorrect = false;
          console.log("error.hasAnswer");
        } else {
          form.value.answers.push(variation);
          form.value.answersUz = "";
          form.value.answersRu = "";
          form.value.answersEn = "";
          form.value.isCorrect = false;
        }
      } else if (activeTab.value === 1) {
        form.value.answers.push(variation);
        form.value.answersUz = "";
        form.value.answersRu = "";
        form.value.answersEn = "";
        form.value.isCorrect = false;
      }
    }
  }
}
function getById(id) {
  console.log(id)
  let arr = JSON.parse(TokenService.getQuiz())
  arr.forEach(el => {
    if(parseInt(el.id) === parseInt(id)) {
      form.value = el
      if (el.type === 'single') {
        activeTab.value = 0
      } else if (el.type === 'multiple') {
        activeTab.value = 1
      } else if (el.type === 'writing') {
        activeTab.value = 2
      }
    }
  })
}
onMounted(() => {
  currentId.value = useRoute().params.id
  getById(currentId.value)
})
</script>

<style scoped>

</style>