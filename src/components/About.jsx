import React from "react";
import colorScheme from "./../assests/colorScheme.svg";

const About = (props) => {
  const { bgColor2, txtColor2, accentColor2 } = props;
  return (
    <section
      id="about"
      className="w-[100%] flex flex-row items-center p-8"
      style={{ background: `${bgColor2}` }}
    >
      <div className="w-[45%]  p-4 hidden md:block ">
        <img src={colorScheme} className="w-[100%]" alt="color scheme" />
      </div>
      <div className="w-[100%] md:w-[45%] p-4 ">
        <h1
          className="w-[100%] md:w-[80%]  mx-auto p-4 text-xl md:text-4xl text-center"
          style={{ borderBottom: `${accentColor2} solid 2px` }}
        >
          Choose your colorscheme
        </h1>
        <p
          className="text-lg md:text-2xl tracking-wide mt-6 font-light text-left "
          style={{ color: `${txtColor2}` }}
        >
          Choosing a colorscheme for your website is a crucial design decision.
          Colors can convey emotions, establish brand identity, and impact user
          experience. Start by considering your target audience and the message
          you want to convey. Use color psychology to select hues that align
          with your goals – warm tones for excitement, cool for trustworthiness,
          etc. Ensure readability with high contrast between text and background
          colors. Consistency is key. Stick to a limited color palette to
          maintain a cohesive look and feel throughout your site. Consider
          accessibility, ensuring your colors are readable for all users,
          including those with visual impairments. Remember that colors can
          influence navigation and call-to-action buttons, guiding users to
          desired actions. Regularly test and refine your colorscheme to improve
          user engagement and overall aesthetics. A well-thought-out colorscheme
          can greatly enhance the visual appeal and effectiveness of your
          website.
          <br />
          <span className="font-bold text-sm md:text-lg italic">
            Note: use colors button in the navbar to choose colors
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
