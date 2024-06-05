import React from 'react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="flex flex-col justify-center items-center relative z-10">
      <div className="flex flex-col justify-center items-center w-full max-w-3xl px-4 py-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact</h1>
        <p className="text-lg text-gray-600 mb-8">Feel free to reach out to me for any questions or opportunities!</p>
        <form className="w-full max-w-lg" ref={form} onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Email Me 🚀</h2>
          <input className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:border-purple-400" type="email" placeholder="Your Email" name="from_email" />
          <input className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:border-purple-400" type="text" placeholder="Your Name" name="from_name" />
          <input className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:border-purple-400" type="text" placeholder="Subject" name="subject" />
          <textarea className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:border-purple-400" placeholder="Message" rows="4" name="message"></textarea>
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg px-4 py-2 transition duration-300 ease-in-out">Send</button>
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </div>
    </div>
  );
}

export default Contact;
