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
            status: 'pending'
        };
        console.log(newCourses);


        //  send data to the server

        axios.post('http://localhost:5000/courses', newCourses)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Course has been Added",
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
                // from.reset();
            })
            .catch(error => {
                console.log('Error submitting application:', error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!"
                });
            })
    }





    return (
        <div className="max-w-lg mx-auto mt-16 p-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow-2xl border border-blue-200">
            <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Add Course </h1>
            {/* <Link to={`/`}><span className='underline hover:text-purple-500'>Details</span></Link> */}
            <form onSubmit={handleAddCourse} className="space-y-5">
                <div>
                    <label className="block text-blue-700 font-semibold mb-1">Course Title</label>
                    <input type="text" name='course_title' className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Course Name" required />
                </div>
                {/* <div>
                    <label className="block text-blue-700 font-semibold mb-1">Email</label>
                    <input type="email" name='email' className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Your Email" required />
                </div> */}
                <div>
                    <label className="block text-blue-700 font-semibold mb-1">Image URL</label>
                    <input type="text" name='photo' className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder='Image URL' required />
                </div>
                <div>
                    <label className="block text-blue-700 font-semibold mb-1">Duration</label>
                    <input type="text" name='duration' className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Duration" required />
                </div>
                <div>
                    <label className="block text-blue-700 font-semibold mb-1">Description</label>
                    <input type="text" name='description' className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Course Description" required />
                </div>
                <div>
                    <label className="block text-blue-700 font-semibold mb-1">Category</label>
                    <input type="text" name='category' accept="url" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Category" required />
                </div>
                {/* <div>
                    <label className="block text-blue-700 font-semibold mb-1">Status</label>
                    <input type="text" name='status' accept="url" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Status" required />
                </div> */}
                <div>
                    <label className="block text-blue-700 font-semibold mb-1">Enroll Deadline</label>
                    <textarea name='deadline' className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300" rows={4} placeholder="Enroll Deadline" required></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-200">Add Course</button>
            </form>
        </div>
    );
};

export default AddCourse;