function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">FindMentor</h3>
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
            <p>&copy; 2024 MentorMatch. All rights reserved. Developed by <a href="https://thinknxtmedia.com">Think nXt Media</a></p>
          </div>
        </div>
      </footer>
    )
}

export default Footer
