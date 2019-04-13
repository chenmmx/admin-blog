import { handleService } from '../common'
const commonUrl = '/v2/Account'

const url = {
  GetListByPage: commonUrl + '/GetListByPage',
  EditAccount: commonUrl + '/Edit',
  DeleteAccount: commonUrl + '/Delete',
  GetInfo: commonUrl + '/GetInfo'
}

export default {
  getList (data) {
    return handleService(url.GetListByPage, data)
  },
  edit (data) {
    return handleService(url.EditAccount, data, 'POST')
  },
  delete (data) {
    return handleService(url.DeleteAccount, data, 'POST')
  },
  getInfo (data) {
    return handleService(url.GetInfo, data)
  }
}
