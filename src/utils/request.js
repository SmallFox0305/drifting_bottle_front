import { createAlova } from 'alova'
import GlobalFetch from 'alova/fetch'

export const alova = createAlova({
  baseURL: 'http://localhost:8080',
  requestAdapter: GlobalFetch(),
  cacheFor: false,
  responded: {
    onSuccess: async (res, method) => {
      const data = await res.json()
      if (data.msg != null) {
        alert(data.msg)
      }
      if (data.code == 0) {
        throw new Error(data.msg)
      }
      return data.data
    },
  },
})
