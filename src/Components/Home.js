import React from "react";
import Links from "./links";
import Profile from "./profile";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className='main-wrap'>
        <Profile />
        <Links />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
