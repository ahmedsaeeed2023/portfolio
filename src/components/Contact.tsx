import { motion } from "motion/react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "ahmedsaeed909077@gmail.com",
    href: "mailto:ahmedsaeed909077@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "01118607118",
    href: "tel:01118607118",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cairo, Egypt",
  },
];

const Contact = () => {
  return (
    <>
      <section id="contact" className="relative py-24 md:py-32">
        <div className="section-container space-y-16">
          <SectionHeader
            label="Contact"
            title="Let's Work Together"
            description="Open to QA roles, freelance testing opportunities, and exciting projects. Reach out anytime."
          />

          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                  >
                    <Card className="p-5">
                      <div className="flex items-center gap-4">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-emerald-400">
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm font-medium text-foreground transition-colors hover:text-emerald-400 md:text-base"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium md:text-base">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="flex h-full flex-col justify-between p-6 md:p-8">
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-semibold">
                    Ready to discuss your next project?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you need a dedicated QA engineer, help with test
                    automation, or API validation — I'd love to hear from you.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button size="lg" asChild>
                    <a href="mailto:ahmedsaeed909077@gmail.com">
                      <Send size={18} />
                      Send Email
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a
                      href="https://github.com/ahmedsaeeed2023"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a
                      href="https://www.linkedin.com/in/ahmed-saeed-hemdan/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={18} />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-8">
        <div className="section-container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} Ahmed Saeed. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with precision
            <span className="text-emerald-400">●</span>
            Quality assured
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
