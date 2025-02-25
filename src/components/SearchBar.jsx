import React from 'react';
import { Search } from 'lucide-react';

export function SearchBar({ value, onChange }) {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-500" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Find your perfect mentor..."
        className="block w-full pl-12 pr-4 py-3 text-lg border-0 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />
    </div>
  );
}