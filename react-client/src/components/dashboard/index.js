import { useEffect, useState } from "react";
import { Badge, Button, Container } from "react-bootstrap";
import { logout } from "./logout";
import axios from "axios";
import Edit from "./edit";

function Dashboard({ title }) {
  const [absensiList, setAbsensiList] = useState([]);
  const [absenNotif, setAbsenNotif] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("nama") && !localStorage.getItem("nip")) {
      console.log("user belum login");
      window.location.replace("/login");
    }

    axios({
      method: "GET",
      url: "http://localhost:3000/absensi",
    }).then((result) => setAbsensiList(result.data.absensi));
  }, [absenNotif]);

  const absen = (params) => {
    const requestingData = {
      nip: localStorage.getItem("nip"),
    };
    axios({
      method: "POST",
      url: `http://localhost:3000/absensi/${params}`,
      data: requestingData,
    }).then((result) => {
      setAbsenNotif(!absenNotif);
    });
  };

  return (
    <Container>
      <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">{localStorage.getItem("nip")}</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <Button
              variant="success"
              className="mx-3"
              onClick={() => window.location.replace("/edit")}
            >
              Edit Profile
            </Button>
            <Button onClick={() => logout()} variant="danger">
              Logout
            </Button>
          </div>
        </div>
        <h2>Hello, {localStorage.getItem("nama")}</h2>
        <p>Selamat Datang {localStorage.getItem("nama")}, kamu bisa melihat data absensi, checkin, checkout, dan edit profile pada halaman ini</p>
        <div className="my-5">
          <h6>Data Absensi</h6>
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-sm">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">NIP</th>
                  <th scope="col">Status</th>
                  <th scope="col">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {absensiList.map((absensi, i) => {
                  const { users_nip, status, createdAt } = absensi;
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{users_nip}</td>
                      <td>{status}</td>
                      <td>{createdAt}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-flex gap-3 my-3 justify-content-center">
          <Badge pill bg="primary" className="btn" onClick={() => absen("checkin")}>
            Checkin
          </Badge>
          <Badge pill bg="danger" className="btn" onClick={() => absen("checkout")}>
            Checkout
          </Badge>
        </div>
      </main>
    </Container>
  );
}

export default Dashboard;
