"use client";

import React, { useState, useCallback } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill out all fields! 📝");
      return;
    }
    alert(`Thank you, ${formState.name}! Your message has been sent successfully. 🚀`);
    setFormState({ name: "", email: "", message: "" });
  }, [formState]);

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title" style={{ color: "white", textAlign: "center" }}>Say Hello!</h2>
        <div className="retro-card contact-form reveal" style={{ maxWidth: "600px", margin: "0 auto", color: "var(--fg)" }}>
          <form onSubmit={handleSubmit}>
            <label style={{ display: "block", fontWeight: 800, marginBottom: "0.5rem", fontFamily: "var(--font-mono)" }}>
              NAME.TXT
            </label>
            <input 
              type="text" 
              placeholder="Who are you?"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            />
            
            <label style={{ display: "block", fontWeight: 800, marginBottom: "0.5rem", fontFamily: "var(--font-mono)" }}>
              EMAIL.COM
            </label>
            <input 
              type="email" 
              placeholder="Where can I reach you?"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            />
            
            <label style={{ display: "block", fontWeight: 800, marginBottom: "0.5rem", fontFamily: "var(--font-mono)" }}>
              MESSAGE.DOC
            </label>
            <textarea 
              placeholder="Tell me about your project..."
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            ></textarea>
            
            <button className="retro-button" type="submit" style={{ width: "100%" }}>
              send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
