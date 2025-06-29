
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useAuthContext from "../../hook/useAuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const CourseDetails = () => {
  const { id } = useParams();
  const { user } = useAuthContext();

  const [courseData, setCourseData] = useState(null);
  const [enrolled, setEnrolled] = useState(false);
  const [seats, setSeats] = useState(0);

  // 🔄 Fetch course data
  useEffect(() => {
    fetch(`https://assignment-11-server-site-ashen.vercel.app/courses/${id}`)
      .then(res => res.json())
      .then(data => {
        setCourseData(data);
        setSeats(data.availableSeats); 
      });
  }, [id]);

  //Check if user already enrolled
  useEffect(() => {
    const checkEnrollment = async () => {
      if (!user) return;
      try {
        const res = await axios.get(
          `https://assignment-11-server-site-ashen.vercel.app/enrollments/check?email=${user.email}&courseId=${id}`
        );
        setEnrolled(res.data?.enrolled === true);
      } catch (error) {
        console.error("Enrollment check failed", error);
      }
    };

    checkEnrollment();
  }, [user, id]);

  const handleEnroll = async () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login to enroll in this course.",
      });
      return;
    }

    try {
      const enrollData = {
        userEmail: user.email,
        courseId: id,
        enrolledAt: new Date().toISOString(),
      };

      const res = await axios.post(
        "https://assignment-11-server-site-ashen.vercel.app/enrollments",
        enrollData
      );

      if (res.data.enrolled) {
        setEnrolled(true);
        setSeats(prev => prev - 1); 

        Swal.fire({
          icon: "success",
          title: "Enrolled!",
          text: "You have successfully enrolled in this course.",
        });
      } else if (
        res.data.message === "You can not enroll more then 3 courses"
      ) {
        Swal.fire({
          icon: "info",
          title: "Limit Exceeded",
          text: "You can not enroll in more than 3 courses.",
        });
      } else {
        Swal.fire({
          icon: "info",
          title: "Already Enrolled",
          text: "You are already enrolled in this course.",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to enroll. Please try again.",
      });
    }
  };

  // loading state
  if (!courseData) {
    return (
      <div className="text-center py-24 text-lg text-blue-600">
        Loading course...
      </div>
    );
  }

  const {
    course_title,
    photo,
    instructorName,
    duration,
    description,
    category,
    deadline,
  } = courseData;

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
              Seats: {seats <= 0 ? <>No seats</> : <>{seats}</>}
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

          {/*  Conditional Enroll Button */}
          {seats <= 0 ? (
            <div className="mt-6 w-full text-center text-red-600 font-bold text-lg">
              No seats left
            </div>
          ) : (
            <button
              onClick={async () => {
                if (enrolled) {
                  //  Cancel Enrollment
                  try {
                    const res = await axios.delete(`https://assignment-11-server-site-ashen.vercel.app/enrollments/cancel`, {
                      data: {
                        email: user.email,
                        courseId: id,
                      },
                    });

                    if (res.data?.deletedCount > 0) {
                      setEnrolled(false);
                      setSeats(prev => prev + 1);

                      Swal.fire({
                        icon: "success",
                        title: "Enrollment Cancelled",
                        text: "You have successfully cancelled your enrollment.",
                      });
                    } else {
                      Swal.fire({
                        icon: "error",
                        title: "Cancel Failed",
                        text: "Something went wrong while cancelling enrollment.",
                      });
                    }
                  } catch (err) {
                    console.error(err);
                    Swal.fire({
                      icon: "error",
                      title: "Error",
                      text: "Failed to cancel enrollment.",
                    });
                  }
                } else {
                  handleEnroll();
                }
              }}
              className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-200 text-lg"
            >
              {enrolled
                ? `Enrolled  (Click to cancel | ${seats} seat${seats > 1 ? "s" : ""} left)`
                : `Enroll Now (${seats} seat${seats > 1 ? "s" : ""} left)`}
            </button>
          )}


        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

