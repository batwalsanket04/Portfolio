import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const saveForm = async (event) => {
    event.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("access_key", "6ccd4a84-0b3a-4631-bb27-558add924212");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      const result = await response.json();

      if (result.success) {
        toast.success(" Message sent successfully!", {
          position: "top-center"
        });

        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        toast.error(result.message || " Failed to send message", {
          position: "top-center"
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(" Something went wrong!", {
        position: "top-center"
      });
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#050B18] flex items-center justify-center px-4 py-16"
    >
      <div className="w-full max-w-6xl p-1 rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">

        <div className="bg-[#050B18] rounded-3xl p-8 md:p-12 text-white">

          {/* HEADING */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Get In <span className="text-[#FACC15]">Touch</span>
            </h1>
            <p className="text-gray-400">
              Let’s create something amazing together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* LEFT SIDE - INFO */}
            <div className="space-y-6">

              <Info
                icon={<Mail />}
                title="Email"
                value="batwalsanket@gmail.com"
              />

              <Info
                icon={<Phone />}
                title="Phone"
                value="+91 8805857546"
              />

              <Info
                icon={<MapPin />}
                title="Location"
                value="Pune, India"
              />

            </div>

            {/* RIGHT SIDE - FORM */}
            <form
              onSubmit={saveForm}
              className="bg-[#0A1226] p-8 rounded-2xl border border-gray-800 shadow-lg space-y-6"
            >

              <Input
                label="Full Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />

              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

              <div>
                <label className="text-gray-400">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className="w-full mt-2 bg-[#050B18] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-[#FACC15] transition resize-none text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 rounded-full hover:scale-105 transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

/* ---------- MINI COMPONENTS ---------- */

const Info = ({ icon, title, value }) => {
  return (
    <div className="flex items-center gap-5 bg-[#0A1226] p-4 rounded-xl border border-gray-800 hover:border-[#FACC15] duration-300">
      <div className="text-[#FACC15]">{icon}</div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-400">{value}</p>
      </div>
    </div>
  );
};

const Input = ({ label, ...props }) => {
  return (
    <div>
      <label className="text-gray-400">{label}</label>
      <input
        {...props}
        required
        className="w-full mt-2 bg-[#050B18] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-[#FACC15] transition text-white"
      />
    </div>
  );
};

export default Contact;
