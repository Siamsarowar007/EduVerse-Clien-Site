import React from 'react';
import useAuthContext from '../hook/useAuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddCourse = () => {
  const { user } = useAuthContext();
  console.log(user);

  const handleAddCourse = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());

    const newCourses = {
      ...formValues,
      instructorName: user?.displayName,
      instructorEmail: user?.email,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    // availableSeats should be saved as number
    newCourses.availableSeats = parseInt(newCourses.availableSeats);

    console.log(newCourses);

    axios
      .post('http://localhost:5000/courses', newCourses)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Course has been Added',
            showConfirmButton: false,
            timer: 1200,
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.log('Error submitting application:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-16 p-8 bg-gradient-to-br from-[#e6f0ff] via-white to-[#cce0ff] rounded-2xl shadow-2xl border border-blue-300">
      <title>Add Course || EduVerse</title>
      <h1 className="text-4xl font-extrabold text-[#003366] mb-8 text-center">Add Course</h1>

      <form onSubmit={handleAddCourse} className="space-y-6">
        <div>
          <label className="block text-[#004080] font-semibold mb-2">Course Title</label>
          <input
            type="text"
            name="course_title"
            className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-600 transition"
            placeholder="Course Name"
            required
          />
        </div>

        <div>
          <label className="block text-[#004080] font-semibold mb-2">Image URL</label>
          <input
            type="text"
            name="photo"
            className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-600 transition"
            placeholder="Image URL"
            required
          />
        </div>

        <div>
          <label className="block text-[#004080] font-semibold mb-2">Duration</label>
          <input
            type="text"
            name="duration"
            className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-600 transition"
            placeholder="Duration"
            required
          />
        </div>

        <div>
          <label className="block text-[#004080] font-semibold mb-2">Available Seats</label>
          <input
            type="number"
            name="availableSeats"
            className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-600 transition"
            placeholder="Available Seats"
            required
          />
        </div>

        <div>
          <label className="block text-[#004080] font-semibold mb-2">Description</label>
          <input
            type="text"
            name="description"
            className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-600 transition"
            placeholder="Course Description"
            required
          />
        </div>

        <div>
          <label className="block text-[#004080] font-semibold mb-2">Category</label>
          <input
            type="text"
            name="category"
            className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-600 transition"
            placeholder="Category"
            required
          />
        </div>

        <div>
          <label className="block text-[#004080] font-semibold mb-2">Enroll Deadline</label>
          <textarea
            name="deadline"
            rows={3}
            className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-600 transition resize-none"
            placeholder="Enroll Deadline"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#004080] to-[#3366cc] hover:from-[#003366] hover:to-[#274b8f] text-white font-bold py-3 rounded-lg shadow-lg transition duration-300"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
