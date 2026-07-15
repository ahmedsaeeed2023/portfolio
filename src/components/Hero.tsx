import { motion } from "motion/react";
import {
  ArrowDown,
  Award,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Typewriter from "typewriter-effect";
import heroImage from "@/assets/hero.png";

const stats = [
  { value: "50+", label: "Test Cases Written" },
  { value: "20+", label: "Bugs Documented" },
  { value: "ISTQB", label: "CTFL 4.0 Certified" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-20"
    >
      <div className="section-container w-full py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="space-y-8"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="tag-pill">
                <ShieldCheck size={14} />
                Available for opportunities
              </span>
              <span className="tag-pill">
                <Award size={14} />
                ISTQB Certified
              </span>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="space-y-3"
            >
              <p className="text-base text-muted-foreground md:text-lg">
                Hello, I'm
              </p>
              <h1 className="font-display text-5xl font-bold leading-[1.1] md:text-7xl">
                <Typewriter
                  options={{
                    strings: ["Ahmed Saeed"],
                    autoStart: true,
                    loop: true,
                    cursor: "|",
                    cursorClassName: "typewriter-cursor",
                  }}
                />
              </h1>
              <p className="font-display text-2xl font-semibold text-emerald-400 md:text-3xl">
                Software Tester
              </p>
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Ensuring software quality through detailed manual testing, API
              validation, and automation fundamentals. I catch bugs before users
              do and turn requirements into reliable, reproducible test cases.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-wrap gap-3"
            >
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail size={18} />
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </Button>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-center gap-4"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/ahmedsaeeed2023",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/ahmed-saeed-hemdan/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:ahmedsaeed909077@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-emerald-400"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="grid grid-cols-3 gap-4 border-t border-border/60 pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative mx-auto hidden lg:block"
          >
            <img
              src={heroImage}
              alt="Ahmed Saeed"
              className="h-auto w-120 object-contain"
            />
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-emerald-400"
          aria-label="Scroll to about section"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={18} className="animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
