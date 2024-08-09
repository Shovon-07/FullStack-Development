import React from "react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

//___ Icons __//
import { RiHomeOfficeFill } from "react-icons/ri";
import { GrNotes } from "react-icons/gr";
import { GiMoneyStack } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";

//___ Css ___//
import "./OurMissionVission.css";

const OurMissionVission = (props) => {
  const { homeContent } = props;

  return (
    <section className="OurMissionVission d-flex gap-30">
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<IoMdArrowDropdown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="title d-flex gap-20">
            <RiHomeOfficeFill size={30} />
            <h3>Our Vision</h3>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p className="accordianTxt">{homeContent.OurVission}</p>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<IoMdArrowDropdown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="title d-flex gap-20">
            <GrNotes size={30} />
            <h3>Our Mission</h3>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p className="accordianTxt">{homeContent.OurMission}</p>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<IoMdArrowDropdown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="title d-flex gap-20">
            <GiMoneyStack size={30} />
            <h3>Invest with us</h3>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p className="accordianTxt">{homeContent.InvestWithUs}</p>
        </AccordionDetails>
      </Accordion>
    </section>
  );
};

export default OurMissionVission;
