import React, { useContext } from 'react'
import Styles from './error-styles.scss'
import { SurveyContext } from '@/presentation/pages/survey-list/components'

const Error: React.FC = () => {
  const { state, setState } = useContext(SurveyContext)
  const reload = (): void => {
    setState({ surveys: [], error: '', reload: !state.reload })
  }
  return (
    <div className={Styles.ErrorWrap}>
      <span data-testid="error">{ state.error }</span>
      <button data-testid="reload" onClick={reload}>Tentar novamente</button>
    </div>
  )
}

export default Error
