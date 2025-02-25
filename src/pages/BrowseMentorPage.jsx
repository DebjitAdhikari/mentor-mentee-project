import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { FilterSidebar } from '../components/FilterSidebar';
import { MentorCard } from '../components/MentorCard';
import { Sparkles } from 'lucide-react';

function BrowseMentorPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    expertise: [],
    priceRange: [0, 300],
    rating: 0
  });

  // Example data - you'll implement the real data handling
  const exampleMentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
      company: "Google",
      expertise: ["React", "TypeScript", "Node.js"],
      hourlyRate: 150,
      rating: 4.9,
      reviews: 124,
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 2,
      name: "David Chen",
      title: "Tech Lead",
      company: "Microsoft",
      expertise: ["Python", "Machine Learning", "System Design"],
      hourlyRate: 200,
      rating: 4.8,
      reviews: 89,
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Product Manager",
      company: "Apple",
      expertise: ["Product Strategy", "UX Design", "Agile"],
      hourlyRate: 175,
      rating: 4.7,
      reviews: 156,
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-b from-white to-transparent">
        <header className="max-w-7xl mx-auto pt-8 pb-16 px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-indigo-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Find Your Perfect Mentor
              </h1>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Connect with experienced mentors who can guide you through your professional journey
            </p>
          </div>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </header>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 pb-12">
        <div className="flex gap-8">
          <FilterSidebar filters={filters} onFilterChange={setFilters} />
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Featured Mentors
                <span className="ml-3 text-sm font-normal text-gray-500">
                  {exampleMentors.length} available
                </span>
              </h2>
              <div className="flex gap-2">
                <select className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 text-sm border-0 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                  <option>Most Relevant</option>
                  <option>Highest Rated</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {exampleMentors.map(mentor => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BrowseMentorPage;