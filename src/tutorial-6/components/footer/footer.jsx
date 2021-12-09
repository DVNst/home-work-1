import { Fragment } from "react";

import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <br />
      <Navbar bg="light" style={{ paddingLeft: 20 }}>
        <Navbar.Brand href="#home">My site (c) 2021</Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Footer;
