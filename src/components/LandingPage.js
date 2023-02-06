import React from "react";
import "../styles/LandingPage.css";
import Footer from "./Navbar-footer/Footer";

const HomePage = () => {
  return (
    <div id="landingPage-container">
      {/* <h1>DRIBBLY</h1> */}
      {/* <h2>Techies Space</h2> */}
      <section id="services">
        <h3 id="servicesTitle">
          <span>Services</span>
        </h3>

        <div id="services-container">
          <div id="servicesOffered">
            <div id="servicePic"></div>
            <h3 id="serviceName">For Designers</h3>
            <p id="serviceDescription">Portfolio creation made easy.</p>
          </div>

          <div className="freeLancer" id="servicesOffered">
            <div id="servicePic2"></div>
            <h3 id="serviceName">For Freelancers</h3>
            <p id="serviceDescription"> Fresh leads in your inbox every day.</p>
          </div>

          <div id="servicesOffered">
            <div id="servicePic3"></div>
            <h3 id="serviceName">For Teams</h3>
            <p id="serviceDescription">
              Build your team's pipeline or profile.
            </p>
          </div>
        </div>
      </section>
      <h3 className="gridSectionHeader" id="servicesTitle">
        <span id="featuresTitle">Features</span>
      </h3>
      <div id="container">
        <div className="card1" id="card">
          <div id="iconDiv">
            <i id="featureIcons" className="material-icons">add_circle</i>
          </div>
          <div id="featureDetails">
            <h4>Create<span>.</span></h4>
            <p>Create your dream project with just just two simple steps.</p>
          </div>
        </div>
        <div className="card2" id="card">
        <div id="iconDiv">
        <i id="featureIcons" className="material-icons">edit</i>
        </div>
          <div className="update" id="featureDetails">
            <h4>Update<span>.</span></h4>
            <p>Simply just click on the area you want to change and then save the changes :)</p>
          </div>
        </div>
        <div className="card3" id="card">
        <div id="iconDiv">
        <i id="featureIcons" className="material-icons">delete</i>
        </div>
          <div id="featureDetails">
          <h4>Delete<span>.</span></h4>
          <p>permanently delete a project from your account by pressing the bin button.</p>
          </div>
        </div>
        {/* <div className="card4" id="card"></div>
        <div className="card5" id="card"></div>
        <div className="card6" id="card"></div> */}
      </div>
      {/* <section id="about">
        <h3>About Us</h3>
        <p>Dribble showcases enormous technical talents around the globe.
           Discover the world's top creatives and designs.</p>
      </section> */}
      <section id="reviews">
        <br />
        <br />
        <h3 className="reviewsTitle" id="servicesTitle">
          <span>Reviews</span>
        </h3>
        <div id="reviews-container">
          <div className="customer" id="customer1">
            <p>
              "This app is a game changer for anyone looking to showcase their
              technical skills. It's easy to use and has a great community of
              users who are all eager to help each other out. Highly recommend!"
            </p>
          </div>
          <div className="customer" id="customer2">
            <p>
              "I've been using this app for a few weeks now and I'm really
              impressed. It's a great platform for developers to show off their
              work and get feedback from other talented individuals. A must-have
              for any developer's toolkit."
            </p>
          </div>
          <div className="customer" id="customer3">
            <p>
              "The user interface is intuitive and easy to navigate. The
              community is also very supportive and always willing to help with
              any questions or issues. I would highly recommend this app to
              anyone looking to showcase their technical talents."
            </p>
          </div>
        </div>
        <div id="userDetails-container">
          <div className="user1" id="user">
            <div className="profile1" id="userProfile"></div>
            <div id="userDetils">
              <h6 id="userName">Ernest</h6>
              <h6 id="userOccupation">Designer</h6>
            </div>
          </div>
          <div className="user2" id="user">
            <div className="profile2" id="userProfile"></div>
            <div id="userDetils">
              <h6 id="userName">Jeff</h6>
              <h6 id="userOccupation">Developer</h6>
            </div>
          </div>
          <div className="user3" id="user">
            <div className="profile3" id="userProfile"></div>
            <div id="userDetils">
              <h6 id="userName">Diana</h6>
              <h6 id="userOccupation">Freelancer</h6>
            </div>
          </div>
        </div>

        {/* <ul>
          <li>
            <h4>Customer 1</h4>
            <p></p>
          </li>
          <li>
            <h4>Customer 2</h4>
            <p></p>
          </li>
        </ul> */}
      </section>
      <div id="about-container">
        <h4>About</h4>
        <br />
        <p>
          Welcome to our website for developers! Here, you will find a variety
          of resources and tools to help you advance your skills and knowledge
          in the field. Whether you're just starting out or have years of
          experience, we have something for everyone. Our goal is to help you
          become a better developer and stay ahead of the curve in the
          ever-changing world of technology.
          <br />
          <br />
          We strive to provide you with the most relevant and useful information
          and resources available, so you can continue to grow and excel in your
          career. Thank you for visiting our website, and we hope you find it to
          be a valuable resource in your journey as a developer.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
