import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Section = styled.section``;
const Container = styled.div``;
const ColumnLeft = styled.div``;
const ColumnRight = styled.div``;

const InfoSection = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>Heading</h1>
          <p>para</p>
          <p>para</p>
          <Button to="/homes">label</Button>
        </ColumnLeft>
        <ColumnRight>
          <img scr="" alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
