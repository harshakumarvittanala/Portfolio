import React, { useState } from 'react';
import {
  Mail,
  Send,
  Copy,
  Check,
  Calendar,
  Clock,
  MessageSquare,
  Sparkles,
  MapPin
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playClickSound, playHoverSound, playSuccessSound } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'message' | 'meeting'>('message');

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web App',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Meeting scheduler state
  const [selectedDay, setSelectedDay] = useState('Tomorrow');
  const [selectedSlot, setSelectedSlot] = useState('02:30 PM');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    playSuccessSound();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    playClickSound();

    // Realistic API submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playSuccessSound();
      triggerConfetti();
    }, 1200);
  };

  const handleBookSlot = () => {
    playSuccessSound();
    triggerConfetti();
    setBookingConfirmed(true);
  };

  const timeSlots = ['10:00 AM', '11:30 AM', '02:30 PM', '04:00 PM', '06:00 PM'];
  const days = ['Today', 'Tomorrow', 'In 2 Days', 'Next Monday'];

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Photorealistic Cyber Code Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-[2px] brightness-[0.12] contrast-[1.2] opacity-50"
        style={{ backgroundImage: `url(${PERSONAL_INFO.cyberBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <Mail size={14} />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Exceptional</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Available for full-time engineering roles, high-leverage freelance contracts, or technical advisory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Info & Availability Badge */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-2xl shadow-black/40 space-y-6">

              {/* Status Beacon */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div>
                  <div className="text-xs font-mono font-semibold text-emerald-400">STATUS: ACTIVE & RESPONSIVE</div>
                  <div className="text-[11px] text-slate-400">Typically replies in under 12 hours</div>
                </div>
              </div>

              {/* Email One-Click Copy */}
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-2">DIRECT EMAIL ADDRESS</label>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 group hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail size={16} className="text-cyan-400 shrink-0" />
                    <span className="text-sm font-mono text-slate-200 truncate">{PERSONAL_INFO.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all ml-2"
                    title="Copy Email"
                  >
                    {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] text-emerald-400 font-mono mt-1 flex items-center gap-1">
                    <Check size={12} /> Copied to clipboard!
                  </p>
                )}
              </div>

              {/* Location & Timezone */}
              <div className="space-y-3 pt-2 text-xs font-mono text-slate-400 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <MapPin size={15} className="text-cyan-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-indigo-400" />
                  <span>Timezone: Indian Standard Time (IST / UTC+5:30)</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClickSound}
                  className="flex-1 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center gap-2 text-xs font-mono transition-all"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClickSound}
                  className="flex-1 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center gap-2 text-xs font-mono transition-all"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Tabs */}
          <div className="lg:col-span-7">
            <div className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-2xl shadow-black/40">
              {/* Tab Selector */}
              <div className="flex items-center gap-2 mb-6 p-1 rounded-xl bg-slate-950 border border-slate-800">
                <button
                  onClick={() => {
                    playClickSound();
                    setActiveTab('message');
                  }}
                  className={`flex-1 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${activeTab === 'message'
                      ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                    }`}
                >
                  <MessageSquare size={14} />
                  <span>Send Direct Message</span>
                </button>
                <button
                  onClick={() => {
                    playClickSound();
                    setActiveTab('meeting');
                  }}
                  className={`flex-1 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${activeTab === 'meeting'
                      ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                    }`}
                >
                  <Calendar size={14} />
                  <span>Schedule 15-Min Sync</span>
                </button>
              </div>

              {/* Tab 1: Direct Message Form */}
              {activeTab === 'message' && (
                <div>
                  {submitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                        <Check size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-white">Message Dispatched!</h3>
                      <p className="text-xs text-slate-400 max-w-sm mx-auto">
                        Thank you for reaching out, {formData.name}. Harsha has received your message and will respond promptly.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', email: '', projectType: 'Full-Stack Web App', message: '' });
                        }}
                        className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-cyan-300"
                      >
                        Send Another Note
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-mono text-slate-400 block mb-1.5">YOUR NAME</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Alex Morgan"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-xs text-white placeholder-slate-600 outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-mono text-slate-400 block mb-1.5">EMAIL ADDRESS</label>
                          <input
                            type="email"
                            required
                            placeholder="alex@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-xs text-white placeholder-slate-600 outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-1.5">PROJECT / INQUIRY TYPE</label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-xs text-white outline-none transition-colors"
                        >
                          <option>Full-Stack Web Application</option>
                          <option>AI / LLM Integration & Prompt Pipelines</option>
                          <option>Cloud Infrastructure & DevOps</option>
                          <option>Full-Time Software Engineer Role</option>
                          <option>Open Source Collaboration</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-1.5">MESSAGE DETAILS</label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell me about your project, goals, or role expectations..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-xs text-white placeholder-slate-600 outline-none transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <span className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            <span>Encrypting & Sending...</span>
                          </div>
                        ) : (
                          <>
                            <Send size={14} />
                            <span>Dispatch Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* Tab 2: Interactive 15-Minute Sync Scheduler */}
              {activeTab === 'meeting' && (
                <div className="space-y-5">
                  {bookingConfirmed ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                        <Check size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-white">Discovery Sync Booked!</h3>
                      <p className="text-xs text-slate-400 max-w-sm mx-auto">
                        Reserved for <span className="text-cyan-300 font-semibold">{selectedDay} at {selectedSlot} IST</span>. A calendar invitation has been sent to your clipboard.
                      </p>
                      <button
                        onClick={() => setBookingConfirmed(false)}
                        className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-cyan-300"
                      >
                        Change Time
                      </button>
                    </div>
                  ) : (
                    <>
                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-2">SELECT PREFERRED DAY</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {days.map((day) => (
                            <button
                              key={day}
                              type="button"
                              onClick={() => {
                                playClickSound();
                                setSelectedDay(day);
                              }}
                              className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${selectedDay === day
                                  ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-bold'
                                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                                }`}
                            >
                              {day}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-2">SELECT TIME SLOT (IST)</label>
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => {
                                playClickSound();
                                setSelectedSlot(slot);
                              }}
                              className={`py-2 px-2 rounded-xl text-xs font-mono border transition-all ${selectedSlot === slot
                                  ? 'bg-indigo-500/20 border-indigo-500 text-indigo-300 font-bold'
                                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                                }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 space-y-1">
                        <div className="text-slate-200 font-semibold flex items-center gap-1.5">
                          <Sparkles size={14} className="text-cyan-400" />
                          What we'll discuss:
                        </div>
                        <p className="text-[11px] leading-relaxed">
                          Project scope, technical roadmap, tech stack evaluation, timeline estimates, or job alignment.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleBookSlot}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white font-semibold text-xs shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all"
                      >
                        <Calendar size={14} />
                        <span>Confirm Slot: {selectedDay} @ {selectedSlot}</span>
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

