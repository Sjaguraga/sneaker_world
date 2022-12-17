import React from "react";

import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes.footer}>
      <p>S N E A K E R W O R L D</p>
      {/* {new Date().getFullYear()} */}
    </div>
  );
};

export default Footer;
