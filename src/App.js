import logo from './logo.svg';
import Layout from './components/Layout';
import About from './components/About';
import Add from './components/Add';
import Home1 from './components/Home1';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  const [students, setStudents] = useState([
    {
        id: "01",
        name: "Jayesh Game", 
        address: "Sinnar",
        mobile: "9876543210",
        gender: "male",
    },
    {
        id: "02",
        name: "Ajay Chavan", 
        address: "Nashik",
        mobile: "8895476214",
        gender: "male",
    },
    {
      id: "03",
      name: "Krishna Dharrao", 
      address: "Ozar",
      mobile: "9852476324",
      gender: "male",
  },
]);

const [studName, setStudName] = useState("");
const [studAdd, setStudAdd] = useState("");
const [studMob, setStudMob] = useState("");
const [studGen, setStudGen] = useState("");

const handleSubmit=(e) => {
  const id = students.length ? students[students.length - 1].id + 1 : 1;

  const newStud = {
    id: id,
    name: studName,
    address: studAdd,
    mobile: studMob,
    gender: studGen,
  }
}

  return (
  <>
  <Routes>
    <Route 
      path = "/"
      element = {<Layout />}
    >
    <Route
    path = "home"
    element={<Home1 students={students} />}
    />

    <Route path='student' />
      <Route
      index element = {
        <Add
        studName = {studName}
        studAdd = {studAdd}
        studMob = {studMob}
        studGen = {studGen}
        setStudName = {setStudName}
        setStudAdd = {setStudAdd}
        setStudMob = {setStudMob}
        setStudGen = {setStudGen}
        handleSubmit = {handleSubmit}
        />
      }
       />
    <Route
      path = "add"
      element={<Add />}
    />
    <Route
      path = "about"
      element={<About/>}
    />

    </Route>
  </Routes>
  
  
</>
  );
}

export default App;
