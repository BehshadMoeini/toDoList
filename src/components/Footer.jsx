import React from "react";

const date = new Date();

function Footer() {
  return (
    <footer>
      <p>All rights reserved {date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
