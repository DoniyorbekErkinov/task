<template>
  <div class="flex flex-col justify-center h-full">
    <!-- Table -->
    <div class="w-full max-w-6xl mt-5 mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
      <header class="flex justify-between px-5 py-4 border-b border-gray-100">
        <div class="font-semibold text-gray-800">Students</div>
        <div>
          <font-awesome-icon icon="fa-solid fa-arrow-down" class="mr-5 cursor-pointer" @click="() => {getStudents(), sortType = 'maxToMin'}"/>
          <font-awesome-icon icon="fa-solid fa-arrow-up" class="mr-5 cursor-pointer" @click="() => {getStudents(), sortType = 'minToMax'}"/>
          <button @click="open = true" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
            Add
          </button>
        </div>
      </header>

      <div class="overflow-x-auto p-3">
        <table class="table-auto  w-full">
          <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th class="p-2">
                <div class="font-semibold text-left">Student Name</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-left">Phone</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-left">Total courses</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-center">Action</div>
              </th>
            </tr>
          </thead>

          <tbody class="text-sm divide-y divide-gray-100">
          <tr v-for="(item, i) in list" :key="i">
            <td class="p-2">
              <div class="font-medium text-gray-800">
                {{item.name}}
              </div>
            </td>
            <td class="p-2">
              <div class="text-left">{{item.phone}}</div>
            </td>
            <td class="p-2">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                {{ item.coursesLength }}
              </button>
            </td>
            <td class="p-2">
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
    <ModalStudent v-if="open" :updateUser="updateUser" @controlModal="controlModal" :open="open" @createStudent="createStudent"/>
  </div>
</template>

<script  setup>
import { useUserStore} from "@/store";
import { onMounted, ref } from 'vue'
import ModalStudent from "@/components/ModalStudent";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const open = ref(false)
const list = ref([])
const updateUser = ref({})
const sortType = ref('maxToMin')
const getStudents = () => {
  list.value =  useUserStore().getStudents(sortType.value)
}
const controlModal = (n) => {
  open.value = n
}
const createStudent = (value) => {
  if(!value.id) {
    if(value.name !== "" && value.phone.length > 0 && value.courses.length > 0) {
        for (const valueKey in value.courses) {
            value.courses[valueKey] = value.courses[valueKey].id
          }
          value.coursesLength = value.courses.length
          useUserStore().addStudents(value)
          getStudents()
          open.value = false
        }
  } else {
    value.coursesLength = value.courses.length
    useUserStore().update(value)
    getStudents()
    open.value = false
  }
}
const deleteItem = (id) =>  {
  useUserStore().delete(id)
  getStudents()
}
function updateItem(item) {
    this.updateUser.value = item
    open.value = true
}

onMounted(() => {
  getStudents()
})
</script>

<style scoped>

</style>

