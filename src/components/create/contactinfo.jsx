import Buttoncreate from "./buttoncreate";
import styles from "../smart-house/style.module.css";

const ContactInfo = (props) => {
return (
<div className={styles.item} key={props.item.id}>
{/* <div className={styles.name_item}>{props.item.name}</div> */}
<Buttoncreate
showEditDialog={props.showEditDialog}
handlePower={props.handlePower}
handleDelete={props.handleDelete}
item={props.item}
/>
</div>
);
};

export default ContactInfo;
