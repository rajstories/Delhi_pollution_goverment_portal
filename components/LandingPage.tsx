import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Map, 
  Cpu, 
  ArrowRight, 
  Users, 
  Building2, 
  X,
  CheckCircle2,
  Lock
} from 'lucide-react';

interface LandingPageProps {
  onEnterDashboard: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterDashboard }) => {
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleGovLogin = () => {
    setIsAuthenticating(true);
    // Simulate auth delay
    setTimeout(() => {
      setIsAuthenticating(false);
      setShowRoleModal(false);
      onEnterDashboard();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans selection:bg-emerald-500/30">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-[#0F172A]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              <ShieldCheck className="h-5 w-5 text-[#0F172A]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              WardWatch <span className="text-emerald-400">AI</span>
            </span>
          </div>
          <button 
            onClick={() => setShowRoleModal(true)}
            className="px-5 py-2 bg-white text-[#0F172A] text-sm font-bold rounded-full hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s' }} />
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-medium text-emerald-400 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Live for Municipal Corporation of Delhi
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400">
            From Data Blind <br />
            <span className="text-white">to Action Ready.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The advanced pollution command center for ward-level monitoring, 
            rapid response coordination, and AI-driven policy simulation.
          </p>

          <div className="pt-8">
            <button 
              onClick={() => setShowRoleModal(true)}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 text-[#0F172A] font-bold text-lg rounded-full overflow-hidden transition-all hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              <span className="relative z-10">Access Platform</span>
              <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section className="relative z-10 py-24 bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-white/5 hover:border-emerald-500/30 transition-colors group">
              <div className="h-12 w-12 bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <Map className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ward-Level Precision</h3>
              <p className="text-slate-400 leading-relaxed">
                Granular air quality data mapped to specific administrative wards, enabling targeted interventions rather than city-wide blankets.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-white/5 hover:border-emerald-500/30 transition-colors group">
              <div className="h-12 w-12 bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <Building2 className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Zero Infrastructure Cost</h3>
              <p className="text-slate-400 leading-relaxed">
                Leverages existing satellite feeds, IoT sensors, and open-source APIs. No new hardware deployment required.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-white/5 hover:border-emerald-500/30 transition-colors group">
              <div className="h-12 w-12 bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <Cpu className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Policy Simulator</h3>
              <p className="text-slate-400 leading-relaxed">
                Predict the impact of policies like Construction Bans or Odd-Even before implementation using our proprietary ML models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-[#0F172A] border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© 2026 Municipal Corporation of Delhi • Powered by WardWatch AI</p>
      </footer>

      {/* ROLE SELECTION MODAL */}
      {showRoleModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-slate-800 border border-white/10 rounded-2xl w-full max-w-md p-6 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowRoleModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-2xl font-bold text-white mb-2">Select Your Role</h2>
            <p className="text-slate-400 mb-8">Choose your access level to continue.</p>

            <div className="space-y-4">
              {/* Citizen Option */}
              <a 
                href="https://delhi-air-citizen-portal.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl border border-white/5 bg-slate-700/30 hover:bg-slate-700 hover:border-emerald-500/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-slate-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">I am a Citizen</h3>
                    <p className="text-sm text-slate-400">Access public health advisories & report issues.</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-500 ml-auto group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </div>
              </a>

              {/* Government Option */}
              <button 
                onClick={handleGovLogin}
                className="w-full text-left p-4 rounded-xl border border-white/5 bg-slate-700/30 hover:bg-slate-700 hover:border-emerald-500/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-slate-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Lock className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Government Official</h3>
                    <p className="text-sm text-slate-400">Log in to the Command Center Dashboard.</p>
                  </div>
                  <div className="ml-auto">
                    {isAuthenticating ? (
                      <div className="h-5 w-5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <ArrowRight className="h-5 w-5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default LandingPage;
