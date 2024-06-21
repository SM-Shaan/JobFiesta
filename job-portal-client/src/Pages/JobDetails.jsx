import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, [id]);

  const [file, setFile] = useState();

  function handleFile(event) {
    setFile(event.target.files[0]);
  }

  function handleFile(event) {
    setFile(event.target.files[0]);
  }

  function handleUpload() {
    // event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    fetch('url', {
      method: 'POST',
      body: formData
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then((result) => {

        alert('File submitted successfully!');
      })
      .catch((error) => {
        console.error('Error', error);

      });
  }
  //   return (
  //     <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
  //       <PageHeader title={"Single Job Page"} path={"Single Job"} />
  //       <h2>JobDetails : {id}</h2>
  //       <h1>{job.jobTitle}</h1>
  //       <button className="bg-blue px-8 py-2 text-white" onClick={handleApply}>
  //         Apply Now
  //       </button>
  //     </div>
  //   );
  // };

  return (
    <div className='mx-auto'>
      <div className="text-center py-10 animate-fadeIn">
        <img src={job.companyLogo} alt="Company Logo" className="w-32 h-32 mx-auto mb-4 rounded-full shadow-lg animate-bounceIn" />
        <h1 className='text-cyan-700 text-4xl font-bold mb-4 '>{job.jobTitle}</h1>
        <div className='space-y-2 animate-slideIn'>
          <h3 className='text-base'>
            <span className='text-cyan-700 font-semibold'>Location:</span> {job.jobLocation}
          </h3>
          <h3 className='text-base'>
            <span className='text-cyan-700 font-semibold'>Company:</span> {job.companyName}
          </h3>
          <h3 className='text-base'>
            <span className='text-cyan-700 font-semibold'>Employment Type:</span> {job.employmentType}
          </h3>
          <h3 className='text-base'>
            <span className='text-cyan-700 font-semibold'>Experience Level:</span> {job.experienceLevel}
          </h3>
          <h3 className='text-base'>
            <span className='text-cyan-700 font-semibold'>Salary:</span> ${job.minPrice} - ${job.maxPrice} {job.salaryType}
          </h3>
          <h3 className='text-base'>
            <span className='text-cyan-700 font-semibold'>Posted On:</span> {new Date(job.postingDate).toLocaleDateString()}
          </h3>
        </div>
      </div>

      {/* <div className='p-2 m-3'>
        <h2 className='text-cyan-700 text-lg font-bold'>Samsung Electronics</h2>
        <div className='about-company'>
          <p className='text-slate-700 text-base'>
            Samsung Electronics is a global leader in technology, providing innovative products and solutions that enhance people's lives. With a diverse portfolio spanning mobile devices, consumer electronics, home appliances, semiconductors, and more, Samsung is committed to pushing the boundaries of what's possible.
          </p>
          <p>
            Founded in 1969 and headquartered in Seoul, South Korea, Samsung has grown into one of the world's largest technology companies, with operations in over 70 countries and a workforce of over 200,000 employees. Samsung's relentless pursuit of excellence and dedication to innovation has earned it a reputation for delivering cutting-edge products that set new standards in the industry.
          </p>
          <p>
            At Samsung, we believe in the power of technology to drive positive change and create a better future for everyone. We are dedicated to making a meaningful impact on society through our products, services, and corporate citizenship initiatives, and we are committed to being a responsible corporate citizen wherever we operate.
          </p>
        </div>
      </div> */}
      {/* <div className='job-details p-2 m-3'>
        <p className='text-slate-700 text-base font-bold m-3'>
          We are seeking a talented and motivated Software Engineer to join our dynamic team. As a Software Engineer, you will play a key role in designing, developing, and maintaining high-quality software solutions that meet our customers' needs. You will collaborate with cross-functional teams to deliver innovative products and drive continuous improvement.
        </p>
        <h4 className='text-cyan-700 text-lg font-bold'>Responsibilities:</h4>
        <ul className='list-disc pl-5 text-slate-700'>
          <li className='text-left'>Design, develop, and maintain software applications and features using programming languages such</li>
          <li className='text-left'>Collaborate with product managers, designers, and other stakeholders to understand requirements and translate them into technical solutions.</li>
          <li className='text-left'>Write clean, efficient, and well-documented code following best practices and coding standards.</li>
          <li className='text-left'>Conduct code reviews to ensure code quality, reliability, and maintainability.</li>
          <li className='text-left'>Troubleshoot and debug issues, and provide timely resolution to technical problems.</li>
          <li className='text-left'>Stay updated on emerging technologies and trends, and propose new tools and techniques to enhance development processes.</li>
          <li className='text-left'>Participate in Agile/Scrum meetings, including sprint planning, daily stand-ups, and retrospectives.</li>
          <li className='text-left'>Mentor junior engineers and contribute to a positive and collaborative team culture.</li>
        </ul>
      </div> */}
      <div className="p-4 m-3 bg-white shadow-md rounded-lg animate-slideIn">
        <h2 className='text-cyan-700 text-lg font-bold mb-2'>Job Description</h2>
        {job.description && job.description.split('\n').map((paragraph, index) => (
          <p key={index} className='text-slate-700 text-base mb-4'>
            <span className='text-cyan-700 font-semibold'>{paragraph.substring(0, paragraph.indexOf(':') + 1)}</span>
            {paragraph.substring(paragraph.indexOf(':') + 1)}
          </p>
        ))}
      </div>
      <div className="p-4 m-3 bg-white shadow-md rounded-lg animate-slideIn">
        <form onSubmit={handleUpload}>
          <input className='p-2 m-3 border rounded' type='file' name='file' onChange={handleFile} />
          <div>
            <button className='bg-cyan-700 p-3 m-3 rounded-lg text-white hover:bg-cyan-900 transition duration-300'>Upload Resume</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default JobDetails;
