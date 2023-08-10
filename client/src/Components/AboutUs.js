import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-div">
      <h2>About the Team</h2>
      <p>Project developed by The Sexy Motherfuckers</p>
      <p>(with a little help from Tech Educators)</p>
      <p>Check out our rad code:</p>
      <p>
        The Brain <a href="https://github.com/sarahwoolsey87">Sarah Woolsey</a>
      </p>
      <p>
        The Beauty <a href="https://github.com/JessMMartin">Jess Martin</a>
      </p>
      <p>
        The Brawn{" "}
        <a href="https://github.com/PaoloArmentano">Paolo Armentano</a>
      </p>
      <div className="video-container">
        <iframe
          src="https://player.vimeo.com/video/853018972?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="New Recording - 09/08/2023, 14:43:58"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
