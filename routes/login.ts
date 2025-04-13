import { Hono } from "hono";
import { sign } from "hono/jwt";

const app = new Hono()

app.post('/', async (c) => {
    const data = await c.req.json()
    const token = sign('token', c.env.JWT_KEY_SECRET)
    return c.text(data.username)
})

export {app as login}