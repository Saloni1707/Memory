const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ResumeParser</h3>
            <p className="text-gray-600">
              Smart resume parsing and analysis for better hiring decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="/upload" className="text-gray-600 hover:text-blue-600">
                  Upload Resume
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-blue-600">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: support@resumeparser.com</li>
              <li className="text-gray-600">Phone: (555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} ResumeParser. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 