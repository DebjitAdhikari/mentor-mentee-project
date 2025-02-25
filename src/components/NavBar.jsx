function NavBar() {
    return (
        <nav className="fixed w-full glass-effect shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold gradient-text">FindMentor</span>
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
    )
}

export default NavBar
