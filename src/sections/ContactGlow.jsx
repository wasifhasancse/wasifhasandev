"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function ContactGlow() {
  const [status, setStatus] = useState("idle");

  const submit = async (event) => {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("success");
    event.currentTarget.reset();
    setTimeout(() => setStatus("idle"), 2200);
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-title">Let us Build Something Bold</h2>

        <form
          onSubmit={submit}
          className="mt-8 rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="float-field">
              <input name="name" required placeholder=" " />
              <span>Name</span>
            </label>
            <label className="float-field">
              <input type="email" name="email" required placeholder=" " />
              <span>Email</span>
            </label>
          </div>
          <label className="float-field mt-4 block">
            <textarea name="message" rows={5} required placeholder=" " />
            <span>Message</span>
          </label>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="send-btn mt-5"
            data-cursor="Send"
          >
            {status === "loading"
              ? "Sending..."
              : status === "success"
                ? "Sent ✓"
                : "Send Message"}
          </motion.button>

          {status === "error" ? (
            <p className="mt-3 text-sm text-rose-300">
              Something went wrong. Try again.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
