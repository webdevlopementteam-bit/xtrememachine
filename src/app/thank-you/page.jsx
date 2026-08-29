import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "Thank You | Xtreme Machines",
  description:
    "Thank you for contacting Xtreme Machines. Our team will get back to you shortly.",
};

export default function ThankYou() {
  return (
    <section className="bg-[#f5f5f5] py-28 px-5">
      <div className="max-w-160 mx-auto bg-white shadow-md text-center px-8 py-16">
        <FaCheckCircle className="text-[#0073aa] text-[64px] mx-auto mb-6" />

        <h1 className="text-black text-3xl md:text-4xl font-bold mb-4">
          Thank You!
        </h1>

        <p className="text-[#667085] text-[16px] leading-8 mb-10">
          Your message has been submitted successfully. Our team will review
          your inquiry and get back to you as soon as possible.
        </p>

        <Link
          href="/"
          className="inline-block bg-[#0073aa] hover:bg-[#005f8d] text-white text-[15px] font-medium px-8 py-3 rounded transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
