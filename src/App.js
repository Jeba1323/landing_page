import './App.css';
import logo from './Static/logo.png';
function App() {
    const url = '#'
  return (
      <div className={"header"}>
          <div className={"headerMain"}>
              <div className={"logo"}>
                  <img src={logo}  alt="logo" style={{width: '3%', height:25}}/>
                  DIVSHOT
                  <li><a href={url} className={"one"}>FEATURES</a></li>
                  <li><a href={url} className={"two"}>PRICING</a></li>
                  <li><a href={url} className={"three"}>BLOG</a></li>
                  <li><a href={url} className={"four"}>MORE</a></li>
                  <li><a href={url} className={"five"}>DOCS</a></li>
                  <li><a href={url} className={"six"}>SUPPORT</a></li>
                  <li><a href={url} className={"seven"}>LOGIN</a></li>
                  <li><a href={url} className={"eight"}>SIGN UP FREE</a></li>
              </div>
      <div className={"mainMenu"}>
          <ul className={"demo"}>
          </ul>
      </div>
          <div className={"app"}>
              <img src={logo}  alt="logo" style={{}}/>
              <h1> Simple Static Web Hosting</h1>
              <h3>One platform for static apps</h3>
              <a href={url} className="button">SIGN UP FOR FREE</a>
              <h6>No credit card required</h6>
          </div>
          </div>
      </div>
  );
}

export default App;
