const AddCon = (props) => {
    return (
        <div>
        <input value={props.addValue} onChange={(e) => props.setAddValue(e.target.value)} />
        <button onClick={props.handleAdd}>Добавить контакт</button>
        </div>
    );
    };
    export default AddCon;