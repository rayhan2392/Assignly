import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

const PendingAssignments = () => {
  const pendingAssignments = useLoaderData();
  return (
    <div>
      <h1 className="text-center font-bold text-2xl">
        {" "}
        All the unmarked assignment are here{" "}
      </h1>
      <div className="bg-[#CDE8E5] rounded-xl mt-4 mb-10">
        <div className="overflow-x-auto md:p-10 mx-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th>Mail</th>
                <th className="text-xl font-bold">Title</th>
                <th className="text-xl font-bold">Marks</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
             {
                pendingAssignments.map(assignment=> <tr key={assignment._id}>
                    <td>{assignment.email}</td>
                    <td>{assignment.title}</td>
                    <td>{assignment.marks}</td>
                    <td> <Link to={`/asses/${assignment._id}`} ><button className="btn bg-green-500 text-white border-none">Give Mark</button></Link> </td>
                  </tr>)
             }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingAssignments;
