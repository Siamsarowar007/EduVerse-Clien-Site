// import React, { use } from 'react';
// import { useParams } from 'react-router';
// import useAuthContext from '../../hook/useAuthContext';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const fetchData = fetch('https://assignment-11-server-site-ashen.vercel.app/courses')
//     .then(res => res.json())




// const CourseDetails = () => {

//     const courseData = use(fetchData);
//     console.log(courseData);

//     const { id } = useParams();
//     const findCourseData = courseData.find(course => course._id == id)
//     console.log(findCourseData);



//     const { course_title, photo, instructorName, duration, description, category, deadline, _id, availableSeats } = findCourseData;
//     const { user } = useAuthContext();

//     const handleEnroll = async () => {
//         if (!user) {
//             Swal.fire({
//                 icon: 'warning',
//                 title: 'Login Required',
//                 text: 'Please login to enroll in this course.'
//             });
//             return;
//         }
//         try {
//             const enrollData = {
//                 userEmail: user.email,
//                 courseId: _id,
//                 enrolledAt: new Date().toISOString()
//             };
//             const res = await axios.post('https://assignment-11-server-site-ashen.vercel.app/enrollments', enrollData);
//             if (res.data.enrolled) {
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Enrolled!',
//                     text: 'You have successfully enrolled in this course.'
//                 });
//             } else {
//                 Swal.fire({
//                     icon: 'info',
//                     title: 'Already Enrolled',
//                     text: 'You are already enrolled in this course.'
//                 });
//             }

//         } catch (error) {
//             console.log(error)
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error',
//                 text: 'Failed to enroll. Please try again.'
//             });
//         }
//     };

//     return (
//         <div className="max-w-3xl mx-auto my-24 p-8 bg-gradient-to-br from-blue-50 to-purple-100 rounded-2xl shadow-2xl border border-blue-200">
//             <div className="flex flex-col md:flex-row gap-8 items-center">
//                 <div className="w-full md:w-1/2 flex justify-center">
//                     <img src={photo} alt={course_title} className="rounded-xl shadow-lg object-cover w-full max-h-80" />
//                 </div>
//                 <div className="w-full md:w-1/2 flex flex-col gap-4">
//                     <h1 className="text-4xl font-extrabold text-blue-800 mb-2">{course_title}</h1>
//                     <div className="flex flex-wrap gap-4 text-blue-700 font-semibold">
//                         <span className="bg-blue-100 px-3 py-1 rounded-full">Instructor: {instructorName}</span>
//                         <span className="bg-purple-100 px-3 py-1 rounded-full">Category: {category}</span>
//                         <span className="bg-purple-100 px-3 py-1 rounded-full">Seats: {availableSeats}</span>
//                         <span className="bg-green-100 px-3 py-1 rounded-full">Duration: {duration}</span>
//                         {deadline && <span className="bg-red-100 px-3 py-1 rounded-full">Deadline: {deadline}</span>}
//                     </div>
//                     <p className="text-lg text-gray-700 mt-2">{description}</p>
//                     <button
//                         onClick={handleEnroll}
//                         className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-200 text-lg"
//                     >
//                         Enroll Now
//                     </button>
          
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CourseDetails;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuthContext from "../../hook/useAuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const CourseDetails = () => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enrolled, setEnrolled] = useState(false);

  // Fetch course details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseRes = await axios.get(
          `https://assignment-11-server-site-ashen.vercel.app/courses/${id}`
        );
        setCourse(courseRes.data);

        if (user?.email) {
          const enrollRes = await axios.get(
            `https://assignment-11-server-site-ashen.vercel.app/enrollments/${user.email}`
          );
          const isEnrolled = enrollRes.data.some(
            (enroll) => enroll.courseId === id
          );
          setEnrolled(isEnrolled);
        }

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, user?.email]);

  const handleToggleEnroll = async () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login to manage enrollment.",
      });
      return;
    }

    try {
      const enrollData = {
        userEmail: user.email,
        courseId: course._id,
      };

      const res = await axios.post(
        "https://assignment-11-server-site-ashen.vercel.app/enrollments",
        enrollData
      );
      if (res.data.enrolled) {
        Swal.fire("Success", "Enrolled successfully!", "success");
        setEnrolled(true);
        setCourse((prev) => ({
          ...prev,
          availableSeats: prev.availableSeats - 1,
        }));
      } else {
        Swal.fire("Info", "Enrollment cancelled.", "info");
        setEnrolled(false);
        setCourse((prev) => ({
          ...prev,
          availableSeats: prev.availableSeats + 1,
        }));
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  if (loading) return <p className="text-center my-20">Loading course...</p>;
  if (!course)
    return <p className="text-center my-20 text-red-500">Course not found.</p>;

  const {
    course_title,
    photo,
    instructorName,
    duration,
    description,
    category,
    deadline,
    availableSeats,
  } = course;

  return (
    <div className="max-w-3xl mx-auto my-24 p-8 bg-gradient-to-br from-blue-50 to-purple-100 rounded-2xl shadow-2xl border border-blue-200">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={photo}
            alt={course_title}
            className="rounded-xl shadow-lg object-cover w-full max-h-80"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-2">
            {course_title}
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-700 font-semibold">
            <span className="bg-blue-100 px-3 py-1 rounded-full">
              Instructor: {instructorName}
            </span>
            <span className="bg-purple-100 px-3 py-1 rounded-full">
              Category: {category}
            </span>
            <span className="bg-purple-100 px-3 py-1 rounded-full">
              Seats Left: {availableSeats}
            </span>
            <span className="bg-green-100 px-3 py-1 rounded-full">
              Duration: {duration}
            </span>
            {deadline && (
              <span className="bg-red-100 px-3 py-1 rounded-full">
                Deadline: {deadline}
              </span>
            )}
          </div>
          <p className="text-lg text-gray-700 mt-2">{description}</p>

          {/* Enroll/Unenroll Logic */}
          {availableSeats <= 0 && !enrolled ? (
            <p className="text-center mt-6 font-semibold text-red-600 text-lg">
              No seats left
            </p>
          ) : (
            <button
              onClick={handleToggleEnroll}
              className={`mt-6 w-full ${
                enrolled
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600"
              } text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-200 text-lg`}
            >
              {enrolled ? "Unenroll" : "Enroll Now"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
