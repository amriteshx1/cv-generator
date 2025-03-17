function Header({generalInfo}){
    return (
        <div className="header">
            <h1>{generalInfo.name}</h1>
            <h2>{generalInfo.profession}</h2>
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