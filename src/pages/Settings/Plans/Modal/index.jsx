import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPlan, settingActions, settingsSelector, updatePlan } from '@/store';
import { settingsDictionary } from '../../dictionary';
import { Modal, Form, Input, Row, Col } from "antd";
import classnameBind from "classnames/bind";
import styles from "../../settings.module.scss";
import { NumberField } from '../../Fields';

const cn = classnameBind.bind(styles);

export const PlanModal = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const { 
        loading, 
        isCreate,
        selectedItem, 
        isSuccess, 
        isModalOpen,
    } = useSelector(settingsSelector)

    const handleCancel = () => {
        dispatch(settingActions.setIsModalOpen(false))
        dispatch(settingActions.setSelectedItem(null))
        form.resetFields();
    };

    const handleOk = () => form.submit()

    const handleFinish = (values) => {
        isCreate ? dispatch(createPlan(values)) : dispatch(updatePlan({id: selectedItem.id, ...values}))
    }

    useEffect(() => {
        if(isSuccess) handleCancel()

        return () => dispatch(settingActions.setIsSuccess(false))
    }, [isSuccess])

    return (
        <Modal
            title={isCreate ? settingsDictionary.modal.planCreate : settingsDictionary.modal.planEdit}
            width={700}
            confirmLoading={isCreate ? loading.post : loading.put}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form
                form={form}
                layout='vertical'
                onFinish={handleFinish}
                initialValues={selectedItem}
            >
                <Row gutter={10}>
                    <Col span={12}>
                        <Form.Item 
                            name="name" 
                            label={settingsDictionary.labels.plan} 
                            rules={[
                                {
                                  required: true,
                                  type: 'string'
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <NumberField 
                            name="discountPercent" 
                            label={settingsDictionary.labels.discount}
                        />
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}
