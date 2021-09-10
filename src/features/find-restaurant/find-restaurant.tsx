import { Col, Row } from "antd";
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
    </Row>
  );
}

export default FindRestaurant;
