"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, X, Check, ArrowRight, Sparkles, Code, Smartphone } from "lucide-react";

const consultationTypes = [
  { id: "ai", title: "AI & Automation Strategy", duration: "30 Mins", icon: Sparkles, color: "text-brand-green bg-brand-green/10" },
  { id: "web", title: "Web/SaaS Architecture", duration: "45 Mins", icon: Code, color: "text-brand-blue bg-brand-blue/10" },
  { id: "mobile", title: "Mobile App Consultation", duration: "30 Mins", icon: Smartphone, color: "text-cyan-400 bg-cyan-400/10" },
];

const timeSlots = ["09:00 AM", "10:30 AM", "11:00 AM", "01:30 PM", "03:00 PM", "04:30 PM"];

export default function CalendlyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Consultation Type, 2: Date/Time, 3: Contact Form, 4: Success
  const [selectedType, setSelectedType] = useState(consultationTypes[0]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", notes: "" });

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setStep(1);
      setSelectedDate("");
      setSelectedTime("");
      setFormData({ name: "", email: "", notes: "" });
    };

    window.addEventListener("open-calendly", handleOpen);
    return () => window.removeEventListener("open-calendly", handleOpen);
  }, []);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  // Generate calendar days for visual scheduler
  const today = new Date();
  const getDaysArray = () => {
    const days = [];
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0 && date.getDay() !== 6) { // Exclude weekends
        days.push(date);
      }
    }
    return days;
  };
  const calendarDays = getDaysArray();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#060914]/80 backdrop-blur-md"
          />

          {/* Modal box */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl rounded-3xl glass-panel border border-slate-200 dark:border-brand-green/10 p-6 md:p-8 shadow-2xl z-10 overflow-hidden text-slate-800 dark:text-slate-200"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:text-rose-500 transition-colors cursor-none"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Switcher */}
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest">
                      Step 1 of 3
                    </span>
                    <h2 className="text-xl md:text-2xl font-black mt-1">
                      Choose Consultation Topic
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Select the project scope you would like to discuss with our technical directors.
                    </p>
                  </div>

                  <div className="grid gap-3.5">
                    {consultationTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => {
                          setSelectedType(type);
                          handleNextStep();
                        }}
                        className={`flex items-center justify-between p-4 rounded-2xl text-left border cursor-none transition-all hover:scale-[1.01] ${
                          selectedType.id === type.id
                            ? "bg-slate-200/50 dark:bg-slate-900 border-brand-green shadow-lg"
                            : "bg-transparent border-slate-300/30 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900/50"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className={`p-2.5 rounded-xl ${type.color}`}>
                            <type.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold">{type.title}</h4>
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                              <Clock className="w-3.5 h-3.5" />
                              {type.duration}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <button
                      onClick={() => setStep(1)}
                      className="text-xs text-brand-green hover:underline cursor-none"
                    >
                      &larr; Back to topics
                    </button>
                    <div className="flex items-center justify-between mt-2">
                      <h2 className="text-xl md:text-2xl font-black">
                        Select Date & Time
                      </h2>
                      <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest">
                        Step 2 of 3
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Calendar Days Column */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-brand-green" />
                        Available Dates
                      </h4>
                      <div className="grid gap-2">
                        {calendarDays.map((day) => {
                          const dateString = day.toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          });
                          const isSelected = selectedDate === dateString;
                          return (
                            <button
                              key={dateString}
                              onClick={() => setSelectedDate(dateString)}
                              className={`py-3 px-4 rounded-xl text-xs font-bold transition-all text-center border cursor-none ${
                                isSelected
                                  ? "bg-brand-green text-slate-950 border-brand-green"
                                  : "bg-slate-200/40 dark:bg-slate-900/60 border-slate-300/30 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 hover:border-slate-400"
                              }`}
                            >
                              {dateString}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Slots Column */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1">
                        <Clock className="w-4 h-4 text-brand-blue" />
                        Available Slots
                      </h4>
                      {selectedDate ? (
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((slot) => {
                            const isSelected = selectedTime === slot;
                            return (
                              <button
                                key={slot}
                                onClick={() => setSelectedTime(slot)}
                                className={`py-3 px-2 rounded-xl text-[11px] font-bold transition-all text-center border cursor-none ${
                                  isSelected
                                    ? "bg-brand-blue text-white border-brand-blue"
                                    : "bg-slate-200/40 dark:bg-slate-900/60 border-slate-300/30 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 hover:border-slate-400"
                                }`}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="h-40 flex items-center justify-center border border-dashed border-slate-300 dark:border-slate-850 rounded-2xl text-xs text-slate-400">
                          Please select a date first
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    disabled={!selectedDate || !selectedTime}
                    onClick={handleNextStep}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-green to-brand-blue text-white font-bold text-sm shadow-md hover:scale-[1.01] transition-transform disabled:opacity-40 cursor-none"
                  >
                    Confirm Date & Time &rarr;
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <button
                      onClick={() => setStep(2)}
                      className="text-xs text-brand-green hover:underline cursor-none"
                    >
                      &larr; Back to scheduler
                    </button>
                    <div className="flex items-center justify-between mt-2">
                      <h2 className="text-xl md:text-2xl font-black">
                        Confirm Details
                      </h2>
                      <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest">
                        Step 3 of 3
                      </span>
                    </div>
                  </div>

                  {/* Summary card */}
                  <div className="p-4 rounded-2xl bg-slate-200/50 dark:bg-slate-900 border border-slate-300/30 dark:border-slate-800 text-xs flex flex-col gap-2">
                    <div>
                      <strong className="text-slate-400">Consultation:</strong> {selectedType.title}
                    </div>
                    <div>
                      <strong className="text-slate-400">Time:</strong> {selectedDate} at {selectedTime}
                    </div>
                  </div>

                  <form onSubmit={handleBook} className="grid gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 uppercase mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-brand-green text-slate-800 dark:text-slate-100 cursor-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 uppercase mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-brand-green text-slate-800 dark:text-slate-100 cursor-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 uppercase mb-1.5">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us briefly about your project or main goal..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-brand-green text-slate-800 dark:text-slate-100 cursor-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-green to-brand-blue text-white font-bold text-sm shadow-lg hover:scale-[1.01] transition-transform mt-2 cursor-none"
                    >
                      Book Consultation Slot
                    </button>
                  </form>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center text-center gap-6 py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-green/20 border border-brand-green flex items-center justify-center text-brand-green filter drop-shadow-[0_0_12px_rgba(74,222,42,0.3)]">
                    <Check className="w-8 h-8" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100">
                      Booking Confirmed!
                    </h2>
                    <p className="text-sm text-slate-400 mt-2 max-w-sm">
                      Thank you, <strong>{formData.name}</strong>. Your consultation has been scheduled.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-200/50 dark:bg-slate-900 border border-slate-300/30 dark:border-slate-800 text-xs w-full max-w-sm flex flex-col gap-2 text-left">
                    <div>
                      <strong className="text-slate-400">Meeting Topic:</strong> {selectedType.title}
                    </div>
                    <div>
                      <strong className="text-slate-400">Scheduled Time:</strong> {selectedDate} at {selectedTime}
                    </div>
                    <div className="text-[10px] text-brand-green font-semibold mt-2">
                      An calendar invite and meeting details has been sent to {formData.email}.
                    </div>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-2.5 rounded-xl border border-slate-300 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-900 text-xs font-bold cursor-none"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
