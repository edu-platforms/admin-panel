import { useSelector } from 'react-redux'
import { settingsSelector } from '@/store'
import { SettingsHeader } from '../Header'
import { PlansTable } from './Table'
import { PlanModal } from './Modal'
import { useBreadCrumbs } from '@/hooks'
import { plansBreadcrumb } from './constants'

export const Plans = () => {
  const { isModalOpen } = useSelector(settingsSelector)

  useBreadCrumbs(plansBreadcrumb)
  return (
    <>
        <SettingsHeader isPlan={true} />
        <PlansTable />
        {
            isModalOpen ? <PlanModal /> : null 
        }
    </>
  )
}
