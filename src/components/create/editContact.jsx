import styles from "../smart-house/style.module.css";

const EditContact = (props) => {
return (
<div className={styles.edit}>
<input
value={props.editValue}
onChange={(e) => props.setEditValue(e.target.value)}
/>
<button onClick={() => props.handleEdit(props.id)}>Сохранить</button>
</div>
);
};

export default EditContact;
