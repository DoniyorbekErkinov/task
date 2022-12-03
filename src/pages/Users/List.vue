<template>
<div>
  {{list}}
</div>
</template>

<script  setup>
import { useUserStore} from "@/store";
import { onMounted, ref } from 'vue'

const list = ref([])
const getUsers = () => {
  list.value =  useUserStore().getUsers()
}

onMounted(() => {
  getUsers()
})
</script>

<style scoped>

</style>