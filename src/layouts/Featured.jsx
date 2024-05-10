
const Featured = () => {
    return (
        <div className="mt-5 mb-5  ">
            <h1 className="text-center text-3xl font-bold">Featured</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mx-auto">
                 <div className="md:w-[250px] mx-5  p-8 shadow-lg bg-[#CDE8E5] rounded-xl">
                     <h1 className=" text-2xl font-bold ">Automatic Confirmation</h1>
                     <p> Students receive instant notifications upon successful submission.</p>
                 </div>
                 <div className="md:w-[250px] mx-5  p-8 shadow-lg bg-[#CDE8E5] rounded-xl">
                     <h1 className="text-2xl font-bold">Instant Feedback</h1>
                     <p>Instructors can review assignments and provide real-time feedback to students.</p>
                 </div>
                 <div className="md:w-[250px] mx-5 p-8 shadow-lg bg-[#CDE8E5] rounded-xl">
                     <h1 className="text-2xl font-bold">Personalized Insights</h1>
                     <p> Students and instructors can access personalized performance insights to improve learning and teaching outcomes.</p>
                 </div>
                 <div className="md:w-[250px] mx-5 p-8 shadow-lg bg-[#CDE8E5] rounded-xl">
                     <h1 className="text-2xl font-bold">Discussion Forums</h1>
                     <p> Engage students and instructors in discussion threads within assignments.</p>
                 </div>
            </div>
            
        </div>
    );
};

export default Featured;