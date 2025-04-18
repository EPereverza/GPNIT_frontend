import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000', // Порт бэкенда
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api


// import axios from 'axios'

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
// })

// export default api
