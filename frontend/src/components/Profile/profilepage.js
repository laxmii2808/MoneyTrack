// src/components/Profile/ProfilePage.js
import React, { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    age: "",
    birthday: "",
    job: "",
    purpose: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setFormValues({
        name: storedUser.name || "",
        email: storedUser.email || "",
        age: storedUser.profile?.age || "",
        birthday: storedUser.profile?.birthday || "",
        job: storedUser.profile?.job || "",
        purpose: storedUser.profile?.purpose || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    const updatedUser = {
      ...user,
      name: formValues.name,
      email: formValues.email,
      profile: {
        age: formValues.age,
        birthday: formValues.birthday,
        job: formValues.job,
        purpose: formValues.purpose,
      },
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditMode(false);
    navigate("/"); 
  };

  return (
    <Container className="mt-5 text-white">
      <h2 className="mb-4">Profile</h2>
      {user?.avatarImage && (
        <div
          className="avatar-container mb-3"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            backgroundColor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <img
            src={user.avatarImage}
            alt="Avatar"
            style={{
              width: "90%",
              height: "90%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      {editMode && (
        <div className="text-center mb-4">
          <Button variant="warning" onClick={() => navigate("/setAvatar")}>
            Change Avatar
          </Button>
        </div>
      )}

      <Form>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                readOnly={!editMode}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                readOnly={!editMode}
              />
            </Form.Group>
          </Col>
        </Row>

        {editMode && (
          <>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    name="age"
                    value={formValues.age}
                    onChange={handleChange}
                    min={10}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control
                    type="date"
                    name="birthday"
                    value={formValues.birthday}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Job</Form.Label>
              <Form.Select
                name="job"
                value={formValues.job}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Student">Student</option>
                <option value="Working Professional">
                  Working Professional
                </option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Purpose / Motivation</Form.Label>
              <Form.Control
                as="textarea"
                name="purpose"
                rows={3}
                value={formValues.purpose}
                onChange={handleChange}
                placeholder="e.g. I want to save money and track my spending."
              />
            </Form.Group>
          </>
        )}

        {editMode ? (
          <>
            <Button variant="success" onClick={handleUpdate} className="me-2">
              Save
            </Button>
            <Button variant="secondary" onClick={() => setEditMode(false)}>
              Cancel
            </Button>
          </>
        ) : (
          <Button variant="primary" onClick={() => setEditMode(true)}>
            Edit Profile
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default ProfilePage;
