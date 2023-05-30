import { useContext } from 'react'
import { Modal as AntModal, Form, Input, Button } from "antd";
import { requestDictionary } from "../../dictionary";
import { ModalContext } from "@/context";
import { history } from "@/utils";

export const RequestModal = ({ close }) => {
    const { visible } = useContext(ModalContext);
    const { TextArea } = Input;
    const [form] = Form.useForm();
    const labels = requestDictionary.labels;
    const handleFinishForm = (values) => {
        console.log(values);
        history.push("/");
    };
    const handleCancel = () => {
        close();
        form.resetFields();
    };
    return (
        <AntModal title="Reject request" open={visible} footer={null} className="!w-[600px]" onCancel={handleCancel}>
            <Form className="p-6" layout='vertical' onFinish={handleFinishForm} form={form}>
                <Form.Item label={labels.fullName}>
                    <Input readOnly value="Saidalikhon Sobirov" />
                </Form.Item>
                <Form.Item
                    label={labels.reason}
                    name="reason"
                    rules={[{ required: true, message: requestDictionary.reasonMessage }]}
                >
                    <TextArea placeholder={requestDictionary.reasonPlaceholder} autoSize={{ minRows: 5, maxRows: 10 }} />
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit' size='large' type='primary' className='me-10'>{requestDictionary.rejectBtn}</Button>
                    <Button size='large' onClick={handleCancel}>{requestDictionary.cancel}</Button>
                </Form.Item>
            </Form>
        </AntModal>
    )
}