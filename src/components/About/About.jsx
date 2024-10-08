/* STYLE SHEET  */
import "./About.css";

/* IMAGES IMPORTS */
import AboutImage from "../../assets/images/aboutimg.jpg";

const About = () => {
  return (
    <section className="about" id="about-section">
      <div className="about__container">
        <img src={AboutImage} className="about__avatar-image" alt="Author" />
        <div className="about__text">
          <h2 className="about__text-author">About the author</h2>
          <p className="about__text-bio">
            Hello! I'm Andres Lauson, a software developer with expertise in a
            broad spectrum of technologies including JavaScript, AWS, SQL,
            React, Node.js, Express.js, HTML, CSS, MongoDB, and Google Cloud.
            <br></br>
            <br></br>
            My coding journey began at TripleTen Academy, where I honed my
            skills through rigorous training, preparing me to tackle complex
            development challenges head-on. Whether it's designing intuitive
            user interfaces with React or building robust backend systems with
            Node.js, I bring a deep understanding and practical experience to
            each project. If you're looking to elevate your digital solutions or
            streamline your technological processes, I'm here to deliver
            strategic insights and powerful results. Let's work together to turn
            your vision into reality, one line of code at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
