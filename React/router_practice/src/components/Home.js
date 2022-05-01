import {Link} from 'react-router-dom'

const Home = (props) => {
return (
    <div>
        <h1 style = {{color: 'blue'}}>
            Home Component
        </h1>
        <Link to = {'/about'}>Go to about</Link>
        {/* Links are Reacts version of "A tags" */}
    </div>
)
}

export default Home;