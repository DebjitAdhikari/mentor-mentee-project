import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Calendar, Clock, ArrowLeft, MessageSquare, Award, Briefcase, GraduationCap } from 'lucide-react';

function MentorDetails() {
  const { id } = useParams();

  // Mock data for the mentor profile
  const mentor = {
    id: "alex-thompson",
    name: "Alex Thompson",
    role: "Senior Software Engineer",
    company: "Google",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
    skills: ["React", "Node.js", "TypeScript", "System Design", "Cloud Architecture", "Team Leadership"],
    rating: 4.9,
    sessionPrice: 75,
    experience: "10+ years",
    availability: "10-15 hours/week",
    timeZone: "PST (UTC-8)",
    languages: ["English", "Spanish"],
    about: "I'm a Senior Software Engineer at Google with over 10 years of experience in full-stack development. I specialize in React, Node.js, and cloud architecture. I'm passionate about mentoring developers and helping them grow in their careers. My approach focuses on practical, hands-on learning combined with solid theoretical foundations.",
    expertise: [
      "Frontend Development (React, Vue, Angular)",
      "Backend Development (Node.js, Python)",
      "System Design & Architecture",
      "Career Growth & Leadership",
      "Technical Interview Preparation",
      "Code Review & Best Practices"
    ],
    reviews: [
      {
        id: 1,
        name: "David Chen",
        role: "Software Developer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop",
        rating: 5,
        date: "2 weeks ago",
        text: "Alex is an exceptional mentor! His deep knowledge of React and system design helped me level up my skills significantly. He provided practical examples and challenged me to think differently about problem-solving."
      },
      {
        id: 2,
        name: "Sarah Miller",
        role: "Frontend Engineer",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop",
        rating: 5,
        date: "1 month ago",
        text: "The mentorship sessions with Alex were invaluable. He helped me prepare for technical interviews and provided great insights into working at top tech companies. His feedback on my projects was detailed and actionable."
      },
      {
        id: 3,
        name: "Michael Park",
        role: "Full Stack Developer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
        rating: 4.8,
        date: "2 months ago",
        text: "Alex's mentorship was exactly what I needed to transition into a senior role. His experience in system design and architecture helped me understand complex concepts clearly. He's patient and explains things very well."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full glass-effect shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold gradient-text">MentorMatch</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="pt-20 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 smooth-transition">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Mentors
        </Link>
      </div>

      {/* Profile Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full aspect-square object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-3xl font-bold">{mentor.name}</h1>
                <div className="flex items-center bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 fill-current mr-1" />
                  {mentor.rating}
                </div>
              </div>
              <p className="text-xl text-gray-600 mb-4">{mentor.role} at {mentor.company}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-5 w-5 mr-2" />
                  {mentor.experience} experience
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  {mentor.availability} availability
                </div>
                <div className="flex items-center text-gray-600">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Languages: {mentor.languages.join(", ")}
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="h-5 w-5 mr-2" />
                  {mentor.reviews.length} reviews
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {mentor.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 smooth-transition flex items-center justify-center">
                  Book Session (${mentor.sessionPrice}/hour)
                  <Calendar className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 smooth-transition">
                  Message Mentor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-gray-600 whitespace-pre-line">{mentor.about}</p>
            </div>

            {/* Expertise Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Areas of Expertise</h2>
              <ul className="space-y-3">
                {mentor.expertise.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <GraduationCap className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6">Reviews</h2>
              <div className="space-y-6">
                {mentor.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                    <div className="flex items-start gap-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div>
                            <h4 className="font-semibold">{review.name}</h4>
                            <p className="text-sm text-gray-500">{review.role}</p>
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Book a Session</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Session Price</span>
                  <span className="font-semibold">${mentor.sessionPrice}/hour</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Availability</span>
                  <span className="font-semibold">{mentor.availability}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Time Zone</span>
                  <span className="font-semibold">{mentor.timeZone}</span>
                </div>
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 smooth-transition flex items-center justify-center">
                  Schedule Session
                  <Calendar className="ml-2 h-5 w-5" />
                </button>
                <p className="text-sm text-gray-500 text-center">
                  Free 15-minute introduction call available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorDetails;