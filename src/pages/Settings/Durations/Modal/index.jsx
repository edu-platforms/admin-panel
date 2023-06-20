import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    settingActions, 
    settingsSelector, 
    createLessonDurationWeek, 
    updateLessonDurationWeek, 
} from '@/store';
import { settingsDictionary } from '../../dictionary';
import { Modal, Form, Row, Col } from "antd";
import { NumberField } from '../../Fields';


export const DurationsModal = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const { 
        loading, 
        isCreate,
        isSuccess, 
        isModalOpen,
        selectedItem, 
    } = useSelector(settingsSelector)

    const handleCancel = () => {
        dispatch(settingActions.setIsModalOpen(false))
        dispatch(settingActions.setSelectedItem(null))
        form.resetFields();
    };

    const handleOk = () => form.submit()

    const handleFinish = (values) => {
        isCreate ? dispatch(createLessonDurationWeek(values)) 
        : dispatch(updateLessonDurationWeek({id: selectedItem.id, ...values}))
    }

    useEffect(() => {
        if(isSuccess) handleCancel()

        return () => dispatch(settingActions.setIsSuccess(false))
    }, [isSuccess])

    return (
        <Modal
            title={isCreate ? settingsDictionary.modal.durationCreate : settingsDictionary.modal.durationEdit}
            confirmLoading={isCreate ? loading.post : loading.put}
            width={900}
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
                            name="minut"
                            label={settingsDictionary.labels.duration}
                        />
                    </Col>

                    <Col span={8}>
                        <NumberField
                            name="priceAdult"
                            label={settingsDictionary.labels.price4Adults}
                        /> 
                    </Col>

                    <Col span={8}>
                        <NumberField 
                            name="priceKid" 
                            label={settingsDictionary.labels.price4Kids} 
                        />
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}
