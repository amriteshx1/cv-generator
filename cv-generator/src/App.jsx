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


