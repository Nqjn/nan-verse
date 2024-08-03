import "./Button.css"

function Button({ url, text}){
    const navigate = () => {
        window.location.href = url;

    }
    return <button className = "btn" onClick={navigate}>{text}</button>
}



export default Button;
