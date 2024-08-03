import "./Button.css"

function Button({ url, text}){
return <Link to = {url} className = "btn" onClick={navigate}>{text}</Link>
}



export default Button;
