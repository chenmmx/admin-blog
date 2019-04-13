import { handleService } from '../common'

const url = {
  GetCodeByParent: '/v2/Account/GetCodeByParent',
  GetCommunityByCode: '/v2/Account/GetCommunityByCode'
}
export default {
  getCodeByParent (data) {
    return handleService(url.GetCodeByParent, data)
  },
  getCommunityByCode (data) {
    return handleService(url.GetCommunityByCode, data)
  }
}
