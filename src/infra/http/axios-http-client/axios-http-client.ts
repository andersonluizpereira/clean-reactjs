import { HttpPostParams } from '@/data/protocols/http'
import axios from 'axios'
export class AxiosHttpClient {
  async post (params: HttpPostParams<any>): Promise<any> {
    await axios(params.url)
  }
}
