import React, { useEffect } from 'react';

const HealthForge = () => {
  useEffect(() => {
    // Check if the user is logged in
    if (!localStorage.getItem('isLoggedIn')) {
      // Redirect to the login page if not logged in
      window.location.href = 'login.html';
    }
  }, []);

  return (
    <div>
      {/* Wrapper */}
      <div id="wrapper">

        {/* Header */}
        <header id="header">
          <div className="inner">
            {/* Logo */}
            <a href="index.html" className="logo">
              <span className="symbol"><img src={require('./images/logo2.png')} alt="" /></span>
              <span className="title">Doctor Chat Bot</span>
            </a>
          </div>
        </header>

        {/* Main */}
        <div id="main">
          <div className="inner">
            <h1>Past patient data</h1>
            <iframe width="1300" height="500" src="https://connectnpedu-my.sharepoint.com/:x:/g/personal/s10242330_connect_np_edu_sg/EXH3mXjm6O9Di8Knnu5dFnQBWe5syMzRaodUWkVF3Qs3iA?e=OF3CpV&action=embedview&wdbipreview=true"></iframe>
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
    </div>
  );
}

export default HealthForge;
