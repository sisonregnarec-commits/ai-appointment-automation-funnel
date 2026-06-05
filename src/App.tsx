import logo from "./assets/logo.jpg";
import heroClinic from "./assets/hero-clinic.png";
import smileDetail from "./assets/smile-detail.jpg";
import detailAmenities from "./assets/detail-amenities.jpg";
import veneers from "./assets/service-veneers.jpg";
import invisalign from "./assets/service-invisalign.jpg";
import aboutInterior from "./assets/about-interior.jpg";

const services = [
  { title: "Signature Smile Makeovers", img: veneers, desc: "Handcrafted porcelain veneers and advanced cosmetic bonding that enhance symmetry, brightness, and confidence." },
  { title: "Luminous Whitening", img: smileDetail, desc: "Professional laser whitening with zero-sensitivity technology — dramatically brighter results without discomfort." },
  { title: "Invisalign Studio", img: invisalign, desc: "Custom clear aligners designed for modern lifestyles and discreet, professional confidence." },
  { title: "Preventative Spa Care", img: detailAmenities, desc: "Routine care becomes a restorative wellness ritual — gentle, soothing, and elevated throughout." },
];

const pillars = [
  { kicker: "01", title: "Anxiety-Free Comfort", body: "A spa-inspired environment with noise-canceling headphones, warm neck wraps, calming aromatherapy and unhurried attention." },
  { kicker: "02", title: "State-of-the-Art Precision", body: "Advanced 3D imaging and laser dentistry deliver minimally invasive treatments with exceptional comfort and beautiful results." },
  { kicker: "03", title: "Bespoke Smile Design", body: "Every treatment is carefully customized to complement your facial structure, aesthetic goals, and natural beauty." },
  { kicker: "04", title: "Private, Personalized Care", body: "You'll never feel rushed. Every appointment is tailored to your needs with one-on-one attention from our expert team." },
];

const journey = [
  { n: "01", t: "Schedule Your Consultation", d: "Book your personalized smile assessment online in minutes." },
  { n: "02", t: "Receive a Custom Smile Plan", d: "We analyze your goals, facial structure, and dental health to design a plan tailored to you." },
  { n: "03", t: "Experience Luxury Dentistry", d: "Relax in our calming environment while our specialists deliver precise, high-end care." },
  { n: "04", t: "Reveal Your Best Smile", d: "Leave feeling confident, refreshed, and proud of a smile designed uniquely for you." },
];

const testimonials = [
  { quote: "I used to dread the dentist, but stepping into Ana Dentta feels like checking into a luxury hotel. My veneers look incredibly natural, and the team made the entire process flawless.", name: "Sarah M." },
  { quote: "The attention to detail is unmatched. Every appointment feels calming, private, and genuinely luxurious.", name: "Camille R." },
  { quote: "I wanted a smile that looked elegant, not overdone — and they delivered perfectly.", name: "David L." },
];

function GoldButton({
  children,
  variant = "solid",
  onClick,
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center gap-3 px-9 py-4 text-xs uppercase tracking-[0.28em] transition-all duration-500";

  if (variant === "outline") {
    return (
      <button
        onClick={onClick}
        className={`${base} border border-gold/60 text-gold hover:bg-gold hover:text-ink`}
      >
        {children}
        <span aria-hidden>→</span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} bg-gold text-ink hover:bg-gold-soft shadow-[0_20px_60px_-20px_rgba(178,140,76,0.6)]`}
    >
      {children}
      <span aria-hidden>→</span>
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-gold">
      <span className="h-px w-10 bg-gold/50" />
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12 md:py-8">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Ana Dentta" className="h-12 w-auto md:h-14 mix-blend-multiply" />
          </a>
          <nav className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.32em] text-cream/90 md:flex">
            <a href="#experience" className="hover:text-gold transition-colors">Experience</a>
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#journey" className="hover:text-gold transition-colors">Journey</a>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
          </nav>
          <a
            href="https://sites.leadconnectorhq.com/preview/KfEYv8rswDFRw7NteIpj"
            className="hidden md:inline-flex items-center gap-2 border border-gold/70 px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-ink transition-all"
          >
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[100vh] w-full overflow-hidden">
        <img src={heroClinic} alt="Ana Dentta interior" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1067} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/85" />
        <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 md:px-12 md:pb-28 md:pt-48">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-gold">
              <span className="h-px w-12 bg-gold/60" />
              Ana Dentta · Dental Aesthetics
            </div>
            <h1 className="font-serif text-5xl leading-[1.02] text-cream md:text-7xl lg:text-[5.5rem]">
              The Art of the<br />
              <em className="font-light italic text-gold">Perfect Smile.</em>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
              Experience world-class cosmetic and comprehensive dentistry in a space designed for your ultimate comfort, confidence, and relaxation.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <GoldButton
                onClick={() => {
                  window.location.href =
                    "https://sites.leadconnectorhq.com/preview/KfEYv8rswDFRw7NteIpj";
                }}
              >
                Book Now
              </GoldButton>
              <a href="#experience" className="text-[10px] uppercase tracking-[0.4em] text-cream/70 hover:text-gold transition-colors">Discover the Experience</a>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-gold/20 pt-6 text-[10px] uppercase tracking-[0.35em] text-cream/60">
            <span>Luxury Cosmetic Dentistry</span><span className="text-gold">·</span>
            <span>Invisalign</span><span className="text-gold">·</span>
            <span>Veneers</span><span className="text-gold">·</span>
            <span>Whitening</span><span className="text-gold">·</span>
            <span>Preventative Care</span>
          </div>
        </div>
      </section>

      {/* EXPERIENCE / LEAD */}
      <section id="experience" className="relative bg-cream py-28 md:py-40">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-12">
          <div className="md:col-span-5">
            <SectionLabel>The Ana Dentta Experience</SectionLabel>
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] text-forest md:text-5xl lg:text-6xl">
              Dentistry reimagined for <em className="italic text-gold">comfort, beauty,</em> and peace of mind.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-cocoa md:col-span-6 md:col-start-7 md:text-lg">
            <p>Most dental clinics feel clinical, rushed, and impersonal. Ana Dentta was created to be the opposite.</p>
            <p>Here, your experience is calm, private, and entirely centered around you — whether you're preparing for a wedding, elevating your professional image, or simply investing in your confidence.</p>
            <p className="font-serif text-2xl italic text-forest md:text-3xl">No stress. No pressure. No cold, sterile atmosphere.</p>
            <p className="text-gold uppercase tracking-[0.3em] text-xs">Just elevated care in complete serenity.</p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-ink py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-20 max-w-2xl">
            <SectionLabel>Why Clients Choose Us</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl text-cream md:text-5xl lg:text-6xl">
              Luxury meets <em className="italic text-gold">advanced dentistry.</em>
            </h2>
          </div>
          <div className="grid gap-px bg-gold/10 md:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.kicker} className="group bg-ink p-10 transition-colors hover:bg-ink/60 md:p-14">
                <div className="font-serif text-5xl italic text-gold/70 md:text-6xl">{p.kicker}</div>
                <h3 className="mt-6 font-serif text-2xl text-cream md:text-3xl">{p.title}</h3>
                <p className="mt-5 max-w-md leading-relaxed text-cream/65">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-cream py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <SectionLabel>Signature Services</SectionLabel>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-forest md:text-5xl lg:text-6xl">
                Smile enhancements designed to look <em className="italic text-gold">effortlessly natural.</em>
              </h2>
            </div>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {services.map((s, i) => (
              <article key={s.title} className={`group relative ${i % 2 === 1 ? "md:mt-20" : ""}`}>
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                </div>
                <div className="mt-6 flex items-baseline gap-4">
                  <span className="font-serif text-sm italic text-gold">0{i + 1}</span>
                  <h3 className="font-serif text-2xl text-forest md:text-3xl">{s.title}</h3>
                </div>
                <p className="mt-3 max-w-md leading-relaxed text-cocoa">{s.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-20 flex justify-center">
            <GoldButton
              onClick={() => {
                window.location.href =
                  "https://sites.leadconnectorhq.com/preview/KfEYv8rswDFRw7NteIpj";
              }}
            >
              Book Your Consultation
            </GoldButton>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden bg-forest py-28 md:py-40">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(178,140,76,0.6), transparent 50%), radial-gradient(circle at 80% 70%, rgba(178,140,76,0.4), transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-16 text-center">
            <SectionLabel><span className="mx-auto">Trusted by Clients</span></SectionLabel>
            <h2 className="mt-6 font-serif text-4xl text-cream md:text-5xl lg:text-6xl">
              Words from those who <em className="italic text-gold">value excellence.</em>
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="border border-gold/20 bg-ink/20 p-10 backdrop-blur-sm">
                <div className="font-serif text-6xl leading-none text-gold">"</div>
                <blockquote className="mt-4 font-serif text-xl leading-relaxed text-cream/90 md:text-2xl">{t.quote}</blockquote>
                <figcaption className="mt-8 text-[10px] uppercase tracking-[0.4em] text-gold">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="bg-cream py-28 md:py-40">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-12">
          <div className="md:col-span-4">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-forest md:text-5xl lg:text-6xl">
              Your elevated <em className="italic text-gold">smile journey.</em>
            </h2>
            <img src={aboutInterior} alt="Ana Dentta interior" loading="lazy" className="mt-12 hidden aspect-[4/5] w-full object-cover md:block" />
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ol className="divide-y divide-gold/20 border-y border-gold/20">
              {journey.map((j) => (
                <li key={j.n} className="grid grid-cols-[auto_1fr] gap-8 py-10">
                  <span className="font-serif text-3xl italic text-gold md:text-4xl">{j.n}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-forest md:text-3xl">{j.t}</h3>
                    <p className="mt-3 leading-relaxed text-cocoa">{j.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET + TRIPWIRE */}
      <section id="book" className="bg-ink py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:px-12">
          {/* Lead Magnet */}
          <div className="border border-gold/25 bg-ink/40 p-10 md:p-14">
            <SectionLabel>Complimentary Smile Guide</SectionLabel>
            <h3 className="mt-6 font-serif text-3xl text-cream md:text-4xl">The Ultimate Guide to a <em className="italic text-gold">Radiant Smile.</em></h3>
            <p className="mt-5 leading-relaxed text-cream/70">Everything you need to know before investing in veneers or professional whitening — expectations, maintenance, and how to achieve naturally beautiful results.</p>
            <div className="mt-8 w-full max-w-md overflow-hidden rounded-2xl">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/ke2jhRtunvc0m2eDZMO5"
                className="w-full border-0"
                style={{
                  height: "434px",
                  border: "none",
                  borderRadius: "8px",
                }}
                id="inline-ke2jhRtunvc0m2eDZMO5"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name="Ana Dentta"
                data-form-id="ke2jhRtunvc0m2eDZMO5"
                title="Ana Dentta"
              />
            </div>
          </div>
          {/* Tripwire */}
          <div className="relative overflow-hidden bg-gradient-to-br from-gold/90 to-gold/70 p-10 text-ink md:p-14">
            <div className="text-[10px] uppercase tracking-[0.5em]">New Client Signature Offer</div>
            <h3 className="mt-6 font-serif text-3xl md:text-4xl">Signature Whitening + Smile Consultation</h3>
            <div className="mt-8 flex items-baseline gap-4">
              <span className="font-serif text-6xl md:text-7xl">$99</span>
              <span className="text-sm line-through opacity-60">$350</span>
            </div>
            <ul className="mt-8 space-y-3 text-sm">
              {["Professional laser whitening", "Personalized smile assessment", "Cosmetic recommendations tailored to you", "Relaxing luxury amenities throughout"].map((i) => (
                <li key={i} className="flex items-start gap-3"><span className="mt-2 h-px w-4 bg-ink" />{i}</li>
              ))}
            </ul>
            <p className="mt-8 text-[10px] uppercase tracking-[0.35em] opacity-70">Limited availability each month</p>
            <button
              onClick={() =>
                window.location.href =
                  "https://sites.leadconnectorhq.com/preview/KfEYv8rswDFRw7NteIpj"
              }
              className="mt-8 w-full border border-ink py-4 text-xs uppercase tracking-[0.3em] hover:bg-ink hover:text-gold transition-colors"
            >
              Claim Your Offer
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-cream py-28 md:py-40">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-12 md:items-center">
          <img src={smileDetail} alt="Ana Dentta refined experience" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          <div>
            <SectionLabel>About Ana Dentta</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-forest md:text-5xl lg:text-6xl">
              Where luxury and dentistry <em className="italic text-gold">come together.</em>
            </h2>
            <div className="mt-8 space-y-5 leading-relaxed text-cocoa">
              <p>Ana Dentta was founded on the belief that exceptional dentistry should feel calm, refined, and deeply personal.</p>
              <p>Our mission is to help every client feel more confident through elevated care, advanced technology, and naturally beautiful results — all within an atmosphere designed to soothe, relax, and inspire trust.</p>
              <p className="font-serif text-2xl italic text-forest">Because your smile deserves more than routine dentistry. It deserves artistry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-ink py-32 md:py-44">
        <img src={heroClinic} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
          <SectionLabel><span className="mx-auto">Ready When You Are</span></SectionLabel>
          <h2 className="mt-8 font-serif text-5xl leading-[1.05] text-cream md:text-6xl lg:text-7xl">
            Ready to transform <em className="italic text-gold">your smile?</em>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream/75">
            Experience cosmetic dentistry in a space designed for comfort, beauty, and confidence.
          </p>
          <div className="mt-12 flex justify-center">
            <GoldButton
              onClick={() => {
                window.location.href =
                  "https://sites.leadconnectorhq.com/preview/KfEYv8rswDFRw7NteIpj";
              }}
            >
              Book Now
            </GoldButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink border-t border-gold/15 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3 md:px-12">
          <div>
            <img src={logo} alt="Ana Dentta" className="h-16 w-auto mix-blend-screen invert opacity-90" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">Elevate your smile in absolute serenity. Luxury cosmetic & comprehensive dentistry.</p>
          </div>
          <div className="text-sm text-cream/60">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Visit</div>
            <p>Mon — Sat · By Appointment</p>
            <p className="mt-2">Private Suite · Ana Dentta Dental Aesthetics</p>
          </div>
          <div className="text-sm text-cream/60">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Connect</div>
            <p>hello@anadentta.com</p>
            <p className="mt-2">+1 (000) 000-0000</p>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-gold/10 px-6 pt-8 text-[10px] uppercase tracking-[0.3em] text-cream/40 md:flex-row md:px-12">
          <span>© {new Date().getFullYear()} Ana Dentta · Dental Aesthetics</span>
          <span>Elevated · Private · Bespoke</span>
        </div>
      </footer>
    </div>
  );
}

export default App;