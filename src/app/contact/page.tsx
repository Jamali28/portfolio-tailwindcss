// pages/contact.js
export default function Contact() {
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-500 text-white p-6">
          <h1 className="text-3xl font-bold text-center">Contact Me</h1>
        </header>
  
        <main className="py-12 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg">Name</label>
                <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg">Message</label>
                <textarea id="message"  className="w-full p-2 border border-gray-300 rounded" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">
                Send Message
              </button>
            </form>
          </div>
        </main>
  
      </div>
    );
  }
  