import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import AppDropDown from "../../../components/appDropdown";
import Card from "../../../components/card";
import { categoryData,notificationData } from "../../../constants/appData";

const QuestionCard = ({ count, inputType, name }) => {
  const [inputValue, setinputValue] = useState(inputType);
  return (
    <div className="my-3 sfr-card-container">
      <button className="btn-blank sfr-card-close-btn-container">
        <RiCloseFill size={20} color="#fff" />
      </button>
      <div className="card-number">{count}</div>
      <Card>
        <p className="sfr-card-text p-3 mb-0" contentEditable>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        
        <div className="p-3 pt-0 ">
          <Form.Label>Input Type</Form.Label>
          <Form.Group>
            <Form.Check
              type="radio"
              label="Slider"
              name={name}
              id="option-1"
              value="Slider"
              onChange={(e)=>setinputValue(e.target.value)}
              checked={inputValue==='Slider'}
              inline
            />
            <Form.Check
              type="radio"
              label="Radio Button"
              name={name}
              id="option-2"
              value="Radio"
              onChange={(e)=>setinputValue(e.target.value)}
              checked={inputValue==='Radio'}
              inline
            />
          </Form.Group>
        </div>
      </Card>
    </div>
  );
};



const AddSurvey = () => {
  
  const history = useHistory();

  const goBack = () => history.goBack();

  return (
    <div className="container-data-table">
      <Card className="p-3 table-white-card">
        <div className="data-table">
          <div className="py-3 px-3 table-header">
            <button
              className="float-end card-close-icon btn-blank"
              onClick={goBack}
            >
              <AiOutlineClose size={25} color={"#000"} />
            </button>
            <div className="table-card-title">Add Survey</div>
          </div>
          <div className="card-content-container p-3">
            <Row>
              <Col xs={3}>
                <div className="input-form py-3 add-survey-form">
                  <div className="card-sub-title mb-1">Details</div>
                  <input
                    className="app-input"
                    type="text"
                    id="surveyname"
                    placeholder="Survey Name"
                  />
                  <AppDropDown
                    data={categoryData}
                    placeholder="Select Category"
                  />
                  <AppDropDown
                    data={notificationData}
                    placeholder="Notification Frequency"
                  />
                  <textarea
                    className="app-input"
                    type="textarea"
                    rows={10}
                    id="lname"
                    placeholder="Question"
                  />
                  <div className="mb-1">
                    <Form.Label>Input Type</Form.Label>
                    <Form.Group>
                      <Form.Check
                        type="radio"
                        label="Slider"
                        name="options"
                        id="option-1"
                        defaultChecked
                        inline
                      />
                      <Form.Check
                        type="radio"
                        label="Radio Button"
                        name="options"
                        id="option-2"
                        inline
                      />
                    </Form.Group>
                  </div>
                  <div className="btn-container">
                    <button className="btn-small-outline w-100">
                      Add Question
                    </button>
                  </div>
                  <div className="btn-container">
                    <button className="btn-small-primary w-100">
                      Add Survey
                    </button>
                  </div>
                </div>
              </Col>
              <Col xs={9}>
                <div className="survey-form-right-container py-3 px-5">
                  <div className="card-sub-title">Questions</div>
                  <div className="sf-r-qn-container">
                    <QuestionCard count={1} inputType={"Radio"} name ={"one"} />
                    <QuestionCard count={2} inputType={"Slider"}  name ={"two"} />
                    <QuestionCard count={3} inputType={"Slider"}  name ={"three"} />
                    <QuestionCard count={4} inputType={"Radio"}  name ={"four"} />
                    <QuestionCard count={5} inputType={"Slider"} name={"five"} />
                    <QuestionCard count={6} inputType={"Slider"}  name={"six"} />
                    <QuestionCard count={7} inputType={"Radio"}  name={"seven"} />
                    <QuestionCard count={8} inputType={"Radio"}  name={"eight"} />
                    <QuestionCard count={9} inputType={"Slider"}  name={"nine"} />
                    <QuestionCard count={10} inputType={"Radio"}  name={"ten"} />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AddSurvey;
