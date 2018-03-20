import React from "react";
import { Container, Grid, Icon } from "semantic-ui-react";
import { css } from "react-emotion";

const footerPrimary = css`
  margin-top: 100px;
  background-color: #363636;
  padding: 20px;
`;

const footerSecondary = css`
  padding: 10px;
  text-align: center;
  font-size: 14px;
  background-color: #272727;
  color: #888;
`;

const footerTitle = css`
  color: #fe9a76;
  font-size: 15px;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const footerInfo = css`
  font-size: 14px;
  color: #fff;
`;

const footerInfoBlock = css`
  color: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const footerAddress = css`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Footer = () => (
  <div>
    <div className={footerPrimary}>
      <Container>
        <Grid stackable columns={2}>
          <Grid.Row>
            <Grid.Column width={8}>
              <div className={footerInfoBlock}>
                <Icon color="orange" name="point" />
                <div className={footerAddress}>
                  <span>11 Spartacus Street</span>
                  <span>
                    <strong>Chisinau, Moldova</strong>
                  </span>
                </div>
              </div>
              <div className={footerInfoBlock}>
                <Icon color="orange" name="phone" />
                <span>+1 555 123456</span>
              </div>
              <div className={footerInfoBlock}>
                <Icon color="orange" name="mail" />
                <span>support@company.com</span>
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <div className={footerTitle}>About the company</div>
              <div className={footerInfo}>
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
    <div className={footerSecondary}>
      © 2018 Titanium - Designed with <Icon color="red" name="heart" /> by
      Glavan
    </div>
  </div>
);

export default Footer;
