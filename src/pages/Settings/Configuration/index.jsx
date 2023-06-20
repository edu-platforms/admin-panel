import { useBreadCrumbs } from "@/hooks"
import { useSelector } from "react-redux"
import { settingsSelector } from "@/store"
import { Title } from "@/components"
import { settingsDictionary } from "../dictionary"
import { configurationsBreadcrumb } from "./constants"
import { ConfigurationTable } from "./Table"
import { ConfigurationsModal } from "./Modal"

export const Configuration = () => {
  const {isModalOpen} = useSelector(settingsSelector);

  useBreadCrumbs(configurationsBreadcrumb)

  return (
    <>
        <Title>{settingsDictionary.configuration}</Title>
        <ConfigurationTable />
        {isModalOpen ? <ConfigurationsModal /> : null}
    </>
  )
}
