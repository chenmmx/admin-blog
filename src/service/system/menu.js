import { handleService } from '../common'
const commonUrl = '/v2/Menu'

const url = {
  GetMenuList: commonUrl + '/GetMenuList',
  Edit: commonUrl + '/Edit',
  GetInfo: commonUrl + '/GetInfo',
  Delete: commonUrl + '/Delete'
}

export default {
  getMenuList (data) {
    return handleService(url.GetMenuList, data)
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
