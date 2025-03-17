import "../styles/App.css"
import { useState } from "react";
import Resume from "./Resume.jsx";

function GeneralInfo({generalInfo, handleGeneralChange}){
  return (
    <div className="ginfo">
    <h2>General Information</h2>

    <div className="gdetails">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" value={generalInfo.name} onChange={handleGeneralChange} />
    </div>

    <div className="gdetails">
      <label htmlFor="profession">Profession</label>
      <input type="text" name="profession" id="profession" value={generalInfo.profession} onChange={handleGeneralChange} />
    </div>

    <div className="gdetails">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" value={generalInfo.email} onChange={handleGeneralChange} />
    </div>
    
    <div className="gdetails">
      <label htmlFor="phone">Contact</label>
      <input type="tel" name="phone" id="phone" value={generalInfo.phone} onChange={handleGeneralChange} />
    </div>
  </div>
  )
}

function Education({education, handleEducationChange}){
  return (
    <div className="einfo">
        <h2>Education</h2>

        <div className="edetails">
          <label htmlFor="school">School/College</label>
          <input type="text" name="school" id="school" value={education.school} onChange={handleEducationChange}/>
        </div>

        <div className="edetails">
          <label htmlFor="studyTitle">Degree/Course</label>
          <input type="text" name="studyTitle" id="studyTitle" value={education.studyTitle} onChange={handleEducationChange} />
        </div>

        <div className="edetails">
          <div className="date">
            <div className="miniDate1">
            <label htmlFor="startDate">Start Date</label>
            <input type="date" name="startDate" id="startDate" value={education.startDate} onChange={handleEducationChange} />
            </div>

            <div className="miniDate1">
            <label htmlFor="endDate">End Date</label>
            <input type="date" name="endDate" id="endDate" value={education.endDate} onChange={handleEducationChange}/>
            </div>
          </div>
        </div>
      </div>
  )
}

function Experience({experience, handleExperienceChange}){
  return (
    <div className="exinfo">
        <h2>Experience</h2>

        <div className="exdetails">
          <label htmlFor="company">Company Name</label>
          <input type="text" name="company" id="company" value={experience.company} onChange={handleExperienceChange} />
        </div>

        <div className="exdetails">
          <label htmlFor="position">Job Title</label>
          <input type="text" name="position" id="position" value={experience.position} onChange={handleExperienceChange}/>
        </div>

        <div className="exdetails">
          <label htmlFor="responsibilities">Job Responsibilities (Press Enter after each)</label>
          <textarea id="responsibilities" name="responsibilities" rows={4} value={experience.responsibilities} onChange={handleExperienceChange} />
        </div>

        <div className="exdetails">
          <div className="date2">
            <div className="miniDate2">
            <label htmlFor="startDate2">Start Date</label>
            <input type="date" name="startDate2" id="startDate2" value={experience.startDate2} onChange={handleExperienceChange}/>
            </div>

            <div className="miniDate2">
            <label htmlFor="endDate2">End Date</label>
            <input type="date" name="endDate2" id="endDate2" value={experience.endDate2} onChange={handleExperienceChange} />
            </div>
          </div>
        </div>

      </div>
  )
}

function About({about, handleAboutChange}){
  return (
    <div className="about">
      <h2>About</h2>

      <div className="adetails">
      <label htmlFor="about">Your Description</label>
      <textarea name="about" id="about" rows={4} value={about.about} onChange={handleAboutChange} />
      </div>
    </div>
  )
}

function App() {
  
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    profession: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    school: "",
    studyTitle: "",
    startDate: "",
    endDate: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    startDate2: "",
    endDate2: "",
  });

  const [about, setAbout] = useState({
    about: "",
  })

  const [showResume, setShowResume] = useState(false);

  const handleGeneralChange = (e) => {
    setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
  };

  const handleEducationChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const handleAboutChange = (e) => {
    setAbout({ ...about, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResume(true);
    console.log("Submitted Data:", { generalInfo, education, experience, about });
  };

  return(
    
    <div className="mainContainer">

    <div className="container">
      <form onSubmit={handleSubmit}>
      <h1>[CV/Resume - Generator]</h1>
      <GeneralInfo generalInfo={generalInfo} handleGeneralChange={handleGeneralChange}/>
      <Education education={education} handleEducationChange={handleEducationChange}/>
      <Experience experience={experience} handleExperienceChange={handleExperienceChange} />
      <About about={about} handleAboutChange={handleAboutChange} />

      <div className="btn">
      <button type="button" id="cancel">Cancel</button>
      <button type="submit" id="submit" onClick={handleSubmit}>Submit</button>
      </div>
      </form>
      </div>
      
      {showResume && (
      <div className="container2">
      <Resume generalInfo={generalInfo} education={education} experience={experience} about={about} />
      </div>
      )}
      
    </div>
  );
}

export default App;
