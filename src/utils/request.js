import { createAlova } from 'alova'
import GlobalFetch from 'alova/fetch'

const baseURL = window.__APP_CONFIG__?.BASE_URL

export const alova = createAlova({
  baseURL,
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
