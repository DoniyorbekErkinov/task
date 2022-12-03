<template>
<!-- Create By Joker Banny -->
<div class="min-h-screen bg-no-repeat bg-cover bg-center"
	style="background-image: url('https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000')">
	<div class="flex justify-end">
		<div class="bg-white min-h-screen w-1/2 flex justify-center items-center">
			<div>
				<form @submit.prevent="submit">
					<div>
						<span class="text-sm text-gray-900">Welcome back</span>
						<h1 class="text-2xl font-bold">Login to your account</h1>
					</div>
          <div class="my-3">
            <label class="block text-md mb-2" for="Username">Username</label>
            <input v-model="state.form.username" class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="Username" name="username" placeholder="Username">
          </div>
					<div class="mt-5">
						<label class="block text-md mb-2" for="password">Password</label>
						<input v-model="state.form.password" class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password">
          </div>
          <div>
            <button class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Login now</button>
          </div>
				</form>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import { reactive } from 'vue'
import { useUserStore} from "@/store";
export default {
  setup() {
    useUserStore()
    const state = reactive({
      form: {
        username: "",
        password: ""
      }
    })
    function submit() {
      useUserStore().Login(state.form)
    }
    // don't forget to expose the function as well.
    return {
      state,
      submit
    }
  }
}
</script>

<style scoped>

</style>