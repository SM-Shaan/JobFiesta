import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const BlogBanner = ({ handleClick }) => {
    return (
        <div>
            <div className='font-bold text-center text-xl text-black'><h3>Blogs</h3></div>
            <hr />
            <div className='Blog__banner'>
                <ul className='footer__categories'>
                    {/* <li><Link to="/posts/categories/Job Interview">Job Interviews</Link></li>
                    <li><Link to="/posts/categories/Internship">Internship</Link></li>
                    <li><Link to="/posts/categories/Remote Jobs">Remote Jobs</Link></li>
                    <li><Link to="/posts/categories/Articles">Articles</Link></li>
                    <li><Link to="/posts/categories/Teachin=g">Teaching</Link></li> */}
                    <Header handleClick={handleClick}></Header>
                </ul>
                {/* <div className='footer__copyright'>
                <small>All Rights Reserved &copy; Copyright, EGATOR Tutorials.</small>
            </div> */}
                <hr />
            </div>
        </div>
    )
}

export default BlogBanner