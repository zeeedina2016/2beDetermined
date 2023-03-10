
    import React from "react";
    import {Link } from "react-router-dom";
 
     function CreateButton() {
 
         return (
           <div class="newpatientcomponent">
            
            <h1 class="newpatient">
               New Patient
            </h1>
            
             <Link to="/createpage"><button class="createbutton">
               CREATE
             </button>
             </Link>
           </div>
         );
 
     }
 
     export default CreateButton;
    