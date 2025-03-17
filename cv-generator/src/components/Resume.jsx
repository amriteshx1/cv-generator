function Header({generalInfo}){
    return (
        <div className="header">
            <h1>{generalInfo.name}</h1>
            <h2>{generalInfo.profession}</h2>
        </div>
    )
}

function Sidebar({generalInfo, education}){
    return (
        <div className="sidebar">
            <h3>Contact Details</h3>
            <div className="contact">
                <div className="email">
                    
                    <p>{generalInfo.email}</p>
                </div>
                <div className="phone">
                    
                    <p>{generalInfo.phone}</p>
                </div>
            </div>

            <h3>Education</h3>
            <div className="education">
                <p>{education.studyTitle}</p>
                <p>{education.school}</p>
                <p>{education.startDate} - {education.endDate}</p>
            </div>
        </div>
    )
}

function Main({experience, about}){
    return (
        <div className="main">
            <h3>Summary</h3>
            <p>{about.about}</p>
            <h3>Work Experience</h3>
            <h4>{experience.company}</h4>
            <h5>{experience.position}</h5>
            <p>{experience.startDate2} - {experience.endDate2}</p>
            <ul>
                {experience.responsibilities.split("\n").map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}


function Resume({generalInfo, education, experience, about}){
    
    return (
        <div className="r-container">
            <Header generalInfo={generalInfo} />
            <Sidebar generalInfo={generalInfo} education={education} />
            <Main experience={experience} about={about} />

        </div>
    )
}

export default Resume;