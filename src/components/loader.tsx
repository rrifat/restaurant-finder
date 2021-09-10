import { LoadingOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

function FullPageOutlinedLoader({ fontSize }: { fontSize: number }) {
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col>
        <LoadingOutlined style={{ fontSize }} />
      </Col>
    </Row>
  );
}

export { FullPageOutlinedLoader };
