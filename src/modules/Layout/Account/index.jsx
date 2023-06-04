import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "@/store";
import { Modal, Avatar, Typography } from "antd";
import { BellOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { makeFileUrl, getLocalStorage } from "@/utils";
import { accountDictionary } from "./dictionary";
import classnamesBind from "classnames/bind";
import styles from "./account.module.scss";

const cn = classnamesBind.bind(styles);

export const Account = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const admin = getLocalStorage("admin");

  const changeModal = () => setIsModalOpen(!isModalOpen);

  const handleOk = () => dispatch(authActions.logout());

  return (
    <div className={cn("account")}>
      <BellOutlined className={cn('account__icon')} />
      <LogoutOutlined className={cn("account__icon")} onClick={changeModal} />

      <Avatar src={makeFileUrl(admin.photo)} icon={<UserOutlined />} />

      <div className={cn("account__info")}>
        <Typography.Text strong>
          {admin.firstName} {admin.lastName}
        </Typography.Text>

        <Typography.Text>{admin.email}</Typography.Text>
      </div>

      <Modal
        title={accountDictionary.exit}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={changeModal}
      >
        <span>{accountDictionary.logout}</span>
      </Modal>
    </div>
  );
};
