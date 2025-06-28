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
  const sectionRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [animatedInputs, setAnimatedInputs] = useState({
    name: false,
    email: false,
    phone: false,
    location: false,
    message: false,
  });

  const formFields = [
    { field: "name", icon: <FaUser />, label: "Enter Name", type: "text" },
    {
      field: "email",
      icon: <FaEnvelope />,
      label: "Enter Email",
      type: "email",
    },
    {
      field: "phone",
      icon: <FaPhoneAlt />,
      label: "Enter Phone",
      type: "text",
    },
    {
      field: "location",
      icon: <FaMapMarkerAlt />,
      label: "Enter Location",
      type: "text",
    },
  ];

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

  const createAnimatedLabel = (text) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        style={{ transitionDelay: `${index * 50}ms` }}
        className="label-char"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFormVisible(true);
            formFields.forEach((field, index) => {
              setTimeout(() => {
                setAnimatedInputs((prev) => ({
                  ...prev,
                  [field.field]: true,
                }));
              }, index * 200);
            });
            setTimeout(() => {
              setAnimatedInputs((prev) => ({
                ...prev,
                message: true,
              }));
            }, formFields.length * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsVisible(true);

    const style = document.createElement("style");
    style.innerHTML = `
      body {
        background: linear-gradient(135deg, #0a192f 0%, #000000 100%);
        min-height: 100vh;
      }
      
      .form-control {
        position: relative;
        margin: 20px 0 40px;
        width: 100%;
      }
      
      .form-control input,
      .form-control textarea {
        background-color: transparent;
        border: 0;
        border-bottom: 2px #fff solid;
        display: block;
        width: 100%;
        padding: 15px 0 15px 35px;
        font-size: 18px;
        color: #fff;
        transition: border-bottom-color 0.3s ease;
      }
      
      .form-control input:focus,
      .form-control input:valid,
      .form-control textarea:focus,
      .form-control textarea:valid {
        outline: 0;
        border-bottom-color: #87CEEB;
      }
      
      .form-control label {
        position: absolute;
        top: 15px;
        left: 35px;
        pointer-events: none;
      }
      
      .form-control .label-char {
        display: inline-block;
        font-size: 18px;
        min-width: 5px;
        color: #fff;
        transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      .form-control input:focus + label .label-char,
      .form-control input:valid + label .label-char,
      .form-control textarea:focus + label .label-char,
      .form-control textarea:valid + label .label-char {
        color: #87CEEB;
        transform: translateY(-30px);
      }
      
      .form-control .input-icon {
        position: absolute;
        left: 8px;
        top: 15px;
        color: #87CEEB;
        font-size: 18px;
        z-index: 1;
        transition: all 0.3s ease;
      }
      
      .form-control input:focus ~ .input-icon,
      .form-control textarea:focus ~ .input-icon {
        color: #87CEEB;
        transform: scale(1.1);
      }
      
      @keyframes slideInFromLeft {
        0% { opacity: 0; transform: translateX(-100px) rotateY(-30deg); }
        100% { opacity: 1; transform: translateX(0) rotateY(0deg); }
      }
      
      @keyframes slideInFromRight {
        0% { opacity: 0; transform: translateX(100px) rotateY(30deg); }
        100% { opacity: 1; transform: translateX(0) rotateY(0deg); }
      }
      
      @keyframes slideInFromBottom {
        0% { opacity: 0; transform: translateY(50px) scale(0.9); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      
      @keyframes bounceIn {
        0% { opacity: 0; transform: scale(0.3) rotateZ(-10deg); }
        50% { opacity: 0.7; transform: scale(1.1) rotateZ(5deg); }
        100% { opacity: 1; transform: scale(1) rotateZ(0deg); }
      }
      
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      
      .animated-input {
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      
      .animated-input.slide-in-left {
        animation: slideInFromLeft 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }
      
      .animated-input.slide-in-right {
        animation: slideInFromRight 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }
      
      .animated-input.slide-in-bottom {
        animation: slideInFromBottom 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }
      
      .animated-input.bounce-in {
        animation: bounceIn 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }
      
      .pulse-button {
        animation: pulse 2s ease-in-out infinite;
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
      
      @media (max-width: 767px) {
        .contact-section { padding-top: 60px; }
        .form-control {
          margin: 15px 0 35px;
        }
        .form-control input,
        .form-control textarea {
          font-size: 16px;
          padding: 12px 0 12px 30px;
        }
        .form-control label {
          top: 12px;
          left: 30px;
        }
        .form-control .label-char {
          font-size: 16px;
        }
        .form-control .input-icon {
          left: 6px;
          top: 12px;
          font-size: 16px;
        }
      }
      
      @media (prefers-reduced-motion: reduce) {
        .form-card:hover, .info-card:hover { transform: none; }
        .animated-input { animation: none; }
        .pulse-button { animation: none; }
        .label-char { transition: none; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const getInputAnimation = (index, field) => {
    if (!animatedInputs[field]) return "";
    const animations = ["slide-in-left", "slide-in-right"];
    return animations[index % animations.length];
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh] xl:min-h-[70vh] flex items-center justify-center sm:justify-start overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${Contact})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 sm:bg-gradient-to-r sm:from-black/70 sm:via-black/40 sm:to-transparent" />
        <div
          className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-white max-w-none sm:max-w-2xl lg:max-w-3xl text-center sm:text-left space-y-4 sm:space-y-6">
            <h1 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-tight drop-shadow-md">
              <span className="inline text-4xl sm:inline">
                Get in Touch with
              </span>{" "}
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
      <main
        ref={sectionRef}
        className="relative flex-grow contact-section pt-16 px-4 md:px-0"
      >
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-stretch px-3 mb-10">
          <div
            className={`md:w-1/2 form-card bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 md:p-8 shadow-lg mb-4 flex justify-center flex-col transition-all duration-1000 ${
              isFormVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl md:text-3xl text-center text-white mb-6 font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-md">
              Get in Touch
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              {formFields.map((fieldData, index) => {
                const { field, icon, label, type } = fieldData;
                return (
                  <div
                    key={field}
                    className={`form-control animated-input ${getInputAnimation(
                      index,
                      field
                    )} ${!animatedInputs[field] ? "opacity-0" : ""}`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <input
                      name={field}
                      type={type}
                      value={form[field]}
                      onChange={handleChange}
                      required
                    />
                    <label>{createAnimatedLabel(label)}</label>
                    <div className="input-icon">{icon}</div>
                  </div>
                );
              })}
              <div
                className={`form-control animated-input slide-in-right ${
                  !animatedInputs.message ? "opacity-0" : ""
                }`}
                style={{
                  animationDelay: `${formFields.length * 0.2}s`,
                  animationFillMode: "forwards",
                }}
              >
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  style={{ resize: "none" }}
                />
                <label>{createAnimatedLabel("Enter Message")}</label>
                <div className="input-icon">
                  <FaComment />
                </div>
              </div>
              <button
                type="submit"
                className={`w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold rounded-lg shadow-md hover:shadow-lg mt-8 ${
                  isFormVisible ? "pulse-button" : ""
                }`}
              >
                Send Message
              </button>
              {status && (
                <p
                  className={`text-center font-medium mt-3 transition-all duration-500 ${
                    status === "success" ? "text-green-400" : "text-red-400"
                  } drop-shadow animate-bounce`}
                >
                  {status === "success"
                    ? "Thank you! We'll be in touch soon."
                    : "Something went wrong. Please try again later."}
                </p>
              )}
            </form>
          </div>
          <div className="md:w-1/2 flex flex-col gap-12">
            <div
              className={`info-card rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 border border-white/30 bg-white/20 backdrop-blur-xl transition-all duration-1000 ${
                isFormVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
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
            <div
              className={`info-card bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 md:p-8 shadow-lg space-y-4 transition-all duration-1000 ${
                isFormVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: "0.7s" }}
            >
              <div className="flex items-center space-x-3 text-blue-400">
                <FaPhoneAlt className="text-xl" />
                <a
                  href="tel:+918956014041"
                  className="font-bold text-lg text-white drop-shadow hover:text-blue-300 transition-colors duration-300"
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
                  className="font-bold text-lg text-white drop-shadow hover:text-blue-300 transition-colors duration-300"
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
