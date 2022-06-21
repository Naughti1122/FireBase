import React, {useState, useEffect} from 'react';
import { collection, addDoc, doc, setDoc, query, where, getDocs  } from "firebase/firestore";
import {db} from './FireBase/Config';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent } from './Redux/Actions';

function App() {

  const [name, setName] = useState("");
  const [gen, setGen] = useState("");

  const dispatch = useDispatch();

  const students = useSelector((state)=>state.students)

  useEffect(()=>{
    const getData = async() =>{
      let students = [];
      const q = query(collection(db, "Users"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        students.push(doc.data());
        console.log(doc.id, " => ", doc.data());
      });
      console.log(students);
      dispatch(addStudent(students));
    }
    getData();
  }, []);




  const handlePushToFirebase = async (e) => {
    e.preventDefault();
    let person = {
      name,
      gen,
      id: uuidv4(),
    };

    try {
      await setDoc(doc(db, "Users", person.id), person);
    } catch (error) {
      console.log(error); 
    };


    //sends data with firebase generated id


    // try {
    //   const docRef = await addDoc(collection(db, "users"), person);
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
  };


  return (
    <>
      <input placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}} />
      <input placeholder='gen' value={gen} onChange={(e)=>{setGen(e.target.value)}} />

      <button onClick={handlePushToFirebase}>Submit</button>

    </>
  );
} 

export default App;
