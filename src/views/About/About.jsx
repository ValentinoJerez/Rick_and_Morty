import style from "./About.module.css"

//Mi informacion:
function About(){
    return(
        <div className={style.About}>
            <h1>Hola, mi nombre es Valentino Jerez.</h1>
            <p>Estudiante de Programacion Web Full Stack en Henry.</p>
        </div>
    )
}

export default About;