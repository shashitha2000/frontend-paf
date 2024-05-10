import React from "react";
import { FaUserAlt } from "react-icons/fa";
import "./status.css";
function Status() {
  return (
    <div>
      <div className="child_page">
        <div className="post_status_contatiner">
          <div className="box_one">
            <div className="adicon_bk">
              <FaUserAlt className="addiconi" />
            </div>
            <p className="name_stus">jhone</p>
          </div>
          <div className="box_two">
          <div className="adicon_bk">
              <FaUserAlt className="addiconi" />
            </div>
            <p className="name_stus">perera</p>
          </div>
          <div className="box_thre">
          <div className="adicon_bk">
              <FaUserAlt className="addiconi" />
            </div>
            <p className="name_stus">gmage</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
