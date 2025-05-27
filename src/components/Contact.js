import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (json.success) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert("Failed to send message: " + (json.error || "Unknown error"));
      }
    } catch (error) {
      alert("Network error: " + error.message);
    }
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="px-4 md:px-8 lg:px-12 max-w-custom mx-auto flex flex-col md:flex-row items-start md:items-center gap-12">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-black">Contact Me</h1>
          <p className="text-gray-600">
            Feel free to reach out to me on any of these socials. I'm always
            looking for new opportunities to learn and I'm excited to further my
            career.
          </p>

          <div className="flex gap-4 text-3xl mt-4">
            <a
              href="https://github.com/cloud-ed"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 text-black"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/joshmilburn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 text-black"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 w-full bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-black text-center">
            🚧 Currently Unavailable 🚧
          </h2>
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Send me an email
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full p-3 rounded border border-gray-300 bg-white text-black"
                disabled
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-3 rounded border border-gray-300 bg-white text-black"
                disabled
              />
            </div>
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              className="w-full p-3 rounded border border-gray-300 bg-white text-black"
              disabled
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
              disabled
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
