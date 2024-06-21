import React from "react";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostCard = ({ data }) => {
    const {
        _id,
        blogTitle,
        blogLogo,
        postingData,
        description,
        postedBy,
        // tag, 
    } = data;

    const ShortDesc = description.length > 70 ? description.substr(0, 70) + '...' : description;
    const ShortTitle = blogTitle.length > 30 ? blogTitle.substr(0, 30) + '...' : blogTitle;
    return (
        <Link to={`/post/${_id}`} className="post" >
            <div className="post__thumbnail">
                <img src={blogLogo} alt="" className="h-48 w-96 object-fill p-2" />
            </div>
            <div className="post__content">
                {/* <Link to={`/post/${id}`}> */}
                {/* <h3>{ShortTitle}</h3> */}
                <h3 className="font-bold text-xl text-stone-600 hover:text-blue">{ShortTitle}</h3>
                {/* </Link> */}
                <p>{ShortDesc}</p>
                {/* <p className="text-sm mt-3">{tag}</p> */}
                <div className="post__footer">
                    <PostAuthor data={data}>
                        {/* <Link to={`/post/categories/${tag}`} className='btn font-bold text-black'>{tag}</Link> */}
                        {/* <Link to={`/post/categories/${tag}`} className='btn font-bold text-black' /> */}
                    </PostAuthor>
                </div>
            </div>
        </Link >
    );

    // return (
    //     <section className="card">
    //         <Link
    //             to={`/post/${_id}`}
    //             className="flex gap-4 flex-col sm:flex-row items-start"
    //         >
    //             <img src={image} alt="" />
    //             <div>
    //                 <h4 className="text-primary mb-1">{title}</h4>
    //                 {/* <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3> */}

    //                 <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
    //                     <span className="flex items-center gap-2">
    //                         <FiMapPin />
    //                         {/* {jobLocation} */}
    //                     </span>
    //                     <span className="flex items-center gap-2">
    //                         <FiUser />
    //                         {authorID}
    //                     </span>
    //                     <span className="flex items-center gap-2">
    //                         <FiCalendar />
    //                         {postingData}
    //                     </span>
    //                 </div>
    //                 <p className="text-base text-primary/70">{description}</p>
    //             </div>
    //         </Link>
    //     </section>
    // );
};

export default PostCard;
