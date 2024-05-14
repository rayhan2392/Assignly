import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../customHooks/useAuth";
import { Link, useNavigate } from "react-router-dom";


const Assignments = () => {
    const navigate = useNavigate()
    const {user}= useAuth();
    const [assignments,setAssignments]=useState([]);

    // delete a single assignment data
    const handleDelete = (id,email)=>{
        if(!user){
          return navigate('/login');
        }
        if(user.email==!email){
            return alert('no access')
        }
        else{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://assign-ly-server.vercel.app/assignments/${id}`,{
                        method: 'DELETE'
                       })
                       .then(res=>res.json())
                       .then(data=>{
                        if(data.deletedCount>0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your travel data has been deleted.",
                                icon: "success"
                              });
                        }
                       })
                 const remaining = assignments.filter(assignment=>assignment._id==!id)
                 setAssignments(remaining);
                }
              });
        }
       
       
    }
    
   //load all assignments data
  useEffect(()=>{
    fetch('https://assign-ly-server.vercel.app/assignments')
    .then(res=>res.json())
    .then(data=>setAssignments(data))
  },[])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        
       
     {
        assignments.map(assignment=>  <div key={assignment._id} className=" bg-gray-300  mx-auto p-4 md:p-10 shadow-xl rounded-xl">
        <div className="md:flex">
          <div className="flex-1 md:p-4">
            <img
              className="h-[200px] w-[300px] rounded-xl"
              src={assignment.img}
              alt=""
            />
          </div>
          <div className="flex-1 md:p-4 space-y-4">
            <h1 className="text-2xl font-bold">{assignment.title}</h1>
            <p className="font-bold">Marks:{assignment.marks}</p>
            <p className="font-bold">Difficulty: {assignment.difficulty}</p>
          </div>
        </div>

        <div className="flex justify-evenly">
          <button onClick={()=>handleDelete(assignment._id,assignment.email)} className="btn bg-red-600 text-white">Delete</button>
         <Link to={`/updateAssignment/${assignment._id}`}>
          <button className="btn bg-green-500 text-white">Update</button>
         </Link>
         <Link to={`/assignmentsDetails/${assignment._id}`}>
          <button className="btn bg-blue-500 text-white">View Assignment</button>
         </Link>
        </div>
      </div>)
     }

      
    </div>
  );
};

export default Assignments;
