import axios from 'axios'
import createStore from './createStore'
import { clearUser } from './session/actions'

export const adapter = axios.create({
  baseURL: 'http://localhost:9999/api',
  withCredentials: true,
  headers: {
    Accept: 'application/json'
  }
})

adapter.interceptors.response.use(undefined, error => {
  if (error.response.status === 403) {
    const store = createStore()
    store.dispatch(clearUser())
    window.localStorage.removeItem('user')
  }

  return Promise.reject(error)
})

export default {
  session: {
    login: (username, password) => adapter.post('/session', { username, password }).then((resp) => {
      window.localStorage.setItem('user', JSON.stringify(resp.data.user))
      return resp
    }),
    logout: () => adapter.delete('/session').then((resp) => {
      window.localStorage.removeItem('user')
      return resp
    })
  },
  customers: {
    list: (page, pageSize) => adapter.get('/customers', { params: { page, pageSize } }),
    create: customer => adapter.post('/customers', { customer })
  },
  invoices: {
    list: (page, pageSize) => adapter.get('/invoices', { params: { page, pageSize } })
  }
}
