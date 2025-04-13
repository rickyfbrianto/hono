import { createMiddleware } from "hono/factory";

const app = createMiddleware(async (c, next) => {
    console.log('middleware')
    Error("error")
    await next()
})

export {app as auth}