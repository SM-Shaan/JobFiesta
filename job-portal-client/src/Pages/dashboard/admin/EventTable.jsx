import React from 'react'

const EventTable = () => {
    return (
        <div>EventTable</div>
    )
}

export default EventTable

// import React, { useEffect, useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { Link } from "react-router-dom";
// const EventTable = () => {
//     const id = "666eda7978d8e0db936a7bd0";
//     // const email = "mdalmamunit427@gamil.com";
//     const [events, setEvents] = useState([]);
//     const [searchText, setSearchText] = useState("");
//     const [isLoading, setIsLoading] = useState(true);

//     // set current page
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 4;

//     useEffect(() => {
//         setIsLoading(true);
//         fetch(`http://localhost:3000/all-events/${id}`)
//             // fetch('jobs.json')
//             .then(res => res.json())
//             .then(data => {
//                 setEvents(data);
//                 setIsLoading(false);
//             });
//     }, [searchText]);

//     // pagination
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentEvents = events.slice(indexOfFirstItem, indexOfLastItem);

//     // next btn & prev btn
//     const nextPage = () => {
//         if (indexOfLastItem < events.length) {
//             setCurrentPage(currentPage + 1);
//         }
//     };
//     const prevPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     const handleSearch = () => {
//         const filter = events.filter(
//             (event) =>
//                 event.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
//         );
//         setEvents(filter);
//         setIsLoading(false);
//     };

//     const handleDelete = (id) => {
//         console.log(id);
//         // fetch('jobs.json', {
//         fetch(`http://localhost:3000/event/${id}`, {
//             method: "DELETE",
//         })
//             .then((res) => res.json)
//             .then((data) => {
//                 if (data.acknowledged === true) {
//                     alert("Event Deleted Successfully!!!");
//                 }
//             });
//     };

//     console.log(searchText);

//     return (
//         <div className="max-w-screen-2xl mt-30 mx-auto xl:px-20 px-6 text-lg">
//             <div className="mx-auto">
//                 <h1 className="text-center text-2xl mb-5 text-blue">All My Events</h1>
//                 <div className="flex justify-center">
//                     <div className="flex md:rounded shadow-sm right-1 ring-insert focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600  md:w-1/2 w-full">
//                         <input
//                             onChange={(e) => setSearchText(e.target.value)}
//                             type="text"
//                             name="title"
//                             id="title"
//                             placeholder="What position are you looking for?"
//                             className="block flex-1 border-0 bg-transparent py-1 rounded-md
//                     pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
//                         />
//                         <FiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
//                         <button
//                             type="submit"
//                             className="bg-blue py-2 px-8 hover:bg-purple-900 text-white md:rounded-s-none rounded"
//                             onClick={handleSearch}
//                         >
//                             Search
//                         </button>
//                     </div>
//                 </div>
//             </div>


//             {/* table  */}
//             <section className="py-1 bg-blueGray-50">
//                 <div className="w-full mb-12 xl:mb-0 px-4 mx-auto mt-5">
//                     <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
//                         <div className="rounded-t mb-0 px-4 py-3 border-0">
//                             <div className="flex flex-wrap items-center">
//                                 <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//                                     <h3 className="font-semibold text-base text-blueGray-700">
//                                         All Events
//                                     </h3>
//                                 </div>
//                                 <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
//                                     <Link to="Eventform">
//                                         <button
//                                             className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                                             type="button"
//                                         >
//                                             Post A New Event
//                                         </button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="block w-full overflow-x-auto">
//                             <table className="items-center bg-transparent w-full border-collapse ">
//                                 <thead>
//                                     <tr>
//                                         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                                             ID.
//                                         </th>
//                                         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                                             TITLE
//                                         </th>
//                                         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                                             Date
//                                         </th>
//                                         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                                             EDIT
//                                         </th>
//                                         <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                                             DELETE
//                                         </th>
//                                     </tr>
//                                 </thead>

//                                 {isLoading ? (
//                                     <div className="flex items-center justify-center h-20">
//                                         <p>Loading...</p>
//                                     </div>
//                                 ) : (
//                                     <tbody>
//                                         {currentEvents.map((event, index) => (
//                                             <tr key={index}>
//                                                 <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
//                                                     {event._id}
//                                                 </th>
//                                                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
//                                                     {event.title}
//                                                 </td>
//                                                 <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                                                     {event.date}
//                                                 </td>
//                                                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                                                     <button>
//                                                         <Link to={`/edit-job/${event?._id}`}>Edit</Link>
//                                                     </button>
//                                                 </td>
//                                                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                                                     <button
//                                                         onClick={() => handleDelete(event._id)}
//                                                         className="bg-red-700 py-2 px-6 text-white rounded-sm"
//                                                     >
//                                                         Delete
//                                                     </button>
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 )}
//                             </table>
//                         </div>
//                     </div>
//                 </div>

//                 {/* pagination */}
//                 <div className="flex justify-center text-black space-x-8 mb-8">
//                     {currentPage > 1 && (
//                         <button className="hover:underline" onClick={prevPage}>Previous</button>
//                     )}
//                     {indexOfLastItem < events.length && (
//                         <button onClick={nextPage} className="hover:underline">
//                             Next
//                         </button>
//                     )}
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default EventTable;
