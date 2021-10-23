import React from "react";
const ReadOnlyRow = ({ contact,handleEditClick }) =>{
    return (
        <tr>
        <td>{contact.title}</td>
        <td>{contact.description}</td>
        <td>{contact.assignedto}</td>
        <td>{contact.duration}</td>
        <td>{contact.completiondate}</td>
        <td>{contact.createddate}</td>
        <td>{contact.parenttask}</td>
        <td>
          <button type="button"onClick={(event)=> handleEditClick(event, contact)} >
          Edit
          </button>
          </td>
       
      </tr>
    )
}
export default ReadOnlyRow 