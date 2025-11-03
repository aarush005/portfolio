import { BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { Navbar, Hero, StarsCanvas } from "./components";

// Lazy load heavier sections
const About = React.lazy(() => import("./components/About"));
const Experience = React.lazy(() => import("./components/Experience"));
const Tech = React.lazy(() => import("./components/Tech"));
const Works = React.lazy(() => import("./components/Works"));
const Contact = React.lazy(() => import("./components/Contact"));
// const Feedbacks = React.lazy(() => import("./components/Feedbacks"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Wrap lazy components in Suspense */}
        <Suspense fallback={<div className="text-center text-white py-10">Loading...</div>}>
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
