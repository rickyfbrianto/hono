import { Hono } from "hono";
const app = new Hono()

app.get('/', c => { 
    console.log('this is user page')
    return c.json({message:"Hello user"})
})

const data = [
    {id:1, nama:"ricky"},
    {id:2, nama:"asfami"},
]

app.get('/data', async c => {
    const req = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await req.json()
    return c.json(res || null)
}).get('/data/:id{[0-9]+}', async c =>{
    const id = c.req.param('id')
    const req = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const res = await req.json()
    return c.json(res || null)
})

export {app as user}