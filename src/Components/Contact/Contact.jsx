import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import phoneIcon from "../../icons/phone.png";
import emailIcon from "../../icons/email.png";
import addressIcon from "../../icons/address.png";
import { useRef } from "react";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qr58naj', 'template_auvztu1', form.current, 'BZcEPesCZmLP0-xsC')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="section font-mono" id="contact">
      <div className="container mx-auto p-8">
        <div className="flex flex-col items-center">
          <motion.div
            className="mb-4 mt-3 contact-sec"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-4xl mb-4 text-gradient">Contact Me!!!</h4>
            <form
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gradient">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full text-white mb-2 px-4 py-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gradient">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full text-white mb-2 px-4 py-2"
                    required
                  />
                </div>
              </div>
              <label htmlFor="message" className="block mb-2 text-gradient">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full text-white mb-2 px-4 py-2"
                required
              ></textarea>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center my-10 text-gradient ">
                  <img
                    src={addressIcon}
                    alt="Address"
                    className="w-20 h-20 mx-auto mb-2"
                  />
                  <p>Address</p>
                  <p>Shibgonj, Sylhet, Bangladesh</p>
                </div>
                <div className="text-center my-10 text-gradient">
                  <img
                    src={phoneIcon}
                    alt="Phone"
                    className="w-20 h-20 mx-auto mb-2"
                  />
                  <p>Phone</p>
                  <p>01624068657</p>
                </div>
                <div className="text-center my-10 text-gradient">
                  <img
                    src={emailIcon}
                    alt="Email"
                    className="w-20 h-20 mx-auto mb-2"
                  />
                  <p>Email</p>
                  <p>joyeeck04@gmail.com</p>
                </div>
              </div>
              <button
                type="submit"
                className="btn mt-10 text-white py-2 px-4 rounded-lg w-3/4 mx-20"
              >
                Submit Form
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
