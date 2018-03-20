import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { css } from "react-emotion";

const wallpaper = css`
  z-index: -999;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("../../../uploads/homepage.jpeg");
  -webkit-filter: blur(2px);
  -moz-filter: blur(2px);
  -o-filter: blur(2px);
  -ms-filter: blur(2px);
  filter: blur(2px);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const greetingBlock = css`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  width: 60%;
  transform: translate(-50%, -50%);
`;

const greetingPrimary = css`
  position: relative;
  color: #fff;
  font-size: 2rem;
`;

const greetingSecondary = css`
  position: relative;
  color: #fff;
  font-size: 1rem;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const HomePage = () => (
  <div>
    <div className={wallpaper} />
    <div className={greetingBlock}>
      <h1 className={greetingPrimary}>Welcome To My Blog</h1>
      <div className={greetingSecondary}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
        necessitatibus optio quae eveniet inventore totam commodi tenetur quo
        quibusdam facilis exercitationem similique eum mollitia temporibus sunt
        labore, sint provident doloribus accusantium voluptatibus possimus
        placeat magni qui. Labore dolor ipsum exercitationem. Blanditiis dicta
        non repellat consequatur. Distinctio a at iste voluptatem?
      </div>
      <Button size="big" inverted color="orange" as={Link} to="/posts">
        Enter
      </Button>
    </div>
  </div>
);

export default HomePage;
