import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

const AssignmentDetails = () => {
  const assignment = useLoaderData();
  const { title, marks, img, difficulty, selectedDate, description, _id } = assignment;

  return (
    <div className="bg-gradient-to-b from-[#F5F5F5] to-[#E8F5E9] min-h-screen p-6">
      <h1 className="text-center text-3xl font-extrabold text-[#212121] mb-10">
        Assignment Details
      </h1>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-6 p-6">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src={img}
              alt="Assignment Thumbnail"
              className="w-[250px] h-[180px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Details Section */}
          <div className="flex-grow space-y-4">
            <h2 className="text-2xl font-bold text-[#4CAF50]">{title}</h2>
            <p className="text-sm text-[#757575] leading-relaxed">{description}</p>

            <div className="flex items-center gap-6">
              <div>
                <p className="text-sm font-semibold text-[#757575]">Marks</p>
                <span className="text-xl font-bold text-[#FF9800]">{marks}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#757575]">Posted At</p>
                <span className="text-sm text-[#212121]">{selectedDate}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#757575]">Difficulty</p>
                <span
                  className={`inline-block px-3 py-1 text-sm font-semibold rounded-full shadow-sm ${
                    difficulty === "Easy"
                      ? "bg-green-100 text-green-600"
                      : difficulty === "Medium"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {difficulty}
                </span>
              </div>
            </div>

            {/* Button */}
            <Link to={`/submitAssignment/${_id}`}>
              <button className="w-full md:w-auto px-6 py-2 bg-[#03A9F4] text-white font-bold rounded-lg shadow hover:bg-[#0288D1] transition">
                Take Assignment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
