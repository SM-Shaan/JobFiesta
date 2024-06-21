import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
const Blogform1 = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.skills = selectedOption;
        fetch("http://localhost:3000/post-blog", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.acknowledged === true) {
                    alert("Blog Posted Successfully!!!");
                }
                reset();
            });
    };

    const options = [
        { value: "Interviews", label: "Interviews" },
        { value: "Internship", label: "Internship" },
        { value: "Remote Jobs", label: "Remote Jobs" },
        { value: "Articles", label: "Articles" },
    ];

    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 mb-20 mt-10">
            {/* form */}
            <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* first row */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Blog Title</label>
                            <input
                                type="text"
                                // defaultValue={"Web Developer"}
                                {...register("blogTitle")}
                                className="create-job-input"
                            />
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Author Name</label>
                            <input
                                type="text"
                                // placeholder="Ex: Microsoft"
                                {...register("postedBy")}
                                className="create-job-input"
                            />
                        </div>
                    </div>
                    {/* second row */}
                    {/* <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Minimum Salary</label>
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
                    </div> */}
                    {/* third row */}
                    {/* <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Blog Tags</label>
                            <select
                                {...register("blogtags", { required: true })}
                                className="create-job-input"
                            >
                                <option value="">Choose your salary</option>
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
                                {...register("jobLocation")}
                                className="create-job-input"
                            />
                        </div>
                    </div> */}
                    {/* fourth row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Posting Date</label>
                            <input
                                type="date"
                                placeholder="Ex: 2023-10-28"
                                {...register("postingDate")}
                                className="create-job-input"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <label className="block mb-2 text-lg"> By email</label>
                            <input
                                type="email"
                                placeholder="your email"
                                {...register("postedByemail")}
                                className="create-job-input"
                            />
                        </div>
                        {/* <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Experience Level</label>
                            <select
                                {...register("experienceLevel")}
                                className="create-job-input"
                            >
                                <option value="">Choose your experience</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Internship</option>
                                <option value="Yearly">Work remotely</option>
                            </select>
                        </div> */}
                    </div>
                    {/* 5th row */}
                    <div>
                        <label>Required Tags Sets:</label>
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
                            <label className="block mb-2 text-lg">Blog Logo</label>
                            <input
                                type="url"
                                placeholder="Paste your company logo ULR: https://weshare.com/img1"
                                {...register("blogLogo")}
                                className="create-job-input"
                            />
                        </div>
                        {/* <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Employment Type</label>
                            <select
                                {...register("employmentType")}
                                className="create-job-input"
                            >
                                <option value="">Choose your experience</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Temporary">Temporary</option>
                            </select>
                        </div> */}
                    </div>

                    {/* 7th row */}
                    <div className="w-full">
                        <label className="block mb-2 text-lg">Blog Description</label>
                        <textarea
                            className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
                            rows={6}
                            defaultValue={
                                "Ea cupidatat amet dolore magna mollit. Lorem ipsum ad ex dolore dolor pariatur dolor velit duis non sint. Velit officia id aliqua pariatur voluptate cillum nulla est mollit ad commodo fugiat. Aliqua officia nisi ipsum eu nulla mollit anim esse qui irure esse labore dolore. Magna eu dolor ullamco non. Esse dolor adipisicing ut duis laboris sint irure aliquip enim dolor cupidatat occaecat."
                            }
                            placeholder="Job Description"
                            {...register("description")}
                        />
                    </div>
                    {/* last row  */}


                    <input
                        type="submit"
                        className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-rm cursor-pointer"
                    />
                </form>
            </div>
        </div>
    );
};

export default Blogform1;
