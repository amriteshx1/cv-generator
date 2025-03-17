



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