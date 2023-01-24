import React from "react";

export const Card2 = ({ e }) => {
  return (
    <div>
      <h3>{e.JobTitle}</h3>
      <p>{e.companyName}</p>
      <div>{e.attribute_snippet}</div>
      <p>
        Responded to 75% or more applications in the past 30 days, typically
        within 10 days.
      </p>
      <button>Apply Now</button>
      <button>star</button>
      <div>
        <h2>Job details</h2>
        <h4>Salary</h4>
        <p>{e.attribute_snippet}</p>
        <h4>Benefits & Perks</h4>
        <p>Cell phone reimbursement</p>
        <h4>Job Type</h4>
        <p>
          {e.category_1} - {e.category_2}
        </p>
        <hr />
        <h4>Benefits</h4>
        <p>Pulled from the full job description</p>
        <div>Cell phone reimbursement</div>
        <hr />
        <h1>Full Job Description</h1>
        <h4>Electrical Design & Applications Engineer</h4>
        <p>
          For our Machines & Automation Division we require a Candidate who has
          the inherent knowledge in Electrical Panel Design & Programming of
          Machines including Electrical / Electronics Circuit, PLC & Servo Based
          Control Systems CNC Panels & also has experience in Integration of
          various Modules of Machines & Automation Solutions. This would require
          knowledge of Hydraulics Pneumatics, Sensors & Peripheral Equipment and
          control thereof.
        </p>
        <p>MAIN JOB RESPOBSIBILTIES, (BUT NOT LIMITED TO) :</p>
        <ul>
          <li>
            Electrical / Electronic ( PLC / CNC ), Hydraulic, Pneumatics Circuit
            Design
          </li>
          <li>
            PLC & CNC Integration & Programming (Ladder and Function Block)
          </li>
          <li>Source new Vendors & perform Cost Control</li>
          <li>
            Supervision in Manufacturing and Assembly of Machines & Automation
            Panels & Field Wiring
          </li>
          <li>Design Reviews and Discussions with Customers</li>
          <li>Preparation of Design Approval for Electricals</li>
          <li>Work proactively to improve Machine Performance</li>
          <li>Work with Team on New Products Development</li>
          <li>Knowledge of Industry 4.0 and implementation in Machines</li>
          <li>Commissioning of Machines & Automation at Site</li>
          <li>Providing After Sales Service Assistance to the Customers</li>
        </ul>
        <h4>EXPERIENCE & SKILLS REQUIRED:</h4>
        <ul>
          <li>
            Minimum 5-7 years of Experience in Panel & Control Circuit Design
          </li>
          <li>Hands on experience in Servo & Hydraulic Controls</li>
          <li>
            Experience with SIEMENS / FANUC CNC Systems, PLC & Motion
            Controllers
          </li>
          <li>Motorized Spindles , VFD Programming</li>
          <li>
            Knowledge of Window Based Industrial PC, C++ Programming an added
            advantage
          </li>
          <li>Working knowledge of CAD & 3D Design Software a must</li>
          <li>Knowledge of Industrial Interfaces (Ethernet/IP, etc.)</li>
          <li>
            Project Management capabilities along with strong inter-personal,
            leadership, and organizational skills
          </li>
        </ul>
        <p>Job Types: Full-time, Commission</p>
        <p>Salary: ₹30,000.00 - ₹45,000.00 per month</p>
        <p>Benefits : Cell phone reimbursement</p>
        <p>COVID-19 considerations:</p>
        <p>
          Our Company follows strict Protocols for Covid 19. Masks are
          compulsory, Temperature is tested before anyone enters the premises.
          Hand Sanitizers are placed for Visitors and Employees use.
        </p>
        <hr />
        <button>Report Job</button>
      </div>
    </div>
  );
};
