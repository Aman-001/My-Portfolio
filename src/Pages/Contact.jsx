import React, { useState } from 'react';

export default function Contact() {
  // Replace with your Formspree endpoint (https://formspree.io/f/xxxxx)
  // If left empty, the form will fall back to a mailto: link using EMAIL_ADDRESS
  const FORM_ENDPOINT = 'https://formspree.io/f/mldadvey';
  const EMAIL_ADDRESS = 'amanc228d@gmail.com';

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ sending: false, success: null, error: '' });

  const isValidEmail = (e) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ sending: true, success: null, error: '' });

    if (!form.name.trim() || !form.message.trim() || !isValidEmail(form.email)) {
      setStatus({ sending: false, success: false, error: 'Please provide a valid name, email, and message.' });
      return;
    }

    const subject = form.subject || 'New message from portfolio';
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;

    if (!FORM_ENDPOINT) {
      // Mailto fallback
      const mailto = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      setStatus({ sending: false, success: true, error: '' });
      return;
    }

    try {
      const data = new FormData();
      data.append('name', form.name);
      data.append('email', form.email);
      data.append('subject', subject);
      data.append('message', form.message);

      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setForm({ name: '', email: '', subject: '', message: '' });
        setStatus({ sending: false, success: true, error: '' });
      } else {
        const json = await res.json().catch(() => ({}));
        setStatus({ sending: false, success: false, error: json.error || 'Submission failed. Please try again.' });
      }
    } catch (err) {
      setStatus({ sending: false, success: false, error: 'Network error. Please try again.' });
    }
  }

 return (
  <section
    id="contact"
    className="relative bg-black px-4 py-32"
  >
    {/* Outer dashed container */}
    <div className="relative max-w-6xl mx-auto border border-dashed border-gray-700 rounded-xl px-6 py-28 text-center overflow-hidden">

      {/* Corner + signs */}
      <span className="absolute -top-1 -left-0 text-gray-500">+</span>
      <span className="absolute -top-1 -right-0 text-gray-500">+</span>
      <span className="absolute -bottom-1 -left-0 text-gray-500">+</span>
      <span className="absolute -bottom-1 -right-0 text-gray-500">+</span>

      {/* Glow blobs */}
      <div className="absolute top-24 left-16 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-24 right-16 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Let&apos;s work together
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Have a project in mind? Let&apos;s create something amazing.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="px-10 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Email Me
          </a>

             <a
               href="/resume.pdf"
               target="_blank"
               rel="noopener noreferrer"
               className="px-10 py-3 rounded-full border border-gray-600 text-white font-medium hover:border-white transition inline-flex items-center gap-2"
             >
               Resume <span>→</span>
             </a>
        </div>
      </div>
    </div>
  </section>
);

}
