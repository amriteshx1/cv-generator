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
