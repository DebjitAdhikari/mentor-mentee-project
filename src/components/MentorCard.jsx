import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

export function MentorCard({ mentor }) {
  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-5">
        <div className="relative">
          <img
            src={mentor.imageUrl}
            alt={mentor.name}
            className="w-20 h-20 rounded-2xl object-cover shadow-md group-hover:shadow-lg transition-all duration-300"
          />
          <div className="absolute -bottom-2 -right-2 bg-green-500 w-4 h-4 rounded-full border-2 border-white" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
              <p className="text-indigo-600 font-medium">{mentor.title}</p>
              <p className="text-gray-600 text-sm">{mentor.company}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">
                ${mentor.hourlyRate}
                <span className="text-sm font-normal text-gray-500">/hr</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1.5 font-medium">{mentor.rating}</span>
              <span className="ml-1 text-gray-500">({mentor.reviews})</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {mentor.expertise.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-indigo-700 transition-colors">
              View Profile
            </button>
            <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
              <MessageCircle className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}