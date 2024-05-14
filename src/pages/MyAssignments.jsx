import { useLoaderData } from "react-router";
import useAuth from "../customHooks/useAuth";

const MyAssignments = () => {
    const submittedAssignments = useLoaderData();
    const {user} = useAuth();
    const myAssignments =submittedAssignments.filter(assignment=>assignment.email===user.email);
  return (
    <div className="mb-20">
      <h1 className="text-center font-bold text-3xl">Take a look at all of your attempted assignments</h1>
      <div className="overflow-x-auto mt-4 mb bg-gray-300 md:p-8 rounded-xl">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>Title</th>
              <th>Status</th>
              <th>Total Marks</th>
              <th>Obtained Marks</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
            myAssignments.map(data=> <tr className="font-bold" key={data._id}>
                <th> {data.title} </th>
                <td>{data.status}</td>
                <td>{data.marks}</td>
                <td>{data?.obtainedMark || 'Not marked yet'}</td>
                <td> {data?.feedback||'Not marked yet'} </td>
              </tr>)
           }
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssignments;
