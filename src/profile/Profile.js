import React from "react";
import PropTypes from "prop-types";

const Profile = ({
  fullName = "GoMyCode",
  bio = "Training Center",
  profession = "IT Sector",
  handleName,
  children,
}) => {
  const nameStyle = { fontSize: "2rem", fontWeight: 500, color: "#0303fc" };
  const detailStyle = {
    fontSize: "1.4rem",
    color: "#000",
    letterSpacing: "0.06rem",
  };
  handleName(fullName);
  return (
    <div>
      <div>{children}</div>
      <div style={nameStyle}>{fullName}</div>
      <div style={detailStyle}>{bio}</div>
      <div style={detailStyle}>{profession}</div>
    </div>
  );
};

Profile.propTypes = {
  children: PropTypes.element,
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
};

export default Profile;
