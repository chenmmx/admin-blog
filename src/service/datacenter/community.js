import { handleService } from '../common'
const commonUrl = '/v2/Community'

const url = {
  Edit: commonUrl + '/Edit',
  GetInfo: commonUrl + '/GetInfo',
  GetListByPage: commonUrl + '/GetListByPage'
}

export default {
  edit (data) {
    return handleService(url.Edit, data, 'post')
  },
  getInfo (data) {
    return handleService(url.GetInfo, data)
  },
  gerListByPage (data) {
    return handleService(url.GetListByPage, data)
  }
}
