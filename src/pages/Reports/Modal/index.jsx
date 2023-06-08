import { useDispatch, useSelector } from 'react-redux';
import { reportActions, reportsSelector } from '@/store/reports/features';
import { allReportsDictionary } from '../dictionary';
import { Modal, Form, Input, Button, Row, Col } from "antd";
import { SuccessBtn } from '@/components';

export const ReportsModal = () => {
    const dispatch = useDispatch()
    const { reporter, isModalOpen } = useSelector(reportsSelector)
    const labels = allReportsDictionary.labels;
    const [form] = Form.useForm();


    const handleCancel = () => {
        form.resetFields();
        dispatch(reportActions.setIsModalOpen(false))
        dispatch(reportActions.setReporter(null))
    };

    const handleFinishForm = (values) => {
        console.log(values);
        handleCancel();
    };

    return (
        <Modal
            title={allReportsDictionary.modalTitle}
            width={900}
            footer={null}
            open={isModalOpen}
            onCancel={handleCancel}
        >
            <Form
                form={form}
                layout='vertical'
                onFinish={handleFinishForm}
            >
                <Row gutter={10}>
                    <Col span={12}>
                        <Form.Item label={labels.fullName}>
                            <Input readOnly value={reporter?.fullName} />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label={labels.position}>
                            <Input readOnly value={reporter?.position} />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item
                    name="descr"
                    label={labels.reason}
                    rules={[{ required: true, min: 10 }]}
                >
                    <Input.TextArea autoSize={{ minRows: 2, maxRows: 5 }} />
                </Form.Item>

                <Row justify="space-between">
                    <Button
                        htmlType='submit'
                        size='large'
                        type='primary'
                    >
                        {allReportsDictionary.solve}
                    </Button>

                    <SuccessBtn size='large'>{allReportsDictionary.viewRecord}</SuccessBtn>
                </Row>
            </Form>
        </Modal>
    )
}
