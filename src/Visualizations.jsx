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
            <span className="image main"><img src={require('./images/Viz1.png')} alt="" style={{ width: '1000px', height: 'auto' }} /></span>
            <li>Patient Demographic : This dashboard provides a comprehensive overview of the patient population demographics and characteristics. It includes visualizations for the distribution of patients by gender, age category, race, priority category, surgical risk category, ASA category, anesthesia type, and smoking status. General key metrics such as the total number of patients, number of ICU patients, number of deaths, and the average age of patients are highlighted at the top. This dashboard aims to provide an understanding the overall makeup of the patient population and identifying any notable trends or distributions.</li>
            <p></p>
            <span className="image main"><img src={require('./images/Viz2.png')} alt="" style={{ width: '1000px', height: 'auto' }} /></span>
            <li>Preoperative Risk Analysis : This dashboard provides an analysis of preoperative risk factors to identify patients at higher risk for adverse outcomes. It includes visualizations for the distribution of patients by ASA category, RCRI score, anemia category, grade of kidney disease, and FTND scores. Key metrics such as the total number of patients are highlighted at the top. This dashboard helps in assessing the preoperative health status of patients, identifying high-risk groups, and understanding the distribution of various risk factors within the patient population. It provides valuable insights for preoperative planning and risk stratification.</li>
            <p></p>
            <span className="image main"><img src={require('./images/Viz3.png')} alt="" style={{ width: '1000px', height: 'auto' }} /></span>
            <li>Postoperative Mortality Analysis : This dashboard focuses on analyzing postoperative mortality data to identify patterns and factors associated with mortality. It includes visualizations for the gender and age distribution of patients who experienced postoperative mortality, their smoking status, FTND scores, ASA category, surgical risk category, anemia category, and 24-hour ICU admission status. Metrics such as the total number of patients, ICU patients, and the average age of patients who experienced mortality are highlighted at the top. This dashboard aids in understanding the demographics and clinical characteristics of patients who died postoperatively, providing insights into potential risk factors contributing to postoperative mortality.</li>

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
