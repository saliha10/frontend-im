import React, { useState } from "react";
import { NextPage } from "next";
import { Input, Label, Row, Col, Form, FormGroup } from "reactstrap";
import Breadcrumb from "../../Containers/Breadcrumb";

const Profile: NextPage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      {/* <!-- personal detail section start --> */}
      <section className="contact-page register-page section-big-py-space bg-light">
        <div className="custom-container">
          <Row className="row">
            <Col lg="6">
              <h3 className="mb-3">PERSONAL DETAIL</h3>
              <Form className="theme-form">
                <div className="form-row row">
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="name">First Name</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Your name"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="email">Last Name</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="last-name"
                        placeholder="Last Name"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="review">Phone number</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="review"
                        placeholder="Enter your number"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <div>
                      <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          required
                          disabled={!isEditing}
                        />
                      </FormGroup>
                    </div>
                  </Col>
                  <Col className="col-md-12">
                    <div>
                      <Label htmlFor="review">Write Your Message</Label>
                      <textarea
                        className="form-control mb-0"
                        placeholder="Write Your Message"
                        id="exampleFormControlTextarea1"
                        disabled={!isEditing}
                      ></textarea>
                    </div>
                  </Col>
                  <Col md="12">
                    {isEditing ? (
                      <button
                        className="btn btn-sm btn-normal mb-lg-5 mt-3"
                        onClick={handleSaveClick}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="btn btn-sm btn-normal mb-lg-5 mt-3"
                        onClick={handleEditClick}
                      >
                        Edit
                      </button>
                    )}
                  </Col>
                </div>
              </Form>
            </Col>
            <Col lg="6">
              <h3 className="mb-3 spc-responsive">SHIPPING ADDRESS</h3>
              <Form className="theme-form">
                <div className="form-row row">
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="home-ploat">flat / plot</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="home-ploat"
                        placeholder="company name"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="address-two">Address *</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="address-two"
                        placeholder="Address"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="zip-code">Zip Code *</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="zip-code"
                        placeholder="zip-code"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6" className="select_input">
                    <FormGroup>
                      <Label>Country *</Label>
                      <select className="form-control" disabled={!isEditing}>
                        <option value="India">India</option>
                        <option value="UAE">UAE</option>
                        <option value="U.K">U.K</option>
                        <option value="US">US</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="City"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="region-state">Region/State *</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="region-state"
                        placeholder="Region/state"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    {isEditing ? (
                      <button
                        className="btn btn-sm btn-normal mb-lg-5"
                        onClick={handleSaveClick}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="btn btn-sm btn-normal mb-lg-5"
                        onClick={handleEditClick}
                      >
                        Edit
                      </button>
                    )}
                  </Col>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </section>
      {/* <!-- Section ends --> */}
    </>
  );
};

export default Profile;
