import { Card, Button } from "antd";

export const File = ({ item, onlyViewCertificate }) => {
  return (
    <Card style={{ width: "100%", margin: "10px 0px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
        <h3>{item.name}</h3>
        <div style={{ display: "flex" }}>
          <Button
            style={{ margin: "0 10px" }}
            type="primary"
            size="large"
          >View certificate</Button>
          {!onlyViewCertificate &&
            <Button
              style={{ margin: "0 10px", backgroundColor: "#0EBC15" }}
              type="primary" size="large"
            >Verified certificate</Button>
          }
        </div>
      </div>
    </Card>
  );
};

