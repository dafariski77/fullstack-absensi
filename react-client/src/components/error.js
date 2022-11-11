import { Container, Button } from "react-bootstrap";

const Error = () => {
  const goHome = () => window.location.replace("/");
  return (
    <Container>
      <div className="mt-5">
        <h1>PAGE NOT FOUND</h1>
        <hr />
        <p>
          <b>Invalid URL</b> , klik button untuk menuju ke halaman Home
        </p>
        <Button variant="primary" onClick={() => goHome()}>
          Go to Home
        </Button>
      </div>
    </Container>
  );
};

export default Error;
