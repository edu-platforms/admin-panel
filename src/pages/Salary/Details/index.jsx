import { useEffect } from 'react';
import { salaryDetailsBreadcrumb, data } from '../constants';
import { salaryDictionary } from '../dictionary';
import { useBreadCrumbs } from "@/hooks";
import { PrimaryBtn } from "@/components";
import { Form, Row, Col } from "antd";
import { PaymentCard } from "../Payment";
import { Field } from "../Field";

export const SalaryDetails = () => {

    useBreadCrumbs(salaryDetailsBreadcrumb);

    const [form] = Form.useForm();

    useEffect(() => {
        if (data) {
            for (let key in data) {
                form.setFieldsValue({ [key]: data[key] });
            }
        }
    }, [data]);

    const onFinish = () => {
        history.push("/");
    }

    return (
        <>
            <Form layout='vertical' onFinish={onFinish} form={form}>
                <Row gutter={16} align="middle">
                    <Col span={12}>
                        <Field label={salaryDictionary.labels.name} name="name" />
                    </Col>
                    <Col span={12}>
                        <Field label={salaryDictionary.labels.cardNumber} name="cardNumber" />
                    </Col>
                    <Col span={6}>
                        <Field label={salaryDictionary.labels.price} name="price" />
                    </Col>
                    <Col span={6}>
                        <Field label={salaryDictionary.labels.fees} name="fees" />
                    </Col>
                    <Col span={6}>
                        <Field label={salaryDictionary.labels.balance} name="balance" />
                    </Col>
                    <Col span={6}>
                        <PrimaryBtn>{salaryDictionary.giveSalary}</PrimaryBtn>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    {data.paymentHistory.map((item, key) => (
                        <PaymentCard key={key} data={item} />
                    ))}
                </Row>
            </Form>
        </>
    )
}
