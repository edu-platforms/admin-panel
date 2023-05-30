import { Title } from '@/components';
import { useBreadCrumbs } from "@/hooks";
import { studentsDetailBreadcrumb } from '../../constants';
import { Col, Form, Row } from 'antd';
import { ReadOnlyField } from './ReadOnlyField';
import { PaymentHistoryCard } from './Card';
import { studentsDictionary } from '../../dictionary';

export const PaymentHistory = () => {
  useBreadCrumbs(studentsDetailBreadcrumb)

  return (
    <>
      <Title>{studentsDictionary.history}</Title>
      <Form layout='vertical' autoComplete='off'>
        <Row gutter={12}>
          <Col span={12}>
            <ReadOnlyField label={studentsDictionary.columns.studentName} />
          </Col>
          <Col span={12}>
            <ReadOnlyField label={studentsDictionary.plan} />
          </Col>
          <Col span={12}>
            <ReadOnlyField label={studentsDictionary.email} />
          </Col>
          <Col span={12}>
            <ReadOnlyField label={studentsDictionary.coursePlan} />
          </Col>
        </Row>
      </Form>

      <p className='f-feedback'>{studentsDictionary.history}</p>

      <Row gutter={[12, 12]}>
        {[1, 2, 3, 4, 5].map(i => (
          <Col key={i} span={12}>
            <PaymentHistoryCard />
          </Col>
        ))}
      </Row>
    </>
  )
}
