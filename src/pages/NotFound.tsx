import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import BackgroundEffects from "@/components/BackgroundEffects";

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <BackgroundEffects />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-container text-center"
      >
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-emerald-400">
          <Bug size={32} />
        </div>
        <h1 className="font-display mb-3 text-7xl font-bold gradient-text md:text-8xl">
          404
        </h1>
        <p className="mb-2 text-xl font-semibold">Page Not Found</p>
        <p className="mb-8 text-muted-foreground">
          Looks like this test case failed — the page doesn't exist.
        </p>
        <Button size="lg" asChild>
          <Link to="/">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
