<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="(open = !open)">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <form >
                <div class="overflow-hidden shadow sm:rounded-md">
                  <div class="bg-white px-4 py-5 sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-6">
                        <label for="full-name" class="block text-sm font-medium text-gray-700">Full name</label>
                        <input v-model="form.name" type="text" name="full-name" id="full-name" autocomplete="full-name" class="mt-1  py-2 px-3 block  w-full rounded-md border-gray-500 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                      </div>
                      <div class="col-span-6 sm:col-span-6">
                        <label for="last-name" class="block text-sm font-medium text-gray-700">Phone</label>
                        <input v-model="form.phone" type="tel" name="last-name" id="last-name" autocomplete="family-name" class="mt-1  py-2 px-3 block w-full rounded-md border-gray-500 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                      </div>
                      <div class="col-span-6 sm:col-span-6">
                        <label for="courses" class="block text-sm font-medium text-gray-700">Courses</label>
                        <VueMultiselect
                            v-model="form.courses"
                            :options="courses"
                            :multiple="true"
                            :close-on-select="false"
                            :show-labels="true"
                            placeholder="Pick some"
                            label="nameUz"
                            track-by="id"
                            selected-label="Selected"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 hover:bg-blue-700 px-4 py-2 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-2  sm:ml-3 sm:w-auto sm:text-sm" @click="$emit('createStudent', form)">Deactivate</button>
                  <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="$emit('controlModal', !open)" >Cancel</button>
                </div>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { useUserStore} from "@/store";
import {ref, defineProps, onMounted} from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import VueMultiselect from 'vue-multiselect'

const props = defineProps({
  open: Boolean,
  updateUser: Object
})
const form = ref({
  name: "",
  phone: "",
  courses: [],
  id: ""
})
const courses = ref([])
const getCourses = () => {
  courses.value =  useUserStore().getCourses()
}
onMounted(() => {
  getCourses()
  if(props.updateUser.value) {
    form.value = props.updateUser.value
  }
})
</script>
<style scoped>
select {
  width: 100%;
  height: 40px;
}
</style>