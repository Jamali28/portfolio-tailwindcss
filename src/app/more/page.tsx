const skills = () => {
    return (
      <main className="m-5  bg-gray-50">
        
        {/* Skills Section */}
        <section className="max-w-6xl mx-auto text-center mb-16">
          <h3 className="text-2xl font-semibold text-blue-600 mb-8">Technologies I Work With</h3>
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
          <h3 className="text-2xl font-semibold text-blue-600 mb-8">Featured Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Project 1</h4>
              <p className="text-gray-600 mb-4">A brief description of the project goes here. It could be a web app, website, or other technical project.</p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Project 2</h4>
              <p className="text-gray-600 mb-4">A brief description of another project you want to showcase. Include links to GitHub or live demo.</p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Project 3</h4>
              <p className="text-gray-600 mb-4">Another project showcasing your skills. Add more details on what makes this project unique or challenging.</p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
          </div>
          <div>
            <h1 className="text-2xl m5 text-red-500 font-mono">Description</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio enim dicta
           ad tenetur, fugiat voluptatem, eos facere nihil quidem ullam adipisci inventore voluptatibus
           atque libero aliquam modi. Quibusdam iure eum assumenda corporis a dolorum asperiores quos ratione deserunt numquam 
           voluptas voluptatem id, modi natus dolore perspiciatis soluta sunt error! Labore voluptas culpa magnam delectus,
            voluptates nemo rem, incidunt placeat eos, exercitationem animi quae ipsam repellendus nam blanditiis. Animi, 
            , quia eaque a voluptatum sint error non laborum ducimus nulla officia pariatur eum molestiae ipsa cum laboriosam,
             vel atque harum libero saepe nisi at ea? Officia perferendis voluptatum inventore dolores at quibusdam nobis soluta ea,
              doloremque adipisci delectus nesciunt veritatis ipsam tempora optio impedit blanditiis iusto similique dolorum ullam 
              facilis commodi. Voluptatum distinctio cumque assumenda repudiandae architecto, explicabo reiciendis aliquam quam a
               vero suscipit odio numquam! Sunt esse tenetur rerum voluptate perspiciatis veritatis doloremque. Illum odit nobis re
          </p>
          </div>
        </section>
      </main>
    );
  };
  
  export default skills;
  