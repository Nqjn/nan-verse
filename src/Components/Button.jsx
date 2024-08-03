import "./Button.css"
import { Link } from 'react-router-dom';

function Button({ url, text}){
    return (
        <Link to={url} className="btn" style={{ textDecoration: 'none' }}>
            <button className="btn">
                {text}
            </button>
        </Link>
    );
}



export default Button;
