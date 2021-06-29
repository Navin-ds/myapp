import { Component } from "react";
import { Button } from "rsuite";
import "./index.css";

import Subjects from "../subjects";

const semYearList = [
  { uniqueNo: 1, name: "Sem 1" },
  { uniqueNo: 2, name: "Sem 1" },
  { uniqueNo: 3, name: "Sem 1" },
  { uniqueNo: 4, name: "Sem 1" },
];

class Semester extends Component {
  search = (event) => {
    <Subjects />;
  };
  renderSemYearList = () => (
    <ul className="skills-list">
      {semYearList.map((skill) => (
        <li className="skill-item" key={skill.id}>
         
            <button className="sem_box" to="/semesters">
              {skill.name}
            </button>
          
        </li>
      ))}
    </ul>
  );

  render() {
    return (
      <div>
        <h1>semesters</h1>
        <div>
          <div className="skills-container">{this.renderSemYearList()}</div>
        </div>
      </div>
    );
  }
}

export default Semester;
