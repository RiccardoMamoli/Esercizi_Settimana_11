import { useState } from "react";
import { Container, Row, Col, Form, Button, Badge} from "react-bootstrap";
import Job from "./Job";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getListAction } from "../redux/actions";


const MainSearch = () => {


  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);
  const navigate = useNavigate()
  const list = useSelector((store) => store.list.arrayFav);
  const fav = useSelector((store) => store.favourites.content)
  const dispatch = useDispatch();

  function handleClick() {
    navigate('/favorites')
  }

  // const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    dispatch(getListAction(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1 text-light">Remote Jobs Search</h1>
          <Button onClick={handleClick} className="custom-button"> Favorites <Badge className="custom-badge"> {fav.length}</Badge> </Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {list.map(job => (
            <Job key={job._id} data={job} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
