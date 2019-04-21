import { handleService } from '../common'

const commonUrl = '/api/comment'

const url = {
  getList: commonUrl + '/getListByPage',
  delete: commonUrl + '/delete'
}
export default {
  getList (data) {
    return handleService(url.getList, data)
  },
  delete (data) {
    return handleService(url.delete, data, 'POST')
  }
}
