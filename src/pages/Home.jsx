import React, { useState, useEffect, useContext } from 'react';
import { Search, Users, Calendar, Star, ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { MentorContext } from '../componenet/MentorContext';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const {SetMentorDetails}=useContext(MentorContext)
  const navigate=useNavigate();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      company: "Microsoft",
      text: "Found my dream mentor who helped me transition into tech. Best investment in my career!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      company: "Amazon",
      text: "The mentorship program helped me master machine learning concepts in just 3 months.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "Netflix",
      text: "My mentor's guidance was invaluable in helping me land my dream product role.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop"
    }
  ];

  const featuredMentors = [
    {
      name: "Alex Thompson",
      role: "Senior Software Engineer",
      company: "Google",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
      skills: ["React", "Node.js", "TypeScript"],
      rating: 4.9
    },
    {
      name: "Maria Garcia",
      role: "Product Design Lead",
      company: "Apple",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
      skills: ["UI/UX", "Figma", "Design Systems"],
      rating: 4.8
    },
    {
      name: "David Kim",
      role: "Data Science Manager",
      company: "Meta",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
      skills: ["Python", "Machine Learning", "Data Analysis"],
      rating: 4.9
    },
    {
      name: "Sophia Chen",
      role: "Cloud Architect",
      company: "AWS",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
      skills: ["AWS", "DevOps", "Kubernetes"],
      rating: 4.7
    },
    {
      name: "James Wilson",
      role: "Mobile Developer",
      company: "Uber",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop",
      skills: ["iOS", "Swift", "React Native"],
      rating: 4.8
    },
    {
      name: "Priya Patel",
      role: "Engineering Manager",
      company: "Microsoft",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop",
      skills: ["Leadership", "System Design", "Agile"],
      rating: 4.9
    },
    {
      name: "Tom Anderson",
      role: "Security Expert",
      company: "Cloudflare",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
      skills: ["Cybersecurity", "Ethical Hacking", "Cloud Security"],
      rating: 4.8
    },
    {
      name: "Lisa Brown",
      role: "Frontend Architect",
      company: "Airbnb",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
      skills: ["Vue.js", "React", "Performance"],
      rating: 4.7
    },
    {
      name: "Ryan Zhang",
      role: "ML Engineer",
      company: "Tesla",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
      skills: ["Deep Learning", "Computer Vision", "PyTorch"],
      rating: 4.9
    },
    {
      name: "Emma Davis",
      role: "Backend Developer",
      company: "Stripe",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop",
      skills: ["Go", "Microservices", "System Design"],
      rating: 4.8
    }
  ];

  function handleMentor(mentordetails)
  {
    console.log('mentor',mentordetails)
    SetMentorDetails(mentordetails)
    navigate('/mentor')

  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Navigation */}
      <nav className="fixed w-full glass-effect shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold gradient-text">MentorMatch</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 smooth-transition">Browse Mentors</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 smooth-transition">How it Works</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 smooth-transition">Pricing</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 smooth-transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Search */}
      <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden"
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=2000&q=80')",
             backgroundSize: 'cover',
             backgroundPosition: 'center'
           }}>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-black/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Find Your Perfect Tech Mentor
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-delay-1">
              Connect with experienced mentors who can guide you through your tech journey. Get personalized 1-on-1 mentorship from industry experts.
            </p>
            <div className="max-w-2xl mx-auto mb-8 animate-fade-in-delay-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search mentors by skill, role, or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent smooth-transition"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in-delay-2">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 smooth-transition flex items-center justify-center">
                Find a Mentor <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/10 smooth-transition">
                Become a Mentor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 card-hover">
              <div className="text-4xl font-bold gradient-text mb-2 animate-float">500+</div>
              <div className="text-gray-600">Expert Mentors</div>
            </div>
            <div className="p-6 card-hover">
              <div className="text-4xl font-bold gradient-text mb-2 animate-float">10k+</div>
              <div className="text-gray-600">Successful Sessions</div>
            </div>
            <div className="p-6 card-hover">
              <div className="text-4xl font-bold gradient-text mb-2 animate-float">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
              <Search className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Find Your Mentor</h3>
              <p className="text-gray-600">Browse through our curated list of expert mentors and find the perfect match for your goals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
              <Calendar className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Book Sessions</h3>
              <p className="text-gray-600">Schedule one-on-one sessions at times that work best for you and your mentor.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Start Learning</h3>
              <p className="text-gray-600">Get personalized guidance and accelerate your growth with expert mentorship.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">What Our Users Say</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out"
                   style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                      />
                      <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 smooth-transition"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 smooth-transition"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Mentors Infinite Scroll */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Featured Mentors</h2>
          <div className="relative">
            <div className="flex gap-6 animate-scroll">
              {[...featuredMentors, ...featuredMentors].map((mentor, index) => (
                <div key={index} className="w-[350px] flex-shrink-0 bg-white border rounded-lg overflow-hidden shadow-lg card-hover">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <h3 className="text-xl font-semibold">{mentor.name}</h3>
                      <div className="ml-auto flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="ml-1">{mentor.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{mentor.role} at {mentor.company}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {mentor.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 smooth-transition" onClick={()=>handleMentor(mentor)}>
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful mentees who have accelerated their careers through expert mentorship.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 smooth-transition">
            Get Started Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">MentorMatch</h3>
              <p className="text-gray-400">Connecting ambitious learners with expert mentors.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Mentees</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Browse Mentors</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">How it Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Mentors</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Apply as Mentor</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Success Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 MentorMatch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;