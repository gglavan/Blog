import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { css } from "react-emotion";
import history from "../../history";

const primaryBlock = css`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const fourOhFour = css`
  padding: 100px;
  background-color: #e9535d;
  color: #fff;
  font-size: 100px;
`;

const infoPrimary = css`
  margin-top: 20px;
  color: #464646;
  font-size: 60px;
`;

const infoSecondary = css`
  color: #464646;
  font-size: 18px;
  margin: 20px 0 10px 0;
`;

class NotFoundPage extends Component {
  componentWillMount() {
    if (!localStorage.getItem("token")) {
      history.push("/signin");
    }
  }
  render() {
    return (
      <div className={primaryBlock}>
        <div className={fourOhFour}>404</div>
        <h1 className={infoPrimary}>Page Not Found</h1>
        <div className={infoSecondary}>
          {`Looks like you've followed a broken link or entered a URL that doesn't exist on this site`}
        </div>
        <Link to="/">
          <Icon name="pointing right" />
          {"Back to our site"}
        </Link>
      </div>
    );
  }
}

export default NotFoundPage;
