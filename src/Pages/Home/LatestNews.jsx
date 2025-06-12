import React from "react";

const newsData = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg",
    title: "EFFECTIVE LECTURING SKILLS IN ENGLISH",
    description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non...",
    author: "Steven Master",
    likes: 55,
    category: "Advices, News",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg",
    title: "THREE REASONS WHY ENGLISH SPELLING IS CONFUSING",
    description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non...",
    author: "Steven Master",
    likes: 69,
    category: "News",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg",
    title: "ONLINE OR FACE–TO–FACE? LEARNING ENGLISH TODAY",
    description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus...",
    author: "Steven Master",
    likes: 47,
    category: "News, Professional English",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
    title: "WHY ARE YOU THINKING ABOUT LEARNING BETTER ENGLISH?",
    description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus...",
    author: "Steven Master",
    likes: 60,
    category: "Advices, News",
  },
];

const LatestNews = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-semibold text-center mb-10">Latest News</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {newsData.map((news) => (
          <div key={news.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{news.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>by <span className="text-blue-600">{news.author}</span></span>
                <span>{news.likes} ❤️</span>
              </div>
              <div className="mt-2 text-xs text-blue-400">{news.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
