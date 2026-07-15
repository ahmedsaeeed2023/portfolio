import { motion } from "motion/react";
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";

const highlights = [
  "Manual Testing & Test Design Techniques",
  "API Testing with Postman & Newman",
  "Selenium WebDriver & Java OOP fundamentals",
  "Jira, Xray & Agile/Scrum practices",
  "Real-world crowd-testing via Test IO",
];

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-container space-y-16">
        <SectionHeader
          label="About"
          title="Building Quality Into Every Release"
          description="Software Testing professional with hands-on experience in manual testing, API validation, and automation fundamentals."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 md:p-8 space-y-5">
              <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
                I'm a Software Testing professional currently completing an
                intensive Software Testing track at DEPI (MCIT). Skilled in Manual
                Testing, Test Design Techniques, and API Testing with Postman.
                ISTQB CTFL 4.0 Certified.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Experienced in writing clear, reproducible bug reports, executing
                functional/regression/smoke/sanity testing, and using Jira & Xray
                for defect tracking. Familiar with Selenium WebDriver fundamentals,
                Java OOP for test automation, SQL & Database Testing, and
                Agile/Scrum practices.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Gained practical experience through Test IO, testing a live German
                e-commerce website and reporting production bugs directly to the
                client. Passionate about quality, attention to detail, and
                continuous learning.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <Card className="p-6">
              <h3 className="font-display mb-4 text-lg font-semibold">
                Core Strengths
              </h3>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground md:text-base"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-emerald-400">
                  <GraduationCap size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-semibold leading-snug">
                    B.Eng – Communication and Electronics
                  </h3>
                  <p className="text-sm font-medium text-emerald-400/90">
                    Suez Canal University, Ismailia
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      Oct 2020 – Jun 2025
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      GPA: 3.6
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
