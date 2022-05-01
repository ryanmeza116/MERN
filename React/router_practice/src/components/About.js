import {Link} from 'react-router-dom'

const About = (props) => {
return (
    <div>
        <h1 style = {{color: 'red'}}>
            About Component
        </h1>
        <Link to = {'/'}>Go to Home</Link>
        {/* Links are Reacts version of "A tags" */}
    </div>
)
}

export default About;