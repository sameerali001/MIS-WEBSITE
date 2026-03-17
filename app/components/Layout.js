"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Nav from './Nav';
export default function Layout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [heroCursorPosition, setHeroCursorPosition] = useState({ x: 50, y: 50 });
  const [isHeroCursorVisible, setIsHeroCursorVisible] = useState(false);
  const [heroImageError, setHeroImageError] = useState(false);

  const handleGlobalMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setCursorPosition({ x, y });
    if (!isCursorVisible) {
      setIsCursorVisible(true);
    }
  };

  const handleHeroMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setHeroCursorPosition({ x, y });
    if (!isHeroCursorVisible) {
      setIsHeroCursorVisible(true);
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col bg-slate-50 text-slate-900 relative"
      onMouseMove={handleGlobalMouseMove}
    >
      <div
        className="pointer-events-none fixed h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl transition-all duration-200 ease-out z-[5]"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          opacity: isCursorVisible ? 1 : 0,
        }}
      />
      <div
        className="pointer-events-none fixed h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/20 blur-2xl transition-all duration-150 ease-out z-[5]"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          opacity: isCursorVisible ? 1 : 0,
        }}
      />
      <div className="relative z-10">
        <Nav />
        
        {isHomePage && (
          <>
            {/* Modern Hero Section */}
            <style jsx>{`
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-30px); }
              }
              .float-animation {
                animation: float 4s ease-in-out infinite;
              }
              @keyframes techPulse {
                0%, 100% { transform: scale(1) translateY(0px); opacity: 0.35; }
                50% { transform: scale(1.08) translateY(-16px); opacity: 0.55; }
              }
              @keyframes gridDrift {
                0% { background-position: 0 0, 0 0; }
                100% { background-position: 80px 80px, 40px 40px; }
              }
              .tech-orb {
                animation: techPulse 8s ease-in-out infinite;
              }
              .tech-grid {
                animation: gridDrift 14s linear infinite;
              }
            `}</style>
            
            <header
              className="relative overflow-hidden text-white py-12 md:py-20"
              onMouseMove={handleHeroMouseMove}
              onMouseLeave={() => setIsHeroCursorVisible(false)}
            >
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-slate-950" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-slate-900" />
                <div
                  className="absolute inset-0 tech-grid"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(34,211,238,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.10) 1px, transparent 1px)',
                    backgroundSize: '48px 48px, 48px 48px',
                  }}
                />
                <div className="tech-orb absolute left-[10%] top-[8%] h-44 w-44 rounded-full bg-cyan-400/25 blur-3xl" />
                <div className="tech-orb absolute right-[8%] top-[18%] h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="tech-orb absolute bottom-[10%] left-[30%] h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
                <div className="absolute inset-0 bg-slate-950/55" />
                <div
                  className="pointer-events-none absolute h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/30 blur-3xl transition-all duration-200 ease-out"
                  style={{
                    left: `${heroCursorPosition.x}%`,
                    top: `${heroCursorPosition.y}%`,
                    opacity: isHeroCursorVisible ? 1 : 0,
                  }}
                />
                <div
                  className="pointer-events-none absolute h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/25 blur-2xl transition-all duration-150 ease-out"
                  style={{
                    left: `${heroCursorPosition.x}%`,
                    top: `${heroCursorPosition.y}%`,
                    opacity: isHeroCursorVisible ? 1 : 0,
                  }}
                />
              </div>
              <div className="relative mx-auto w-[85%] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[500px] md:min-h-[600px]">
                  {/* Left Content */}
                  <div className="flex flex-col justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
                      Better Education For Your <span className="text-cyan-400">Future</span>
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                      Practical IT training with industry experts. Hands-on courses in Networking, Hardware, and Cyber Security — placement-oriented education designed for real-world success.
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <a 
                        href="#courses" 
                        className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                      >
                        Get Started
                      </a>
                      <a 
                        href="#contact" 
                        className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-full transition-all duration-300 text-center"
                      >
                        Request Demo
                      </a>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex gap-8 flex-wrap">
                      <div>
                        <p className="text-3xl font-bold text-cyan-400">500+</p>
                        <p className="text-sm text-blue-200">Students Trained</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-cyan-400">95%</p>
                        <p className="text-sm text-blue-200">Success Rate</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-cyan-400">50+</p>
                        <p className="text-sm text-blue-200">Courses Available</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Image - Floating Animation */}
                  <div className="hidden md:flex justify-center items-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Glowing background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
                      
                      {/* Floating Image Container */}
                      <div className="relative float-animation">
                        {!heroImageError ? (
                          <img
                            src="https://bootstrapmade.com/content/demo/Arsha/assets/img/hero-img.png"
                            alt="Technology illustration"
                            className="w-[540px] max-w-full h-auto drop-shadow-2xl"
                            onError={() => setHeroImageError(true)}
                          />
                        ) : (
                          <div className="w-[540px] max-w-full rounded-2xl border border-cyan-300/30 bg-slate-900/40 p-8 text-center text-cyan-200">
                            <p className="text-lg font-semibold">Add image file:</p>
                            <p className="mt-2 text-sm">public/tech-hero-illustration.png</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </>
        )}

      <main className="mx-auto flex-1 w-[85%] px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>

      {/* Professional Footer */}
      <footer className="bg-slate-900 text-slate-100 mt-20 relative z-10">
        <div className="mx-auto w-[85%] px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Master Institute</h3>
              <p className="text-slate-300 mb-4">Empowering the next generation of IT professionals with industry-focused training and certifications.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20v-7.5H5.5v-3h2.79V7.5c0-2.76 1.69-4.26 4.13-4.26 1.17 0 2.18.09 2.47.13v2.86h-1.7c-1.33 0-1.59.63-1.59 1.56V9.5h3.19l-.41 3h-2.78V20h-3.02z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37Z"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#courses" className="text-slate-300 hover:text-white transition-colors">Courses</a></li>
                <li><a href="#mis-career-courses" className="text-slate-300 hover:text-white transition-colors">Career Courses</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Placements</a></li>
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Our Programs</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Certificate Programs</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Diploma Courses</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Degree Programs</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Bootcamps</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Workshops</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <span className="text-slate-300">misinfotechservices@gmail.com</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <span className="text-slate-300">9318306116</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <span className="text-slate-300">3rd floor Capital Tower Survey chowk, Opposite Vikas Bhawan, near Parade Ground, Dehradun-248001.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">© 2026 Master Institute. All rights reserved.</p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919318306116"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}
