import './Headling.css';

function Headling(props) {
    return (
        <div className="headling">
            <p className="suptitle">{props.suptitle}</p>
            <p className="title">{props.title}</p>
        </div>
    );
}

export default Headling;