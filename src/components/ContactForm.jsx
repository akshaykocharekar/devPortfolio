import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    try {
      const res = await emailjs.send(
        "service_evubkcm",
        "template_a93afis",
        { email, message },
        "0gtpy9aciYdbYL1FO"
      );
      if (res.status === 200) setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
    }
  };

  return (
    <div className="mb-6 px-4 pt-6">
      <h2 className="text-white text-lg font-medium mb-4 flex items-center gap-2">
        <span className="text-blue-500">&gt;</span> get in touch
      </h2>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.p
            className="text-green-400 text-sm"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            ✅ Message sent successfully!
          </motion.p>
        ) : (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {step === 1 && (
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-zinc-900 border border-zinc-700 px-3 py-2 rounded-md text-white text-sm flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md"
                  onClick={() => setStep(2)}
                  disabled={!email.includes("@")}
                >
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-2">
                <textarea
                  placeholder="Message"
                  className="bg-zinc-900 border border-zinc-700 px-3 py-2 w-full rounded-md text-white text-sm"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="flex justify-end">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md"
                    onClick={handleSubmit}
                    disabled={!message}
                  >
                    Send
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
