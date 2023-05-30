import { Spin } from "antd";

export const Loader = () => (
  <Spin tip="Loading" size="large">
    <div className="content" />
  </Spin>
);
