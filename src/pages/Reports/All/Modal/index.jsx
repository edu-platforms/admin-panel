import { useContext } from 'react'
import { Modal as AntModal, Form, Input, Button } from "antd";
import { ModalContext } from "@/context";
import { SuccessBtn } from '@/components';
import { data } from "../constants";
import { allReportsDictionary } from '../dictionary';

export const ReportsModal = ({ close }) => {
    const { visible } = useContext(ModalContext);
    const { TextArea } = Input;
    const labels = allReportsDictionary.labels;
    const [form] = Form.useForm();
    const handleFinishForm = (values) => {
        console.log(values);
        handleCancel();
    };
    const handleCancel = () => {
        close();
        form.resetFields();
    };

    return (
        <AntModal title="Report" open={visible} footer={null} onCancel={handleCancel}>
            <Form layout='vertical'
                onFinish={handleFinishForm}
                form={form}>

                <Form.Item label={labels.fullName}>
                    <Input readOnly value={data.fullName} />
                </Form.Item>
                <Form.Item label={labels.position}>
                    <Input readOnly value={data.position} />
                </Form.Item>
                <Form.Item
                    label={labels.reason}
                    rules={[{ required: true, message: allReportsDictionary.reasonMessage }]}
                >
                    <TextArea readOnly autoSize={{ minRows: 2, maxRows: 10 }} value={data.message} />
                </Form.Item>
                <Form.Item>
                    <Button
                        htmlType='submit'
                        size='large'
                        type='primary'
                        className='mx-10'
                    >{allReportsDictionary.solve}</Button>
                    <SuccessBtn size='large'>{allReportsDictionary.viewRecord}</SuccessBtn>
                </Form.Item>
            </Form>
        </AntModal>
    )
}
