import { Title, MainSearch } from "@/components";
import { useBreadCrumbs } from "@/hooks";
import { salaryBreadcrumb } from '../constants';
import { salaryDictionary } from '../dictionary';
import { SalaryTable } from '../Table'

export const Salary = () => {
  useBreadCrumbs(salaryBreadcrumb);
  return (
    <>
      <Title>{salaryDictionary.title}</Title>
      <MainSearch placeholder={salaryDictionary.search} />
      <SalaryTable />
    </>
  )
}
