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
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }
        
        .circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          animation: float 6s ease-in-out infinite;
        }
        
        
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        

     
        }

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
      <div className="relative w-full min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh] xl:min-h-[70vh] flex items-center justify-center sm:justify-start overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
    backgroundImage: `url(${Contact})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Gradient Overlay - Responsive */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 sm:bg-gradient-to-r sm:from-black/70 sm:via-black/40 sm:to-transparent" />

        {/* Content Container - Fully Responsive */}
        <div
          className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-white max-w-none sm:max-w-2xl lg:max-w-3xl text-center sm:text-left space-y-4 sm:space-y-6">
            <h1 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-tight drop-shadow-md">
              <span className="inline  text-3xl sm:inline">Get in Touch with</span>{" "}
              <strong className="inline sm:inline text-3xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-200 drop-shadow-lg">
                KURO
              </strong>
            </h1>

            <p className="text-lg xs:text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90 drop-shadow max-w-lg sm:max-w-xl md:max-w-2xl mx-auto sm:mx-0">
              We are here to help you connect and explore how KURO can support
              your needs.
            </p>
          </div>
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