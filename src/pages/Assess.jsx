import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Assess = () => {
    const navigate = useNavigate();
    const assignment = useLoaderData();
    const {_id}= assignment;
    const handleSubmitAsses = (e)=>{
        e.preventDefault();
        const form = e.target;
        const obtainedMark =form.obtainedMark.value;
        const feedback =form.feedback.value;
        const status ='confirmed'
        const markedAssignment = {obtainedMark,feedback,status}
        console.log(markedAssignment)

        //send assessment data to the database
        fetch(`http://localhost:5000/submittedAssignments/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(markedAssignment)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Assignment assessment successful",
                  showConfirmButton: false,
                  timer: 2000
                });
             navigate('/pendingAssignments');
              }
        })

    }
    return (
        <div className="mt-4 mb-8">
           <h1 className="text-3xl font-bold text-center ">Welcome to Assignment assessment page</h1>
           <div className="bg-gray-300 md:p-10 mt-6 md:w-3/4 mx-auto rounded-xl">
                  <h1 className="text-center font-bold text-2xl">Assessment form</h1>
               <form onSubmit={handleSubmitAsses}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-3">
                   <label className="flex-1"> <span className="text-xl font-bold ml-4">Submitted doc</span>
                   <iframe className="w-full h-full rounded-xl" src={assignment.doc} >Click it</iframe>
                   </label>
                    <label className="flex-1"><span className="text-xl font-bold ml-4">Examinee note</span>
                    <textarea defaultValue={assignment.note} readOnly className=" h-full textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </label>
                    <label>Total Marks
                       <input type="text" readOnly defaultValue={assignment.marks} className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label>Obtained Marks
                       <input required name="obtainedMark" type="text" placeholder="put obtained marks here" className="input input-bordered w-full max-w-xs" />
                    </label>
                    </div>
                    <label className="flex-1"><span className="text-xl ml-64 font-bold">Examiners feedback</span>
                    <textarea required name="feedback" className=" h-full textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </label>
                    <input className="btn btn-block mt-4 bg-[#40A578]" type="submit" value="Submit" />
               </form>
           </div>
        </div>
    );
};

export default Assess;