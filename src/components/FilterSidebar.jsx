import React from 'react';
import { SendHorizontal as AdjustmentsHorizontal, Tags, DollarSign, Star } from 'lucide-react';
import { expertiseOptions } from './datafolder';

export function FilterSidebar({ filters, onFilterChange }) {
  return (
    <div className="w-80 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg self-start sticky top-4">
      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
        <AdjustmentsHorizontal className="h-6 w-6 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
      </div>

      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Tags className="h-5 w-5 text-indigo-600" />
            <h3 className="font-medium text-gray-900">Skills & Expertise</h3>
          </div>
          <div className="space-y-2 max-h-64 overflow-y-auto pr-2 -mr-2">
            {expertiseOptions.map(skill => (
              <label key={skill} className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.expertise.includes(skill)}
                  onChange={() => {}}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-3 text-gray-700 group-hover:text-gray-900">{skill}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="h-5 w-5 text-indigo-600" />
            <h3 className="font-medium text-gray-900">Price Range</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <input
                  type="number"
                  min="0"
                  placeholder="Min"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <span className="text-gray-500">to</span>
              <div className="flex-1">
                <input
                  type="number"
                  min="0"
                  placeholder="Max"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="300"
              className="w-full accent-indigo-600"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-5 w-5 text-indigo-600" />
            <h3 className="font-medium text-gray-900">Minimum Rating</h3>
          </div>
          <select
            className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-3 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="0">Any rating</option>
            <option value="4">4.0+ stars</option>
            <option value="4.5">4.5+ stars</option>
            <option value="4.8">4.8+ stars</option>
          </select>
        </div>

        <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors mt-4">
          Apply Filters
        </button>
      </div>
    </div>
  );
}