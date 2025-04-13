import { Hono } from "hono";
import { user } from '../routes/user'
import { login } from '../routes/login'
import { auth } from '../middleware/auth'

const app = new Hono({strict: false})

app.use('/user/*', auth)
app.route('/user', user)

app.get('/', c => {
  console.log('tes dari ricky')
  return c.text("ini halaman index")
})


export default app
