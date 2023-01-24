import React from "react";
import "./Home.css";
import { BiSearch } from "react-icons/bi";
import { FcSearch } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "../Redux/action";
import { Card } from "./Card";

export const Home = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const data = useSelector((store) => store.data);

  useEffect(() => {
    dispatch(getData(page));
  }, [page]);
  return (
    <div>
      <div className="search-div">
        <div>
          <div className="what-div">What</div>
          <input type="text" placeholder="Enter Job title" />
          <span className="search-icon">
            <FcSearch />
          </span>
        </div>
        <div>
          <div className="where-div">Where</div>
          <input
            type="text"
            placeholder="City name (Keep first letter Capital)"
          />
        </div>
        <div>
          <button className="findjobs-btn">Find Jobs</button>
          <span className="search-icon-2">
            <BiSearch />
          </span>
        </div>
      </div>
      <div className="post-center-div">
        <span className="blue-span">Post your resume – </span>
        <span>It only takes a few seconds</span>
      </div>
      <div className="post-center-div">
        <span className="blue-span">Employers: Post a job – </span>
        <span>Your next hire is here</span>
      </div>
      <div className="filters-div">
        <div>
          <select className="select">
            <option value="">Job Type</option>
            <option value="full">Full Time</option>
            <option value="fresher">Fresher</option>
            <option value="part">Part Time</option>
            <option value="regular">Regular / Permanent</option>
          </select>
        </div>
        <div>
          <select className="select">
            <option value="">Job Type</option>
            <option value="full">Full Time</option>
            <option value="fresher">Fresher</option>
            <option value="part">Part Time</option>
            <option value="regular">Regular / Permanent</option>
          </select>
        </div>
        <div>
          <select className="select">
            <option value="">Job Type</option>
            <option value="full">Full Time</option>
            <option value="fresher">Fresher</option>
            <option value="part">Part Time</option>
            <option value="regular">Regular / Permanent</option>
          </select>
        </div>
        <div>
          <select className="select">
            <option value="">Job Type</option>
            <option value="full">Full Time</option>
            <option value="fresher">Fresher</option>
            <option value="part">Part Time</option>
            <option value="regular">Regular / Permanent</option>
          </select>
        </div>
        <div>
          <select className="select">
            <option value="">Job Type</option>
            <option value="full">Full Time</option>
            <option value="fresher">Fresher</option>
            <option value="part">Part Time</option>
            <option value="regular">Regular / Permanent</option>
          </select>
        </div>
        <div>
          <select className="select">
            <option value="">Job Type</option>
            <option value="full">Full Time</option>
            <option value="fresher">Fresher</option>
            <option value="part">Part Time</option>
            <option value="regular">Regular / Permanent</option>
          </select>
        </div>
        <div>
          <select className="select">
            <option value="">Job Type</option>
            <option value="full">Full Time</option>
            <option value="fresher">Fresher</option>
            <option value="part">Part Time</option>
            <option value="regular">Regular / Permanent</option>
          </select>
        </div>
      </div>
      <div className="hr-line"></div>
      <div className="jobfeed-div">
        <span>Job feed</span>
        <span>NEW</span>
      </div>
      <div className="jobdata-div">
        <div className="data-div">
          {data.map((e) => {
            return <Card key={e._id} e={e} />;
          })}
        </div>
        <div className="stick-div">
          <img width="500px" src="https://i.ibb.co/dsZX5h1/logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};
