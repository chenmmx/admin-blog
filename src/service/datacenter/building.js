import { handleService } from '../common'
const commonUrl = '/v2/Building'

const url = {
  Edit: commonUrl + '/Edit',
  GetInfo: commonUrl + '/GetInfo',
  GetListByPage: commonUrl + '/GetListByPage',
  Delete: commonUrl + '/Delete'
}

export default {
  edit (data) {
    return handleService(url.Edit, data, 'post')
  },
  getInfo (data) {
    return handleService(url.GetInfo, data)
  },
  getListByPage (data) {
    return handleService(url.GetListByPage, data)
  },
  delete (data) {
    return handleService(url.Delete, data)
  }
}
