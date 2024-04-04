import React, { useState } from "react";

//___ Images ___//
import jubba from "/images/dress/jubba2.png";

import Btn_1 from "/images/dress/button_type/Button curve.png";
import Btn_2 from "/images/dress/button_type/Buttoned square.png";
import Btn_3 from "/images/dress/button_type/Buttoned triangle.png";
import Btn_4 from "/images/dress/button_type/Hidden Zipper Curved.png";
import Btn_5 from "/images/dress/button_type/Hidden zipped square.png";
import Btn_6 from "/images/dress/button_type/Hidden zipper triangle.png";

import Nack_1 from "/images/dress/neck_type/French.png";
import Nack_2 from "/images/dress/neck_type/Curve.png";
import Nack_3 from "/images/dress/neck_type/Royal Opened.png";
import Nack_4 from "/images/dress/neck_type/Royal.png";
import Nack_5 from "/images/dress/neck_type/Standard.png";
import Nack_6 from "/images/dress/neck_type/Standard-2.png";

import Pocket_1 from "/images/dress/pocket_type/Curved standard.jpg";
import Pocket_2 from "/images/dress/pocket_type/Curved.jpg";
import Pocket_3 from "/images/dress/pocket_type/Triangle.jpg";
import Pocket_4 from "/images/dress/pocket_type/Pointed.jpg";

import Hand_1 from "/images/dress/hand_type/Normal Cuffed.png";
import Hand_2 from "/images/dress/hand_type/Cuffed.png"; // img size w: 130 px; h:50 px direction <--
import Hand_3 from "/images/dress/hand_type/Standard Charts.png";
import Hand_4 from "/images/dress/hand_type/Standard small.png";
import Hand_5 from "/images/dress/hand_type/Standard.png"; // img size w: 130 px; h:50 px direction <--

//___ Css ___//
import "./CustomizeImg.scss";

//___ Components ___//
import GetScreenShoot from "../GetScreenShoot/GetScreenShoot";

const CustomizeImg = () => {
  // Images
  const [btnImgPreview, setBtnImgPreview] = useState({
    btnImgPrev: null,
    widthBtnImgPrev: null,
    rightPosBtnImgPrev: null,
    leftPosBtnImgPrev: null,
  });
  const [nakImgPreview, setNakImgPreview] = useState({
    nakImgPrev: null,
    widthNakImgPrev: null,
    rightPosNakImgPrev: null,
    leftPosNakImgPrev: null,
  });
  const [pktImgPreview, setPktImgPreview] = useState({
    pktImgPrev: null,
    widthPktImgPrev: null,
    rightPosPktImgPrev: null,
  });
  const [handImgPreview, setHandImgPreview] = useState({
    hndImgPrev: null,
    widthHndImgPrev: null,
    rightPosHndImgPrev: null,
    leftPosHndImgPrev: null,
  });

  const buttonImg = [
    { btnImg: Btn_1, width: "16px", right: "139px" },
    { btnImg: Btn_2, width: "16px", right: "139px" },
    { btnImg: Btn_3, width: "16px", right: "139px" },
    { btnImg: Btn_4, width: "16px", right: "139px" },
    { btnImg: Btn_5, width: "16px", right: "139px" },
    { btnImg: Btn_6, width: "16px", right: "139px" },
  ];
  const nackImg = [
    { nakImg: Nack_1, width: "80px", right: "108px" },
    { nakImg: Nack_2, width: "80px", right: "108px" },
    { nakImg: Nack_3, width: "80px", right: "108px" },
    { nakImg: Nack_4, width: "80px", right: "108px" },
    { nakImg: Nack_5, width: "80px", right: "108px" },
    { nakImg: Nack_6, width: "80px", right: "108px" },
  ];
  const pocketImg = [
    { pktImg: Pocket_1, width: "50px", right: "74px" },
    { pktImg: Pocket_2, width: "50px", right: "74px" },
    { pktImg: Pocket_3, width: "50px", right: "74px" },
    { pktImg: Pocket_4, width: "50px", right: "74px" },
  ];
  const handImg = [
    { hndImg: Hand_1 },
    { hndImg: Hand_2 },
    { hndImg: Hand_3 },
    { hndImg: Hand_4 },
    { hndImg: Hand_5 },
    // img size w: 130 px; h:50 px direction <--

    // { hndImg: Hand_1, width: "100px", right: "-29px", left: "-31px" },
    // { hndImg: Hand_2, width: "100px", right: "-29px", left: "-31px" },
    // { hndImg: Hand_3, width: "100px", right: "-29px", left: "-31px" },
    // { hndImg: Hand_4, width: "99px", right: "-29px", left: "-30px" },
    // { hndImg: Hand_5, width: "102px", right: "-29px", left: "-33px" },
  ];

  const handelButtonImgPreview = (items) => {
    setBtnImgPreview({
      ...btnImgPreview,
      btnImgPrev: items.btnImg,
      widthBtnImgPrev: items.width,
      rightPosBtnImgPrev: items.right,
    });
  };
  const handelNackImgPreview = (items) => {
    setNakImgPreview({
      ...nakImgPreview,
      nakImgPrev: items.nakImg,
      widthNakImgPrev: items.width,
      rightPosNakImgPrev: items.right,
    });
  };
  const handelPocketImgPreview = (items) => {
    setPktImgPreview({
      ...pktImgPreview,
      pktImgPrev: items.pktImg,
      widthPktImgPrev: items.width,
      rightPosPktImgPrev: items.right,
    });
  };
  const handelHandImgPreview = (items) => {
    setHandImgPreview({
      ...handImgPreview,
      hndImgPrev: items.hndImg,
      widthHndImgPrev: items.width,
      rightPosHndImgPrev: items.right,
      leftPosHndImgPrev: items.left,
    });
  };

  // Active Button
  const [activeBtn, setActiveBtn] = useState(1);
  const handleBtnChild = (e) => {
    setActiveBtn((prev) => e.target.value);
  };

  // Reset
  const handelReset = () => {
    setActiveBtn(1);

    setBtnImgPreview({
      btnImgPrev: null,
      widthBtnImgPrev: null,
      rightPosBtnImgPrev: null,
      leftPosBtnImgPrev: null,
    });
    setNakImgPreview({
      nakImgPrev: null,
      widthNakImgPrev: null,
      rightPosNakImgPrev: null,
      leftPosNakImgPrev: null,
    });
    setPktImgPreview({
      pktImgPrev: null,
      widthPktImgPrev: null,
      rightPosPktImgPrev: null,
    });
    setHandImgPreview({
      hndImgPrev: null,
      widthHndImgPrev: null,
      rightPosHndImgPrev: null,
      leftPosHndImgPrev: null,
    });
  };

  return (
    <div className="CustomizeImg d-flex flex-start gap-30">
      <div className="left">
        <h2 className="title">Preview Image</h2>
        <div className="imageBox d-flex" id="capture">
          <img src={jubba} alt="" className="main-img" />
          <img
            src={btnImgPreview.btnImgPrev}
            alt=""
            style={{
              width: btnImgPreview.widthBtnImgPrev,
              right: btnImgPreview.rightPosBtnImgPrev,
            }}
            className={`${btnImgPreview == null ? "d-none" : "buttonImg"}`}
          />
          <img
            src={nakImgPreview.nakImgPrev}
            alt=""
            style={{
              width: nakImgPreview.widthNakImgPrev,
              right: nakImgPreview.rightPosNakImgPrev,
            }}
            className={`${nakImgPreview == null ? "d-none" : "nackImg"}`}
          />
          {/* <img src={nakImgPreview} alt="" className="nackImg" /> */}
          <img
            src={pktImgPreview.pktImgPrev}
            alt=""
            style={{
              width: pktImgPreview.widthPktImgPrev,
              right: pktImgPreview.rightPosPktImgPrev,
            }}
            className={`${pktImgPreview == null ? "d-none" : "pocket"}`}
          />
          <img
            src={handImgPreview.hndImgPrev}
            alt=""
            style={{
              width: handImgPreview.widthHndImgPrev,
              right: handImgPreview.rightPosHndImgPrev,
            }}
            className={`${handImgPreview == null ? "d-none" : "rightHand"}`}
          />
          <img
            src={handImgPreview.hndImgPrev}
            alt=""
            style={{
              width: handImgPreview.widthHndImgPrev,
              left: handImgPreview.leftPosHndImgPrev,
            }}
            className={`${handImgPreview == null ? "d-none" : "leftHand"}`}
          />
        </div>
      </div>
      <div className="right">
        <h2>Select type</h2>
        <div className="btnBox d-flex flex-start gap-30">
          <div className="btnParent">
            <button className="button" onClick={handleBtnChild} value={1}>
              Button Type
            </button>
            <ul className={`${activeBtn == 1 ? "btnChild active" : "d-none"}`}>
              {buttonImg.map((items, index) => {
                return (
                  <li key={index}>
                    <img
                      src={items.btnImg}
                      alt=""
                      onClick={() => handelButtonImgPreview(items)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="btnParent">
            <button className="button" onClick={handleBtnChild} value={2}>
              Nack Type
            </button>
            <ul className={`${activeBtn == 2 ? "btnChild active" : "d-none"}`}>
              {nackImg.map((items, index) => {
                return (
                  <li key={index}>
                    <img
                      src={items.nakImg}
                      alt=""
                      onClick={() => handelNackImgPreview(items)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="btnParent">
            <button className="button" onClick={handleBtnChild} value={3}>
              Pocket Type
            </button>
            <ul className={`${activeBtn == 3 ? "btnChild active" : "d-none"}`}>
              {pocketImg.map((items, index) => {
                return (
                  <li key={index}>
                    <img
                      src={items.pktImg}
                      alt=""
                      onClick={() => handelPocketImgPreview(items)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="btnParent">
            <button className="button" onClick={handleBtnChild} value={4}>
              Hand Type
            </button>
            <ul className={`${activeBtn == 4 ? "btnChild active" : "d-none"}`}>
              {handImg.map((items, index) => {
                return (
                  <li key={index}>
                    <img
                      src={items.hndImg}
                      alt=""
                      onClick={() => handelHandImgPreview(items)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="bottomBtn d-flex gap-30">
          {/* <button className="button genImgBtn" onClick={getScreenShoot}>
            Generate Image
          </button> */}
          <GetScreenShoot btnTitle="Generate Image" />
          <button className="button resetBtn" onClick={handelReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeImg;
