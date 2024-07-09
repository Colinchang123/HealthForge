import React, { useEffect } from 'react';
import './main.css';
import './noscript.css';
import logoImage from './images/logo2.png';
import botImage from './images/bot.jpg';

const App = () => {
  useEffect(() => {
    // Check if the user is logged in
    if (!localStorage.getItem('isLoggedIn')) {
      // Redirect to the login page if not logged in
      window.location.href = 'login.html';
    }
  }, []);

  return (
    <div className="is-preload">
      {/* Wrapper */}
      <div id="wrapper">
        {/* Header */}
        <header id="header">
          <div className="inner">
            {/* Logo */}
            <a href="index.html" className="logo">
              <span className="symbol">
                <img src={logoImage} alt="" />
              </span>
              <span className="title">Doctor Chat Bot</span>
            </a>
          </div>
        </header>

        {/* Main */}
        <div id="main">
          <div className="inner">
            <h1>Your Personal Chat Bot</h1>
            <span className="image main">
              <img src={botImage} alt="" style={{ width: '400px', height: 'auto' }} />
            </span>
            <p>
              To access the chat bot, please wait for the Messenger logo to appear on the bottom right of the screen. Once it appears, click on it and sign in or create a Messanger account to use with the chat bot.
            </p>
            <p>
              When conversing with the chat bot, you will have 3 different options to choose from:
              <br />
              Scheduling an appointment: You may schedule an appointment with a patient, by providing the appointment date and patient name
              <br />
              ICU Risk calculator: Enter details of patient to have our advanced machine learning model predict the need for ICU of patient
              <br />
              AI chatbot for medical queries: Chat with a GPT powered AI to get quick answers to any medical related queries
            </p>
            <p>
              <strong style={{ fontSize: '1.2em' }}>Appointments:</strong>
              <br />
              <iframe
                width="1500"
                height="300"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQRefj0ZI9_1OVCfysAenYWbrlOQJhL7BforHTqyx9r0sVzVCogZHVYKXew2RNaIucxf7ey_H0UuB5L/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
                title="Appointments"
              ></iframe>
            </p>
          </div>
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
                  <li>
                    <input type="submit" value="Send" className="primary" />
                  </li>
                </ul>
              </form>
            </section>

            <ul className="copyright">
              <li>&copy; Untitled. All rights reserved</li>
              <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </footer>
      </div>

      {/* Scripts */}
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/browser.min.js"></script>
      <script src="assets/js/breakpoints.min.js"></script>
      <script src="assets/js/util.js"></script>
      <script src="assets/js/main.js"></script>

      {/* Chatfuel script */}
      <script
        id="662e2ea545692869ffee4eb5"
        src="https://dashboard.chatfuel.com/integration/entry-point.js"
        async
        defer
      ></script>
    </div>
  );
};

export default App;
