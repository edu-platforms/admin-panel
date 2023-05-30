import { Title } from "@/components";
import { useBreadCrumbs } from "@/hooks";
import { settingsBreadcrumb } from './constants';
import { SettingsForm } from './Form';
import { settingsDictionary } from "./dictionary"
import "./style.scss";

export const Settings = () => {
  useBreadCrumbs(settingsBreadcrumb);
  return (
    <>
      <Title>{settingsDictionary.title}</Title>
      <SettingsForm />
    </>
  )
}
