import { motion } from "motion/react";
import { ExternalLink, Github, FlaskConical } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/SectionHeader";

const projects = [
  {
    title: "Manual Testing – LambdaTest E-Commerce Playground",
    description:
      "Designed and executed 50+ detailed test cases covering navigation, filters, product listing, cart, wishlist, and compare features. Identified and documented 20+ bugs with severity/priority classification.",
    tech: [
      "Manual Testing",
      "Test Case Design",
      "Bug Reporting",
      "Functional Testing",
      "Regression Testing",
    ],
    github:
      "https://github.com/ahmedsaeeed2023/lambdatest-ecommerce-manual-testing",
    demo: "",
  },
  {
    title: "Web Test Automation Framework – LambdaTest E-Commerce",
    description:
      "Developed automated UI test scripts using Selenium WebDriver and Java. Applied the Page Object Model (POM) design pattern for maintainable test automation.",
    tech: [
      "Selenium WebDriver",
      "Java",
      "Page Object Model",
      "Test Automation",
      "UI Testing",
    ],
    github:
      "https://github.com/ahmedsaeeed2023/selenium-java-ecommerce-automation",
    demo: "",
  },
  {
    title: "API Test Automation – FakeStore API",
    description:
      "Designed and automated API test scenarios using Postman and JavaScript assertions. Validated API responses, status codes, and business rules with Newman reports.",
    tech: [
      "Postman",
      "Newman",
      "RESTful APIs",
      "JavaScript Assertions",
      "API Testing",
    ],
    github:
      "https://github.com/ahmedsaeeed2023/postman-api-automation-fakestore",
    demo: "",
  },
  {
    title: "Database Testing – OpenCart (oc_product & oc_category)",
    description:
      "Designed SQL-based test cases to validate data integrity constraints on core OpenCart tables. Uncovered critical backend validation gaps using direct MySQL queries.",
    tech: ["SQL", "Database Testing", "MySQL", "Data Integrity", "DDL / DML"],
    github: "https://github.com/ahmedsaeeed2023/opencart-database-testing",
    demo: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="section-container space-y-16">
        <SectionHeader
          label="Projects"
          title="Testing Work & Case Studies"
          description="Hands-on projects demonstrating manual testing, automation, API validation, and database testing skills."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="group relative h-full overflow-hidden p-6 md:p-7">
                <div className="absolute -right-4 -top-4 font-display text-[7rem] font-bold leading-none text-foreground/3 transition-colors group-group-hover:text-emerald-500/6">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative space-y-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-emerald-400">
                    <FlaskConical size={20} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-semibold leading-snug md:text-xl">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {(project.github || project.demo) && (
                    <div className="flex gap-3 pt-1">
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={15} />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" className="flex-1" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={15} />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
