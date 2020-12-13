import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Heading from "../layout/Heading";
import { BASE_URL } from "../../constants/api";

function GameDetail() {
	const [detail, setDetail] = useState(null);
	const [loading, setLoading] = useState(true);
	
	let { id }  = useParams();

	const url = BASE_URL + '/' + id;

	useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setDetail(json))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));

	}, []);
	
	if (loading) {
		return <Spinner animation="border" className="spinner" />;
	}

	return (
    <>
      <Heading content={detail.name}></Heading>
      
      <Row>
        <Col>
          <Image className="img-fluid" src={detail.background_image}/>  
        </Col>
        <Col>
          <p>{detail.description}</p>
        </Col>
      </Row>
    </>	
	);
}

export default GameDetail;