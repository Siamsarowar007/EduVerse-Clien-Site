import React from "react";

const courseNewsData = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg",
    title: "Master Your Communication Skills in English",
    description:
      "Effective communication is key in every profession. Learn how to improve your speaking and writing skills with our expert tips.",
    author: "EduVerse Team",
    likes: 78,
    category: "Communication, Skills",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg",
    title: "Top 5 Courses to Boost Your Career in 2025",
    description:
      "Discover the most in-demand courses that will help you excel in your professional journey this year and beyond.",
    author: "EduVerse Team",
    likes: 102,
    category: "Career, Education",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/4144175/pexels-photo-4144175.jpeg",
    title: "How Online Learning Transforms Your Skills",
    description:
      "Online courses provide flexibility and access to knowledge. Learn how to make the most of digital learning platforms effectively.",
    author: "EduVerse Team",
    likes: 65,
    category: "Online Learning",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    title: "Why Continuous Learning Matters in Tech Industry",
    description:
      "Technology is evolving rapidly. Stay updated and relevant with continuous learning strategies recommended by experts.",
    author: "EduVerse Team",
    likes: 88,
    category: "Technology, Learning",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg",
    title: "Tips for Effective Time Management While Learning",
    description:
      "Managing time efficiently is crucial for success. Here are some proven tips to balance your study schedule and daily life.",
    author: "EduVerse Team",
    likes: 74,
    category: "Productivity, Education",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    title: "How to Choose the Right Course for Your Career Goals",
    description:
      "Choosing the right course can shape your future. Explore factors to consider and how EduVerse can guide you.",
    author: "EduVerse Team",
    likes: 93,
    category: "Guidance, Career",
  },
];

const LatestNews = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
        Course News & Insights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {courseNewsData.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-lg shadow-md border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={news.image + "?auto=compress&cs=tinysrgb&w=600"}
              alt={news.title}
              className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{news.title}</h3>
              <p className="text-gray-600 text-sm mb-5">{news.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <span>
                  by <span className="text-blue-600 font-medium">{news.author}</span>
                </span>
                <span>{news.likes} ❤️</span>
              </div>
              <div className="text-xs bg-blue-100 text-blue-600 inline-block py-1 px-3 rounded-full">
                {news.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
