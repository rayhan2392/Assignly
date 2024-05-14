import { useLoaderData } from "react-router";

const Assess = () => {
    const assignment = useLoaderData();
    
    return (
        <div className="mt-4 mb-8">
           <h1 className="text-3xl font-bold text-center ">Welcome to Assignment assessment page</h1>
           <div className="bg-gray-300 md:p-10 mt-6 md:w-3/4 mx-auto rounded-xl">
                  <h1 className="text-center font-bold text-2xl">Assessment form</h1>
               <form>
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
                       <input name="obtainedMark" type="text" placeholder="put obtained marks here" className="input input-bordered w-full max-w-xs" />
                    </label>
                    </div>
                    <label className="flex-1"><span className="text-xl ml-64 font-bold">Examiners feedback</span>
                    <textarea name="feedback" className=" h-full textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </label>
                    <input className="btn btn-block mt-4 bg-[#40A578]" type="submit" value="Submit" />
               </form>
           </div>
        </div>
    );
};

export default Assess;