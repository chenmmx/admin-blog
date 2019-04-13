import { handleService } from '../common'
const commonUrl = '/v2/HelpMenu'

const url = {
  GetListByPage: commonUrl + '/GetListByPage',
  AddHelpMenu: commonUrl + '/Add',
  DeleteHelpMenu: commonUrl + '/Delete'
}

export default {
  getHelpMenuList (data) {
    return handleService(url.GetListByPage, data)
  },
  addHelpMenu (data) {
    return handleService(url.AddHelpMenu, data, 'POST')
  },
  delete (data) {
    return handleService(url.DeleteHelpMenu, data, 'POST')
  }
}
