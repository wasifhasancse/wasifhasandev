"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function ContactGlow() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const email = "wasifhasancse@gmail.com";
  const phone = "+8801712345678";
  const whatsapp = "+8801712345678";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        setErrorMessage(
          payload?.error || "Something went wrong. Please try again.",
        );
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 2200);
    } catch {
      setErrorMessage("Network issue detected. Please try again.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="contact-hero mb-14"
        >
          <div className="contact-hero-copy">
            <p className="section-eyebrow">Get In Touch</p>
            <h2 className="section-title">Let&apos;s Create Something Bold</h2>
            <p className="exp-summary mt-4 max-w-2xl text-slate-300">
              Have an idea or a project in mind? I&apos;d love to hear from you.
              Let&apos;s collaborate and bring your vision to life.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="contact-content-grid"
        >
          <aside className="contact-hero-card">
            <p className="contact-hero-card-title">Direct Contact</p>
            <a href={`mailto:${email}`} className="contact-hero-item">
              <span>Email</span>
              <strong>{email}</strong>
            </a>
            <a href={`tel:${phone}`} className="contact-hero-item">
              <span>Phone</span>
              <strong>{phone}</strong>
            </a>
            <a
              href={`https://wa.me/${whatsapp.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="contact-hero-item"
            >
              <span>WhatsApp</span>
              <strong>{whatsapp}</strong>
            </a>
          </aside>

          <motion.form
            onSubmit={submit}
            className="relative rounded-3xl border border-cyan-400/25 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-slate-950/80 backdrop-blur-2xl overflow-hidden shadow-2xl shadow-cyan-500/10"
          >
            {/* Decorative top glow */}
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent" />

            <div className="relative p-8 md:p-14">
              {/* Form fields grid */}
              <div className="grid gap-7 md:grid-cols-2 mb-8">
                <motion.label
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="float-field group"
                >
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="contact-input"
                  />
                  <span className="contact-float-label">Full Name</span>
                </motion.label>

                <motion.label
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  viewport={{ once: true }}
                  className="float-field group"
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="contact-input"
                  />
                  <span className="contact-float-label">Email Address</span>
                </motion.label>
              </div>

              {/* Message textarea */}
              <motion.label
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="float-field block group mb-8"
              >
                <textarea
                  name="message"
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="contact-input"
                />
                <span className="contact-float-label">Your Message</span>
              </motion.label>

              {/* Button and status */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                viewport={{ once: true }}
                className="flex items-center justify-between gap-4"
              >
                <motion.button
                  whileTap={{ scale: 0.93 }}
                  whileHover={{ scale: 1.05 }}
                  type="submit"
                  disabled={status === "loading"}
                  className="contact-submit-btn group relative overflow-hidden"
                  data-cursor="Send"
                  data-magnetic
                  data-magnetic-strength="0.15"
                >
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-cyan-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />

                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <span className="relative block py-3 px-8 font-semibold">
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="2"
                            opacity="0.25"
                          />
                          <path
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : status === "success" ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Message Sent
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Send Message</span>
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                    )}
                  </span>
                </motion.button>

                {/* Loading indicator dots */}
                <AnimatePresence>
                  {status === "loading" && (
                    <div className="flex gap-2">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2.5 h-2.5 rounded-full bg-linear-to-r from-cyan-400 to-blue-400"
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            delay: i * 0.15,
                            repeat: Infinity,
                            duration: 1,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Error message */}
              <AnimatePresence>
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 text-sm text-rose-400 flex items-center gap-2 font-medium"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      {errorMessage ||
                        "Something went wrong. Please try again."}
                    </span>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Decorative bottom glow */}
            <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-400/30 to-transparent" />
          </motion.form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {[
            {
              icon: "⚡",
              title: "24/7 Available",
              description: "Always ready to discuss your ideas",
            },
            {
              icon: "⏱️",
              title: "Quick Response",
              description: "Expect replies within 24 hours",
            },
            {
              icon: "🌍",
              title: "Remote Work",
              description: "Available globally, flexible timezone",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl border border-cyan-400/20 bg-linear-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm hover:border-cyan-400/40 hover:bg-linear-to-br hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <p className="font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
