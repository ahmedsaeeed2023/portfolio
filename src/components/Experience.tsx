import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/SectionHeader";

const experiences = [
  {
    title: "Software Testing Trainee",
    company: "DEPI (Digital Egypt Pioneers Initiative) – MCIT",
    period: "November 2025 – June 2026",
    type: "Training",
    achievements: [
      "Completed intensive Software Testing Track covering Manual Testing, Test Design Techniques, and Agile Testing methodologies",
      "Applied ISTQB CTFL 4.0 concepts including SDLC, STLC, test levels, and defect management (ISTQB Certified)",
      "Designed and executed test cases using Equivalence Partitioning, Boundary Value Analysis, Decision Tables, and State Transition Testing",
      "Performed API testing using Postman, including request building, environment variables, and response validation with JavaScript assertions",
      "Practiced test automation fundamentals with Selenium WebDriver and built Java OOP skills as a foundation for automation scripting",
      "Applied database testing techniques and SQL fundamentals, including DDL/DML operations, joins, and data integrity validation",
      "Created detailed bug reports with severity, priority, and reproduction steps using Jira and Xray",
    ],
  },
  {
    title: "Freelance Software Tester",
    company: "Test IO",
    period: "January 2026 – Present",
    type: "Freelance",
    achievements: [
      "Executed exploratory and functional testing on a live German e-commerce platform",
      "Identified and reported multiple confirmed bugs, including high severity broken-link issues and a Critical network error affecting app reinstallation",
      "Documented clear, reproducible bug reports accepted by the team lead across multiple test cycles",
      "Gained real-world experience testing production systems on an international QA crowd-testing platform",
    ],
  },
  {
    title: "Electrical Technical Office Engineer",
    company: "PETROJET – Phosphate & Nitrogen Fertilizers",
    period: "December 2025 – Present",
    type: "Full-time",
    achievements: [
      "Managed technical documentation, reports, and project data using SAP GUI S/4 HANA",
      "Prepared BOQ documents and coordinated with cross-functional teams",
      "Strengthened attention to detail and structured documentation skills — directly transferable to test case writing and reporting",
    ],
  },
  {
    title: "Software Testing Course",
    company: "Creativa, Suez Canal University",
    period: "November – December 2024",
    type: "Training",
    achievements: [
      "Practiced ISTQB concepts and testing fundamentals through hands-on exercises",
      "Studied testing levels: Unit, Integration, and System testing",
      "Applied test design techniques including Equivalence Partitioning and Boundary Value Analysis",
      "Explored testing types: Functional, Non-Functional, and Regression testing",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="section-container space-y-16">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          description="Training, freelance testing, and professional roles that shaped my QA expertise."
        />

        <div className="relative space-y-0">
          <div className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-linear-to-b from-emerald-500/50 via-emerald-500/20 to-transparent md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative pb-10 md:pl-14 md:pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-1 hidden size-10 items-center justify-center rounded-full border border-primary/30 bg-background md:flex">
                <Briefcase size={16} className="text-emerald-400" />
              </div>

              <div className="glass-card rounded-xl p-6 md:p-7">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="font-display text-xl font-semibold md:text-2xl">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-emerald-400/90 md:text-base">
                      {exp.company}
                    </p>
                  </div>
                  <Badge>{exp.type}</Badge>
                </div>

                <div className="mb-5 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={15} />
                  <span>{exp.period}</span>
                </div>

                <ul className="space-y-2.5">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
