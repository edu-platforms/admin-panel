import { Card, Row, Typography } from "antd"
import { studentsDictionary } from "../../../dictionary";

export const PaymentHistoryCard = () => {
  const { Title, Text, Link } = Typography;

  return (
    <>
      <Card>
        <Row justify="space-between">
          <Title level={5}>{studentsDictionary.paymentType}</Title>
          <Text>Paypal</Text>
        </Row>
        <Row justify="space-between">
          <Title level={5}>{studentsDictionary.paymentAmout}</Title>
          <Text>60$</Text>
        </Row>
        <Row justify="space-between">
          <Title level={5}>{studentsDictionary.subsPlan}</Title>
          <Text>2.5 hours in a week</Text>
        </Row>
        <Row justify="space-between">
          <Title level={5}>{studentsDictionary.paymentTime}</Title>
          <Text>15/05/2023  05:45AM</Text>
        </Row>
        <Row justify="space-between">
          <Title level={5}>{studentsDictionary.paymentStatus}</Title>
          <Text>Active</Text>
        </Row>

        <Link underline>{studentsDictionary.showCheck}</Link>
      </Card>
    </>
  )
}