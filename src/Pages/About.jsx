import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        We're pizza alchemists, transforming simple ingredients into flavor masterpieces. From the secret family sauce simmered for hours to the hand-tossed dough blistered in our stone oven, every step is infused with passion. We don't just serve pizza; we create edible happiness, one slice at a time. More than just a pizzeria, we're your neighborhood haven. We've been fueling family dinners, birthday celebrations, and friendly gatherings for years. Whether you're cheering on your favorite team or catching up with friends, our warm atmosphere and delicious pizzas are the perfect recipe for making memories.
        </p>
      </div>
    </div>
  );
}

export default About;
