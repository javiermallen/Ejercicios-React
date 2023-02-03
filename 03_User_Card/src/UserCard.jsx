export function UserCard ( { imagen, nombre, trabajo, pais, skills, fechaInscripcion } ) {
    return(
        <article className="uc-user">
            <img src={ imagen } alt={ nombre } className="uc-img"></img>
            <h1>{ nombre }<box-icon type='solid' name='user-check'></box-icon></h1>
            <h2>{ trabajo } - { pais }<box-icon type='solid' name='briefcase-alt-2' color="#e5ecec"></box-icon></h2>
            <h2>Skills<box-icon name='dumbbell'></box-icon></h2>
            <ul className="uc-skills">
                { skills.map( skill => ( <li className="uc-skill">{ skill }</li> ) ) }
            </ul>
            <h3><box-icon type='solid' name='watch'></box-icon>{ fechaInscripcion }</h3>
        </article>
    )
}

        
