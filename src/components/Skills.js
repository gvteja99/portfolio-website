import React, { Component } from "react";

class Skills extends Component {
  render() {
    let skills;
    let skillName;

    if (this.props.sharedSkills && this.props.sharedSkills.subSection && this.props.resumeBasicInfo) {
      skillName = this.props.resumeBasicInfo.section_name.skills;
      skills = this.props.sharedSkills.subSection.map((subsection, i) => {
        if (subsection.icons && Array.isArray(subsection.icons)) {
          const icons = subsection.icons.map((icon, j) => {
            return (
              <li className="list-inline-item mx-3" key={`${i}-${j}`}>
                <span>
                  <div className="text-center skills-tile">
                    <i className={icon.class} style={{ fontSize: "220%" }}>
                      <p
                        className="text-center"
                        style={{ fontSize: "30%", marginTop: "4px" }}
                      >
                        {icon.name}
                      </p>
                    </i>
                  </div>
                </span>
              </li>
            );
          });

          return (
            <div key={i}>
              <h1 className="section-title">
                <span className="text-white">{subsection.name}</span>
              </h1>
              <ul className="list-inline mx-auto skill-icon">{icons}</ul>
            </div>
          );
        } else {
          return null; // Return null if subsection.icons is undefined or not an array
        }
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title" style={{paddingBottom:"2%"}}>
              <span className="text-white"><u>{skillName}</u></span>
            </h1>
          </div>
          <div className="col-md-12 text-center">{skills}</div>
        </div>
      </section>
    );
  }
}

export default Skills;
