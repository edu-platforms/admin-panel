import { useSelector } from 'react-redux'
import { settingsSelector } from '@/store'
import { DurationsTable } from './Table'
import { DurationsModal } from './Modal'
import { SettingsHeader } from '../Header'
import { useBreadCrumbs } from '@/hooks'
import { durationsBreadcrumb } from './constants'

export const Durations = () => {
  const { isModalOpen } = useSelector(settingsSelector)

  useBreadCrumbs(durationsBreadcrumb)
  return (
    <>
        <SettingsHeader />
        <DurationsTable />
        {
            isModalOpen ? <DurationsModal /> : null 
        }
    </>
  )
}
