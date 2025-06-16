import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAuthContext from "../../hook/useAuthContext";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`https://assignment-11-server-site-ashen.vercel.app/courses/${id}`)
      .then(res => setCourse(res.data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());

    const updatedCourse = {
      ...formValues,
      instructorName: user?.displayName,
      instructorEmail: user?.email,
      createdAt: course.createdAt,
      status: course.status
    };

    axios.put(`https://assignment-11-server-site-ashen.vercel.app/courses/${id}`, updatedCourse)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          Swal.fire('Success!', 'Course updated successfully', 'success');
          navigate('/manageCourses');
        }
      })
  }

  if (!course) return <div>Loading...</div>

  return (
    <div className="max-w-lg mx-auto mt-16 p-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow-2xl border border-blue-200">
      <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Edit Course</h1>

      <form onSubmit={handleUpdate} className="space-y-5">
        <div>
          <label className="block text-blue-700 font-semibold mb-1">Course Title</label>
          <input type="text" name='course_title' defaultValue={course.course_title} className="w-full px-4 py-2 border rounded" required />
        </div>

        <div>
          <label className="block text-blue-700 font-semibold mb-1">Image URL</label>
          <input type="text" name='photo' defaultValue={course.photo} className="w-full px-4 py-2 border rounded" required />
        </div>

        <div>
          <label className="block text-blue-700 font-semibold mb-1">Duration</label>
          <input type="text" name='duration' defaultValue={course.duration} className="w-full px-4 py-2 border rounded" required />
        </div>

        <div>
          <label className="block text-blue-700 font-semibold mb-1">Description</label>
          <input type="text" name='description' defaultValue={course.description} className="w-full px-4 py-2 border rounded" required />
        </div>

        <div>
          <label className="block text-blue-700 font-semibold mb-1">Category</label>
          <input type="text" name='category' defaultValue={course.category} className="w-full px-4 py-2 border rounded" required />
        </div>

        <div>
          <label className="block text-blue-700 font-semibold mb-1">Enroll Deadline</label>
          <textarea name='deadline' defaultValue={course.deadline} className="w-full px-4 py-2 border rounded" rows={4} required></textarea>
        </div>

        <div className="flex justify-center">
          <button type="submit" className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 px-6 rounded-lg shadow-lg">
            Update Course
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditCourse;
