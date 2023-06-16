import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notfound">
            <h2>Sorry</h2>
            <p>The Page not found</p>
            <Link to='/'>Back to Home</Link>
        </div>
    );
}
 
export default NotFound;