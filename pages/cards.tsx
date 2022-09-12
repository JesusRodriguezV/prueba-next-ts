import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import { Col, Container, Row } from "react-bootstrap";
import CustomCard from "../components/CustomCard";
import Card from "../types/card.d";

export const getServerSideProps: GetServerSideProps = async (_) => {
  return axios
    .get("http://localhost:3000/api/cards")
    .then((response) => {
      const data = response.data;
      return { props: { data } };
    })
    .catch((e) => {
      console.log(e);
      return { props: { data: [] } };
    });
};

const Cards: NextPage<{ data: Card[] }> = ({ data }) => {
  const CustomCards = data.map((card) => {
    return (
      <Col key={card.id}>
        <CustomCard
          title={card.title}
          body={card.body}
          img={card.img}
          id={card.id}
        ></CustomCard>
      </Col>
    );
  });

  return (
    <Container fluid>
      <h1>Test</h1>
      <Row>{CustomCards}</Row>
    </Container>
  );
};

export default Cards;
