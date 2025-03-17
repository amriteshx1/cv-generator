import "../styles/Resume.css"

function Header({generalInfo}){
    return (
        <div className="header">
            <div className="pImg">
            <img src="../assets/pf.jpg" alt="profile" />
            </div>
            <div className="miniH">
            <h1>{generalInfo.name}</h1>
            <h2>{generalInfo.profession}</h2>
            </div>
        </div>
    )
}

function Sidebar({generalInfo, education}){
    return (
        <div className="sidebar">
            <div className="contact">
            <h3>Contact Details</h3>
                <div className="logo">
                    <img src="../assets/email-outline.svg" alt="email"/>
                    <p>{generalInfo.email}</p>
                </div>
                <div className="logo">
                    <img src="../assets/phone.svg" alt="phone" />
                    <p>{generalInfo.phone}</p>
                </div>
            </div>

           
            <div className="education">
            <h3>Education</h3>
            <div className="eresume">
                <p className="sTitle">■ {education.studyTitle}</p>
                <p className="sSchool">○ {education.school}</p>
                <p className="sDuration">○ {education.startDate} to {education.endDate}</p>
                </div>
            </div>
        </div>
    )
}

function Main({experience, about}){
    return (
        <div className="main">
            <div className="summary">
            <h3>Summary</h3>
            <hr />
            <p>{about.about}</p>
            </div>

            <div className="worke">
            <h3>Work Experience</h3>
            <hr />
            <h4 className="sTitle">{experience.company}</h4>
            <h5 className="sPosition">{experience.position}</h5>
            <p className="sDuration">{experience.startDate2} to {experience.endDate2}</p>
            <ul>
                {experience.responsibilities.split("\n").map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
            </div>

            <div className="refer">
                <h3>References</h3>
                <hr />
                <p>References available upon request.</p>
            </div>
        </div>
    )
}


function Resume({generalInfo, education, experience, about}){
    
    return (
        <div className="rContainer">
            <Header generalInfo={generalInfo} />
            <div className="miniRContainer">
            <Sidebar generalInfo={generalInfo} education={education} />
            <Main experience={experience} about={about} />
            </div>

        </div>
    )
}

export default Resume;