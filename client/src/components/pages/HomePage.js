import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../commons/Navbar";
import "./HomePage.css";

const HomePage = () => (
  <div>
    <Navbar />
    <div className="wallpaper" />
    <div className="greeting-block">
      <div className="greeting-primary">Welcome To My Website</div>
      <div className="greeting-secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
        necessitatibus optio quae eveniet inventore totam commodi tenetur quo
        quibusdam facilis exercitationem similique eum mollitia temporibus sunt
        labore, sint provident doloribus accusantium voluptatibus possimus
        placeat magni qui. Labore dolor ipsum exercitationem. Blanditiis dicta
        non repellat consequatur. Distinctio a at iste voluptatem?
      </div>
      <Link to="/posts">
        <button className="greeting-button">Enter</button>
      </Link>
    </div>
  </div>
);

export default HomePage;
