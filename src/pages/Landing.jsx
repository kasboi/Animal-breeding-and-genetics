import React from "react";
import Hero from "../components/Hero";
import FormInfo from "../components/FormInfo";
import Footer from "../components/Footer";
console.log(process.env.REACT_APP_BASE_URL);
export default function Landing() {
  return (
    <>
      <Hero />
      <FormInfo />
      <Footer/>
    </>
  );
}
