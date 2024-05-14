import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

const AssignmentDetails = () => {
  const assignment = useLoaderData();
  const { title, marks, img, difficulty, selectedDate, description,_id } =assignment;
  return (
    <div className="">
        <h1 className="text-center text-2xl font-bold ">Assignment Detail Page</h1>
      <div className="mt-8 mb-8 mx-auto md:w-3/4 bg-slate-300 md:p-10 md:flex gap-4 rounded-xl justify-evenly">
        <div className="flex-1">
          <img className="h-[300px] w-[450px] rounded-xl" src={img} alt="" />
        </div>
        <div className="flex-1 space-y-3">
          <h1 className="text-3xl">Title: {title}</h1>
          <p className="font-semibold">Description: {description} </p>
          <p className="font-semibold"><span className="text-xl font-bold ">Marks</span>: <span className="text-red-500 font-bold text-xl">{marks}</span> </p>
          <p className="font-semibold text-xl">Difficulty: {difficulty} </p>
          <p className="font-semibold text-xl">Posted at : {selectedDate} </p>
          <Link to={`/submitAssignment/${_id}`}>
          <button className="btn ml-48 bg-[#40A578] text-white border-none">Take Assignment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
