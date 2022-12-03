<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup>
import users from "@/data/users";
import { useUserStore} from "@/store";
const userStore = useUserStore()
console.log(users)
console.log(userStore.users)
</script>
