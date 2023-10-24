import EditContact from "./editContact";
import ContactInfo from "./contactinfo";
import styles from "../smart-house/style.module.css";

const ContactContainer = (props) => {
return (
<div className={styles.conteiner_items}>
{props.device.map((item) => {
return (
<div>
{item.isEdit ? (
<EditContact
editValue={props.editValue}
setEditValue={props.setEditValue}
handleEdit={props.handleEdit}
id={item.id}
/>
) : (
<ContactInfo
item={item}
showEditDialog={props.showEditDialog}
handlePower={props.handlePower}
handleDelete={props.handleDelete}
/>
)}
</div>
);
})}
</div>
);
};

export default ContactContainer;
