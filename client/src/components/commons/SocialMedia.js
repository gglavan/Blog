import React, { Component } from "react";

class SocialMedia extends Component {
  socialMediaLinks = [
    ["https://facebook.com", "fab fa-facebook-f"],
    ["https://twitter.com", "fab fa-twitter"],
    ["https://instagram.com", "fab fa-instagram"],
    ["https://pinterest.com", "fab fa-pinterest"],
    ["https://facebook.com", "fab fa-google-plus-g"]
  ];
  render() {
    return (
      <div className="nav-block-right">
        {this.socialMediaLinks.map(link => {
          return (
            <a href={link[0]}>
              <i className={link[1]} />
            </a>
          );
        })}
      </div>
    );
  }
}

export default SocialMedia;
