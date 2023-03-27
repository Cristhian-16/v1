import './About.css'

export const About = () => {
    return (
        <div className='about-container'>
            <h1>About Me</h1>
            <p>
                Hello! My name is Cristhian Espiritu and I am originally from Peru. I am currently 21 years old.
                I am currently studying at the César Vallejo University (UCV), the career of Systems Engineering.
                My goal is to put into practice everything I have learned and create something that has a positive impact on society. I look forward to sharing my ideas with you.</p>
            <h3>Skills</h3>
            <ul className='svg'>
                <li>
                    <img src="../../public/svg/css.svg" alt="css" />
                    <p>CSS</p>
                </li>
                <li>
                    <img src="../../public/svg/html.svg" alt="html" />
                    <p>Html</p>
                </li>
                <li>
                    <img src="../../public/svg/javascript.svg" alt="javascript" />
                    <p>Javascript</p>
                </li>
                <li>
                    <img src="../../public/svg/react.svg" alt="react" />
                    <p>React</p>
                </li>
                <li>
                    <img src="../../public/svg/sass.svg" alt="sass" />
                    <p>Sass</p>
                </li>
            </ul>
        </div>
    )
}
