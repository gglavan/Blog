import React from "react";

const SocialMedia = () => {
  const socialMediaLinks = [
    ["https://facebook.com", "fab fa-facebook-f"],
    ["https://twitter.com", "fab fa-twitter"],
    ["https://instagram.com", "fab fa-instagram"],
    ["https://pinterest.com", "fab fa-pinterest"],
    ["https://plus.google.com", "fab fa-google-plus-g"]
  ];
  return (
    <div className="nav-block-right">
      {socialMediaLinks.map(link => (
        <a href={link[0]} key={link[0]}>
          <i className={link[1]} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
