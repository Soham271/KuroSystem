import Navbar from "@/Navbar";
import React from "react";
import Footer from "../Footer";

const Offerings = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold">Welcome to Offering Page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Offerings;
