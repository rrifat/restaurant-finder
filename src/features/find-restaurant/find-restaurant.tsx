import { Col, Row } from "antd";
import ErrorBoundary from "components/error-boundary";
import Map from "components/map";
import SearchBar from "components/search-bar";
import "./find-restaurant.css";

function FindRestaurant() {
  return (
    <Row>
      <Col span={24}>
        <div className="background">
          <div className="search-bar">
            <SearchBar />
          </div>
        </div>
      </Col>
      <Col span={24} style={{ border: "1px solid gray" }}>
        <ErrorBoundary>
          <Map />
        </ErrorBoundary>
      </Col>
    </Row>
  );
}

export default FindRestaurant;
