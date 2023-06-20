import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { settingActions, settingsSelector, updateConfiguration, updatePlan } from '@/store';
import { settingsDictionary } from '../../dictionary';
import { Modal, Form, Row, Col } from "antd";
import { NumberField } from '../../Fields';


export const ConfigurationsModal = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const { 
        loading, 
        isSuccess,
        isModalOpen,
        selectedItem, 
    } = useSelector(settingsSelector)
    console.log(isSuccess);

    const handleCancel = () => {
        dispatch(settingActions.setIsModalOpen(false))
        dispatch(settingActions.setSelectedItem(null))
        form.resetFields();
    };

    const handleOk = () => form.submit()
    const handleFinish = (values) => dispatch(updateConfiguration({id: selectedItem.id, ...values}))

    useEffect(() => {
        if(isSuccess) handleCancel()

        return () => dispatch(settingActions.setIsSuccess(false))
    }, [isSuccess])

    return (
        <Modal
            title={settingsDictionary.modal.configurationEdit}
            width={900}
            confirmLoading={loading.put}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form 
                form={form} 
                layout="vertical" 
                autoComplete="off"
                onFinish={handleFinish} 
                initialValues={selectedItem}
            >
                <Row gutter={8}>
                    <Col span={8}>
                        <NumberField 
                            name="teacherSalaryForAdult"
                            label={settingsDictionary.labels.salary4Adult}
                        />
                    </Col>

                    <Col span={8}>
                        <NumberField 
                            name="teacherSalaryForKid"
                            label={settingsDictionary.labels.salary4Kids}
                        />
                    </Col>

                    <Col span={8}>
                        <NumberField 
                            name="oneLessonDuration" 
                            label={settingsDictionary.labels.trial} 
                        />
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}
