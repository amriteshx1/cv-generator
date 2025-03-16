function GeneralInfo(){
  return (
    <div className="ginfo">
    <h2>General Information</h2>

    <div className="gdetails">
      <label htmlFor="name">Name</label>
      <input type="text" name="user-name" id="name" />
    </div>

    <div className="gdetails">
      <label htmlFor="email">Email</label>
      <input type="email" name="user-email" id="email" />
    </div>
    
    <div className="gdetails">
      <label htmlFor="phone">Contact</label>
      <input type="tel" name="user-phone" id="phone" />
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
          <input type="text" name="user-school" id="school" />
        </div>

        <div className="edetails">
          <label htmlFor="studyTitle">Degree/Course</label>
          <input type="text" name="user-studyTitle" id="studyTitle" />
        </div>

        <div className="edetails">
          <div className="date">
            <label htmlFor="startDate">Start Date</label>
            <input type="date" name="start-date" id="startDate" />

            <label htmlFor="endDate">End Date</label>
            <input type="date" name="end-date" id="endDate" />
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
          <input type="text" name="cmp-name" id="company" />
        </div>

        <div className="exdetails">
          <label htmlFor="position">Job Title</label>
          <input type="text" name="cmp-position" id="position" />
        </div>

        <div className="exdetails">
          <label htmlFor="responsibilities">Job Responsibilities</label>
          <textarea id="responsibilities" name="cmp-responsibilities" rows={4} />
        </div>

        <div className="exdetails">
          <div className="date2">
            <label htmlFor="startDate2">Start Date</label>
            <input type="date" name="start-date2" id="startDate2" />

            <label htmlFor="endDate2">End Date</label>
            <input type="date" name="end-date2" id="endDate2" />
          </div>
        </div>

      </div>
  )
}

function App() {
  return(
    <div className="container">
      <GeneralInfo />
      <Education />
      <Experience />
    </div>

  )
}

export default App;
