import Util from "./utils"

export default app => {
    for (const key in Util) {
        if (Object.hasOwnProperty.call(Util, key)) {
            app.config.globalProperties[`$${key}`] = Util[key]
        }
    }
}