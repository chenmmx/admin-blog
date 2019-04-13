import { handleService } from '../common'
const commonUrl = '/v2/House'

const url = {
  Edit: commonUrl + '/Edit',
  GetInfo: commonUrl + '/GetInfo',
  GetListByPage: commonUrl + '/GetListByPage',
  GeneratingHouse: commonUrl + '/GeneratingHouse',
  GeneratingArea: commonUrl + '/GeneratingArea',
  Delete: commonUrl + '/Delete'
}

export default {
  getListByPage (data) {
    return handleService(url.GetListByPage, data)
  },
  edit (data) {
    return handleService(url.Edit, data, 'post')
  },
  getInfo (data) {
    return handleService(url.GetInfo, data)
  },
  delete (data) {
    return handleService(url.Delete, data)
  },
  GeneratingHouse (data) {
    return handleService(url.GeneratingHouse, data, 'post')
  },
  GeneratingArea (data) {
    return handleService(url.GeneratingArea, data, 'post')
  }
}
