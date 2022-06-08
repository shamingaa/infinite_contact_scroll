import Contact from "./Contact";
import ContactTopNav from "./ContactNavBarFrame";

const ContactSection = (): JSX.Element => {
  return (
    <section className="sectionStyle">
      <ContactTopNav />
      <Contact />
    </section>
  );
};

export default ContactSection;
