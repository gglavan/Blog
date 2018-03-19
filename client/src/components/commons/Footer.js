import React from "react";
import { Container, Grid, Icon } from "semantic-ui-react";
import "./Footer.css";

const Footer = () => (
  <div>
    <div className="footer-primary">
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <div className="footer-info-block">
                <Icon name="point" />
                <div className="footer-address">
                  <span>11 Spartacus Street</span>
                  <span>
                    <strong>Chisinau, Moldova</strong>
                  </span>
                </div>
              </div>
              <div className="footer-info-block">
                <Icon name="phone" />
                <span>+1 555 123456</span>
              </div>
              <div className="footer-info-block">
                <Icon name="mail" />
                <span>support@company.com</span>
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <div className="footer-title">About the company</div>
              <div className="footer-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate distinctio aliquid, omnis velit alias animi corrupti
                nam sed est ab officia asperiores? Provident iure qui voluptate
                inventore fugiat totam voluptatem?
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
    <div className="footer-secondary">
      © 2018 Titanium - Designed with <Icon name="heart" /> by Glavan
    </div>
  </div>
);

export default Footer;
