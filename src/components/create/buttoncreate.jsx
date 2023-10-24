import { Link } from "react-router-dom";
const Buttoncreate = (props) => {
    return (
    <div>
    <Link to="/chat">Начать чат</Link> 
    <button onClick={() => props.showEditDialog(props.item.id)}>Ред</button>
    <button onClick={() => props.handleDelete(props.item.id)}>Удалить</button>
    </div>
    );
    };
    
    export default Buttoncreate;
    