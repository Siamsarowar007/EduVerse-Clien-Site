import React, { useEffect, useState } from 'react';
import useAuthContext from '../../hook/useAuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyEnrollments = () => {
    const { user } = useAuthContext();
    const [enrollments, setEnrollments] = useState([]);
    const [loading, setLoading] = useState(true);  

    useEffect(() => {
        if (user?.email) {
            setLoading(true); 
            axios.get(`http://localhost:5000/my-enrollments?email=${user.email}`)
                .then(res => setEnrollments(res.data))
                .catch(err => console.log(err))
                .finally(() => setLoading(false)); 
        }
    }, [user]);

    const handleRemove = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "Do you want to remove this enrollment?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        });

        if (confirm.isConfirmed) {
            try {
                await axios.delete(`http://localhost:5000/enrollments/${id}`);
                setEnrollments(enrollments.filter(enrollment => enrollment._id !== id));
                Swal.fire("Removed!", "Your enrollment has been removed.", "success");
            } catch (error) {
                console.log(error);
                Swal.fire("Error!", "Failed to remove enrollment.", "error");
            }
        }
    };

    return (
        <div className="container mx-auto p-8 ">
            <title>MyEnrollments || EduVerse</title>
            <h1 className="text-3xl font-bold mb-6">My Enrollments</h1>

            {/* Loading Spinner */}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className='bg-blue-200 text-blue-900'>
                                <th>#</th>
                                <th>Course</th>
                                <th>Instructor</th>
                                <th>Duration</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enrollments.map((enrollment, index) => (
                                <tr key={enrollment._id} className='hover:bg-blue-50'>
                                    <td>{index + 1}</td>
                                    <td className="flex items-center gap-4">
                                        <img src={enrollment.photo} alt={enrollment.courseTitle} className="w-16 h-16 rounded-md object-cover" />
                                        <span>{enrollment.courseTitle}</span>
                                    </td>
                                    <td>{enrollment.instructorName}</td>
                                    <td>{enrollment.duration}</td>
                                    <td>
                                        <button
                                            onClick={() => handleRemove(enrollment._id)}
                                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {enrollments.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="text-center py-10 text-gray-500">
                                        You have no enrollments.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyEnrollments;
