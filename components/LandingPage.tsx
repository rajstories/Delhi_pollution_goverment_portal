import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Map as MapIcon, 
  Cpu, 
  ArrowRight, 
  Users, 
  Building2, 
  X,
  Menu,
  Search,
  Globe,
  Accessibility
} from 'lucide-react';

interface LandingPageProps {
  onEnterDashboard: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterDashboard }) => {
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleGovLogin = () => {
    setIsAuthenticating(true);
    // Simulate auth delay (Clerk style)
    setTimeout(() => {
      setIsAuthenticating(false);
      setShowRoleModal(false);
      // For local dev, we enter the local dashboard. 
      // In production, this would redirect to: https://delhi-pollution-command-center-543246151304.us-west1.run.app/
      onEnterDashboard();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* ACCESSIBILITY TOP STRIP */}
      <div className="bg-[#1e3a8a] text-white text-[11px] py-1.5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="hover:underline cursor-pointer">Government of India</span>
            <span className="border-l border-blue-700 pl-4 hover:underline cursor-pointer">Ministry of Environment, Forest and Climate Change</span>
          </div>
          <div className="flex gap-3 items-center">
            <span className="hover:underline cursor-pointer">Skip to Main Content</span>
            <span className="border-l border-blue-700 pl-3 flex items-center gap-1 cursor-pointer">
              <Accessibility className="h-3 w-3" /> Screen Reader
            </span>
            <span className="border-l border-blue-700 pl-3 flex items-center gap-1 cursor-pointer">
              <Globe className="h-3 w-3" /> English <span className="opacity-70">▼</span>
            </span>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          <div className=\"flex items-center gap-4\">
            {/* Emblem Placeholder */}
            <img 
              src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/800px-Emblem_of_India.svg.png\" 
              alt=\"Satyamev Jayate\" 
              className=\"h-12 w-auto object-contain\"
            />
            <div className=\"hidden md:block border-l-2 border-gray-300 pl-4\">
              <h1 className=\"text-lg font-bold text-[#1e3a8a] leading-tight\">
                WardWatch AI
              </h1>
              <p className=\"text-xs text-gray-500 font-medium uppercase tracking-wide\">
                Municipal Corporation of Delhi
              </p>
            </div>
          </div>

          <div className=\"flex items-center gap-6\">
            <div className=\"hidden md:flex items-center gap-6 text-sm font-medium text-gray-700\">
              <a href=\"#\" className=\"hover:text-[#1e3a8a]\">Home</a>
              <a href=\"#\" className=\"hover:text-[#1e3a8a]\">About</a>
              <a href=\"#\" className=\"hover:text-[#1e3a8a]\">Dashboard</a>
              <a href=\"#\" className=\"hover:text-[#1e3a8a]\">Resources</a>
            </div>
            
            <button 
              onClick={() => setShowRoleModal(true)}
              className=\"bg-[#ea580c] hover:bg-[#c2410c] text-white text-sm font-bold px-6 py-2.5 rounded shadow-sm transition-colors flex items-center gap-2\"
            >
              Login / Register
            </button>
            <button className=\"md:hidden text-gray-600\">
              <Menu className=\"h-6 w-6\" />
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className=\"relative bg-white overflow-hidden\">
        {/* Background Pattern */}
        <div className=\"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5\"></div>
        
        <div className=\"max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10\">
          
          {/* Left Content */}
          <div className=\"flex-1 space-y-6 text-center md:text-left\">
            <div className=\"inline-block bg-blue-50 border border-blue-100 rounded-full px-3 py-1\">
              <span className=\"text-[#1e3a8a] text-xs font-bold uppercase tracking-wider\">
                Official Monitoring Portal
              </span>
            </div>
            
            <h1 className=\"text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight\">
              Ward-Wise Pollution <br/>
              <span className=\"text-[#1e3a8a]\">Action Dashboard</span>
            </h1>
            
            <p className=\"text-lg text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0\">
              An advanced AI-powered initiative for the Municipal Corporation of Delhi to monitor, analyze, and combat air pollution with hyperlocal precision.
            </p>

            <div className=\"pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start\">
              <button 
                onClick={() => setShowRoleModal(true)}
                className=\"bg-[#1e3a8a] hover:bg-[#172554] text-white px-8 py-3.5 rounded font-semibold shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-2\"
              >
                Access Dashboard
                <ArrowRight className=\"h-5 w-5\" />
              </button>
              <button className=\"bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3.5 rounded font-semibold transition-colors\">
                View Public Reports
              </button>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className=\"flex-1 w-full max-w-lg md:max-w-none\">
            <div className=\"relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white\">
              <img 
                src=\"https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80\" 
                alt=\"Delhi Map Technology\" 
                className=\"w-full h-auto object-cover\"
              />
              <div className=\"absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/80 to-transparent flex items-end p-6\">
                <div className=\"text-white\">
                  <p className=\"font-bold text-lg\">Real-time Data Integration</p>
                  <p className=\"text-sm opacity-90\">Integrating satellite, IoT, and ground sensor data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className=\"py-20 bg-[#F3F4F6]\">
        <div className=\"max-w-7xl mx-auto px-4 md:px-8\">
          <div className=\"text-center mb-12\">
            <h2 className=\"text-3xl font-bold text-gray-900\">Key Capabilities</h2>
            <p className=\"text-gray-500 mt-2\">Empowering administration with data-driven tools</p>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\">
            {/* Feature 1 */}
            <div className=\"bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow\">
              <div className=\"h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6\">
                <MapIcon className=\"h-6 w-6 text-[#1e3a8a]\" />
              </div>
              <h3 className=\"text-xl font-bold text-gray-900 mb-3\">Ward-Level Precision</h3>
              <p className=\"text-gray-600 leading-relaxed\">
                Granular air quality indices for every administrative ward, enabling targeted GRAP implementation.
              </p>
            </div>

            {/* Feature 2 */}
            <div className=\"bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow\">
              <div className=\"h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6\">
                <Building2 className=\"h-6 w-6 text-[#1e3a8a]\" />
              </div>
              <h3 className=\"text-xl font-bold text-gray-900 mb-3\">Zero Infrastructure Cost</h3>
              <p className=\"text-gray-600 leading-relaxed\">
                Utilizes existing infrastructure with advanced AI modeling to bridge data gaps without new hardware.
              </p>
            </div>

            {/* Feature 3 */}
            <div className=\"bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow\">
              <div className=\"h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6\">
                <Cpu className=\"h-6 w-6 text-[#1e3a8a]\" />
              </div>
              <h3 className=\"text-xl font-bold text-gray-900 mb-3\">AI Policy Simulator</h3>
              <p className=\"text-gray-600 leading-relaxed\">
                Predictive modeling to assess the potential impact of anti-pollution policies before rollout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className=\"bg-[#1e3a8a] text-white pt-12 pb-6\">
        <div className=\"max-w-7xl mx-auto px-4 md:px-8\">
          <div className=\"grid grid-cols-1 md:grid-cols-4 gap-8 mb-8\">
            <div>
              <h4 className=\"font-bold text-lg mb-4\">WardWatch AI</h4>
              <p className=\"text-sm text-blue-200 leading-relaxed\">
                Official digital platform for monitoring and managing air quality interventions in the National Capital Territory of Delhi.
              </p>
            </div>
            <div>
              <h4 className=\"font-bold text-lg mb-4\">Quick Links</h4>
              <ul className=\"space-y-2 text-sm text-blue-200\">
                <li><a href=\"#\" className=\"hover:text-white\">Home</a></li>
                <li><a href=\"#\" className=\"hover:text-white\">About Us</a></li>
                <li><a href=\"#\" className=\"hover:text-white\">Contact</a></li>
                <li><a href=\"#\" className=\"hover:text-white\">Sitemap</a></li>
              </ul>
            </div>
            <div>
              <h4 className=\"font-bold text-lg mb-4\">Policies</h4>
              <ul className=\"space-y-2 text-sm text-blue-200\">
                <li><a href=\"#\" className=\"hover:text-white\">Privacy Policy</a></li>
                <li><a href=\"#\" className=\"hover:text-white\">Terms of Use</a></li>
                <li><a href=\"#\" className=\"hover:text-white\">Hyperlink Policy</a></li>
                <li><a href=\"#\" className=\"hover:text-white\">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className=\"font-bold text-lg mb-4\">Contact</h4>
              <p className=\"text-sm text-blue-200\">
                Municipal Corporation of Delhi<br/>
                Dr. S.P. Mukherjee Civic Centre,<br/>
                J.L. Nehru Marg, New Delhi-110002
              </p>
            </div>
          </div>
          
          <div className=\"border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-blue-300\">
            <p>© 2026 Municipal Corporation of Delhi. All rights reserved.</p>
            <p>Designed by <span className=\"font-bold text-white\">Team GeoVision</span></p>
          </div>
        </div>
      </footer>

      {/* ROLE SELECTION MODAL */}
      {showRoleModal && (
        <div className=\"fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200\">
          <div className=\"bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200\">
            {/* Modal Header */}
            <div className=\"bg-[#1e3a8a] px-6 py-4 flex justify-between items-center text-white\">
              <h2 className=\"text-lg font-bold\">Select User Category</h2>
              <button 
                onClick={() => setShowRoleModal(false)}
                className=\"text-blue-200 hover:text-white transition-colors\"
              >
                <X className=\"h-5 w-5\" />
              </button>
            </div>

            {/* Modal Body */}
            <div className=\"p-8\">
              <div className=\"space-y-4\">
                
                {/* Citizen Option */}
                <a 
                  href=\"https://delhi-air-citizen-portal.vercel.app/\" 
                  target=\"_blank\"
                  rel=\"noopener noreferrer\"
                  className=\"group flex items-center gap-5 p-5 rounded-lg border border-gray-200 hover:border-green-600 hover:bg-green-50 transition-all cursor-pointer\"
                >
                  <div className=\"h-14 w-14 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors\">
                    <Users className=\"h-7 w-7 text-green-700\" />
                  </div>
                  <div className=\"flex-1\">
                    <h3 className=\"font-bold text-gray-900 group-hover:text-green-800\">Citizen</h3>
                    <p className=\"text-sm text-gray-500\">Public health advisories & reporting</p>
                  </div>
                  <ArrowRight className=\"h-5 w-5 text-gray-400 group-hover:text-green-700 group-hover:translate-x-1 transition-transform\" />
                </a>

                {/* Government Option */}
                <button 
                  onClick={handleGovLogin}
                  className=\"w-full text-left group flex items-center gap-5 p-5 rounded-lg border border-gray-200 hover:border-[#1e3a8a] hover:bg-blue-50 transition-all cursor-pointer\"
                >
                  <div className=\"h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors\">
                    <Building2 className=\"h-7 w-7 text-[#1e3a8a]\" />
                  </div>
                  <div className=\"flex-1\">
                    <h3 className=\"font-bold text-gray-900 group-hover:text-[#1e3a8a]\">Department / Official</h3>
                    <p className=\"text-sm text-gray-500\">Pollution Command Center Login</p>
                  </div>
                  <div className=\"ml-auto\">
                    {isAuthenticating ? (
                      <div className=\"h-5 w-5 border-2 border-[#1e3a8a] border-t-transparent rounded-full animate-spin\" />
                    ) : (
                      <ArrowRight className=\"h-5 w-5 text-gray-400 group-hover:text-[#1e3a8a] group-hover:translate-x-1 transition-transform\" />
                    )}
                  </div>
                </button>

              </div>
              
              <div className=\"mt-6 text-center\">
                <p className=\"text-xs text-gray-400\">
                  Authorized access only. Unauthorized access is a punishable offense.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default LandingPage;
