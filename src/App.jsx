import React from "react";
import "./App.css";
import { Layout } from "antd";
import AppHeader from "./Components/Common/Header";
import Home from "./Views/Home";
import About from "./Components/Home/About";
import Features from "./Components/Home/Features";
import Works from "./Components/Home/Works";
import Faq from "./Components/Home/Faq";
import Pricing from "./Components/Home/Pricing";
import Contact from "./Components/Home/Contact";
import FooterEnd from "./Components/Common/Footer";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Home />
        <About />
        <Features />
        <Works />
        <Faq />
        <Pricing />
        <Contact />
      </Content>
      <Footer>
        <FooterEnd />
      </Footer>
    </Layout>
  );
}

export default App;
