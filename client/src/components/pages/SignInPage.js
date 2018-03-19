import React from "react";
import { Container, Grid, Segment, Header, Icon } from "semantic-ui-react";
import styled from "react-emotion";
import SignIn from "../commons/SignIn";

const SignFormWrapper = styled("div")`
  min-height: calc(100vh - 265px);
  margin-top: 10%;
`;

const SignInPage = () => (
  <SignFormWrapper>
    <Container>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={5}>
            <Header as="h2" icon textAlign="center">
              <Icon name="user circle" />
              <Header.Content>SIGN IN</Header.Content>
            </Header>
            <Segment>
              <SignIn />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </SignFormWrapper>
);

export default SignInPage;
