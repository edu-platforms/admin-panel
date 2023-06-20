import { useDispatch, useSelector } from 'react-redux';
import { reportActions, reportsSelector, solveReport } from '@/store';
import { makeFullName } from '@/utils';
import { allReportsDictionary } from '../dictionary';
import { Modal, Form, Input, Button, Row, Col } from "antd";
import { SuccessBtn } from '@/components';

export const ReportsModal = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const { loading, reporter, isModalOpen } = useSelector(reportsSelector)
    const {event, teacher} = reporter

    const handleCancel = () => {
        form.resetFields();
        dispatch(reportActions.setIsModalOpen(false))
        dispatch(reportActions.setReporter(null))
    };

    const handleFinishForm = (value) => {
        const params ={
            id: reporter.id,
            event: {id: event.id},
            teacher: {id: teacher.id},
            isSolve: true,
            ...value
        }
        console.log('ok');

        dispatch(solveReport({params, close: handleCancel}))
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
                        <Form.Item label={allReportsDictionary.labels.fullName}>
                            <Input readOnly value={makeFullName(teacher)} />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label={allReportsDictionary.labels.position}>
                            <Input readOnly value={teacher.displayname} />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item
                    name="descr"
                    label={allReportsDictionary.labels.reason}
                    rules={[{ required: true, min: 10 }]}
                    initialValue={reporter.descr}
                >
                    <Input.TextArea 
                        readOnly={reporter.isSolve} 
                        autoSize={{ minRows: 2, maxRows: 5 }} 
                    />
                </Form.Item>

                <Row justify="space-between">
                    {
                        !reporter.isSolve ? 
                            <Button
                                loading={loading.put}
                                disabled={loading.put}
                                htmlType='submit'
                                size='large'
                                type='primary'
                            >
                                {allReportsDictionary.solve}
                            </Button> 
                            : 
                            null
                    }

                    <SuccessBtn size='large'>{allReportsDictionary.viewRecord}</SuccessBtn>
                </Row>
            </Form>
        </Modal>
    )
}
