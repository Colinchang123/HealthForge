import React, { useEffect } from 'react';
import './App.css'; // Import your main application styles
import './main.css'; // Import your main.css file
import { useLocation, useNavigate } from 'react-router-dom';

// Component function
const Home = () => {
  const navigate = useNavigate();

  // Function to handle navigation to different pages
  const handleAccessChatBot = () => {
    navigate('/Generic');
  };

  const handleAccessVisual = () => {
    console.log('Navigating to Visualizations');
    navigate('/Visualizations');
  };

  const handleAccessData = () => {
    navigate('/Data');
  };

  useEffect(() => {
    // Any additional initialization logic can go here
    // Example: redirect based on some condition or state

    // For demonstration, you might want to navigate somewhere
    // e.g., if (someCondition) navigate('/somewhere');

  }, [navigate]); // Include navigate in the dependency array

  // Return JSX structure
  return (
    <div className="App" style={{ backgroundImage: `url(${require('./images/images.jpg')})`, backgroundSize: '2900px 2000px', backgroundPosition: '-300px 0px', backgroundRepeat: 'no-repeat' }}>
      <div id="wrapper">
        {/* Header */}
        <header id="header">
          <div className="inner">
            {/* Logo */}
            <a href="index.html" className="logo">
              <span className="symbol"><img src={require('./images/logo2.png')} alt="" /></span>
              <span className="title">Health Forge</span>
            </a>
          </div>
        </header>

        {/* Main */}
        <div id="main" className="inner">
          <header>
            <h1>Empowering Doctors, Transforming Care: Welcome to the Future of Medicine.</h1>
            <p>With Doctor Chat Bot, you will be able to predict need for ICU stays for your patients, schedule Appointments, get answers to any medical queries</p>
            <p>access existing patient data, access the Meta hospital and view insightful dashboards. </p>
          </header>
          <section className="tiles">
            {/* Tile articles */}
            <article className="style1 small-article">
              <span className="image">
                <img src={require('./images/pic01.jpg')} alt="" />
              </span>
              {/* Use onClick to call handleAccessChatBot function */}
              <a href="#" onClick={(e) => { e.preventDefault(); handleAccessChatBot(); }}>
                <h2>Access the chat bot</h2>
                <div className="content">
                  <p>Using the chat bot, you will be able to predict mortality rates and ICU stays for your patients.</p>
                </div>
              </a>
            </article>
            <article className="style2 small-article">
              <span className="image">
                <img src={require('./images/pic02.jpg')} alt="" />
              </span>
              <a href="https://www.spatial.io/s/miccuthemans-Lo-Fi-Scene-662b2cd7b3bd8b7727b01de2?share=8186157624944434813">
                <h2>Visit the Meta Hospital</h2>
                <div className="content">
                  <p>Visit the Meta world created to simulate hospitals</p>
                </div>
              </a>
            </article>
            <article className="style3 small-article">
              <span className="image">
                <img src={require('./images/pic03.jpg')} alt="" />
              </span>
              <a href="#" onClick={(e) => { e.preventDefault(); handleAccessVisual(); }}>
                <h2>Visualizations</h2>
                <div className="content">
                  <p>View visualizations of the patient data.</p>
                </div>
              </a>
            </article>
            <article className="style4 small-article">
              <span className="image">
                <img src={require('./images/pic04.jpg')} alt="" />
              </span>
              <a href="#" onClick={(e) => { e.preventDefault(); handleAccessData(); }}>
                <h2>Patient data</h2>
                <div className="content">
                  <p>View past patient data</p>
                </div>
              </a>
            </article>
            <article className="style5 small-article">
              <span className="image">
                <img src={require('./images/pic05.jpg')} alt="" />
              </span>
              <a href="http://127.0.0.1:5000/">
                <h2>Voice Enabled Chatbot</h2>
                <div className="content">
                  <p>Use our voice enabled chatbot with a built-in Prediction Model</p>
                </div>
              </a>
            </article>
          </section>
        </div>

        {/* Footer */}
        <footer id="footer">
          <div className="inner">
            <section>
              <h2>Get in touch</h2>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field half">
                    <input type="text" name="name" id="name" placeholder="Name" />
                  </div>
                  <div className="field half">
                    <input type="email" name="email" id="email" placeholder="Email" />
                  </div>
                  <div className="field">
                    <textarea name="message" id="message" placeholder="Message"></textarea>
                  </div>
                </div>
                <ul className="actions">
                  <li><input type="submit" value="Send" className="primary" /></li>
                </ul>
              </form>
            </section>

            <ul className="copyright">
              <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </footer>
      </div>

    </div>
  );
}

export default Home;
