import { handleService } from './common'

export default {
  async getAuthorization () {
    let result = await handleService('/cos', {})
    return result
  }
}
