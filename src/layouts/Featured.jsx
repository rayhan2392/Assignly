const Featured = () => {
    return (
        <div className="mt-12 mb-16 px-4">
            <h1 className="text-center text-4xl font-semibold text-[#333] mb-8">Featured Features</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-auto">
                {/* Card 1 */}
                <div className="p-8 bg-[#CDE8E5] rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                    <h2 className="text-2xl font-semibold text-[#333] mb-4">Automatic Confirmation</h2>
                    <p className="text-lg text-[#555]">Students receive instant notifications upon successful submission.</p>
                </div>
                {/* Card 2 */}
                <div className="p-8 bg-[#CDE8E5] rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                    <h2 className="text-2xl font-semibold text-[#333] mb-4">Instant Feedback</h2>
                    <p className="text-lg text-[#555]">Instructors can review assignments and provide real-time feedback to students.</p>
                </div>
                {/* Card 3 */}
                <div className="p-8 bg-[#CDE8E5] rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                    <h2 className="text-2xl font-semibold text-[#333] mb-4">Personalized Insights</h2>
                    <p className="text-lg text-[#555]">Students and instructors can access personalized performance insights to improve learning and teaching outcomes.</p>
                </div>
                {/* Card 4 */}
                <div className="p-8 bg-[#CDE8E5] rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                    <h2 className="text-2xl font-semibold text-[#333] mb-4">Discussion Forums</h2>
                    <p className="text-lg text-[#555]">Engage students and instructors in discussion threads within assignments.</p>
                </div>
            </div>
        </div>
    );
};

export default Featured;
