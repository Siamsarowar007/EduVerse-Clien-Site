import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaTrashAlt, FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import { MdOutlineFeedback } from "react-icons/md";
import useAuthContext from "../../hook/useAuthContext";

const StudentFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const { user } = useAuthContext();
  const [editingId, setEditingId] = useState(null);
  const [editMessage, setEditMessage] = useState("");

  const fetchFeedbacks = async () => {
    const res = await axios.get("http://localhost:5000/feedbacks");
    setFeedbacks(res.data);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;

    const feedbackData = {
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
      message,
    };

    try {
      const res = await axios.post("http://localhost:5000/feedbacks", feedbackData);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Feedback Submitted",
          showConfirmButton: false,
          timer: 1000
        });
        e.target.reset();
        fetchFeedbacks();
      }
    } catch (err) {
      console.log(err);
      Swal.fire("Error!", "Failed to submit feedback.", "error");
    }
  };

  const handleDelete = async (id) => {
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
        await axios.delete(`http://localhost:5000/feedbacks/${id}`);
        fetchFeedbacks();
        Swal.fire('Deleted!', 'Your feedback has been deleted.', 'success');
      }
    });
  };

  const handleEdit = (id, message) => {
    setEditingId(id);
    setEditMessage(message);
  };

  const handleUpdate = async (id) => {
    try {
      const updatedFeedback = { message: editMessage };
      await axios.put(`http://localhost:5000/feedbacks/${id}`, updatedFeedback);
      Swal.fire("Updated!", "Feedback Updated Successfully", "success");
      setEditingId(null);
      fetchFeedbacks();
    } catch (err) {
      console.log(err);
      Swal.fire("Error!", "Failed to update feedback.", "error");
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-16 p-6">
      <title>Feedback || EduVerse</title>
      <h2 className="text-4xl font-bold text-center mb-10 flex justify-center items-center gap-2 text-blue-800">
        <MdOutlineFeedback size={40} className="text-blue-500" /> Student Feedback
      </h2>

      <form onSubmit={handleSubmit} className="mb-10 bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8 rounded-2xl shadow-2xl border border-blue-200">
        <textarea name="message" rows="4" required placeholder="Your Feedback..." 
          className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4">
        </textarea>
        <button type="submit" 
          className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-200">
          Submit Feedback
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {feedbacks.map((fb) => (
          <div key={fb._id} className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow-2xl p-4 border border-blue-200 relative group">
            <div className="flex items-center gap-4 mb-4">
              <img src={fb.image} alt={fb.name} className="w-16 h-16 rounded-full border-2 border-blue-400" />
              <div>
                <h3 className="text-xl font-bold text-blue-700">{fb.name}</h3>
                <p className="text-sm text-gray-600">{fb.email}</p>
              </div>
            </div>

            {editingId === fb._id ? (
              <>
                <textarea value={editMessage} onChange={(e) => setEditMessage(e.target.value)} className="w-full p-2 border rounded mb-2" />
                <div className="flex justify-end gap-2">
                  <button onClick={() => handleUpdate(fb._id)} className="text-green-500"><FaCheck size={20} /></button>
                  <button onClick={() => setEditingId(null)} className="text-red-500"><FaTimes size={20} /></button>
                </div>
              </>
            ) : (
              <p className="text-gray-700">{fb.message}</p>
            )}

            {editingId !== fb._id && (
              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                <button onClick={() => handleEdit(fb._id, fb.message)} className="text-blue-500 hover:text-blue-700">
                  <FaEdit size={20} />
                </button>
                <button onClick={() => handleDelete(fb._id)} className="text-red-500 hover:text-red-700">
                  <FaTrashAlt size={20} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentFeedback;
