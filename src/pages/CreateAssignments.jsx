import {  useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../customHooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { data } from "autoprefixer";

const CreateAssignments = () => {
  const navigate = useNavigate();
    const {user} = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const difficulty = form.difficulty.value;
    const marks = form.marks.value;
    const img = form.img.value;
    const email = user.email
    // const date = form.date.value;
    const description = form.description.value;
    const assignment = { title, difficulty, marks, description, img,selectedDate, email};
  
   fetch('https://assign-ly-server.vercel.app/assignments',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(assignment)
   })
   .then(res=>res.json())
   .then(data=>console.log(data))
   if(data){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Assignment created successfully",
      showConfirmButton: false,
      timer: 2000
    });
  navigate('/assignments')
   }

  };
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-3xl">
          Lets challenge your friends with your creativity!!
        </h1>
        <div className="p-10 bg-gray-300 rounded-xl my-8">
          <form onSubmit={handleCreateAssignment}>
            <h1 className="text-center font-bold text-2xl mb-4">
              Create an Assignment
            </h1>

            <input
              type="text"
              name="title"
              placeholder="Assignment title"
              className="input input-bordered w-full mb-6 "
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="img"
                placeholder="Image Url"
                className="input input-bordered w-full "
              />
              <select name="difficulty" className="select w-full ">
                <option disabled selected>
                  Difficulty Level
                </option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
              <input
                type="text"
                name="marks"
                placeholder="Total Marks"
                className="input input-bordered w-full "
              />
              <DatePicker readOnly className="input input-bordered w-full"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
              />
            </div>

            <textarea
              placeholder="Assignment Description"
              name="description"
              className="textarea textarea-bordered textarea-lg w-full mt-6"
            ></textarea>
            <input
              className="btn btn-block btn-primary mt-5"
              type="submit"
              value="Create Assignment"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignments;
