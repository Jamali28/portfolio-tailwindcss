export default function Achievement(){
    return(
        
        <section className="py-16 px-6 bg-blue-50 text-center">
  <h2 className="text-3xl font-semibold text-blue-600 mb-6">Certifications & Achievements</h2>
  <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
    Here are some certifications and achievements that showcase my dedication to continuous learning and professional growth:
  </p>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Certified Web Developer</h3>
      <p className="text-gray-600 mb-4">Awarded by [Institution Name] after completing an intensive program in full-stack web development.</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">React.js Mastery</h3>
      <p className="text-gray-600 mb-4">Achieved a high-level proficiency in React.js through hands-on experience building production-level applications.</p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Open Source Contributions</h3>
      <p className="text-gray-600 mb-4">Contributed to several open-source projects, improving features and fixing bugs for the developer community.</p>
    </div>
  </div>
</section>
    )
}