import { motion } from "motion/react";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

const SectionHeader = ({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`space-y-4 max-w-2xl ${alignClass}`}
    >
      <span className="tag-pill">{label}</span>
      <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
