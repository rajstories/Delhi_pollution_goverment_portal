import React, { useEffect, useMemo, useState } from 'react';
import {
  Accessibility,
  ArrowRight,
  Building2,
  Cpu,
  Globe,
  Map as MapIcon,
  Menu,
  Users,
  X,
} from 'lucide-react';
import { SignIn, useUser } from '@clerk/clerk-react';

interface LandingPageProps {
  // Local-only fallback: lets you enter the built-in dashboard if Clerk isn’t configured.
  onEnterDashboard: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterDashboard }) => {
  const { isSignedIn, isLoaded } = useUser();

  const [showRoleModal, setShowRoleModal] = useState(false);
  const [showOfficialAuth, setShowOfficialAuth] = useState(false);

  const citizenPortalUrl = 'https://delhi-air-citizen-portal.vercel.app/';
  const demoVideoUrl = 'https://youtu.be/Z-mdqGnRBQA?si=lKAWTxRjA9SN8u7O';

  // Critical visual fix: ensure hero imagery is Delhi (not Mumbai)
  // Using local public image for reliability
  const heroImageUrl = '/delhi-hero.jpg';

  const publishableKey = String(
    import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || import.meta.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || ''
  );
  const clerkEnabled = publishableKey.length > 0;

  // Redirect back into THIS app (Vercel / localhost) and then auto-enter dashboard.
  const afterAuthUrl = useMemo(() => {
    const base = window.location.origin + window.location.pathname;
    return `${base}?enterDashboard=1`;
  }, []);

  // "Live" strip values (can be wired to real data later)
  const avgCityAqi = 312;
  const wardsMonitored = '272/272';
  const activeAlerts = 42;

  const aqiCategory = avgCityAqi >= 301 ? 'Very Poor' : avgCityAqi >= 201 ? 'Poor' : 'Moderate';
  const aqiColorClass = avgCityAqi >= 301 ? 'text-red-600' : avgCityAqi >= 201 ? 'text-orange-600' : 'text-green-600';

  const openOfficialAuth = () => {
    setShowRoleModal(false);
    setShowOfficialAuth(true);
  };

  // Clerk may complete OAuth without doing a full page redirect (depending on configuration).
  // When we detect a signed-in session, immediately enter the dashboard.
  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) return;

    setShowRoleModal(false);
    setShowOfficialAuth(false);
    onEnterDashboard();
  }, [isLoaded, isSignedIn, onEnterDashboard]);

  const clerkAppearance = {
    variables: {
      colorPrimary: '#1e3a8a',
      colorBackground: '#ffffff',
      colorText: '#0f172a',
      borderRadius: '10px',
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    elements: {
      card: 'shadow-none border border-slate-200',
      headerTitle: 'text-slate-900',
      headerSubtitle: 'text-slate-500',
      formFieldLabel: 'text-slate-700',
      formFieldInput:
        'border-slate-200 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]/20',
      formButtonPrimary: 'bg-[#1e3a8a] hover:bg-[#172554]',
      socialButtonsBlockButton: 'border border-slate-200 shadow-none',
      footerActionLink: 'text-[#1e3a8a] hover:text-[#172554]',
    },
  } as const;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* ACCESSIBILITY TOP STRIP */}
      <div className="bg-[#1e3a8a] text-white text-[11px] py-1.5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <div className="flex gap-4 min-w-0">
            <span className="hover:underline cursor-pointer whitespace-nowrap">Government of India</span>
            <span className="border-l border-blue-700 pl-4 hover:underline cursor-pointer truncate">
              Ministry of Environment, Forest and Climate Change
            </span>
          </div>
          <div className="hidden sm:flex gap-3 items-center whitespace-nowrap">
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
          <div className="flex items-center gap-4">
            {/* State Emblem of India (Lion Capital) */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
              alt="State Emblem of India"
              className="h-12 w-auto object-contain"
            />
            <div className="hidden md:block border-l-2 border-gray-300 pl-4">
              <h1 className="text-lg font-bold text-[#1e3a8a] leading-tight">
                <span className="inline-flex items-center gap-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                    alt="State Emblem"
                    className="h-6 w-6 object-contain"
                  />
                  WardWatch AI
                </span>
              </h1>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                Municipal Corporation of Delhi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowRoleModal(true)}
              className="bg-[#ea580c] hover:bg-[#c2410c] text-white text-sm font-bold px-6 py-2.5 rounded shadow-sm transition-colors"
            >
              Login / Register
            </button>
            <button className="md:hidden text-gray-600" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Government-style scrolling notice strip */}
      <div className="border-b border-red-100 bg-[#fef2f2]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 ww-marquee">
          <div className="ww-marquee__content text-[12px] text-red-900 font-semibold">
            ⚠ GRAP-3 Measures in Effect: Construction activities halted in 14 wards. | 🔔 New Advisory: AQI likely to cross 400 this evening. Citizens advised to wear masks.
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-block bg-blue-50 border border-blue-100 rounded-full px-3 py-1">
              <span className="text-[#1e3a8a] text-xs font-bold uppercase tracking-wider">
                Official Monitoring Portal
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Ward-Wise Pollution
              <br />
              <span className="text-[#1e3a8a]">Action Dashboard</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
              An initiative for the Municipal Corporation of Delhi to monitor, analyze, and combat air pollution with hyperlocal precision.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => setShowRoleModal(true)}
                className="bg-[#1e3a8a] hover:bg-[#172554] text-white px-8 py-3.5 rounded font-semibold shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-2"
              >
                Access Dashboard
                <ArrowRight className="h-5 w-5" />
              </button>

              <a
                href={demoVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3.5 rounded font-semibold transition-colors"
              >
                View Demo
              </a>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="flex-1 w-full max-w-lg md:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
              <img
                src={heroImageUrl}
                alt="Delhi (India Gate)"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-bold text-lg">MCD Command Center Connected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE DATA STRIP */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-6 md:-mt-8 pb-6">
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl px-4 md:px-6 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">Avg City AQI</span>
                <span className={`text-lg font-bold ${aqiColorClass}`}>
                  {avgCityAqi} <span className="text-sm font-semibold text-gray-600">({aqiCategory})</span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">Wards Monitored</span>
                <span className="text-lg font-bold text-gray-900">{wardsMonitored}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">Active Alerts</span>
                <span className="text-lg font-bold text-gray-900">{activeAlerts}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">Last Updated</span>
                <span className="text-lg font-bold text-gray-900 inline-flex items-center gap-2">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                  Just Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">Key Capabilities</h3>
            <p className="text-gray-500 mt-2">Authoritative tools for ward-level decision making</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <MapIcon className="h-6 w-6 text-[#1e3a8a]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Ward-Level Precision</h4>
              <p className="text-gray-600 leading-relaxed">
                Granular AQI and hotspot intelligence for each ward to enable targeted GRAP enforcement and rapid response.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="h-6 w-6 text-[#1e3a8a]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Zero Infrastructure Cost</h4>
              <p className="text-gray-600 leading-relaxed">
                Leverages existing sensor and satellite sources with AI estimation to reduce operational overhead.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="h-6 w-6 text-[#1e3a8a]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">AI Policy Simulator</h4>
              <p className="text-gray-600 leading-relaxed">
                Forecast the likely impact of interventions (construction bans, traffic diversions, sprinklers) before deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1e3a8a] text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">WardWatch AI</h4>
              <p className="text-sm text-blue-200 leading-relaxed">
                Official digital portal for monitoring and managing air quality interventions in the National Capital Territory of Delhi.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Policies</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Disclaimer</a></li>
                <li><a href="#" className="hover:text-white">Hyperlink Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white">Help</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <p className="text-sm text-blue-200">
                Municipal Corporation of Delhi<br />
                Dr. S.P. Mukherjee Civic Centre,<br />
                J.L. Nehru Marg, New Delhi-110002
              </p>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-blue-300">
            <p>© 2026 Municipal Corporation of Delhi. All rights reserved.</p>
            <p>
              Designed by <span className="font-bold text-white">Team GeoVision</span>
            </p>
          </div>
        </div>
      </footer>

      {/* ROLE SELECTION MODAL */}
      {showRoleModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="bg-[#1e3a8a] px-6 py-4 flex justify-between items-center text-white">
              <h2 className="text-lg font-bold">Select User Category</h2>
              <button
                onClick={() => setShowRoleModal(false)}
                className="text-blue-200 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-8">
              <div className="space-y-4">
                <a
                  href={citizenPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 rounded-lg border border-gray-200 hover:border-green-600 hover:bg-green-50 transition-all"
                >
                  <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Users className="h-7 w-7 text-green-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-green-800">Citizen</h3>
                    <p className="text-sm text-gray-500">Public health advisories & reporting</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-green-700 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={openOfficialAuth}
                  className="w-full text-left group flex items-center gap-5 p-5 rounded-lg border border-gray-200 hover:border-[#1e3a8a] hover:bg-blue-50 transition-all"
                >
                  <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Building2 className="h-7 w-7 text-[#1e3a8a]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-[#1e3a8a]">Department / Official</h3>
                    <p className="text-sm text-gray-500">Secure sign-in (Clerk)</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#1e3a8a] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-400">Authorized access only.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OFFICIAL AUTH MODAL (Clerk) */}
      {showOfficialAuth && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden">
            <div className="bg-[#1e3a8a] px-6 py-4 flex justify-between items-center text-white">
              <div>
                <h2 className="text-lg font-bold">Department / Official Sign-In</h2>
                <p className="text-xs text-blue-200 mt-0.5">Secure authentication powered by Clerk</p>
              </div>
              <button
                onClick={() => setShowOfficialAuth(false)}
                className="text-blue-200 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 bg-white">
              {!clerkEnabled ? (
                <div className="border border-amber-200 rounded-lg p-5">
                  <p className="text-sm font-semibold text-amber-800">Clerk is not configured yet.</p>
                  <p className="text-sm text-amber-700 mt-2">
                    Add <code className="px-1 py-0.5 bg-amber-50 border border-amber-100 rounded">NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> (or{' '}
                    <code className="px-1 py-0.5 bg-amber-50 border border-amber-100 rounded">VITE_CLERK_PUBLISHABLE_KEY</code>) to{' '}
                    <code className="px-1 py-0.5 bg-amber-50 border border-amber-100 rounded">.env.local</code>, then restart the dev server.
                  </p>

                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        setShowOfficialAuth(false);
                        onEnterDashboard();
                      }}
                      className="px-4 py-2 rounded bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800"
                    >
                      Continue to Local Demo Dashboard
                    </button>
                    <button
                      onClick={() => setShowOfficialAuth(false)}
                      className="px-4 py-2 rounded border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center">
                  <div className="w-full max-w-[420px]">
                    <SignIn
                      routing="hash"
                      afterSignInUrl={afterAuthUrl}
                      afterSignUpUrl={afterAuthUrl}
                      appearance={clerkAppearance}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
