import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "@/store";
import { Modal, Avatar, Typography } from "antd";
import { BellOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { makeFileUrl, getLocalStorage } from "@/utils";
import classnamesBind from "classnames/bind";
import styles from "./account.scss";
import { accountDictionary } from "./dictionary";

const cn = classnamesBind.bind(styles);

export const Account = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const admin = getLocalStorage("admin");

  const changeModal = () => setIsModalOpen(!isModalOpen);

  const handleOk = () => dispatch(authActions.logout());

  return (
    <div className={cn("account")}>
      <BellOutlined className="account__icon" />
      <LogoutOutlined className="account__icon" onClick={changeModal} />

      <Avatar src={makeFileUrl(admin.user_photo)} icon={<UserOutlined />} />

      <div className={cn("account__info")}>
        <Typography.Text strong>
          {admin.user_firstname} {admin.user_lastname}
        </Typography.Text>

        <Typography.Text>{admin.user_email}</Typography.Text>
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
