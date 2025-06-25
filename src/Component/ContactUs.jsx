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
  const [isVisible, setIsVisible] = useState(false);

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
    setIsVisible(true);

    const style = document.createElement("style");
    style.innerHTML = `
      body {
        background: linear-gradient(135deg, #0a192f 0%, #000000 100%);
        min-height: 100vh;
      }
      .circle-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        pointer-events: none;
        overflow: hidden;
      }
      .circle {
        position: absolute;
        border-radius: 50%;
        mix-blend-mode: screen;
        background: radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, rgba(126, 34, 206, 0) 70%);
        animation: fadeScale 6s infinite ease-in-out;
      }
      .circle-1 { width: 300px; height: 300px; top: 10%; left: 10%; animation-delay: 0s; }
      .circle-2 { width: 200px; height: 200px; top: 70%; right: 15%; animation-delay: 2s; }
      .circle-3 { width: 400px; height: 400px; bottom: 5%; left: 20%; animation-delay: 4s; }
      @keyframes fadeScale {
        0% { opacity: 0.6; transform: scale(0.5); }
        50% { opacity: 0.2; transform: scale(1.2); }
        100% { opacity: 0.6; transform: scale(0.5); }
      }
      .contact-section {
        position: relative;
        z-index: 1;
        background: linear-gradient(135deg, rgba(10, 25, 47, 0.95) 0%, rgba(0, 0, 0, 0.85) 100%);
      }
      .contact-section::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url('data:image/svg+xml,%3Csvg width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" opacity=".05"%3E%3Cpath d="M0 0h2v2H0zM2 2h2v2H2zM4 4h2v2H4zM6 6h2v2H6zM8 8h2v2H8zM10 10h2v2H10zM12 12h2v2H12zM14 14h2v2H14zM16 16h2v2H16zM18 18h2v2H18zM20 20h2v2H20zM22 22h2v2H22zM24 24h2v2H24zM26 26h2v2H26zM28 28h2v2H28zM30 30h2v2H30zM32 32h2v2H32z" fill="%2355DDFF"/%3E%3C/svg%3E');
        background-size: 34px 34px;
        pointer-events: none;
        z-index: -1;
      }
      .form-card, .info-card {
        transition: transform 0.4s ease, box-shadow 0.4s ease;
      }
      .form-card:hover, .info-card:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2);
      }
      .input-field:focus {
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
      }
      @media (max-width: 767px) {
        .circle-1, .circle-2, .circle-3 { display: none; }
        .contact-section { padding-top: 60px; }
      }
      @media (prefers-reduced-motion: reduce) {
        .circle { animation: none; }
        .form-card:hover, .info-card:hover { transform: none; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="relative bg-cover bg-center min-h-[60vh] w-full flex items-center justify-start px-6 md:px-16 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${Contact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40" />
        <div className="relative z-10 text-white max-w-2xl text-left space-y-6 pl-4 md:pl-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}" style={{ opacity: isVisible ? 1 : 0 }}>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
            Get in Touch with{" "}
            <strong className="text-3xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-200 drop-shadow-lg">
              KURO
            </strong>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/90 drop-shadow">
            We are here to help you connect and explore how KURO can support your needs.
          </p>
        </div>
        <div className="circle-container">
          <div className="circle circle-1" />
          <div className="circle circle-2" />
          <div className="circle circle-3" />
        </div>
      </div>

      <main className="relative flex-grow contact-section pt-16 px-4 md:px-0">
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-stretch px-3 mb-10">
          <div
            className="md:w-1/2 form-card bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 md:p-8 shadow-lg mb-4 flex justify-center flex-col transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}"
            id="contact-form"
          >
            <h2 className="text-2xl md:text-3xl text-center text-white mb-6 font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-md">
              Get in Touch
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {[
                { field: "name", icon: <FaUser />, placeholder: "Your Name" },
                {
                  field: "email",
                  icon: <FaEnvelope />,
                  placeholder: "Your Email",
                },
                {
                  field: "phone",
                  icon: <FaPhoneAlt />,
                  placeholder: "Your Phone",
                },
                {
                  field: "location",
                  icon: <FaMapMarkerAlt />,
                  placeholder: "Your Location",
                },
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
                    className="w-full h-12 pl-10 pr-3 mt-1 text-center rounded-md border border-white/30 bg-white/10 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm input-field transition-all duration-300"
                  />
                </div>
              ))}

              <div className="relative">
                <div className="absolute left-3 top-[12px] text-blue-400 text-lg">
                  <FaComment />
                </div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full pl-10 pr-3 pt-3 mt-1 text-center rounded-md border border-white/30 bg-white/10 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none input-field transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold rounded-lg shadow-md hover:shadow-lg"
              >
                Send Message
              </button>

              {status && (
                <p
                  className={`text-center font-medium mt-3 ${
                    status === "success" ? "text-green-400" : "text-red-400"
                  } drop-shadow`}
                >
                  {status === "success"
                    ? "Thank you! We'll be in touch soon."
                    : "Something went wrong. Please try again later."}
                </p>
              )}
            </form>
          </div>

          <div className="md:w-1/2 flex flex-col gap-6">
            <div className="relative info-card rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 border border-white/30 bg-white/20 backdrop-blur-xl transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
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
              <div className="absolute top-4 right-4 text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-md">
                Kuro Systems
              </div>
            </div>

            <div className="info-card bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 md:p-8 shadow-lg space-y-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
              <div className="flex items-center space-x-3 text-blue-400">
                <FaPhoneAlt className="text-xl" />
                <a
                  href="tel:+918956014041"
                  className="font-bold text-lg text-white drop-shadow"
                >
                  +91 8956014041
                </a>
              </div>
              <p className="text-white drop-shadow">
                We are here to make your ideas a reality.
              </p>
              <div className="flex items-center space-x-3 text-blue-400">
                <FaEnvelope className="text-xl" />
                <a
                  href="mailto:kunal.z@kurosystems.net"
                  className="font-bold text-lg text-white drop-shadow"
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