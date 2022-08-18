import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-32 md:px-14  px-5">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-sm text-links font-medium mb-5">
            04. What’s Next?
          </p>
          <h4 className="text-3xl font-bold text-lead tracking-wider inline-block mb-5">
            Get In Touch
          </h4>
          <p className="text-sub font-medium md:w-1/2 mx-auto">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <a
            href="mailto:zehadhasanlive@gmail.com"
            className="border border-links py-3 px-9 text-links rounded-borderBtn transition-all ease-in-out duration-300 hover:bg-links/10 inline-block mt-6"
          >
            Say Hello!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
