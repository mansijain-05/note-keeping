import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Createnote = (props) =>{

    const[expand,setExpand] = useState(false);
    const [note,setNote] = useState({
        title:'',
        content:'',
    });

    const InputEvent = (event) =>{
        const {name, value} = event.target;
        setNote((prevData) =>{
            return{
                ...prevData,
                [name]: value,
            };
        });
        console.log(note);
    };

    const addEvent = () =>{
        props.passNote(note);
        setNote({
            title:'',
            content:'',
        });
    };

    const expandIt =() =>{
        setExpand(true);
    };

    const backNormal =() =>{
        setExpand(false);
    };

    return(
        <>
          <div className="main_note" onDoubleClick={backNormal}>
              <form>
                {expand?
                  <input 
                    type="text" 
                    name="title"
                    value={note.title} 
                    onChange={InputEvent} 
                    placeholder="Title" 
                    autoComplete="off"
                  />:null}
                  <textarea 
                    rows="" 
                    columns="" 
                    name="content"
                    value={note.content} 
                    onChange={InputEvent} 
                    onClick={expandIt}
                    placeholder="Write a note..."
                  ></textarea>
                  {expand?
                  <Button onClick={addEvent}>
                    <AddIcon className="plus_sign"/>
                  </Button>:null}
              </form>
          </div>  
        </>
    );
}

export default Createnote;