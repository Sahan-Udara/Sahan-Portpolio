import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SocialMedia from './SocialMedia';
import Telephone from '../assets/Contact/Telephone.png';
import Email from '../assets/Contact/Email.png';
import Location from '../assets/Contact/Location.png';
import MainBackground from '../assets/Back/BackExpand.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey(prevKey => prevKey + 1);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const mailtoLink = `mailto:ashankaviuh@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className='flex flex-col bg-center bg-no-repeat bg-cover p-4 md:py-[100px] md:px-[200px] md:pb-[50px]' style={{ backgroundImage: `url(${MainBackground})` }}>
      {/* section 01 */}
      <motion.div
        key={`section1-${animationKey}`}
        className='flex flex-col justify-between py-10 cursor-default md:flex-row'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='font-sans text-4xl md:text-4xl font-bold text-[#ffffff] uppercase mr-8 mb-4'>
          Let’s Get Connect With me
        </h1>
        <p className='font-sans text-xl md:text-l text-[#ffffff]'>
          Hello there! My name is Ashan Kavindu. I am a web designer & developer, and I'm very passionate about my work.
        </p>
      </motion.div>

      <div className='flex flex-col md:flex-row'>
        <motion.div
          key={`section2-${animationKey}`}
          className='flex flex-col flex-grow w-full md:max-w-[500px] gap-8'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {/* Contact Info */}
          <div className='flex items-center w-full h-auto p-8 bg-black cursor-pointer rounded-3xl'>
            <img src={Telephone} alt="Phone Icon" className="w-[60px] h-[60px] mr-6" />
            <h1 className='font-sans md:text-[28px] text-xl font-bold text-[#ffffff] hover:text-[#a973f5] uppercase'>+94 775 655 031</h1>
          </div>

          <div className='flex items-center w-full h-auto p-8 bg-black cursor-pointer rounded-3xl'>
            <img src={Email} alt="Email Icon" className="w-[60px] h-[60px] mr-6" />
            <h1 className='font-sans md:text-[28px] text-xl font-bold text-[#ffffff] hover:text-[#a973f5] '>ashankaviuh@gmail.com</h1>
          </div>

          <div
            className='flex items-center w-full h-auto p-8 bg-black cursor-pointer rounded-3xl'
            onClick={() => window.open('https://maps.app.goo.gl/yQ1H6GpZ9u3vPZop6', '_blank')}
          >
            <img src={Location} alt="Location Icon" className="w-[60px] h-[60px] mr-6" />
            <h1 className='font-sans md:text-[28px] text-xl font-bold text-[#ffffff] hover:text-[#a973f5] '>No 300, Citrus Junction, Narawala, Poddala</h1>
          </div>
          <h1 className='font-sans text-3xl font-bold text-[#ffffff] hover:text-[#a973f5] uppercase'>Connect Me</h1>
          <SocialMedia />
        </motion.div>

        {/* section 02 */}
        <motion.div
          key={`section3-${animationKey}`}
          className='flex flex-col md:flex-grow h-auto justify-center items-start w-full max-w-[1900px] md:ml-20 mt-10 md:mt-0 mb-10'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xl font-medium text-white">Name<span className='text-red-500'>*</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full p-4 border-2 rounded-2xl border-[#8d4aea] text-white text-l bg-[#000000] outline-none hover:ring-1 hover:ring-[#a973f5]"
                placeholder="Enter name"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div className='flex flex-col gap-4 md:flex-row'>
              <div className="flex-grow">
                <label className="block text-xl font-medium text-white">Email Address<span className='text-red-500'>*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full p-4 border-2 border-[#8d4aea] rounded-2xl text-white text-l bg-[#000000] outline-none hover:ring-1 hover:ring-[#a973f5]"
                  placeholder="example@gmail.com"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="flex-grow">
                <label className="block text-xl font-medium text-white">Phone Number<span className='text-red-500'>*</span></label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    // Only allow numeric input
                    const numericValue = e.target.value.replace(/\D/, '');
                    setFormData({ ...formData, phone: numericValue });
                  }}
                  className="mt-2 w-full p-4 border-2 border-[#8d4aea] rounded-2xl text-white text-l bg-[#000000] outline-none hover:ring-1 hover:ring-[#a973f5]"
                  placeholder="Ex. 077 1234 031"
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xl font-medium text-white">Subject<span className='text-red-500'>*</span></label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-2 w-full p-4 border-2 border-[#8d4aea] rounded-2xl text-white text-l bg-[#000000] outline-none hover:ring-1 hover:ring-[#a973f5]"
                placeholder="Ex. Support"
              />
              {errors.subject && <p className="text-red-500">{errors.subject}</p>}
            </div>
            <div>
              <label className="block text-xl font-medium text-white">Message<span className='text-red-500'>*</span></label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 w-full p-4 border-2 border-[#8d4aea] rounded-2xl text-white text-l bg-[#000000] outline-none hover:ring-1 hover:ring-[#a973f5]"
                placeholder="Write your message here"
                rows="5"
              />
              {errors.message && <p className="text-red-500">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="py-4 px-8 rounded-[6px] bg-[#8d4aea] hover:bg-[#a041ff] text-[#ffffff] font-bold mt-4 uppercase"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
