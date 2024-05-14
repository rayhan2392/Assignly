import { useLoaderData, useNavigate } from "react-router";
import useAuth from "../customHooks/useAuth";
import Swal from "sweetalert2";


const SubmitAssignment = () => {
    const navigate = useNavigate();
    const assignment = useLoaderData();
    const {user} =useAuth();
    const email = user.email
    const {title,marks}=assignment;
    const status = 'pending'

    const handleAssignmentSubmit =(e)=>{
        e.preventDefault();
        const form =e.target;
        const doc = form.doc.value;
        const note = form.note.value;
        const submittedAssignment ={doc,note,title,marks,email,status}
//send the submitted assignment to the server and database
  fetch('https://assign-ly-server.vercel.app/submittedAssignments',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(submittedAssignment)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Assignment submitted successfully",
            showConfirmButton: false,
            timer: 2000
          });
          navigate('/pendingAssignments')
    }
  })
    }
    return (
        <div className="mt-4 mb-8">
            <h1 className="text-center text-2xl font-bold">Submit necessary documents</h1>
             <div className="bg-gray-300 rounded-xl md:p-8 md:w-1/2 mx-auto mt-3 ">
             <form onSubmit={handleAssignmentSubmit} className="">
                <div>
                <label ><span className="text-xl font-bold text-center"> Assignment doc</span>
                <input name="doc" type="text" placeholder="paste your doc here" className="input input-bordered input-primary w-full  " />
                </label>
                </div>
               <div>
               <label> <span className="text-xl font-bold">  Your Notes</span> <br />
               <textarea name="note" placeholder="Quick Notes..." className="textarea textarea-bordered textarea-lg w-full " ></textarea>
               </label>
                 
               </div>
               <input className="btn btn-block text-xl bg-[#49a37b] mt-2 border-none text-white" type="submit" value='Submit' />
            </form>
             </div>
        </div>
    );
};

export default SubmitAssignment;