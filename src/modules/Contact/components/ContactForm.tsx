import { Loader2 } from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";

export function ContactForm() {
  const { register, handleSubmit, errors, isSubmitting } = useContactForm();

  return (
    <div
      className="lg:col-span-7 bg-bg-surface/50 backdrop-blur-xl border border-border-main/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:border-border-main/90 transition-all duration-500 reveal-on-scroll reveal-left"
      data-reveal-duration="0.9s"
    >
      <div className="mb-6">
        <h3 className="text-2.5xl font-bold font-serif text-text-main mb-1.5 tracking-tight">
          Send us a message
        </h3>
        <p className="text-xs sm:text-sm text-text-muted">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1.5"
            >
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className="w-full bg-bg-main/30 border border-border-main/70 focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 rounded-xl px-4 py-3 text-text-main transition-all duration-300 outline-none text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
              placeholder="John Doe"
            />
            {errors.name && (
              <p role="alert" className="text-red-500 text-xs mt-1.5 font-medium">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1.5"
            >
              Phone
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              className="w-full bg-bg-main/30 border border-border-main/70 focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 rounded-xl px-4 py-3 text-text-main transition-all duration-300 outline-none text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
              placeholder="+91 90000 00000"
            />
            {errors.phone && (
              <p role="alert" className="text-red-500 text-xs mt-1.5 font-medium">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1.5"
          >
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full bg-bg-main/30 border border-border-main/70 focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 rounded-xl px-4 py-3 text-text-main transition-all duration-300 outline-none text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
            placeholder="john.doe@example.com"
          />
          {errors.email && (
            <p role="alert" className="text-red-500 text-xs mt-1.5 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <span className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-2.5">
            Services
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { id: "automation", label: "Automation" },
              { id: "security", label: "Security" },
              { id: "lighting", label: "Lighting" },
              { id: "networking", label: "Networking" },
              { id: "audio", label: "Audio & Video" },
              { id: "general", label: "General Inquiry" },
            ].map((service) => (
              <label
                key={service.id}
                className="flex items-center gap-2.5 bg-bg-main/30 border border-border-main/70 hover:border-accent-blue/50 has-[:checked]:border-accent-blue/80 has-[:checked]:bg-accent-blue/5 rounded-xl px-3.5 py-3 cursor-pointer select-none transition-all duration-300 text-text-main text-xs sm:text-sm font-medium"
              >
                <input
                  type="checkbox"
                  value={service.label}
                  {...register("services")}
                  className="rounded border-border-main/80 text-accent-blue focus:ring-accent-blue/30 h-4 w-4 cursor-pointer accent-accent-blue"
                />
                <span>{service.label}</span>
              </label>
            ))}
          </div>
          {errors.services && (
            <p role="alert" className="text-red-500 text-xs mt-1.5 font-medium">
              {errors.services.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1.5"
          >
            Message
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={4}
            className="w-full bg-bg-main/30 border border-border-main/70 focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 rounded-xl px-4 py-3 text-text-main transition-all duration-300 outline-none text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] resize-none"
            placeholder="Tell us about your smart home project..."
          />
          {errors.message && (
            <p role="alert" className="text-red-500 text-xs mt-1.5 font-medium">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto bg-accent-blue hover:bg-[#0055d4] text-white! font-bold tracking-wide py-3.5 px-10 rounded-xl transition-all duration-300 flex justify-center items-center shadow-[0_4px_20px_rgba(10,132,255,0.35)] hover:shadow-[0_6px_25px_rgba(10,132,255,0.55)] hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none disabled:shadow-none disabled:translate-y-0 apple-border-shine cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                <span>Sending...</span>
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
