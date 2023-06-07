import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { acceptReject, getOne, userActions, usersSelector } from "@/store";
import { requestDictionary } from "../../dictionary";
import { Col, Form, Image, Row, Space, Divider, Button, Typography, Card } from "antd";
import { ReadOnlyField, ReadOnlyTextArea } from "../Fields";
import { SuccessBtn } from "@/components";
import { history, makeFullName } from "@/utils";
import classnameBind from "classnames/bind";
import styles from "../../requests.module.scss";

const cn = classnameBind.bind(styles);

export const DetailsForm = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [form] = Form.useForm();
    const [certifications, setCertifications] = useState([])
    const { data: { details }, loading } = useSelector(usersSelector);

    const openRequestModal = () => {
        dispatch(userActions.setFullName(makeFullName(details)))
        dispatch(userActions.setIsModalOpen(true))
        dispatch(userActions.setSelectedUserId(id))
    }

    const onFinish = () => {
        const params = { verify: 'success', id }

        dispatch(acceptReject(params))
    }

    const getData = () => {
        if (!id) {
            history.back();
        }

        dispatch(getOne({ id }));
    };

    const setData = () => {
        if (details) {
            for (let key in details) {
                form.setFieldsValue({ [key]: details[key] });
            }

            setCertifications(details.certifications)
        }
    }

    useEffect(() => {
        getData();
    }, [id]);

    useEffect(() => {
        setData();
    }, [details]);

    return (
        <Form
            form={form}
            layout="vertical"
            autoComplete="off"
            onFinish={onFinish}
        >
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item name="photo" label={requestDictionary.profilePhoto}>
                        <Image
                            width={240}
                            height={160}
                        />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <ReadOnlyField
                        name="displayname"
                        label={requestDictionary.displayName}
                    />
                </Col>

                <Col span={12}>
                    <ReadOnlyField
                        name="email"
                        label={requestDictionary.emailAddress}
                    />
                </Col>

                <Col span={12}>
                    <ReadOnlyField name="firstname" label={requestDictionary.name} />
                </Col>

                <Col span={12}>
                    <ReadOnlyField name="lastname" label={requestDictionary.surname} />
                </Col>

                <Col span={12}>
                    <ReadOnlyField name="address" label={requestDictionary.from} />
                </Col>

                <Col span={12}>
                    <ReadOnlyField name="currentAddress" label={requestDictionary.livingIn} />
                </Col>

                <Col span={12}>
                    <ReadOnlyField name="birthday" label={requestDictionary.date} />
                </Col>

                <Col span={12}>
                    <ReadOnlyField name="gender" label={requestDictionary.gender} />
                </Col>

                <Col span={12}>
                    <ReadOnlyTextArea name="about" label={requestDictionary.about} />
                </Col>

                <Col span={12}>
                    <ReadOnlyTextArea name="aboutTeacher" label={requestDictionary.me} />
                </Col>

                <Col span={12}>
                    <Form.List name="educations" initialValue={[{}]}>
                        {(fields) => (
                            <Form.Item label={requestDictionary.educations}>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Col key={key}>
                                        <ReadOnlyField {...restField} name={[name, "title"]} />

                                        <Row span={12} gutter={10}>
                                            <Col span={12}>
                                                <ReadOnlyField {...restField} name={[name, "degree"]} />
                                            </Col>
                                            <Col span={12}>
                                                <ReadOnlyField {...restField} name={[name, "dateFrom", "dateTo"]} />
                                            </Col>
                                        </Row>
                                    </Col>
                                ))}
                            </Form.Item>
                        )}
                    </Form.List>
                </Col>

                <Col span={12}>
                    <Form.List name="experiences" initialValue={[{}]}>
                        {(fields) => (
                            <Form.Item label={requestDictionary.experience}>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Col key={key}>
                                        <ReadOnlyField {...restField} name={[name, "title"]} />

                                        <Row span={12} gutter={10}>
                                            <Col span={12}>
                                                <ReadOnlyField {...restField} name={[name, "descr"]} />
                                            </Col>
                                            <Col span={12}>
                                                <ReadOnlyField {...restField} name={[name, "date"]} />
                                            </Col>
                                        </Row>
                                    </Col>
                                ))}
                            </Form.Item>
                        )}
                    </Form.List>
                </Col>

                <Col span={24}>
                    <Typography>{requestDictionary.certificates}</Typography>

                    <Space direction="vertical" className={cn("requests__certifications")}>
                        {
                            certifications?.map((certification, i) =>
                                <Card key={i} bordered>
                                    <Row align='middle' justify="space-between">
                                        <Typography level={5}>{certification.name}</Typography>

                                        <Space justify="end">
                                            <Button type="primary" size="large">
                                                <a href={certification.file} target="_blank" rel="noopener noreferrer">
                                                    {requestDictionary.viewCertificate}
                                                </a>
                                            </Button>
                                            <SuccessBtn>{requestDictionary.verified}</SuccessBtn>
                                        </Space>
                                    </Row>
                                </Card>
                            )
                        }
                    </Space>
                </Col>
            </Row>

            <Divider />

            <Row justify="end">
                <Space>
                    <SuccessBtn submit loading={loading.put}>
                        {requestDictionary.acceptBtn}
                    </SuccessBtn>

                    <Button type="primary" danger size="large" onClick={openRequestModal}>{requestDictionary.rejectBtn}</Button>
                </Space>
            </Row>
        </Form>
    );
};
