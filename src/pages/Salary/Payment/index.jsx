import { Card, Col, Row, Typography } from "antd";
import { salaryDictionary } from '../dictionary';
export const PaymentCard = ({ data }) => {
    const { Title, Text, Link } = Typography;
    const payment = salaryDictionary.payment;
    return (
        <Col span={12} >
            <Card>
                <Row justify="space-between">
                    <Title level={5}>{payment.time}</Title>
                    <Text>{data.time}</Text>
                </Row>
                <Row justify="space-between">
                    <Title level={5}>{payment.price}</Title>
                    <Text>{data.price}</Text>
                </Row>
                <Row justify="space-between">
                    <Title level={5}>{payment.card}</Title>
                    <Text>{data.card}</Text>
                </Row>
                <Row justify="space-between">
                    <Title level={5}>{payment.check}</Title>
                    <Link href="https://ant.design" target="_blank">{payment.viewCheck}</Link>
                </Row>
            </Card>
        </Col>
    )
}
