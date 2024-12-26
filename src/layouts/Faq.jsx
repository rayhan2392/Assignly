const Faq = () => {
  return (
    <div className="mt-10 mb-16">
      <h1 className="text-center text-4xl font-bold text-slate-700 mb-8">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {/* FAQ Item 1 */}
        <div className="collapse collapse-arrow bg-gradient-to-r from-[#7F8C8D] via-[#BDC3C7] to-[#E5E8E8] rounded-lg shadow-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium text-slate-800">
            How do I create a new assignment?
          </div>
          <div className="collapse-content">
            <p>
              To create a new assignment, navigate to the Assignments section
              and click on Create Assignment. Fill in the details such as title,
              description, due date, and any additional instructions. You can
              also add attachments and set the assignment to be recurring if
              needed. Once you have completed the form, click Save to publish
              the assignment.
            </p>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div className="collapse collapse-arrow bg-gradient-to-r from-[#7F8C8D] via-[#BDC3C7] to-[#E5E8E8] rounded-lg shadow-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium text-slate-800">
            How do students submit assignments?
          </div>
          <div className="collapse-content">
            <p>
              Students can submit assignments by going to the Assignments
              section and clicking on the assignment they need to complete. From
              there, they can upload their files, add comments if necessary, and
              click Submit. Once submitted, they will receive a confirmation
              notification.
            </p>
          </div>
        </div>

        {/* FAQ Item 3 */}
        <div className="collapse collapse-arrow bg-gradient-to-r from-[#7F8C8D] via-[#BDC3C7] to-[#E5E8E8] rounded-lg shadow-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium text-slate-800">
            How do instructors provide feedback and grades?
          </div>
          <div className="collapse-content">
            <p>
              Instructors can access submitted assignments in the Submissions
              section. After reviewing the students work, they can provide
              feedback using text comments or annotations directly on the
              assignment. Grades can be assigned using customizable rubrics or
              numerical scores. Once finished, instructors can submit the grades
              and feedback for students to view.
            </p>
          </div>
        </div>

        {/* FAQ Item 4 */}
        <div className="collapse collapse-arrow bg-gradient-to-r from-[#7F8C8D] via-[#BDC3C7] to-[#E5E8E8] rounded-lg shadow-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium text-slate-800">
            Can I track my progress and performance?
          </div>
          <div className="collapse-content">
            <p>
              Yes, both students and instructors can track progress and
              performance. Students can view their completed and pending
              assignments in their dashboard, along with grades and feedback.
              Instructors can access detailed reports on class performance,
              assignment completion rates, and individual student progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
