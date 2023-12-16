// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import courseData from "./courseData";

// const CourseDetail = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);

//   useEffect(() => {
//     // Fetch course details based on the id using the imported courseData
//     const fetchCourseDetails = () => {
//       try {
//         const data = courseData.find((item) => item.id.toString() === id);
//         if (!data) {
//           throw new Error(`Course with id ${id} not found`);
//         }
//         setCourse(data);
//       } catch (error) {
//         console.error("Error fetching course details", error);
//       }
//     };

//     fetchCourseDetails();
//   }, [id]);

//   if (!course) {
//     return <div>Loading...</div>;
//   }

//   const { imgsrc, videos } = course;

//   return (
//     <>
//       <section className="text-gray-600 body-font overflow-hidden">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="-my-8 divide-y-2 divide-gray-100">
//             {videos.map((video) => (
//               <div className="py-8 flex flex-wrap md:flex-nowrap">
//                 <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//                   <img
//                     className="w-full h-32 object-cover object-center rounded-md mb-4"
//                     src={imgsrc}
//                     alt="Category"
//                   />
//                 </div>
//                 <div className="md:flex-grow mx-10">
//                   <div key={video.id}>
//                     <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
//                       {video.title}
//                     </h2>
//                     <p className="leading-relaxed">{video.description}</p>
//                     <a
//                       href={video.url}
//                       className="text-indigo-500 inline-flex items-center mt-4"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Learn More
//                       <svg
//                         className="w-4 h-4 ml-2"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         fill="none"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M12 5l7 7-7 7"></path>
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CourseDetail;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const StudyCard = () => {
  const [course, setCourse] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/study/courses/${course.id}`
        );
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {course && course.videos ? (
            course.videos.map((video) => (
              <div
                className="py-8 flex flex-wrap md:flex-nowrap"
                key={video.id}
              >
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <a href={video.url}>
                    <img
                      className="w-full h-32 object-cover object-center rounded-md mb-4"
                      src={video.image}
                      alt="Category"
                    />
                  </a>
                </div>
                <div className="md:flex-grow mx-10">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    {video.title}
                  </h2>
                  <p className="leading-relaxed">{video.description}</p>
                  <a
                    href={video.url}
                    className="text-indigo-500 inline-flex items-center mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default StudyCard;
/* {course ? (
        <div>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <p>Author: {course.author}</p>
          <h2>Videos</h2>
          <ul>
            {course.videos.map((video) => (
              <li key={video.id}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <video controls>
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div> */
