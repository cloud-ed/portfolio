import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.recaptchaToken = recaptchaToken;

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          alert("Message sent successfully!");
        } else {
          alert("Failed to send message.");
        }
      });
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
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 text-black"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com"
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
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-3 rounded border border-gray-300 bg-white text-black"
              />
            </div>
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              className="w-full p-3 rounded border border-gray-300 bg-white text-black"
            ></textarea>

            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={setRecaptchaToken}
            />

            <button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
