import { SurveyList } from '@/presentation/pages'
import React from 'react'
import { makeRemoteLoadSurveyList } from '@/main/factories/usecases'

export const makeSurveyList: React.FC = () => {
  return (
    <SurveyList
      loadSurveyList={makeRemoteLoadSurveyList()}
    />
  )
}
