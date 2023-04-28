import React, { Fragment } from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Details from "../components/Details";

const Home = () => (
  <Fragment>
    <Hero />
    <hr />
    <Content />
    <Details />
  </Fragment>
);

export default Home;
