"use client";

import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

// Same two keys used on the Contact Us page, so every lead (not just the
// main contact form) lands in both inboxes.
const WEB3FORMS_ACCESS_KEYS = [
  "906fc21f-02d8-4cad-8ac3-d537b2ce48e6",
  "aba0f3ba-9e94-494d-a313-057c344c6730",
];

const DISMISS_KEY = "leadPopupDismissed";

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY) === "true") return;

    const timer = setTimeout(() => setIsOpen(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem(DISMISS_KEY, "true");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const results = await Promise.allSettled(
        WEB3FORMS_ACCESS_KEYS.map((access_key) =>
          fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key,
              subject: "New Lead From Website Popup",
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              message: formData.message,
            }),
          }).then((res) => res.json()),
        ),
      );

      const anySucceeded = results.some(
        (r) => r.status === "fulfilled" && r.value.success,
      );

      if (anySucceeded) {
        setSubmitted(true);
        sessionStorage.setItem(DISMISS_KEY, "true");
        setTimeout(() => setIsOpen(false), 2500);
      } else {
        setError("Something went wrong. Please try again.");
        setSubmitting(false);
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 px-5">
      <div className="relative w-full max-w-110 bg-white rounded-lg shadow-2xl p-8">
        {/* CLOSE */}
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-4 right-4 text-[#667085] hover:text-[#E2010E] text-xl cursor-pointer"
        >
          <FaTimes />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold text-black mb-3">Thank You!</h3>
            <p className="text-[#667085] text-[15px]">
              We've received your details. Our team will get back to you shortly.
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-black mb-2">
              Get a Free Quote
            </h3>
            <p className="text-[#667085] text-[15px] mb-6">
              Share your details and our team will reach out to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onChange={handleChange}
                className="w-full h-11 border border-[#d0d5dd] px-4 text-[14px] outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                
                onChange={handleChange}
                className="w-full h-11 border border-[#d0d5dd] px-4 text-[14px] outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                required
                onChange={handleChange}
                className="w-full h-11 border border-[#d0d5dd] px-4 text-[14px] outline-none"
              />

              <textarea
                name="message"
                rows="3"
                placeholder="Your Message (optional)"
                onChange={handleChange}
                className="w-full border border-[#d0d5dd] p-4 text-[14px] outline-none resize-none"
              ></textarea>

              {error && <p className="text-red-500 text-[13px]">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#0073aa] hover:bg-[#005f8d] text-white text-[15px] font-medium px-8 py-3 rounded transition duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadPopup;
