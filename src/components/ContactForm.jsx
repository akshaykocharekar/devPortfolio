import React, { useState } from "react";

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    try {
      // Send using EmailJS or your backend
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error("Error sending:", err);
    }
  };

  return (
    <div className="mb-6 px-4 pt-6">
      <h2 className="text-white text-xl font-semibold mb-2">
        <span className="text-blue-500">&gt;</span> get in touch
      </h2>

      {submitted ? (
        <p className="text-green-400 text-sm mt-2">
          Message sent successfully.
        </p>
      ) : (
        <div className="space-y-4">
          {step === 1 && (
            <>
              <input
                type="email"
                placeholder="Your email"
                className="bg-zinc-900 border border-zinc-700 px-4 py-2 w-full rounded-md text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                onClick={() => setStep(2)}
                disabled={!email.includes("@")}
              >
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <textarea
                placeholder="Your message"
                className="bg-zinc-900 border border-zinc-700 px-4 py-2 w-full rounded-md text-white"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                onClick={handleSubmit}
                disabled={!message}
              >
                Send
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
