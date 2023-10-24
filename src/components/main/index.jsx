import { Routes, Route } from "react-router";
import Chat from "../chat";
import Home from "../home";
import SmartHouse from "../smart-house";
import TestApi from "../test-api";
import styles from "../main/style.module.css";


const Main = () => {
return (
<div className={styles.container}>
<Routes>
<Route exact path="/" element={<Home/>} />
<Route path="/chat" element={<Chat/>} />
<Route path="/test" element={<TestApi/>} />
<Route path='/smart' element={<SmartHouse/>}/>

</Routes>
</div>
);
};

export default Main;
