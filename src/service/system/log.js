import { handleService } from '../common'
const commonUrl = '/v2/Log'

const url = {
  GetLoginList: commonUrl + '/GetLoginLogListByPage',
  GetOperateList: commonUrl + '/GetOperateLogListByPage'
}

export default {
  getLoginList (data) {
    return handleService(url.GetLoginList, data)
  },
  getOperateList (data) {
    return handleService(url.GetOperateList, data)
  }
}
