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
    <section id="contact" className="mt-5 px-4 text-center overflow-hidden pt-24">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
        Let’s Connect
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto font-semibold italic">
        Big ideas, small questions, or just sharing memes? Drop a line — happy to connect!
      </p>

      <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Contact info */}
          <div className="p-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Get in touch</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Prefer email? Use the form or reach me directly:</p>

            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                  <a href={`mailto:${EMAIL_ADDRESS}`} className="text-sm font-medium text-blue-600 dark:text-blue-400">{EMAIL_ADDRESS}</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7-5 7 5v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                  <div className="text-sm font-medium text-gray-800 dark:text-gray-200">New Delhi, India</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 8l10 6 10-6M2 16l10 6 10-6" />
                </svg>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Availability</div>
                  <div className="text-sm font-medium text-gray-800 dark:text-gray-200">Open to freelance & full-time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-8 bg-white dark:bg-gray-900">
            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col text-left">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full rounded-md border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                    aria-required="true"
                  />
                </label>

                <label className="flex flex-col text-left">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</span>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full rounded-md border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                    aria-required="true"
                  />
                </label>
              </div>

              <label className="flex flex-col text-left">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</span>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="What is this about?"
                />
              </label>

              <label className="flex flex-col text-left">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="mt-2 block w-full rounded-md border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Any suggestions or questions?"
                  aria-required="true"
                />
              </label>

              <div className="flex items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status.sending}
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-md"
                >
                  {status.sending ? 'Sending...' : 'Send Message'}
                </button>

                <div className="text-sm text-left">
                  {status.success === true && <div className="text-green-600 dark:text-green-400">Thanks — message sent!</div>}
                  {status.success === false && <div className="text-red-600 dark:text-red-400">{status.error}</div>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
}
