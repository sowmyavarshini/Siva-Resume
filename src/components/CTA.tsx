import { Linkedin, Mail, Phone } from "lucide-react";

export const CTA = () => (
  <section className="pt-24 pb-24 px-6 lg:px-20 text-center bg-surface-container-low" id="contact">
    <div className="max-w-3xl mx-auto space-y-10">
      <h2 className="text-on-surface font-headline text-4xl lg:text-6xl font-extrabold leading-tight">Let’s connect!</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 pt-4">
        <a className="text-on-surface-variant hover:text-primary flex items-center gap-2 font-bold transition-colors text-sm md:text-base" href="https://www.linkedin.com/in/siva-subramanian-9115259b/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="size-5 shrink-0" /> 
          <span>LinkedIn</span>
        </a>
        <a className="text-on-surface-variant hover:text-primary flex items-center gap-2 font-bold transition-colors text-sm md:text-base break-all md:break-normal" href="mailto:sivasubramanian.1593@gmail.com">
          <Mail className="size-5 shrink-0" /> 
          <span>sivasubramanian.1593@gmail.com</span>
        </a>
        <a className="text-on-surface-variant hover:text-primary flex items-center gap-2 font-bold transition-colors text-sm md:text-base whitespace-nowrap" href="tel:8220872419">
          <Phone className="size-5 shrink-0" /> 
          <span>+91 8220872419</span>
        </a>
      </div>
    </div>
  </section>
);

export default CTA;

