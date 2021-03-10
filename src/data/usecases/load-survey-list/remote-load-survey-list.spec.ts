import { HttpGetClientSpy } from '@/data/test'
import faker from 'faker'
import { RemoteLoadSurveyList } from './remote-load-survey-list'

describe('RemoteLoadSurveyList', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url()
    const httpGetClientSpy = new HttpGetClientSpy()
    const sut = new RemoteLoadSurveyList(url, httpGetClientSpy)
    await sut.loadlAll()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
