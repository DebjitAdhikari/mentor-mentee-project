import React, { useState, useEffect, useContext } from 'react';
import { Search, Users, Calendar, Star, ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { MentorContext } from '../components/MentorContext';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const {setMentorDetails}=useContext(MentorContext)
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
      id: "alex-thompson",
    name: "Alex Thompson",
    role: "Senior Software Engineer",
    company: "Google",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
    skills: ["React", "Node.js", "TypeScript", "System Design", "Cloud Architecture", "Team Leadership"],
    text: "Found my dream mentor who helped me transition into tech. Best investment in my career!",
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
   },
   {
    id: "emily-carter",
    name: "Emily Carter",
    role: "Data Scientist",
    company: "Amazon",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop",
    skills: ["Python", "Machine Learning", "Data Analysis", "SQL", "Deep Learning", "Data Visualization"],
    text: "Emily's expertise in machine learning is unmatched. She guided me through complex projects and helped me land my dream job.",
    rating: 4.9,
    sessionPrice: 80,
    experience: "8+ years",
    availability: "8-12 hours/week",
    timeZone: "EST (UTC-5)",
    languages: ["English"],
    about: "I'm a Data Scientist at Amazon with a strong background in machine learning and data analysis. I love helping aspiring data scientists navigate the field and build impactful projects.",
    expertise: [
        "Machine Learning Algorithms",
        "Data Analysis & Interpretation",
        "Deep Learning & Neural Networks",
        "Big Data Technologies",
        "Statistical Modeling",
        "Data Visualization (Tableau, Power BI)"
    ],
    reviews: [
        {
            id: 4,
            name: "Laura Kim",
            role: "Junior Data Scientist",
            image: "https://images.unsplash.com/photo-1599566150163-291cd6292394?w=500&h=500&fit=crop",
            rating: 5,
            date: "3 weeks ago",
            text: "Emily is an amazing mentor! She simplified complex machine learning concepts and provided practical guidance for my projects."
        },
        {
            id: 5,
            name: "Ryan Patel",
            role: "Data Analyst",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop",
            rating: 4.8,
            date: "1 month ago",
            text: "Her sessions were incredibly helpful. Emily's expertise in data visualization helped me present my findings more effectively."
        }
    ]
},{
  id: "jordan-lee",
  name: "Jordan Lee",
  role: "Product Manager",
  company: "Microsoft",
  image: "https://images.unsplash.com/photo-1539571696357-5a69c17a6796?w=500&h=500&fit=crop",
  skills: ["Product Strategy", "Agile", "User Research", "Roadmap Planning", "Data-Driven Decision Making", "Stakeholder Management"],
  text: "Jordan's insights into product management are invaluable. He helped me understand the intricacies of building successful products.",
  rating: 4.8,
  sessionPrice: 70,
  experience: "9+ years",
  availability: "9-14 hours/week",
  timeZone: "PST (UTC-8)",
  languages: ["English", "Korean"],
  about: "I'm a Product Manager at Microsoft with a passion for building user-centric products. I enjoy mentoring aspiring product managers and helping them navigate the product lifecycle.",
  expertise: [
      "Product Vision & Strategy",
      "Agile & Scrum Methodologies",
      "User Experience (UX) Design",
      "Market Research & Analysis",
      "Product Launch & Go-to-Market",
      "Product Analytics & Metrics"
  ],
  reviews: [
      {
          id: 6,
          name: "Grace Nguyen",
          role: "Associate Product Manager",
          image: "https://images.unsplash.com/photo-1589571894960-20c641995bb8?w=500&h=500&fit=crop",
          rating: 5,
          date: "2 weeks ago",
          text: "Jordan's mentorship was crucial for my career growth. He provided practical advice on product strategy and roadmap planning."
      },
      {
          id: 7,
          name: "Kevin Ramirez",
          role: "Product Analyst",
          image: "https://images.unsplash.com/photo-1521119989659-a83752784285?w=500&h=500&fit=crop",
          rating: 4.7,
          date: "1 month ago",
          text: "His insights into data-driven decision making helped me improve my analytical skills and make better product recommendations."
      }
  ]
},{
  id: "olivia-white",
 name: "Olivia White",
 role: "UX Designer",
 company: "Adobe",
 image: "https://images.unsplash.com/photo-1595152772839-290e99b58129?w=500&h=500&fit=crop",
 skills: ["User Research", "Wireframing", "Prototyping", "UI Design", "Interaction Design", "Usability Testing"],
 text: "Olivia's passion for user experience is contagious. She helped me build a strong portfolio and understand the nuances of UX design.",
 rating: 4.8,
 sessionPrice: 65,
 experience: "7+ years",
 availability: "7-10 hours/week",
 timeZone: "PST (UTC-8)",
 languages: ["English", "French"],
 about: "I'm a UX Designer at Adobe with a focus on creating intuitive and user-friendly interfaces. I enjoy mentoring aspiring designers and helping them develop their skills in user research and design.",
 expertise: [
     "User-Centered Design",
     "Interaction Design (IxD)",
     "User Interface (UI) Design",
     "Design Thinking & Strategy",
     "Usability Testing & Analysis",
     "Design Tools (Figma, Sketch, Adobe XD)"
 ],
 reviews: [
     {
         id: 8,
         name: "Isabella Rodriguez",
         role: "Junior UX Designer",
         image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=500&h=500&fit=crop",
         rating: 5,
         date: "1 month ago",
         text: "Olivia is an excellent mentor! She provided valuable feedback on my portfolio and helped me understand the importance of user research."
     },
     {
         id: 9,
         name: "Noah Wilson",
         role: "UI Designer",
         image: "https://images.unsplash.com/photo-1568602471122-78329ba345c2?w=500&h=500&fit=crop",
         rating: 4.7,
         date: "2 months ago",
         text: "Her sessions were very insightful. Olivia's expertise in interaction design helped me improve my prototyping skills."
     }
 ]
},{
  id: "sophia-garcia",
  name: "Sophia Garcia",
  role: "Cybersecurity Engineer",
  company: "IBM",
  image: "https://images.unsplash.com/photo-1559526324-59353ba60361?w=500&h=500&fit=crop",
  skills: ["Network Security", "Penetration Testing", "Incident Response", "Cryptography", "Security Audits", "Cloud Security"],
  text: "Sophia's expertise in cybersecurity is phenomenal. She demystified complex security concepts and helped me build a strong foundation.",
  rating: 4.9,
  sessionPrice: 90,
  experience: "10+ years",
  availability: "6-10 hours/week",
  timeZone: "EST (UTC-5)",
  languages: ["English", "Spanish"],
  about: "I'm a Cybersecurity Engineer at IBM, specializing in network security and incident response. I'm passionate about sharing my knowledge and helping aspiring security professionals navigate the cybersecurity landscape.",
  expertise: [
      "Security Information and Event Management (SIEM)",
      "Vulnerability Management",
      "Ethical Hacking & Penetration Testing",
      "Security Compliance (e.g., GDPR, HIPAA)",
      "Cloud Security (AWS, Azure, GCP)",
      "Security Automation & Scripting"
  ],
  reviews: [
      {
          id: 10,
          name: "Carlos Martinez",
          role: "Security Analyst",
          image: "https://img.freepik.com/free-photo/headshot-attractive-curly-youngster-looks-seriously-camera_176532-8126.jpg?t=st=1740456452~exp=1740460052~hmac=21fa8fd1227196a52bda4225f08ffebe16632b07fabb6bf311bdf35435285ce3&w=1380",
          rating: 5,
          date: "1 month ago",
          text: "Sophia is an exceptional mentor! Her deep understanding of network security and penetration testing helped me excel in my role."
      },
      {
          id: 11,
          name: "Aisha Khan",
          role: "Cybersecurity Intern",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          rating: 4.8,
          date: "2 weeks ago",
          text: "Her sessions were incredibly informative. Sophia's expertise in incident response and security audits helped me understand the practical aspects of cybersecurity."
      }
  ]
}
  ];

  function handleMentor(mentordetails)
  {
    console.log('mentor',mentordetails)
    setMentorDetails(mentordetails)
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
      <NavBar></NavBar>

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
      <Footer></Footer>
    </div>
  );
}

export default Home;