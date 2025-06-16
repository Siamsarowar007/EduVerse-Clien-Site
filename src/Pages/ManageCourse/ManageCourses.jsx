import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAuthContext from '../../hook/useAuthContext';
import { useNavigate } from 'react-router';

const ManageCourses = () => {
  const { user } = useAuthContext();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  // Load courses of the current user
  useEffect(() => {
    if (user?.email) {
      setLoading(true); 
      axios.get(`https://assignment-11-server-site-ashen.vercel.app/my-courses?email=${user.email}`)
        .then(res => setCourses(res.data))
        .catch(err => console.log(err))
        .finally(() => setLoading(false)); 
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`https://assignment-11-server-site-ashen.vercel.app/courses/${id}`);
        Swal.fire('Deleted!', 'Your course has been deleted.', 'success');
        setCourses(courses.filter(course => course._id !== id));
      }
    });
  }

  return (
    <div className="max-w-6xl mx-auto my-50 p-6 bg-gradient-to-br from-blue-50 via-white to-blue-100  rounded-2xl shadow-lg border border-blue-200">
      <title>Manage Course || EduVerse</title>
      <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Manage Your Courses</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Description</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course._id} className="border-b hover:bg-blue-50">
                  <td className="py-3 px-4">{course.course_title}</td>
                  <td className="py-3 px-4">{course.description.slice(0, 50)}...</td>
                  <td className="py-3 px-4 text-center space-x-3">
                    <button 
                      onClick={() => navigate(`/editCourse/${course._id}`)}
                      className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(course._id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {courses.length === 0 && (
                <tr>
                  <td colSpan="3" className="py-6 text-center text-gray-500">No courses found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ManageCourses;
