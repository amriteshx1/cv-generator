import "../styles/App.css"
import { useState } from "react";

function GeneralInfo(){
  return (
    <div className="ginfo">
    <h2>General Information</h2>

    <div className="gdetails">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
    </div>

    <div className="gdetails">
      <label htmlFor="profession">Profession</label>
      <input type="text" name="profession" id="profession" />
    </div>

    <div className="gdetails">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
    </div>
    
    <div className="gdetails">
      <label htmlFor="phone">Contact</label>
      <input type="tel" name="phone" id="phone" />
    </div>
  </div>
  )
}

function Education(){
  return (
    <div className="einfo">
        <h2>Education</h2>

        <div className="edetails">
          <label htmlFor="school">School/College</label>
          <input type="text" name="school" id="school" />
        </div>

        <div className="edetails">
          <label htmlFor="studyTitle">Degree/Course</label>
          <input type="text" name="studyTitle" id="studyTitle" />
        </div>

        <div className="edetails">
          <div className="date">
            <div className="miniDate1">
            <label htmlFor="startDate">Start Date</label>
            <input type="date" name="startDate" id="startDate" />
            </div>

            <div className="miniDate1">
            <label htmlFor="endDate">End Date</label>
            <input type="date" name="endDate" id="endDate" />
            </div>
          </div>
        </div>
      </div>
  )
}

function Experience(){
  return (
    <div className="exinfo">
        <h2>Experience</h2>

        <div className="exdetails">
          <label htmlFor="company">Company Name</label>
          <input type="text" name="company" id="company" />
        </div>

        <div className="exdetails">
          <label htmlFor="position">Job Title</label>
          <input type="text" name="position" id="position" />
        </div>

        <div className="exdetails">
          <label htmlFor="responsibilities">Job Responsibilities</label>
          <textarea id="responsibilities" name="responsibilities" rows={4} />
        </div>

        <div className="exdetails">
          <div className="date2">
            <div className="miniDate2">
            <label htmlFor="startDate2">Start Date</label>
            <input type="date" name="startDate2" id="startDate2" />
            </div>

            <div className="miniDate2">
            <label htmlFor="endDate2">End Date</label>
            <input type="date" name="endDate2" id="endDate2" />
            </div>
          </div>
        </div>

      </div>
  )
}

function About(){
  return (
    <div className="about">
      <h2>About</h2>

      <div className="adetails">
      <label htmlFor="about">Your Description</label>
      <textarea name="about" id="about" rows={4} />
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

  return(
    <div className="container">
      <form>
      <h1>[CV/Resume - Generator]</h1>
      <GeneralInfo />
      <Education />
      <Experience />
      <About />
      <div className="btn">
      <button type="button" id="cancel">Cancel</button>
      <button type="submit" id="submit">Submit</button>
      </div>
      </form>
    </div>

  )
}

export default App;
