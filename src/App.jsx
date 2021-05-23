//App.jsx

import React, { useState } from 'react';
import Header from './Header';
 import Footer from './Footer';
import Notes from './Notes';
import Createnote from './Createnote';
//import Footer from './components/Footer';


const App = () =>{
 const[addItem,setAddItem] = useState([]);

 const addNote = (note) =>{
   //alert("I am clicked");
   setAddItem((prevData) =>{
     return [...prevData, note];
   });
   console.log(note);
 };
 const onDelete = (id) =>{
   setAddItem((olddata) =>
     olddata.filter((currdata, indx) =>{
       return indx !== id;
     })
   );
 };

 return(
   <>
     <Header />
     <Createnote 
       passNote={addNote}
     />
     {addItem.map((val,index)=>{
       return(
         <Notes 
           key={index}
           id={index}
           title={val.title}
           content={val.content}
           deleteItem={onDelete}
         />
       );
     })}
     <Footer />
   </>
 );
}

export default App;
