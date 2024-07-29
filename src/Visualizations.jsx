import React from 'react';

const Generic = () => (
  <html>
    <head>
      <title>Generic - Phantom by HTML5 UP</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <link rel="stylesheet" href="./main.css" />
      <noscript><link rel="stylesheet" href="./noscript.css" /></noscript>
    </head>
    <body className="is-preload">
      {/* Wrapper */}
      <div id="wrapper">

        {/* Header */}
        <header id="header">
          <div className="inner">

            {/* Logo */}
            <a className="logo">
              <span className="symbol"><img src={require('./images/logo2.png')} alt="" /></span>
              <span className="title">Doctor Chat Bot</span>
            </a>

          </div>
        </header>

        {/* Main */}
        <div id="main">
          <div className="inner">
            <h1>Visuals of patient data</h1>
            <span className="image main"><img src={require('./images/vis1.jpg')} alt="" style={{ width: '1000px', height: 'auto' }} /></span>
            <p></p>

            <span className="image main"><img src={require('./images/vis2.jpg')} alt="" style={{ width: '1000px', height: 'auto' }} /></span>

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

      {/* Scripts */}
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/browser.min.js"></script>
      <script src="assets/js/breakpoints.min.js"></script>
      <script src="assets/js/util.js"></script>
      <script src="assets/js/main.js"></script>

    </body>
  </html>
);

export default Generic;
