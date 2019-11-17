import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeWrap from "./wrappers/HomeWrap";
import giphyLogo from "./assets/Poweredby_100px-Black_VertText.png";

const videoStyle = {
  width: "600px",
  position: "absolute",
  left: "50%",
  marginLeft: "-300px",
  top: "30%"
};

const giphyStyle = {
  position: "absolute",
  right: "100px",
  width: "100px",

  top: "30%"
};

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      reset: "Reset",
      goodNews: "Good News",
      badNews: "Bad News",
      giphyData: {},
      man: "",
      attributes: ""
    };
  }

  // The tick function sets the current state. TypeScript will let us know
  componentDidMount() {
    let key = "1NQvFtwd9omYwLMdMfXpb71tQJWeOIWt";
    const url = `https://api.giphy.com/v1/gifs/SUQY8unAULeCvBS0Rl?&api_key=${key}&limit=5`;

    fetch(url)
      .then(resp => resp.json())
      .then(res => {
        console.log(res);

        this.setState({
          giphyData: { ...res }
        });
      });
  }

  toggleClass = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };

  handleBadNews = () => {
    this.setState({
      active: true,
      man: "",
      reset: "reset",
      attributes: "",
      goodNews: "Good News"
    });
  };

  handleReset = () => {
    this.setState({
      active: false,
      man: this.state.giphyData.data.images.hd.mp4,
      attributes: giphyLogo,
      reset: "Are You Ready To Work"
    });
  };

  handleGoodNews = () => {
    this.setState({
      goodNews: "Sorry Still Bad!",
      active: true
    });
  };

  render() {
    const { active, reset, goodNews, badNews, man, attributes } = this.state;
    return (
      <HomeWrap>
        <a href="https://giphy.com/">
          {" "}
          <img src={attributes} style={giphyStyle} />
        </a>

        <h1 className="head">SAD COOKIE</h1>

        <div className="cookie">
          <div
            onClick={this.toggleClass}
            className={`cookie-eye sad ${active ? "active" : null}`}
          >
            <div
              className={` cookie-rim  sad ${active ? "active" : null}`}
            ></div>
          </div>

          <div className="left-foot"></div>

          <div className="right-foot"></div>
        </div>

        {/* end of cookie*/}

        {/*CONTROLS AREA*/}

        <div className="news-wrapper">
          <button onClick={this.handleBadNews}>
            <div className="good-news news sad">
              <h4>{badNews}</h4>
            </div>
          </button>

          <button
            onClick={this.handleGoodNews}
            className={`news good-news sad ${active ? "active" : null}`}
          >
            <h4>{goodNews}</h4>
          </button>
        </div>

        <button type="button" className="reset sad" onClick={this.handleReset}>
          <h4>{reset}</h4>
        </button>
        <div>
          <video
            playsInline={true}
            loop={true}
            autoPlay
            style={videoStyle}
            src={man}
          />
        </div>
      </HomeWrap>
    );
  }
}

export default App;
