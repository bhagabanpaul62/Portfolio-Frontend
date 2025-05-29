export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "#" },
      { name: "About", href: "#" },
      { name: "Projects", href: "#" },
      { name: "Services", href: "#" },
      { name: "Contact", href: "#" },
    ],
    services: [
      { name: "Web Development", href: "#" },
      { name: "App Development", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "Machine Learning", href: "#" },
    ],
    socialLinks: [
      { name: "GitHub", href: "#", icon: "github" },
      { name: "LinkedIn", href: "#", icon: "linkedin" },
      { name: "Twitter", href: "#", icon: "twitter" },
      { name: "Instagram", href: "#", icon: "instagram" },
    ],
  };

  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900/80 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Bhagaban Paul
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building innovative digital solutions with passion and precision.
              Let's create something amazing together.
            </p>
            <div className="flex gap-4">
              {footerLinks.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="block text-blue-400">Email:</span>
                bhagabanpaulofficial@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="block text-blue-400">Phone:</span>
                +91 7439193517
              </p>
              <p className="text-gray-400">
                <span className="block text-blue-400">Location:</span>
                Bangalore, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative py-6 border-t border-gray-700/50">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-4 p-5">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Bhagaban Paul. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
