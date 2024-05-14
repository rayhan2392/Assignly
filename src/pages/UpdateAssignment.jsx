import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateAssignment = () => {
const currentAssignment = useLoaderData();
const {title,marks,img,description,_id} =currentAssignment;
const handleUpdateAssignment =(e)=>{
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const img = form.img.value;
    const description = form.description.value;
  
   
    const updatedAssignment = { title,  marks, description, img};
    console.log(updatedAssignment)

    //send updated data to server and database
    fetch(`http://localhost:5000/assignments/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updatedAssignment)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your assignment has been updated",
              showConfirmButton: false,
              timer: 2000
            });
          }
    })
}

    return (
        <div>
      <div>
        <h1 className="text-center font-bold text-3xl">
          Lets Update the assignment to improve learning!!
        </h1>
        <div className="p-10 bg-gray-300 rounded-xl my-8">
          <form onSubmit={handleUpdateAssignment}>
            <h1 className="text-center font-bold text-2xl mb-4">
             Update Assignment
            </h1>

          <label className="text-2xl font-bold ml-2">Title
          <input
              type="text"
              name="title"
             defaultValue={title}
              className="input input-bordered w-full mb-6 "
            />
          </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <label className="ml-2 font-semibold" >Img Url
             <input
                type="text"
                name="img"
                defaultValue={img}
                className="input input-bordered w-full "
              />
             </label>
              {/* <select name="difficulty" className="select w-full ">
                <option disabled selected>
                  Difficulty Level
                </option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select> */}
             <label className="ml-2" ><span className="font-bold">Marks</span>
             <input
                type="text"
                name="marks"
                defaultValue={marks}
                className="input input-bordered w-full "
              />
             </label>
              {/* <DatePicker readOnly className="input input-bordered w-full"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
              /> */}
            </div>

           <label className="ml-2">
             <span className="font-bold">Description</span>
           <textarea
              defaultValue={description}
              name="description"
              className="textarea textarea-bordered textarea-lg w-full mt-6"
            ></textarea>
           </label>
            <input
              className="btn btn-block btn-primary mt-5"
              type="submit"
              value="Update Assignment"
            />
          </form>
        </div>
      </div>
    </div>
    );
};

export default UpdateAssignment;