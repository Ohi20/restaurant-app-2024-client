import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./popularMenu/PopularMenu";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import CallNow from "./CallNow/CallNow";

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <CallNow></CallNow>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
}

export default Home;
