import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import CreatableSelect from "react-select/creatable";

const PostingJob = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        data.skills = selectedOption;
        fetch("http://localhost:3000/post-job", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then((result) => {
                console.log(result);
                if (result.acknowledged === true) {
                    alert("Job Posted Successfully!!!");
                }
                reset()
            });
    };

    const options = [
        { value: "JavaScript", label: "JavaScript" },
        { value: "C++", label: "C++" },
        { value: "HTML", label: "HTML" },
        { value: "React", label: "React" },
        { value: "CSS", label: "CSS" },
        { value: "Node", label: "Node" },
    ];

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            {/* form  */}
            <div className='bg-[#FAFAFA] py-10px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* 1st row  */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Title</label>
                            <input
                                type="text"
                                placeholder="Web Developer"
                                {...register("jobTitle")}
                                className="create-job-input"
                            />
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Company Name</label>
                            <input
                                type="text"
                                placeholder="Ex: Microsoft"
                                {...register("companyName")}
                                className="create-job-input"
                            />
                        </div>
                    </div>
                    {/* 2nd row  */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Minimum Salary</label>
                            <input
                                type="text"
                                placeholder="$20k"
                                {...register("minPrice")}
                                className="create-job-input"
                            />
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Maximum Salary</label>
                            <input
                                type="text"
                                placeholder="$120k"
                                {...register("maxPrice")}
                                className="create-job-input"
                            />
                        </div>
                    </div>
                    {/* 3rd row  */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Salary Type</label>
                            <select
                                {...register("salaryType", { required: true })}
                                className="create-job-input"
                            >
                                {/* <option value={salaryType}>{salaryType}</option> */}
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Job Location</label>
                            <input
                                type="text"
                                placeholder="Ex: New York"
                                // defaultValue={jobLocation}
                                {...register("jobLocation")}
                                className="create-job-input"
                            />
                        </div>
                    </div>
                    {/* fourth row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Job Posting Date</label>
                            <input
                                type="date"
                                placeholder="Ex: 2023-10-28"
                                // defaultValue={postingDate}
                                {...register("postingDate")}
                                className="create-job-input"
                            />
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Experience Level</label>
                            <select
                                {...register("experienceLevel")}
                                className="create-job-input"
                            >
                                {/* <option value={experienceLevel}>{experienceLevel}</option> */}
                                <option value="NoExperience">Hourly</option>
                                <option value="Internship">Internship</option>
                                <option value="Work remotely">Work remotely</option>
                            </select>
                        </div>
                    </div>
                    {/* 5th row */}
                    <div>
                        <label>Required Skill Sets:</label>
                        <CreatableSelect
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                            className="create-job-input py-4"
                        />
                    </div>
                    {/* 6th row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Company Logo</label>
                            <input
                                type="url"
                                placeholder="Paste your company logo ULR: https://weshare.com/img1"
                                // defaultValue={companyLogo}
                                {...register("companyLogo")}
                                className="create-job-input"
                            />
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Employment Type</label>
                            <select
                                {...register("employmentType")}
                                className="create-job-input"
                            >
                                {/* <option value={employmentType}>{employmentType}</option> */}
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Temporary">Temporary</option>
                            </select>
                        </div>
                    </div>
                    {/* 7th row  */}
                    <div className="w-full">
                        <label className="block mb-2 text-lg">Job Description</label>
                        <textarea
                            className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
                            rows={6}
                            // defaultValue={description}
                            placeholder="Job Description"
                            {...register("description")}
                        />
                    </div>
                    {/* last row  */}
                    <div className="w-full">
                        <label className="block mb-2 text-lg">Job Posted By</label>
                        <input
                            type="email"
                            placeholder="your email"
                            // defaultValue={postedBy}
                            {...register("postedBy")}
                            className="create-job-input"
                        />
                    </div>
                    <input
                        type="submit"
                        className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
                    />
                </form>
            </div>
        </div>
    )
}

export default PostingJob