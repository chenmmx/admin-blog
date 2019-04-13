/*
人员管理业主
*/
import { handleService } from '../common'
const commonUrl = '/v2/PersonOwner/'

const url = {
  Add: commonUrl + 'Add',
  Update: commonUrl + 'Update',
  Delete: commonUrl + 'Delete',
  GetInfo: commonUrl + 'GetInfo',
  GetListByPage: commonUrl + 'GetListByPage'
}

export default {
  add (data) {
    return handleService(url.Add, data, 'post')
  },
  update (data) {
    return handleService(url.Update, data, 'post')
  },
  delete (data) {
    return handleService(url.Delete, data, 'post')
  },
  getInfo (data) {
    return handleService(url.GetInfo, data)
  },
  gerListByPage (data) {
    return handleService(url.GetListByPage, data)
  }
}
