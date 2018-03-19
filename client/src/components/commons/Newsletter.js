import React from "react";
import {
  Segment,
  Header,
  Icon,
  Input,
  Container,
  Button
} from "semantic-ui-react";
import styled from "react-emotion";

const PostWrapper = styled("div")`
  margin-top: 50px;
`;

const Newsletter = () => (
  <PostWrapper>
    <Segment>
      <Container>
        <Header as="h4" textAlign="center">
          GET NEWSLETTER
        </Header>
        <Input fluid iconPosition="left" placeholder="Email">
          <Icon name="at" />
          <input />
        </Input>
        <br />
        <Button color="orange" fluid>
          Subscribe Now!
        </Button>
      </Container>
    </Segment>
  </PostWrapper>
);

export default Newsletter;
