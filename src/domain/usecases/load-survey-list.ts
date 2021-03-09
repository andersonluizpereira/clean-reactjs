import { SurveyModel } from '@/domain/models'

export interface LoadSurveyList {
  loadlAll: () => Promise<SurveyModel[]>
}
