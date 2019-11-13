import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeWrap from "./wrappers/HomeWrap";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      reset: "Reset",
      goodNews: "Good News",
      badNews: "Bad News",
      giphyData: {}
    };
  }
  // The tick function sets the current state. TypeScript will let us know

  toggleClass = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };

  handleBadNews = () => {
    this.setState({
      active: true
    });
  };

  handleReset = () => {
    this.setState({
      reset: "Are You Ready To Work?",
      active: false
    });
  };

  handleGoodNews = () => {
    this.setState({
      goodNews: "Sorry Still Bad!",
      active: true
    });
  };

  render() {
    const { active, reset, goodNews, badNews } = this.state;
    return (
      <HomeWrap>
        <div className="wrapper">
          <h1 className="head">SAD COOKIE</h1>

          <div className="cookie">
            <div
              onClick={this.toggleClass}
              className={`cookie-eye sad ${active ? "active" : null}`}
            ></div>

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
              className="good-news news sad"
            >
              <h4>{goodNews}</h4>
            </button>
          </div>

          <button
            type="button"
            className="reset sad"
            onClick={this.handleReset}
          >
            <h4>{reset}</h4>
          </button>
        </div>
      </HomeWrap>
    );
  }
}

export default App;
