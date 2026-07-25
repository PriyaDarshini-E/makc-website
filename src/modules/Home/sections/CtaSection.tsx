import ContactStrip from "@/components/common/ContactStrip";

export default function CtaSection() {
  return (
    <section className="relative w-full bg-bg-main py-12 lg:py-16 border-t border-border-main/20">
      <div className="relative mx-auto max-w-8xl px-4 sm:px-12">
        <ContactStrip
          title="Your Smart Living Journey Starts Now"
          description="Smart Home Automation Solutions Starting from INR 1,20,000"
          cta={{
            label: "Book a Free Smart Home Consultation",
            href: "/contact",
          }}
        />
      </div>
    </section>
  );
}
