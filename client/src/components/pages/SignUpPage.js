import React from "react";
import { Container, Grid, Segment, Header, Icon } from "semantic-ui-react";
import styled from "react-emotion";
import SignUp from "../commons/SignUp";

const SignFormWrapper = styled("div")`
  min-height: calc(100vh - 265px);
  margin-top: 10%;
`;

const SignUpPage = () => (
  <SignFormWrapper>
    <Container>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={5}>
            <Header as="h2" icon textAlign="center">
              <Icon name="setting" />
              <Header.Content>REGISTER</Header.Content>
            </Header>
            <Segment>
              <SignUp />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </SignFormWrapper>
);

export default SignUpPage;
