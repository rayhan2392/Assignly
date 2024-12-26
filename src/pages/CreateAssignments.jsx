import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../customHooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateAssignments = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCreateAssignment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const difficulty = form.difficulty.value;
    const marks = form.marks.value;
    const img = form.img.value;
    const email = user.email;
    const description = form.description.value;
    const assignment = { title, difficulty, marks, description, img, selectedDate, email };

    setIsSubmitting(true);

    try {
      const response = await fetch("https://assign-ly-server.vercel.app/assignments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assignment),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Assignment created successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/assignments");
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `Error: ${error.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen flex justify-center items-center py-10">
      <div className="p-8 bg-white rounded-xl shadow-lg max-w-2xl w-full">
        <h1 className="text-center font-bold text-3xl mb-6 text-[#0077FF]">Challenge Your Friends with Your Creativity!</h1>
        <form onSubmit={handleCreateAssignment}>
          <h2 className="text-center font-bold text-2xl mb-6 text-[#333333]">Create an Assignment</h2>

          <input
            type="text"
            name="title"
            placeholder="Assignment Title"
            className="input input-bordered w-full mb-4 p-3 rounded-lg border-2 border-[#0077FF] focus:ring-[#0077FF] focus:outline-none"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="img"
              placeholder="Image URL"
              className="input input-bordered w-full p-3 rounded-lg border-2 border-[#0077FF] focus:ring-[#0077FF] focus:outline-none"
              required
            />
            <select
              name="difficulty"
              className="select w-full p-3 rounded-lg border-2 border-[#0077FF] focus:ring-[#0077FF] focus:outline-none"
              required
            >
              <option disabled selected>
                Difficulty Level
              </option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
            <input
              type="number"
              name="marks"
              placeholder="Total Marks"
              className="input input-bordered w-full p-3 rounded-lg border-2 border-[#0077FF] focus:ring-[#0077FF] focus:outline-none"
              required
            />
            <DatePicker
              readOnly
              className="input input-bordered w-full p-3 rounded-lg border-2 border-[#0077FF] focus:ring-[#0077FF] focus:outline-none"
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <textarea
            placeholder="Assignment Description"
            name="description"
            className="textarea textarea-bordered textarea-lg w-full mt-6 p-3 rounded-lg border-2 border-[#0077FF] focus:ring-[#0077FF] focus:outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className={`btn btn-block btn-primary mt-5 p-3 rounded-lg bg-[#40A578] text-white border-none hover:bg-[#0077FF] ${isSubmitting ? "loading" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Assignment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAssignments;
