// components/Main.js

const Header = () => {
    return (
      <main className="py-5 px-4 bg-gray-50 ">
        {/* Intro Section */}
        <section className="text-center mb-16">
            <h1 className="text-5xl my-10 font-extrabold font-sans text-purple-500 underline">Welcome to My Portfolio !!</h1>
          <h2 className="text-3xl font-semibold text-cyan-500 mb-4">Hi, Im [Muheeb ALi Jamali]</h2>
          <p className="text-xl text-gray-700">
            Im a passionate web developer who specializes in building beautiful, responsive websites and web applications.
          </p>
        </section>
  
        {/* Skills Section */}
        <section className="max-w-6xl mx-auto text-center mb-16">
          <h3 className="text-2xl font-semibold text-cyan-600 mb-8 underline">Technologies I Work With</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
            
              <p className="text-lg font-semibold text-gray-800">HTML5</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
             
              <p className="text-lg font-semibold text-gray-800">CSS3</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
             
              <p className="text-lg font-semibold text-gray-800">JavaScript</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
             
              <p className="text-lg font-semibold text-gray-800">React</p>
            </div>
          </div>
        </section>
  
        {/* Featured Projects Section */}
        <section className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-cyan-600 mb-8 underline">Featured Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Project 1</h4>
              <p className="text-gray-600 mb-4">Website Using HTml,Css and Javascript </p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Project 2</h4>
              <p className="text-gray-600 mb-4">Clone Website in Mini-Hackhathon using Next.js and Tailwindcss</p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Project 3</h4>
              <p className="text-gray-600 mb-4"> Resume Builder website using html,css and javascript</p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Project 4</h4>
              <p className="text-gray-600 mb-4">Another project showcasing your skills. Add more details on what makes this project unique or challenging.</p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Project 5</h4>
              <p className="text-gray-600 mb-4">Another project showcasing your skills. Add more details on what makes this project unique or challenging.</p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Project 6</h4>
              <p className="text-gray-600 mb-4">Another project showcasing your skills. Add more details on what makes this project unique or challenging.</p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
          </div>
        
        
</section>
      </main>

    )
    }
  export default Header