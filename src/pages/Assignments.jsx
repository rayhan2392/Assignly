import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../customHooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Assignments = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [assignments, setAssignments] = useState([]);

  // Delete a single assignment data
  const handleDelete = (id, email) => {
    if (!user) {
      return navigate("/login");
    }
    if (user.email !== email) {
      return alert("No access");
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#FF5C5C", // Red button for delete confirmation
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Proceed with the delete request
          fetch(`https://assign-ly-server.vercel.app/assignments/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your assignment has been deleted.",
                  icon: "success",
                });
                // Filter out the deleted assignment from the state
                setAssignments((prevAssignments) =>
                  prevAssignments.filter((assignment) => assignment._id !== id)
                );
              }
            })
            .catch((err) => {
              Swal.fire({
                title: "Error",
                text: "An error occurred while deleting the assignment.",
                icon: "error",
              });
            });
        }
      });
    }
  };

  // Load all assignments data
  useEffect(() => {
    fetch("https://assign-ly-server.vercel.app/assignments")
      .then((res) => res.json())
      .then((data) => setAssignments(data))
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: "An error occurred while loading the assignments.",
          icon: "error",
        });
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 bg-[#F7F9FC]">
      {assignments.map((assignment) => (
        <div
          key={assignment._id}
          className="bg-[#E1F5FE] mx-auto p-6 md:p-8 shadow-xl rounded-xl transition-transform transform hover:scale-105"
        >
          <div className="md:flex items-center space-x-6">
            <div className="flex-1 md:p-4">
              <img
                className="h-[200px] w-[300px] rounded-xl shadow-lg"
                src={assignment.img}
                alt={assignment.title}
              />
            </div>
            <div className="flex-1 md:p-4 space-y-4">
              <h1 className="text-2xl font-bold text-[#4A4A4A]">{assignment.title}</h1>
              <p className="font-semibold text-[#6B6B6B]">Marks: {assignment.marks}</p>
              <p className="font-semibold text-[#6B6B6B]">Difficulty: {assignment.difficulty}</p>
            </div>
          </div>

          <div className="flex justify-evenly mt-6 space-x-4">
            <button
              onClick={() => handleDelete(assignment._id, assignment.email)}
              className="btn bg-[#FF5C5C] text-white px-6 py-2 rounded-full hover:bg-[#FF3B3B] transition duration-300"
            >
              Delete
            </button>
            <Link to={`/updateAssignment/${assignment._id}`}>
              <button className="btn bg-[#4CAF50] text-white px-6 py-2 rounded-full hover:bg-[#45A049] transition duration-300">
                Update
              </button>
            </Link>
            <Link to={`/assignmentsDetails/${assignment._id}`}>
              <button className="btn bg-[#2196F3] text-white px-6 py-2 rounded-full hover:bg-[#1976D2] transition duration-300">
                View Assignment
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Assignments;
