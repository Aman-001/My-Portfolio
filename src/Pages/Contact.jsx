import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="mt-24 px-4 text-center overflow-hidden pt-24">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
        Let’s Connect
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-sm mx-auto font-semibold italic">
       Big ideas, small questions, or just sharing memes?   Drop by anytime — happy to connect!


      </p>


      <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
        <iframe
          title="My Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.2288748382275!2d77.32167077529101!3d28.682799375637423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfba7e27fb06b%3A0xe0ce96325a305a31!2sPocket%20L%20Dilshad%20Garden%20Rd%2C%20Pocket%20J%20%26%20K%2C%20Dilshad%20Garden%2C%20Delhi%2C%20110095!5e0!3m2!1sen!2sin!4v1752104811051!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-96"
        ></iframe>
      </div>


    </section>
  );
}
