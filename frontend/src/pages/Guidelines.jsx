import '../assets/styles/PeraCetGuidelines.css';
import img from "../assets/pera_cet_guidlines.jpg"


const Guidelines = () => {

  const peraData = [
    {
      program: [
        "B. Tech (all branches of Engineering)",
        "B. Tech Bioengineering",
        "B. Tech Food Technology",
        "B. Pharm"
      ],
      marking: [
        "Physics (25 MCQ’s, each of 2 marks)",
        "Chemistry (25 MCQ’s, each of 2 marks)",
        "Mathematics (50 MCQ’s each of 2 marks)",
        "Total Marks: 200 | Duration: 2 hr."
      ],
      total: "Total: 200 Marks | 2 hr",
      link: "/assets/doc/PCM-Syllabus.pdf"
    },
    {
      program: [
        "B. Tech Bioengineering",
        "B. Tech Food Technology",
        "B. Pharm"
      ],
      marking: [
        "Physics (25 MCQ’s, each of 2 marks)",
        "Chemistry (25 MCQ’s, each of 2 marks)",
        "Biology (50 MCQ’s, each of 2 marks)"
      ],
      total: "Total Marks: 200 | Duration: 2 hr.",
      link: "/assets/doc/PCB-Syllabus.pdf"
    },
    {
      program: ["B. Ed / BA-B.Ed / BSc-B.Ed"],
      marking: [
        "Based on MH CET syllabus",
        "150 MCQ’s each of 1 Mark"
      ],
      total: "Total Marks: 150 | Duration: 2 hr.",
      link: "/assets/doc/B-Ed-Syllabus.pdf"
    },
    {
      program: ["M. Ed"],
      marking: [
        "MCQ’s type subject specific questions",
        "100 MCQ’s each of 1 Mark"
      ],
      total: "Total Marks: 100 | Duration: 2 hr",
    },
    {
      program: ["BCA / BBA / BMS / BBM"],
      marking: [
        "English Language (40 MCQ’s each of 1 mark)",
        "Reasoning Verbal & Arithmetic (30 MCQ’s each of 1 mark)",
        "General Knowledge (15 MCQ’s each of 1 mark)",
        "Computer Basics (15 MCQ’s each of 1 mark)"
      ],
      total: "Total Marks: 100 | Duration: 2 hr",
    },
    {
      program: ["BBA-LLB / BA-LLB / LLB / LLM"],
      marking: [
        "MCQ’s type examination based on MH CET syllabus",
        "100 MCQ’s each of 2 Marks"
      ],
      total: "Total Marks: 200 | Duration: 2 hr",
    },
    {
      program: ["BFA / B.Des / M.Des"],
      marking: [
        "Based on MH CET syllabus"
      ],
      total: "Total Marks: 100 | Duration: 2 hr.",
      link: "/assets/doc/BFA-Syllabus.pdf"
    },
    {
      program: ["MBA"],
      marking: [
        "MCQ’s type examination based on MH CET syllabus",
        "100 MCQ’s each of 2 Marks"
      ],
      total: "Total Marks: 200 | Duration: 2 hr",
      link: "/assets/doc/MBA-Syllabus.pdf"
    },
    {
      program: ["MCA"],
      marking: [
        "MCQ’s type examination based on MH CET syllabus",
        "100 MCQ’s each of 2 Marks"
      ],
      total: "Total Marks: 200 | Duration: 2 hr",
      link: "/assets/doc/MCA-Syllabus.pdf"
    },
    {
      program: ["M. Pharm"],
      marking: [
        "As per the GATE syllabus",
        "100 MCQ’s each of 2 Marks"
      ],
      total: "Total Marks: 200 | Duration: 2 hr",
    },
    {
      program: ["M. Arch / M. Plan"],
      marking: [
        "Based on MH CET syllabus",
        "100 MCQ’s each of 2 Marks"
      ],
      total: "Total Marks: 200 | Duration: 2 hr.",
    },
    {
      program: ["M. Tech (All branches)"],
      marking: [
        "As per the GATE syllabus",
        "100 MCQ’s each of 2 Marks"
      ],
      total: "Total Marks: 200 | Duration: 2 hr.",
    }
  ];
  return (

    <div className="pera-guidelines-container">
      <img
        src={img}
        alt="PERA CET Banner"
        className="pera-banner"
      />

      <h2 className='title'>PERA CET Guidelines</h2>

      <ul className="page-list">
        <li>PERA CET will be conducted only for professional programs.</li>
        <li>PERA CET shall be additional to other entrance exams like (JEE, MH-CET, Uni-Gauge, ATMA, CAT, MAT & other equivalent National or State Level Exams)</li>
        <li>PERA CET score will be considered for 1st year admission of respective UG / PG programs in PERA Member Universities only.</li>
        <li>Application fee will be Rs. 1500 /-  mode of payment is Online only <b>(Note-:Application Fee is Not-Refundable)</b></li>
        <li>PERA CET is <b>“Online CBT (Computer Based Test) Entrance Examination”,</b> will be conducted at designated centers.</li>
        <li>Candidates can appear for the PERA CET <b>“Online Proctored Home-Based Entrance Examination”</b> from HOME.</li>
        <li>The question paper will be separate for respective programs. The PERA-CET answer key & solved answer sheet softcopy or hardcopy will not be shared.</li>
        <li>UG programs question paper will be designed based on respective 12th standard syllabus.</li>
        <li>PG programs question paper will be designed based on respective degree level syllabus.</li>
        <li>There will be No Negative marking for any of the PERA CET Examinations.</li>
      </ul>

      <h3 className='inner-heading' style={{ textAlign: "center" }}>Marking Scheme of PERA CET Examination</h3>
      <div className="pera-table-container">
        <table className="pera-table">
          <thead>
            <tr>
              <th>Program Name</th>
              <th>Marking Scheme</th>
              <th>Syllabus</th>
            </tr>
          </thead>

          <tbody>
            {peraData.map((item, index) => (
              <tr key={index}>

                {/* Program */}
                <td>
                  {item.program.map((p, i) => (
                    <div key={i}>{p}</div>
                  ))}
                </td>

                {/* Marking */}
                <td>
                  {item.marking.map((m, i) => (
                    <div key={i}>{m}</div>
                  ))}
                  <b>{item.total}</b>
                </td>

                {/* Syllabus */}
                <td
                  onClick={() => item.link && window.open(item.link, "_blank")}
                  style={{
                    cursor: item.link ? "pointer" : "default",
                    color: item.link ? "blue" : "black",
                    textDecoration: item.link ? "underline" : "none"
                  }}
                >
                  view syllabus
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Guidelines;
