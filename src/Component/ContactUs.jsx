import React, { useRef, useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaMapMarkerAlt,
  FaComment,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Contact from "../assets/Contact.avif";

const ContactUs = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bt7lvig",
        "template_c5grkxm",
        formRef.current,
        "Jj8GC9_w-bFpwuKc1"
      )
      .then(
        () => {
          setStatus("success");
          setForm({
            name: "",
            email: "",
            phone: "",
            location: "",
            message: "",
          });
        },
        () => {
          setStatus("error");
        }
      );
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      body {
        background-image: radial-gradient(#021027, #000000);
      }
      .circle-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      .circle {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        mix-blend-mode: screen;
        background-image: radial-gradient(
          hsl(180, 100%, 80%),
          hsl(180, 100%, 80%) 10%,
          hsla(180, 100%, 80%, 0) 56%
        );
        animation: fade-frames 200ms infinite, scale-frames 2s infinite;
      }
      @keyframes fade-frames {
        0% { opacity: 1; }
        50% { opacity: 0.7; }
        100% { opacity: 1; }
      }
      @keyframes scale-frames {
        0% { transform: scale3d(0.4, 0.4, 1); }
        50% { transform: scale3d(2.2, 2.2, 1); }
        100% { transform: scale3d(0.4, 0.4, 1); }
      }
      .section-heading {
        position: relative;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(0, 100, 200, 0.2));
        backdrop-blur-md;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 0.75rem 1.5rem;
        border-radius: 1rem;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: inline-block;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        color: white;
      }
    
      ${Array.from({ length: 50 }, (_, i) => {
        const circleSize = Math.random() * 10;
        const startPositionY = Math.random() * 10 + 100;
        const moveDuration = 7000 + Math.random() * 4000;
        const moveDelay = Math.random() * 11000;
        const circleDelay = Math.random() * 4000;
        return `
          .circle-container:nth-child(${i + 1}) {
            width: ${circleSize}px;
            height: ${circleSize}px;
            animation: move-frames-${i} ${moveDuration}ms linear ${moveDelay}ms infinite;
          }
          .circle-container:nth-child(${i + 1}) .circle {
            animation-delay: ${circleDelay}ms;
          }
          @keyframes move-frames-${i} {
            from {
              transform: translate3d(${Math.random() * 100}vw, ${startPositionY}vh, 0);
            }
            to {
              transform: translate3d(${Math.random() * 100}vw, ${-startPositionY - Math.random() * 30}vh, 0);
            }
          }
        `;
      }).join('')}
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(#021027,#000000)]">
     
      <div
        className="relative bg-cover bg-center min-h-[60vh] w-full flex items-center justify-start px-6 md:px-16"
        style={{
          backgroundImage: `url(${Contact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white max-w-2xl text-left space-y-6 pl-4 md:pl-0">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Get in Touch with{" "}
            <span
              className="text-blue-400 transition duration-300 ease-in-out hover:text-blue-600 focus:text-blue-600"
            >
              KURO
            </span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            We are here to help you connect and explore how KURO can support
            your needs.
          </p>
        </div>
      </div>

      <main className="relative flex-grow pt-24 px-4 md:px-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="circle-container">
            <div className="circle" />
          </div>
        ))}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-stretch px-3 mb-10">
          <div
            className="md:w-1/2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-lg mb-4 flex justify-center flex-col"
            id="contact-form"
          >
            <h2 className="text-2xl md:text-3xl text-center text-white mb-6 section-heading">
              Get in Touch
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {[
                { field: "name", icon: <FaUser />, placeholder: "Your Name" },
                { field: "email", icon: <FaEnvelope />, placeholder: "Your Email" },
                { field: "phone", icon: <FaPhoneAlt />, placeholder: "Your Phone" },
                { field: "location", icon: <FaMapMarkerAlt />, placeholder: "Your Location" },
              ].map(({ field, icon, placeholder }) => (
                <div key={field} className="relative">
                  <div className="absolute left-3 top-[12px] text-blue-400 text-lg">
                    {icon}
                  </div>
                  <input
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    className="w-full h-12 pl-10 pr-3 mt-1  text-center rounded-md border border-white/30 bg-white/10 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
                  />
                </div>
              ))}

              <div className="relative">
                <div className="absolute left-3 top-[12px] text-blue-400">
                  <FaComment />
                </div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full pl-10 pr-3 pt-3 mt-1 text-center rounded-md border border-white/30 bg-white/10 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none  resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-10 bg-blue-400 text-white hover:bg-blue-500 transition font-semibold rounded-lg"
              >
                Send Message
              </button>

              {status && (
                <p
                  className={`text-center font-medium mt-3 ${
                    status === "success" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {status === "success"
                    ? "Thank you! We'll be in touch soon."
                    : "Something went wrong. Please try again later."}
                </p>
              )}
            </form>
          </div>

          <div className="md:w-1/2 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 border border-white/30 bg-white/20 backdrop-blur-xl">
              <iframe
                title="Kuro Systems Location"
                src="https://www.google.com/maps?q=19.992583,73.739444&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
              <div className="absolute top-4 right-4 section-heading text-lg">
                Kuro Systems
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-xl  mb-5 border border-white/30 rounded-2xl p-6 shadow-lg space-y-4">
              <div className="flex items-center  space-x-3 text-blue-400">
                <FaPhoneAlt className="text-xl" />
                <a href="tel:+918956014041" className="font-bold text-lg text-white">
                  +91 8956014041
                </a>
              </div>
              <p className="text-white">
                We are here to make your ideas a reality.
              </p>
              <div className="flex items-center space-x-3 text-blue-400">
                <FaEnvelope className="text-xl" />
                <a
                  href="mailto:kunal.z@kurosystems.net"
                  className="font-bold text-lg text-white"
                >
                  Contact Via Mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;