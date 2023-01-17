import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineClose, AiFillCloseCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import AppDropDown from "../../../components/appDropdown";
import Card from "../../../components/card";
import { adminRoot } from "../../../constants";
import { categoryData, surveyData } from "../../../constants/appData";

const SurveyItem = ({ value }) => (
  <li className="detail-survey-name-container">
    <div className="assigned-survey-tile py-0">
      <div className="pr-3">{value}</div>
      <div>
        <AiFillCloseCircle size={18} color="red" />
      </div>
    </div>
  </li>
);

const EditSurgeonDetails = () => {
  const history = useHistory();

  const goBack = () =>  history.push(`${adminRoot}/view-surgeons`);;

  return (
    <div className="container-data-table">
      <Card className="p-3 table-white-card">
        <div className="position-rfh data-table">
          <div className="py-3 px-3 table-header">
            <button
              className="float-end card-close-icon btn-blank"
              onClick={goBack}
            >
              <AiOutlineClose size={25} color={"#000"} />
            </button>
            <div className="table-card-title">Edit Surgeon</div>

            <div className="surgeon-details-content-container">
              <Row className="pt-5">
                <Col className="input-form edit-surgeon-form">
                  <div className="card-sub-title pb-3">Basic Details</div>
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
                  <div className="btn-container">
                    <button className="btn-small-primary w-100">Update</button>
                  </div>
                </Col>

                <Col>
                  <Row>
                    <div className="card-sub-title pb-3">Assign Survey</div>
                    <Col>
                      <AppDropDown
                        data={categoryData}
                        placeholder="Select Category"
                      />
                    </Col>
                    <Col>
                      <AppDropDown
                        labelName="name"
                        valueName="name"
                        data={surveyData}
                        placeholder="Select Survey"
                      />
                    </Col>
                    <Col>
                      <div className="assign-btn">
                        <button className="btn-small-outline">Assign</button>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <div className="card-sub-title pb-3 pt-5">
                      Assigned Surveys
                    </div>
                    <div>
                      <ul className="assigned-survey-container">
                        {surveyData.map((item) => (
                          <SurveyItem value={item.name} />
                        ))}
                      </ul>
                    </div>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EditSurgeonDetails;
