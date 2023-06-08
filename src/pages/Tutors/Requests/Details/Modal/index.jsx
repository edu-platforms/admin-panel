import { useDispatch, useSelector } from "react-redux";
import { acceptReject, userActions, usersSelector } from "@/store";
import { Modal, Form, Input } from "antd";
import { requestDictionary } from "../../dictionary";

export const RequestModal = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const { loading, userFullName, selectedUserId, isModalOpen } = useSelector(usersSelector)

    const handleFinishForm = (value) => {
        const params = { verify: 'reject', id: selectedUserId, ...value, }

        dispatch(acceptReject(params))
    };

    const handleOk = () => form.submit();

    const handleCancel = () => {
        dispatch(userActions.setFullName(""))
        dispatch(userActions.setIsModalOpen(false))
        dispatch(userActions.setSelectedUserId(null))
        form.resetFields();
    };

    return (
        <Modal
            title={requestDictionary.modalTitle}
            width={900}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            confirmLoading={loading.put}
        >
            <Form
                form={form}
                layout='vertical'
                onFinish={handleFinishForm}
            >
                <Form.Item label={requestDictionary.labels.fullName}>
                    <Input readOnly value={userFullName} />
                </Form.Item>

                <Form.Item
                    label={requestDictionary.labels.reason}
                    name="rejectDescr"
                    rules={[{ required: true, min: 10 }]}
                >
                    <Input.TextArea placeholder={requestDictionary.reasonPlaceholder} autoSize={{ minRows: 5, maxRows: 10 }} />
                </Form.Item>
            </Form>
        </Modal>
    )
}