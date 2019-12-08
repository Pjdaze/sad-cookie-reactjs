import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeWrap from "./wrappers/HomeWrap";
import giphyLogo from "./assets/Poweredby_100px-Black_VertText.png";
3;
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
      reset: "Get Me Out",
      goodNews: "Good News",
      badNews: "Bad News",
      giphyData: {},
      man: "",
      attributes: "",
      twitch: false,
      idLists: {
        ready: "SUQY8unAULeCvBS0Rl",
        bored: "RKG36P6Eju104hvFzr",
        megaBored: "jpnTLQnsoUlL9pCs9p",
        areYouKidding: "cLkhUp50zuBpPiARgg"
      },
      buttonID: "cLkhUp50zuBpPiARgg"
    };
  }

  // The tick function sets the current state. TypeScript will let us know
  componentDidMount() {
    let key = "1NQvFtwd9omYwLMdMfXpb71tQJWeOIWt";

    const url = `https://api.giphy.com/v1/gifs/${this.state.buttonID}?&api_key=${key}&limit=5`;

    fetch(url)
      .then(resp => resp.json())
      .then(res => {
        console.log(res);

        this.setState({
          giphyData: { ...res.data }
        });
      });
  }

  getGifIds = () => {
    if (this.state.reset === "Are You Ready To Work") {
      this.setState({
        buttonID: this.state.idLists.bored,
        man: this.state.giphyData.images.hd.mp4
      });
    } else if (this.state.goodNews === "No way I'm not doing that!") {
      this.setState({
        buttonID: this.state.idLists.areYouKidding,
        man: this.state.giphyData.images.hd.mp4
      });
    }
    this.setState({
      man: ""
    });
  };

  toggleClass = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };

  toggleTwitch = () => {
    this.setState(prevState => ({ twitch: !prevState.twitch }));
  };

  handleBadNews = () => {
    this.setState({
      active: this.state.badNews === "Bad News",
      man: "",
      reset: "Get Me Out Of Here",
      attributes: null,
      goodNews: "Good News",
      badNews: "Bad News",
      twitch: false
    });
  };

  handleReset = () => {
    this.setState({
      active: false,
      man: this.state.giphyData.images.hd.mp4,
      attributes: giphyLogo,
      reset: "Are You Ready To Work",
      badNews: "Yes",
      goodNews: "No way I'm not doing that!",
      twitch: false
    });
  };

  handleGoodNews = () => {
    this.setState({
      goodNews:
        this.state.goodNews === "Good News"
          ? "You are not you, but i have job for you"
          : this.state.goodNews === "No way I'm not doing that!"
          ? "I'll Give You 6 Mo To Think About It."
          : "Click That You Are Ready.. or you'll get a year!",
      active: false,
      man: this.state.giphyData.images.hd.mp4,
      badNews: "Bad News",
      twitch: !this.state.twitch
    });
  };

  render() {
    const {
      active,
      reset,
      goodNews,
      badNews,
      man,
      attributes,
      twitch
    } = this.state;
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
            className={`cookie-eye sad ${
              active ? "active" : twitch ? "twitch" : null
            }`}
          >
            <div className={` cookie-rim  sad ${active && "active"}`}></div>
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
            onClick={goodNews ? this.handleGoodNews : this.handleTwitch}
            className={`news good-news sad ${active && "active"}`}
          >
            <h4>{goodNews}</h4>
          </button>
        </div>

        <button
          type="button"
          onClick={this.setClickOption}
          className="reset sad"
          onClick={this.handleReset}
        >
          <h4>{reset}</h4>
        </button>
        <div>
          <video
            type="video/mp4"
            playsInline={true}
            loop={true}
            autoPlay={true}
            style={videoStyle}
            src={man}
          />
        </div>
      </HomeWrap>
    );
  }
}

export default App;
