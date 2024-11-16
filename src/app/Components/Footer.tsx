// components/Footer.js

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Social Links */}
          <div className="mb-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mx-3 text-lg text-white hover:text-gray-400">
              GitHub
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-3 text-lg text-white hover:text-gray-400">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-3 text-lg text-white hover:text-gray-400">
              Twitter
            </a>
          </div>
  
          {/* Copyright */}
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} [Muheeb jamali]. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  