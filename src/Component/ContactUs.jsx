import React from "react";
import Navbar from "@/Navbar";
import Footer from "../Footer";

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold">Welcome to ContactUsPage</h1>
      </main>
    </div>
  );
};

export default ContactUs;
