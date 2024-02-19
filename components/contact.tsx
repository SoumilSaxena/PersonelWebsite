import React from "react";
import SectionHeading from "./sectionheading";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="mb-20 sm:mb-28">
      <SectionHeading>Contact me</SectionHeading>
      <p>
        Please contact me directly at{" "}
        <a className="underline" href="mailto:soumil.saxena@gmail.com">
          soumil.saxena@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form>
        <input type="email" />
        <textarea />
        <button type="submit">
          Submit <FaPaperPlane />{" "}
        </button>
      </form>
    </section>
  );
}
