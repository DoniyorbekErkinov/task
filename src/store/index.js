import { defineStore} from "pinia";
import users from "@/data/users";
export const useUserStore = defineStore("UsersStore", {
    // STATE
    state: () => {
        return {
            users,
        }
    },
    // ACTIONS
    actions: {

    }
    // GETTER
})