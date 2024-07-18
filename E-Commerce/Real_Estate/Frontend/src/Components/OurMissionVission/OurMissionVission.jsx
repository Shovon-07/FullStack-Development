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

const OurMissionVission = () => {
  return (
    <section className="ourMisionVision d-flex gap-30">
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={"<"}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="icon">
            <RiHomeOfficeFill size={30} />
          </div>
          <h3>Our Vision</h3>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={"<"}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="icon">
            <RiHomeOfficeFill size={30} />
          </div>
          <h3>Our Vision</h3>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={"<"}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="icon">
            <RiHomeOfficeFill size={30} />
          </div>
          <h3>Our Vision</h3>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      {/* --------- */}
      <Link to="" className="card d-flex gap-20">
        <div className="icon">
          <RiHomeOfficeFill size={30} />
        </div>
        <h3>Our Vision</h3>
      </Link>
      <Link to="" className="card d-flex gap-20">
        <div className="icon">
          <GrNotes size={30} />
        </div>
        <h3>Our Mision</h3>
      </Link>
      <Link to="" className="card d-flex gap-20">
        <div className="icon">
          <GiMoneyStack size={40} />
        </div>
        <h3>Invest with us </h3>
      </Link>
    </section>
  );
};

export default OurMissionVission;
