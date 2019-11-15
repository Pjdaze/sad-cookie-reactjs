import styled from "styled-components";

const HomeWrap = styled.div`
  height: 1000px;
  min-height: 100%;
  .news-wrapper {
    width: 99%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;
  }
  .news {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    width: 189px;
    min-width: 185px;
    height: 75px;

    font-family: "Libre Barcode 39 Text", cursive;
    font-size: 1.9em;

    &:hover {
      transition: all 2s ease-in-out;
      background: linear-gradient(to right, #222, rgb(161, 88, 84));
    }
  }

  @media only screen and (min-width: 750px) {
    .news {
      font-size: 2.2em;
      margin: 35px;
    }

    .reset h4 {
      font-size: 2em;
      margin: 35px;
    }
  }
  .good-news {
    &:hover {
      background: linear-gradient(to right, #222, rgb(75, 201, 255));
    }
    &.active::after {
      background-color: red;
    }
  }

  .reset {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: "Libre Barcode 39 Text", cursive;
    font-size: 1.8em;

    width: 400px;
    min-width: 350px;
    height: 75px;
    font-size: 20px;
    cursor: pointer;
  }
  .head {
    font-family: "Fredoka One", cursive;
    font-family: "Cabin Sketch", cursive;
    font-weight: 700;
    font-size: 3em;
  }

  .cookie {
    position: relative;
    width: 270px;
    height: 355px;
    background: #ada996; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to left,
      #eaeaea,
      #ffffff,
      #dbdbdb,
      #ada996
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #eaeaea, #ffffff, #dbdbdb, #ada996);

    -webkit-border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
    border-radius: 50% 50% 35% 35% / 60% 60% 40% 40%;
    transition: 2000ms ease-in-out;
  }
  .cookie-eye {
    position: absolute;
    left: 50%;
    top: 20%;
    margin-left: -10px;
    height: 15px;
    width: 15px;
    border-radius: 50%;

    box-shadow: inset 0 0 0px 3px #82e0f1;
    transition: 3s ease-in-out;

    background-color: #afffffc9;

    &.active {
      background-color: #b3b1b2;
      box-shadow: inset 0 0 0px 3px #8a8a8a;
    }
  }

  .cookie-rim {
    height: 100%;
    width: 100%;
    -moz-box-shadow: 0 0 35px 10px #9ffef7;
    -webkit-box-shadow: 0 0 35px 10px #9ffef7;
    box-shadow: 0 0 35px 10px #9ffef7;

    border-radius: 50%;
    transition: 2s ease-in-out;

    &.active {
      box-shadow: 0 0 35px 10px #fff !important;
    }
  }

  .left-foot {
    width: 30px;
    height: 12px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    position: absolute;
    bottom: -9px;
    left: 26%;
    background: linear-gradient(to bottom, #dfdfdf, #d3d2cf);
    transform: rotate(8deg);
  }

  .right-foot {
    width: 30px;
    height: 12px;
    background: linear-gradient(to bottom, #f9f9f9, #f4f0e4);
    position: absolute;
    bottom: -9px;
    right: 26%;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    transform: rotate(-8deg);
  }
`;

export default HomeWrap;
