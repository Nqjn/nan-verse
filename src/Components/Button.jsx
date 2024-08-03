import "./Button.css"

function Button({ url, text}){
return( <Link to = {url} className = "btn">{text}</Link>);
}



export default Button;
