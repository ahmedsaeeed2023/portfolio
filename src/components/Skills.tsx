import { motion } from "motion/react";
import {
  Code2,
  Layers,
  Palette,
  GitBranch,
  Wrench,
  Users,
  Workflow,
  Brain,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/SectionHeader";

const skillCategories = [
  {
    icon: Code2,
    title: "Testing Fundamentals",
    skills: [
      "Manual Testing",
      "Test Case Design",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Bug Reporting",
    ],
  },
  {
    icon: Layers,
    title: "Test Design Techniques",
    skills: [
      "Equivalence Partitioning",
      "Boundary Value Analysis",
      "Decision Table Testing",
      "State Transition Testing",
      "Exploratory Testing",
    ],
  },
  {
    icon: Palette,
    title: "Automation & Programming",
    skills: [
      "Selenium WebDriver",
      "Page Object Model",
      "Java (OOP)",
      "Python",
      "C / C++",
    ],
  },
  {
    icon: GitBranch,
    title: "API Testing",
    skills: ["Postman", "Newman", "RESTful APIs", "JavaScript Assertions"],
  },
  {
    icon: Wrench,
    title: "Database & SQL",
    skills: ["SQL Fundamentals", "Database Testing", "DDL / DML", "Joins"],
  },
  {
    icon: Users,
    title: "Testing & PM Tools",
    skills: [
      "Jira",
      "Xray",
      "VS Code",
      "Eclipse",
      "IntelliJ IDEA",
      "Git / GitHub",
    ],
  },
  {
    icon: Workflow,
    title: "Methodologies",
    skills: ["Agile / Scrum", "TDD", "BDD", "Shift-Left Testing"],
  },
  {
    icon: Brain,
    title: "Soft Skills",
    skills: [
      "Analytical Thinking",
      "Attention to Detail",
      "Problem Solving",
      "Teamwork",
      "Leadership",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="section-container space-y-16">
        <SectionHeader
          label="Skills"
          title="Tools & Technologies"
          description="The testing stack, tools, and methodologies I work with daily."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={index < 2 ? "sm:col-span-1 lg:col-span-2" : ""}
              >
                <Card className="h-full p-5 md:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-emerald-400">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display text-base font-semibold md:text-lg">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
