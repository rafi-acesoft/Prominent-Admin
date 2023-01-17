import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "../../../components/card";

const AddSurgeon = () => {
  return (
    <div className="container-center">
      <Card className="p-3">
        <div className="card-title">ADD SURGEON</div>
        <div className="input-form py-3">
          <Row>
            <Col xs={12}>
              <input
                className="app-input"
                type="text"
                id="fname"
                placeholder="First Name"
              />
              <input
                className="app-input"
                type="text"
                id="lname"
                placeholder="Last Name"
              />
              <input
                className="app-input"
                type="email"
                id="email"
                placeholder="Email"
              />
              <input
                className="app-input"
                type="text"
                id="phone"
                placeholder="Phone Number"
              />
            </Col>
            <Col xs={12}>
              <input
                className="app-input"
                type="text"
                id="username"
                placeholder="Username"
              />
              <input
                className="app-input"
                type="password"
                id="password"
                placeholder="Password"
              />
            </Col>
          </Row>
          <div className="btn-container">
            <button className="float-end btn-small-primary">Save</button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AddSurgeon;
