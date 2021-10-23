import React from "react";
const EditableRow = ({editFormData,handleEditFormChange}) =>{
    return (
        <tr>
        <td>
        <input type ="text" 
          name="title" 
          required="required"
           placeholder="Enter title" class="text"
           value={editFormData.title}
           onChange={handleEditFormChange}
           
           /> 
        </td>
        <td><input type ="text" class="text"
          name="description" 
          required="required"
           placeholder="Enter description"
           value={editFormData.description}
           onChange={handleEditFormChange}
          
           />
</td>
        <td><input type ="text" class="text" 
          name="assignedto" 
          required="required"
           placeholder="Assigned to "
           value={editFormData.assignedto}
           onChange={handleEditFormChange}
  
           /></td>
        <td><input type ="text" class="text"
          name="duration" 
          required="required"
           placeholder="Enter duration"
           value={editFormData.duration}
           onChange={handleEditFormChange}
      
           /></td>
        <td><input type ="date"  class="text"
          name="completiondate" 
          required="required"
           placeholder="Completion Date"
           value={editFormData.completiondate}
           onChange={handleEditFormChange}
  
           /></td>
        <td><input type ="date"class="text" 
          name="createddate" 
          required="required"
           placeholder="Created Date"
           value={editFormData.createddate}
           onChange={handleEditFormChange}
        
           /></td>
        <td><input type ="text" class="text"
          name="parenttask" 
          required="required"
           placeholder="Parent Task"
           value={editFormData.parenttask}
           onChange={handleEditFormChange}
     
           /></td>
           <td><button type="submit">Save</button></td> </tr>
       
    )
}
export default EditableRow