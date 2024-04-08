import './Skills.css';
import skills from "../../Data/skills.json";

function Skills() {
  return (
    <section className="resume-section p-3 p-lg-5" id="skills">
      <h1 className="mb-4 blue">Technologías y Skills</h1>
      <div className="my-auto">
        <ul className="list-inline list-icons mb-4">
          {skills.map((skill, index) => (
            <li key={index} className="list-inline-item">
              <i className={skill.iconClass} title={skill.title}>
                <p className="text-center">{skill.name}</p></i>
            </li>
          ))} 
        </ul>
      </div>
    </section>
  );
}

export default Skills;
