import Button from "@/components/Button";
import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Feel free to contact me via the provided email address,
        and I'll do my best to respond promptly.
      </p>
      <div className="contact-cta">
        <Button link="mailto:natnael.dev101@gmail.com" text="Get In Touch" />
      </div>
    </motion.div>
  );
};

export default Contact;
