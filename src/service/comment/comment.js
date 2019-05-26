import { handleService } from '../common'

const commonUrl = '/api/comment'

const url = {
  getList: commonUrl + '/getListByPage',
  delete: commonUrl + '/delete',
  getMessage: commonUrl + '/getMessage',
  clearAll: commonUrl + '/clearAll',
  readMessage: commonUrl + '/readMessage'
}
export default {
  getList (data) {
    return handleService(url.getList, data)
  },
  delete (data) {
    return handleService(url.delete, data, 'POST')
  },
  getMessage (data) {
    return handleService(url.getMessage, data)
  },
  clearAll (data) {
    return handleService(url.clearAll, data)
  },
  readMessage (data) {
    return handleService(url.readMessage, data, 'POST')
  }
}
