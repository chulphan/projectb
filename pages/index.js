import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import Navbarr from "../components/Navbar";
const Index = () => (
  <div>
    <Navbarr />
    <p>Hello Next.js</p>
    <Button color="danger">Danger!</Button>
    <p className="lead">
      This is a simple hero unit, a simple Jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
  </div>
);

export default Index;
