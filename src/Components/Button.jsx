import "./Button.css"
import { Link } from 'react-router-dom';

function Button({ url, text}){
return( <Link to = {url} className = "btn">{text}</Link>);
}



export default Button;
