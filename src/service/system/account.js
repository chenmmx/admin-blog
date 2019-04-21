import { handleService } from '../common'

const commonUrl = '/api/account'

const url = {
  getAccountList: commonUrl + '/getAccountList',
  add: commonUrl + '/addAccount',
  edit: commonUrl + '/editAccount',
  getInfo: commonUrl + '/getInfo',
  delete: commonUrl + '/deleteAccount'
}
export default {
  getAccountList (data) {
    return handleService(url.getAccountList, data)
  },
  add (data) {
    return handleService(url.add, data, 'POST')
  },
  edit (data) {
    return handleService(url.edit, data, 'POST')
  },
  getInfo (data) {
    return handleService(url.getInfo, data, 'POST')
  },
  delete (data) {
    return handleService(url.delete, data, 'POST')
  }
}
