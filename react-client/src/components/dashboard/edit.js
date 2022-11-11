import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { logout } from "./logout";
import axios from "axios";

const Edit = ({ title }) => {
  const [nama, setNama] = useState(localStorage.getItem("nama"));
  const [password, setPassword] = useState("");
  const [passwordBaru, setPasswordBaru] = useState("");

  const updateProfile = () => {
    const requestingData = {
      nip: localStorage.getItem("nip"),
      nama: nama,
      password: password,
      passwordBaru: passwordBaru,
    };

    axios({
      method: "PUT",
      url: "http://localhost:3000/users",
      data: requestingData,
    }).then(() => {
      alert("anda akan keluar dari sistem, silahkan login kembali...");
      logout();
    });
  };

  return (
    <Container>
      <Form className="my-4">
        <h3>{title}</h3>
        <Form.Group>
          <Form.Label>Nama</Form.Label>
          <Form.Control
            onChange={(event) => setNama(event.target.value)}
            defaultValue={localStorage.getItem("nama")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password Lama</Form.Label>
          <Form.Control onChange={(event) => setPassword(event.target.value)} />
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>Password Baru</Form.Label>
          <Form.Control onChange={(event) => setPasswordBaru(event.target.value)} />
          <Form.Text className="text-muted">
            Silahkan masukan password lama anda. Anda diharuskan melakukan login ulang
            setelah mengupdate password
          </Form.Text>
        </Form.Group>
        <br />
        <Button onClick={() => window.location.replace('/dashboard')} variant="outline-secondary">Cancel</Button>
        <Button onClick={() => updateProfile()} className="mx-4">Update Profile</Button>
      </Form>
    </Container>
  );
};

export default Edit;
