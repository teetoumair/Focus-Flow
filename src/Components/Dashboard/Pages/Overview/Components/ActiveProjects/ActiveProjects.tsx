import "./ActiveProjects.css"

function ActiveProjects(){

    const projects = [
        {
            id:1,
            name:"React Learning",
            progress:"8/12 Modules Completed"
        },
        {
            id:2,
            name:"Personal",
            progress:"4 Pending Tasks"
        },
        {
            id:3,
            name:"Work Flow",
            progress:"24 Tasks Total"
        },
        {
            id:4,
            name:"Create Project",
            progress:"+"
        }
    ]

    return(
        <div>
            <p>Active Projects</p>
            <div className="ProjectsGrid">
                {
                    projects.map((projects)=>(
                        <div
                        className="ProjectCard"
                        key={projects.id}>
                            <h3>
                                {projects.name}
                            </h3>
                            <p>{projects.progress}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ActiveProjects