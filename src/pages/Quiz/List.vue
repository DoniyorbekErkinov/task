<template>
  <div class="flex flex-col justify-center h-full">
    <!-- Table -->
    <div class="w-full max-w-6xl mt-5 mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
      <header class="flex justify-between px-5 py-4 border-b border-gray-100">
        <div class="font-semibold text-gray-800">Quiz</div>
        <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
          <router-link to="/add-update-quiz">
            Add
          </router-link>
        </button>
      </header>

      <div class="p-3">
        <div class="flex justify-center items-center">
          <div class="w-full">
            <ul class="flex justify-center items-center my-4 ">
              <template v-for="(tab, index) in tabs" :key="index">
                <li class="cursor-pointer py-2 px-4 text-gray-500 border-b-8"
                    :class="activeTab === index ? 'text-green-500 border-green-500' : ''" @click="activeTab = index"
                    v-text="tab"></li>
              </template>
            </ul>
            <div class=" bg-white p-16 text-center mx-auto border">
              <div v-if="activeTab===0">
                <table class="table-auto  w-full">
                  <thead class="text-xs font-semibold uppercase text-gray-500 bg-gray-100 ">
                  <tr>
                    <th class="p-2">
                      <div class="font-semibold text-center">Question</div>
                    </th>
                    <th class="p-2">
                      <div class="font-semibold text-center">Answers</div>
                    </th>
                    <th class="p-2">
                      <div class="font-semibold text-center">Answers</div>
                    </th>
                    <th class="p-2">
                      <div class="font-semibold text-center">Answers</div>
                    </th>
                    <th class="p-2">
                      <div class="font-semibold text-center">Type</div>
                    </th>
                    <th class="p-2">
                      <div class="font-semibold text-center">Actions</div>
                    </th>
                  </tr>
                  </thead>
                  <tbody class="text-sm divide-y divide-gray-100">
                  <tr v-for="(item, i) in list" :key="i">
                    <td class="p-2" v-if="item.type === 'multiple' || item.type === 'single'">
                      <div class="font-medium text-gray-800">
                        {{item[Util.localeKey('questionName')]}}
                      </div>
                    </td>
                    <td class="p-2" v-if="item.type === 'multiple' || item.type === 'single'">
                      <div v-if="item.answers.length > 0" class="font-medium text-gray-800">
                        {{item.answers[0][Util.localeKey('answers')]}}
                      </div>
                    </td>
                    <td class="p-2" v-if="item.type === 'multiple' || item.type === 'single'">
                      <div v-if="item.answers.length > 0" class="font-medium text-gray-800">
                        {{item.answers[1][Util.localeKey('answers')]}}
                      </div>
                    </td>
                    <td class="p-2" v-if="item.type === 'multiple' || item.type === 'single'">
                      <div v-if="item.answers.length > 0" class="font-medium text-gray-800">
                        {{item.answers[2][Util.localeKey('answers')]}}
                      </div>
                    </td>
                    <td class="p-2" v-if="item.type === 'multiple' || item.type === 'single'">
                      <div  class="font-medium text-gray-800">
                        {{item.type}}
                      </div>
                    </td>
                    <td class="p-2" v-if="item.type === 'multiple' || item.type === 'single'">
                      <div class="flex justify-center">
                        <button @click="deleteItem(item.id)">
                          <svg class="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                               fill="none" stroke="currentColor" viewBox="0 0 24 24"
                               xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                            </path>
                          </svg>
                        </button>
                        <button @click="updateItem(item.id)">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div v-if="activeTab===1">
                <table class="table-auto  w-full">
                  <thead class="text-xs font-semibold uppercase text-gray-500 bg-gray-100 ">
                    <tr>
                      <th class="p-2">
                        <div class="font-semibold text-center">Question</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-center">Type</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-center">Actions</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-sm divide-y divide-gray-100">
                  <tr v-for="(item, i) in list" :key="i">
                    <td class="p-2" v-if="item.type === 'writing'">
                      <div class="font-medium text-gray-800">
                        {{item[Util.localeKey('questionName')]}}
                      </div>
                    </td>
                    <td class="p-2" v-if="item.type === 'writing'">
                      <div class="font-medium text-gray-800">
                        {{item.type}}
                      </div>
                    </td>
                    <td class="p-2" v-if="item.type === 'writing'">
                      <div class="flex justify-center">
                        <button @click="deleteItem(item.id)">
                          <svg class="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                               fill="none" stroke="currentColor" viewBox="0 0 24 24"
                               xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                            </path>
                          </svg>
                        </button>
                        <button @click="updateItem(item)">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script  setup>
import Util from "@/global/utils";
import { useUserStore} from "@/store";
import { onMounted, ref } from 'vue'
import router from "@/router";
const activeTab = ref(0)
    const tabs = ref([
  "Quiz Type 1",
  "Quiz Type 2",
])
const open = ref(false)
const list = ref([])
const getQuizzes = () => {
  list.value = useUserStore().getQuiz()
}
function deleteItem(id) {
  useUserStore().deleteQuiz(id)
  getQuizzes()
}
function updateItem(id) {
  router.push({ name: 'AddUpdateQuizById', params: { id: id } })
}
onMounted(() => {
  getQuizzes()
})
</script>

<style scoped>

</style>

