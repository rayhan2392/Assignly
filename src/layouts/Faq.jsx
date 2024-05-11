const Faq = () => {
  return (
    <div className="mt-10">
        <h1 className="text-center text-4xl font-bold text-slate-400 mb-5">Frequently Asked Questions</h1>

      <div className="collapse collapse-arrow bg-base-200 mb-3">
        <input type="radio" name="my-accordion-2"/>
        <div className="collapse-title text-xl font-medium">
        How do I create a new assignment?
        </div>
        <div className="collapse-content">
          <p>To create a new assignment, navigate to the Assignments section and click on Create Assignment. Fill in the details such as title, description, due date, and any additional instructions. You can also add attachments and set the assignment to be recurring if needed. Once you have completed the form, click Save to publish the assignment.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        How do students submit assignments?
        </div>
        <div className="collapse-content">
          <p>Students can submit assignments by going to the Assignments section and clicking on the assignment they need to complete. From there, they can upload their files, add comments if necessary, and click Submit.Once submitted, they will receive a confirmation notification.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        How do instructors provide feedback and grades?
        </div>
        <div className="collapse-content">
          <p> Instructors can access submitted assignments in the Submissions section. After reviewing the students work, they can provide feedback using text comments or annotations directly on the assignment. Grades can be assigned using customizable rubrics or numerical scores. Once finished, instructors can submit the grades and feedback for students to view.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Can I track my progress and performance?
        </div>
        <div className="collapse-content">
          <p> Yes, both students and instructors can track progress and performance. Students can view their completed and pending assignments in their dashboard, along with grades and feedback. Instructors can access detailed reports on class performance, assignment completion rates, and individual student progress.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
