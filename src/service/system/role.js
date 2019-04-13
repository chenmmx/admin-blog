import { handleService } from '../common'
const commonUrl = '/v2/Role'

const url = {
  GetRoleList: commonUrl + '/GetListByPage',
  Edit: commonUrl + '/Edit',
  GetInfo: commonUrl + '/GetInfo',
  Delete: commonUrl + '/Delete'
}

export default {
  getRoleList (data) {
    return handleService(url.GetRoleList, data)
  },
  edit (data) {
    return handleService(url.Edit, data, 'POST')
  },
  delete (data) {
    return handleService(url.Delete, data, 'POST')
  },
  getInfo (data) {
    return handleService(url.GetInfo, data)
  }
}
