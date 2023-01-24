import React from "react";
import "./Card.css";
import { RxDragHandleDots2 } from "react-icons/rx";
import { AiFillStar, AiFillCheckCircle } from "react-icons/ai";
import { RiCalendarTodoFill } from "react-icons/ri";
import { IoIosShareAlt } from "react-icons/io";
import { useState } from "react";
import { GrShare } from "react-icons/gr";

export const Card = ({ e }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="card">
        <div className="dots-icon-div" onClick={() => setToggle(!toggle)}>
          <RxDragHandleDots2 />
        </div>
        {toggle && (
          <div className="toggle-div">
            <p>- Not Interested</p>
            <p>
              <GrShare /> Saved Job
            </p>
          </div>
        )}

        <div className="card-div">
          <h3 className="jobtitle">{e.JobTitle}</h3>
          <p>{e.companyName}</p>
          <p className="location-p">{e.companyLocation}</p>
          <div className="flex-div">
            <p className="highlight">
              <AiFillCheckCircle /> {e.attribute_snippet}
            </p>
            <p className="highlight">
              <AiFillStar /> {e.category_1}
            </p>
          </div>
          <p className="highlight">
            <RiCalendarTodoFill /> {e.category_2}
          </p>
          <p className="highlight">
            <RiCalendarTodoFill /> {e.urgentlyHiring}
          </p>
          <p className="ialbl-p">
            <IoIosShareAlt /> {e.ialbl}
          </p>
          <p className="snippet-p">
            <AiFillCheckCircle /> {e.job_snippet}
          </p>
          <p className="date-p">
            {e.date} {e.date_2} <span>{e.date_3}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
