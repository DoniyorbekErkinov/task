<template>
  <div class="flex flex-col justify-center h-full">
    <!-- Table -->
    <div class="w-full max-w-6xl mt-5 mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
      <header class="flex justify-between px-5 py-4 border-b border-gray-100">
        <div class="font-semibold text-gray-800">Users</div>
      </header>

      <div class="overflow-x-auto p-3">
        <table class="table-auto  w-full">
          <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
          <tr>
            <th class="p-2">
              <div class="font-semibold text-left">User Name</div>
            </th>
            <th class="p-2">
              <div class="font-semibold text-left">Role</div>
            </th>
            <th class="p-2">
              <div class="font-semibold text-left">Password</div>
            </th>
          </tr>
          </thead>

          <tbody class="text-sm divide-y divide-gray-100">
          <tr v-for="(item, i) in list" :key="i">
            <td class="p-2">
              <div class="font-medium text-gray-800">
                {{item.username}}
              </div>
            </td>
            <td class="p-2">
              <div class="text-left">{{item.role}}</div>
            </td>
            <td class="p-2">
              <div class="text-left">{{item.password}}</div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script  setup>
import { useUserStore} from "@/store";
import { onMounted, ref } from 'vue'

const open = ref(false)
const list = ref([])
const getUsers = () => {
  list.value = useUserStore().getUsers()
}
onMounted(() => {
  getUsers()
})
</script>

<style scoped>

</style>

