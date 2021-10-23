 
import React, { useState,Fragment } from "react";
import './App.css';

import data from "./data.json";
import { nanoid } from 'nanoid';
import ReactDatePicker from "react-datepicker";
import ReadOnlyRow from "./components/read only"
import EditableRow from "./components/EditableRow";


const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    title: '',
    description: '',
    assignedto: '',
    duration: '',
    completiondate: '',
    createddate: '',
    parenttask: ''

  });
  const [editFormData,setEditFormData]= useState({
    title: '',
    description: '',
    assignedto: '',
    duration: '',
    completiondate: '',
    createddate: '',
    parenttask: ''

  });
  const [editContactId,setEditContactId] = useState(null);
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData =  {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const handleEditFormChange=(event)=>{
    event.preventDefault();
    const fieldName=event.target.getAttribute("name");
    const fieldValue=event.target.value;
    const newFormData={...editFormData};
    newFormData[fieldName]=fieldValue;
    setEditFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      title: addFormData.title,
    description: addFormData.description,
    assignedto: addFormData.assignedto,
    duration: addFormData.duration,
    completiondate: addFormData.completiondate,
    createddate: addFormData.createddate,
    parenttask: addFormData.parenttask
   
 };
 const newContacts = [...contacts, newContact];
 setContacts(newContacts);

};

  
    const handleEditFormSubmit=(event)=>{
      event.preventDefault();

      const editedContact={
        id:editContactId,
        title: editFormData.title,
    description: editFormData.description,
    assignedto: editFormData.assignedto,
    duration: editFormData.duration,
    completiondate: editFormData.completiondate,
    createddate: editFormData.createddate,
    parenttask: editFormData.parenttask,
   }
      const newContacts=[...contacts];
      const index=contacts.findIndex((contact)=>contact.id === editContactId)
       newContacts[index]=editedContact;
       setContacts(newContacts);
       setEditContactId(null)
    };

   
  const handleEditClick = (event,contact)=>{
    event.preventDefault();
    setEditContactId(contact.id);
    const formValues={
      title:contact.title,
    description:contact.description ,
    assignedto:contact.assignedto,
    duration: contact.duration,
    completiondate: contact.completiondate,
    createddate: contact.createddate,
    parenttask: contact.parenttask,

    }
    setEditFormData(formValues);
  };


  return (
    <div className="app-container">
       <form onSubmit={handleEditFormSubmit}>
      <table border="light">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Assigned to</th>
            <th>Duration</th>
            <th>Completion Date</th>
            <th>Created Date</th>
            <th>Parent task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (

            <Fragment>
              {editContactId === contact.id ? (
              <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange}/> 
              ):(
                <ReadOnlyRow  contact={contact}
                handleEditClick={handleEditClick}
                />
              )}
            </Fragment>
            
         

          ))}
             

</tbody>
</table>
</form>
            

      
      <h2>Add A New Task</h2>    
      <form onSubmit={handleAddFormSubmit}>
         <input type ="text" 
          name="title" 
          required="required"
           placeholder="Enter title" class="text"
           onChange={handleAddFormChange}
           /> 
              
          <input type ="text" class="text"
          name="description" 
          required="required"
           placeholder="Enter description"
           onChange={handleAddFormChange}
           />


          <input type ="text" class="text" 
          name="assignedto" 
          required="required"
           placeholder="Assigned to "
           onChange={handleAddFormChange}
           />

          <input type ="text" class="text"
          name="duration" 
          required="required"
           placeholder="Enter duration"
           onChange={handleAddFormChange}
           />

          <input type ="date"  class="text"
          name="completiondate" 
          required="required"
           placeholder="Completion Date"
           onChange={handleAddFormChange}
           />

          <input type ="date"class="text" 
          name="createddate" 
          required="required"
           placeholder="Created Date"
           onChange={handleAddFormChange}
           />


          <input type ="text" class="text"
          name="parenttask" 
          required="required"
           placeholder="Parent Task"
           onChange={handleAddFormChange}
           />

        <button>ADD</button>
      </form>
      </div>
  );
};
export default App;