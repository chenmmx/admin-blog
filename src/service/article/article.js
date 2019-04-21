import { handleService } from '../common'

const commonUrl = '/api/article'

const url = {
  getList: commonUrl + '/getListByPage',
  add: commonUrl + '/add',
  edit: commonUrl + '/edit',
  getInfo: commonUrl + '/getInfo',
  delete: commonUrl + '/delete'
}
export default {
  getList (data) {
    return handleService(url.getList, data)
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
