import "./home.css";
const Home = () => {
  return (
    <div className="main">
      <nav>
        <div className="logo">
          <img src="../../.././images/img-5.png" />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="information">
        <div id="circle">
          <div className="feature one">
            <img src="../.././images/img-2.jpg" />
          </div>
          <div className="feature two">
            <img src="../.././images/img-3.jpeg" />
          </div>
          <div className="feature three">
            <img src="../.././images/img-4.jpeg" />
          </div>
          <div className="feature four">
            <img src="../.././images/img-2.jpg" />
          </div>
        </div>
      </div>

      <div className="controls">
        <img src="#" id="upBtn" />
        <h3>Feature</h3>
        <img src="#" id="downBtn" />
      </div>
    </div>
  );
};

export default Home;
