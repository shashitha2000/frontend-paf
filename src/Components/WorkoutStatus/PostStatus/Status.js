import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import "./status.css";

function Status() {
  const [workouts, setWorkouts] = useState([]);

  const loadWorkouts = async () => {
    const result = await axios.get("http://localhost:8080/workoutStatus");
    setWorkouts(result.data);
  };

  useEffect(() => {
    loadWorkouts();
  }, []);

  return (
    <div>
      <div className="child_page">
        <div className="post_status_contatiner">
          {workouts.map((workout) => (
            <div key={workout.id} className="story">
              <div className="story-header">
                <div className="adicon_bk">
                  <FaUserAlt className="addiconi" />
                </div>
                <p className="name_stus">Workout Status</p>
              </div>
              <div className="story-content">
                <p><strong>Run:</strong> {workout.run}</p>
                <p><strong>Pushups:</strong> {workout.pushups}</p>
                <p><strong>Lifted:</strong> {workout.lifted}</p>
                <p className="description"><strong>Description:</strong> {workout.description}</p>
                <p className="date"><strong>Date:</strong> {workout.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Status;
