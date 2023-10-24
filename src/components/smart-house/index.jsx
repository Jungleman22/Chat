import { useState } from "react";
import { useLocalStorage } from "../../hook/useLocalStorage";
import AddForm from "./form-add";
import ItemContainer from "./item-container";
import styles from "../smart-house/style.module.css";

const SmartHouse = () => {
const [device, setDevice] = useLocalStorage("SMART", [
{ id: 1, name: "Лампочка", isPower: false, isEdit: false },
{ id: 2, name: "Телевизор", isPower: false, isEdit: false },
{ id: 3, name: "Колонка", isPower: false, isEdit: false },
]);

const [addValue, setAddValue] = useState("");
const [editValue, setEditValue] = useState("");

// Добавить

console.log(device);

const handleAdd = () => {
setDevice([
...device,
{
id: device.length === 0 ? 1 : device[device.length - 1].id + 1,
name: addValue,
isPower: false,
isEdit: false,
},
]);
setAddValue("");
};
// Удалить
const handleDelete = (idDevice) => {
setDevice(() => device.filter((el) => el.id !== idDevice));
};
//вкл/выкл
const handlePower = (idDevice) => {
setDevice(() =>
device.map((el) => {
if (el.id === idDevice) {
return { ...el, isPower: !el.isPower };
}
return el;
})
);
};

// ред

const showEditDialog = (isDevice) => {
setDevice(() =>
device.map((el) => {
if (el.id === isDevice) {
setEditValue(el.name);
return { ...el, isEdit: true };
}
return el;
})
);
};

const handleEdit = (idDevice) => {
setDevice(() =>
device.map((el) => {
if (el.id === idDevice) {
return { ...el, name: editValue, isEdit: false };
}
return el;
})
);
};

return (
<div className={styles.main_container}>
<div>УСТРОЙСТВА УМНОГО ДОМА</div>

<AddForm
addValue={addValue}
setAddValue={setAddValue}
handleAdd={handleAdd}
/>

<ItemContainer
device={device}
editValue={editValue}
setEditValue={setEditValue}
handleEdit={handleEdit}
showEditDialog={showEditDialog}
handlePower={handlePower}
handleDelete={handleDelete}
/>
</div>
);
};

export default SmartHouse;
