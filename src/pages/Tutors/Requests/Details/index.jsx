import { useBreadCrumbs } from "@/hooks";
import { requestDetailsBreadcrumb } from "../constants";
import { Title } from "@/components";
import { requestDictionary } from '../dictionary'
import { RequestModal } from "./Modal";
import { DetailsForm } from './Form'

export const TutorRequestDetails = () => {
  useBreadCrumbs(requestDetailsBreadcrumb);

  return (
    <>
      <Title>{requestDictionary.viewProfile}</Title>
      <RequestModal />
      <DetailsForm />
    </>
  )
}
