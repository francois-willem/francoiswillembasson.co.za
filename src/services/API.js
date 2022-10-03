import axios from 'axios'

import { APIConfig } from '@Config'

function api() {
  return axios.create(APIConfig)
}

export default api
