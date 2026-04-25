"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  GraduationCap,
  Brain,
  MessageSquare,
  Code2,
  Database,
  Bot,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Cpu,
  Network,
  Shield,
  ArrowRight,
  BookOpen,
  Users,
  Zap,
  BarChart3,
  FileCheck,
  Layers,
  Globe,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/* ─── Animated Section Wrapper ─── */
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}



/* ─── Skill Bar ─── */
function SkillBar({
  name,
  level,
  icon: Icon,
  color = "bg-teal",
}: {
  name: string;
  level: number;
  icon: React.ElementType;
  color?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-1.5 rounded-md bg-secondary group-hover:bg-teal/10 transition-colors">
          <Icon className="w-4 h-4 text-teal" />
        </div>
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground ml-auto">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

/* ─── Timeline Item ─── */
function TimelineItem({
  year,
  title,
  description,
  icon: Icon,
}: {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <div className="relative pl-10 pb-8 last:pb-0">
      <div className="absolute left-0 top-0 flex items-center justify-center w-7 h-7 rounded-full bg-teal text-white">
        <Icon className="w-3.5 h-3.5" />
      </div>
      <div className="absolute left-[13px] top-7 bottom-0 w-px bg-border" />
      <div className="text-xs font-semibold text-amber uppercase tracking-wider mb-1">
        {year}
      </div>
      <h4 className="font-serif text-lg text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      {/* ─── NAVIGATION ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#hero"
              className="font-serif text-xl text-white tracking-tight"
            >
              <span className="text-teal-light">AI</span> Portfolio
            </a>
            <div className="hidden md:flex items-center gap-8">
              {[
                ["About", "#about"],
                ["Projects", "#projects"],
                ["Skills", "#skills"],
                ["Education", "#education"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-white/70 hover:text-teal-light transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
            <a href="#projects" className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-teal-light"
              >
                Projects
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <motion.div style={{ y: heroY }} className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-teal-dark" />
            <img
              src="/hero-bg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
            />
            {/* Decorative circles */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-glow" />
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl" />
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
        >
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 border border-amber/40 bg-amber/10 text-amber px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Computer Engineering Graduate
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-[1.1] mb-6"
            >
              Building the Future
              <br />
              with <em className="text-teal-light not-italic">Artificial Intelligence</em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl text-white/60 font-light leading-relaxed max-w-xl mb-10"
            >
              A showcase of two AI-powered graduation projects — from
              intelligent equivalence verification to conversational university
              assistance. Crafted with passion during my Bachelor&apos;s in
              Computer Engineering.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects">
                <Button className="bg-teal hover:bg-teal-dark text-white px-8 py-6 text-base rounded-xl shadow-lg shadow-teal/20 transition-all hover:shadow-xl hover:shadow-teal/30">
                  <Sparkles className="w-4 h-4 mr-2" />
                  View Projects
                </Button>
              </a>
              <a href="#about">
                <Button className="bg-teal hover:bg-teal-dark text-white px-8 py-6 text-base rounded-xl shadow-lg shadow-teal/20 transition-all hover:shadow-xl hover:shadow-teal/30">
                  About Me
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </section>

      {/* ─── AMBITION QUOTE ─── */}
      <section className="relative z-10 -mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-navy rounded-2xl shadow-2xl shadow-navy/20 px-8 py-10 md:px-12 md:py-12 text-center relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-teal/8 rounded-full blur-3xl -translate-y-1/2" />
              <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-amber/8 rounded-full blur-3xl translate-y-1/2" />
              <div className="relative z-10">
                <Sparkles className="w-5 h-5 text-amber mx-auto mb-4" />
                <p className="font-serif text-xl sm:text-2xl md:text-[1.7rem] text-white leading-relaxed mb-3">
                  Every line of <span className="text-teal-light">code</span> is a step toward a world that&apos;s yet to <span className="text-amber">exist</span>
                </p>
                <p className="text-white/35 text-sm font-light max-w-lg mx-auto">
                  We don&apos;t just build AI — we build bridges to futures that don&apos;t exist yet
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── ABOUT SECTION ─── */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 text-teal bg-teal/10 border-teal/20"
              >
                About Me
              </Badge>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Driven by Curiosity,
                <br />
                <span className="text-teal">Powered by AI</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A Computer Engineering graduate passionate about leveraging
                artificial intelligence to solve real-world problems.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatedSection delay={0.1}>
              <Card className="h-full border-none shadow-lg shadow-navy/5 rounded-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-teal to-teal-dark" />
                <CardHeader>
                  <CardTitle className="font-serif text-xl flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-teal" />
                    Who I Am
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I am a Computer Engineering graduate who believes that
                    technology should serve people. My journey in AI began with
                    curiosity about how machines can understand and assist humans
                    — and it grew into two full-fledged graduation projects that
                    tackle meaningful challenges.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    From building intelligent equivalence verification systems to
                    creating conversational AI assistants for university
                    students, I thrive at the intersection of software
                    engineering and artificial intelligence.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="h-full border-none shadow-lg shadow-navy/5 rounded-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-amber to-amber-light" />
                <CardHeader>
                  <CardTitle className="font-serif text-xl flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber" />
                    What Drives Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Brain,
                        title: "AI-First Thinking",
                        desc: "Every problem is an opportunity to apply intelligent solutions.",
                      },
                      {
                        icon: Users,
                        title: "User-Centric Design",
                        desc: "Technology is only valuable when it genuinely helps people.",
                      },
                      {
                        icon: Shield,
                        title: "Ethical AI",
                        desc: "Building responsible systems that respect privacy and fairness.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3 group"
                      >
                        <div className="p-2 rounded-lg bg-secondary group-hover:bg-teal/10 transition-colors mt-0.5">
                          <item.icon className="w-4 h-4 text-teal" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-foreground">
                            {item.title}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS SECTION ─── */}
      <section id="projects" className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 text-amber bg-amber/10 border-amber/20"
              >
                Featured Work
              </Badge>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Graduation Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Two AI-powered systems built from the ground up as part of my
                Bachelor&apos;s graduation requirements in Computer Engineering.
              </p>
            </div>
          </AnimatedSection>

          {/* ── Project 1: Equivalence System ── */}
          <AnimatedSection delay={0.1}>
            <Card className="mb-12 border-none shadow-xl shadow-navy/8 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-light min-h-[300px] md:min-h-[450px]">
                  <img
                    src="/equivalence-project.png"
                    alt="Equivalence System - AI-powered verification"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <Badge className="bg-teal/90 text-white border-0 text-xs">
                      <FileCheck className="w-3 h-3 mr-1" />
                      Project 01
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-lg bg-teal/10">
                      <Network className="w-5 h-5 text-teal" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                      Equivalence System
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A smart academic equivalence tool that accepts CSV files with
                    columns for course name, code, description, grade (optional),
                    and credit hours. It finds similarity between files regardless
                    of column order or naming conventions — supporting
                    Arabic-Arabic, Arabic-English, and English-English comparison
                    using NLP and machine learning.
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { icon: FileCheck, label: "CSV File Parsing" },
                      { icon: Brain, label: "NLP Similarity" },
                      { icon: BarChart3, label: "Arabic & English" },
                      { icon: Shield, label: "Column-Agnostic" },
                    ].map((feat) => (
                      <div
                        key={feat.label}
                        className="flex items-center gap-2 text-sm"
                      >
                        <feat.icon className="w-4 h-4 text-teal" />
                        <span className="text-muted-foreground">
                          {feat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Python", "NLP", "Machine Learning", "Flask", "CSV Processing"].map(
                      (tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-teal/5 text-teal border-teal/10"
                        >
                          {tech}
                        </Badge>
                      )
                    )}
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-teal font-medium text-sm hover:gap-3 transition-all group"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          {/* ── Project 2: AI Assistant for Uni ── */}
          <AnimatedSection delay={0.2}>
            <Card className="border-none shadow-xl shadow-navy/8 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Content (reversed order on desktop) */}
                <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-lg bg-amber/10">
                      <Bot className="w-5 h-5 text-amber" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                      AI Assistant for Uni
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A smart chatbot serving university students and staff 24/7.
                    It automatically scrapes the university website and academic
                    files to build a knowledge base that updates itself weekly.
                    Powered by LLMs and RAG, it delivers instant, accurate
                    answers while preserving user privacy and remembering
                    conversation context within each session.
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { icon: MessageSquare, label: "Conversational AI" },
                      { icon: Globe, label: "Auto Web Scraping" },
                      { icon: Shield, label: "Privacy-First" },
                      { icon: BookOpen, label: "Weekly KB Updates" },
                    ].map((feat) => (
                      <div
                        key={feat.label}
                        className="flex items-center gap-2 text-sm"
                      >
                        <feat.icon className="w-4 h-4 text-amber" />
                        <span className="text-muted-foreground">
                          {feat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      "Python",
                      "LLM / RAG",
                      "Web Scraping",
                      "FastAPI",
                      "Streamlit",
                    ].map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-amber/5 text-amber border-amber/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-amber font-medium text-sm hover:gap-3 transition-all group"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-navy to-teal-dark min-h-[300px] md:min-h-[450px] order-1 md:order-2">
                  <img
                    src="/ai-assistant-project.png"
                    alt="AI Assistant for University - Chatbot Interface"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 right-6">
                    <Badge className="bg-amber/90 text-white border-0 text-xs">
                      <Bot className="w-3 h-3 mr-1" />
                      Project 02
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SKILLS SECTION ─── */}
      <section id="skills" className="py-24 md:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 text-teal bg-teal/10 border-teal/20"
              >
                Technical Skills
              </Badge>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Tools & Technologies
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A blend of AI, software engineering, and web development skills
                honed through academic projects and self-driven learning.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI & ML */}
            <AnimatedSection delay={0.1}>
              <Card className="h-full border-none shadow-lg shadow-navy/5 rounded-2xl overflow-hidden">
                <div className="h-1.5 bg-teal" />
                <CardHeader>
                  <CardTitle className="font-serif text-lg flex items-center gap-2">
                    <Brain className="w-5 h-5 text-teal" />
                    AI & Machine Learning
                  </CardTitle>
                  <CardDescription>
                    Core intelligence behind my projects
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SkillBar name="Python" level={92} icon={Terminal} />
                  <SkillBar name="NLP / NLU" level={85} icon={MessageSquare} />
                  <SkillBar
                    name="Scikit-learn"
                    level={88}
                    icon={BarChart3}
                  />
                  <SkillBar name="LLM / RAG" level={80} icon={Brain} />
                  <SkillBar
                    name="Deep Learning"
                    level={75}
                    icon={Network}
                    color="bg-teal-dark"
                  />
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Backend */}
            <AnimatedSection delay={0.2}>
              <Card className="h-full border-none shadow-lg shadow-navy/5 rounded-2xl overflow-hidden">
                <div className="h-1.5 bg-amber" />
                <CardHeader>
                  <CardTitle className="font-serif text-lg flex items-center gap-2">
                    <Database className="w-5 h-5 text-amber" />
                    Backend & Data
                  </CardTitle>
                  <CardDescription>
                    Server-side engineering and data pipelines
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SkillBar
                    name="Flask / FastAPI"
                    level={88}
                    icon={Code2}
                    color="bg-amber"
                  />
                  <SkillBar
                    name="SQL / Databases"
                    level={82}
                    icon={Database}
                    color="bg-amber"
                  />
                  <SkillBar
                    name="REST APIs"
                    level={90}
                    icon={Globe}
                    color="bg-amber"
                  />
                  <SkillBar
                    name="Data Processing"
                    level={85}
                    icon={Layers}
                    color="bg-amber"
                  />
                  <SkillBar
                    name="Streamlit"
                    level={87}
                    icon={Zap}
                    color="bg-amber-light"
                  />
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Frontend & Tools */}
            <AnimatedSection delay={0.3}>
              <Card className="h-full border-none shadow-lg shadow-navy/5 rounded-2xl overflow-hidden">
                <div className="h-1.5 bg-navy" />
                <CardHeader>
                  <CardTitle className="font-serif text-lg flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-navy" />
                    Frontend & Tools
                  </CardTitle>
                  <CardDescription>
                    Building intuitive user interfaces
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SkillBar
                    name="React / Next.js"
                    level={80}
                    icon={Code2}
                    color="bg-navy"
                  />
                  <SkillBar
                    name="HTML / CSS"
                    level={90}
                    icon={Layers}
                    color="bg-navy"
                  />
                  <SkillBar
                    name="JavaScript / TS"
                    level={78}
                    icon={Terminal}
                    color="bg-navy"
                  />
                  <SkillBar
                    name="Git / GitHub"
                    level={85}
                    icon={Github}
                    color="bg-navy-light"
                  />
                  <SkillBar
                    name="UI/UX Design"
                    level={72}
                    icon={Sparkles}
                    color="bg-navy-light"
                  />
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── EDUCATION TIMELINE ─── */}
      <section id="education" className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 text-amber bg-amber/10 border-amber/20"
              >
                Education
              </Badge>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Academic Journey
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            <AnimatedSection delay={0.1}>
              <TimelineItem
                year="2021 – 2025"
                title="B.Sc. in Computer Engineering"
                description="Studied core computer engineering subjects including algorithms, data structures, software engineering, AI, and machine learning. Graduated with two AI-focused capstone projects."
                icon={GraduationCap}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <TimelineItem
                year="2024 – 2025"
                title="Graduation Project: Equivalence System"
                description="Built an AI-powered academic equivalence system that accepts CSV files with flexible column ordering, supporting Arabic-Arabic, Arabic-English, and English-English document similarity comparison using NLP."
                icon={FileCheck}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <TimelineItem
                year="2024 – 2025"
                title="Graduation Project: AI Assistant for Uni"
                description="Developed a conversational AI chatbot that auto-scrapes the university website and academic files to build a self-updating knowledge base (weekly), providing instant answers using LLM and RAG."
                icon={Bot}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── CONTACT / CTA SECTION ─── */}
      <section id="contact" className="py-24 md:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative bg-gradient-to-br from-navy via-navy-light to-teal-dark rounded-3xl p-12 md:p-16 text-center overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-amber/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <Badge className="mb-6 bg-white/10 text-white/80 border-white/20 hover:bg-white/15">
                  <Mail className="w-3 h-3 mr-1" />
                  Get In Touch
                </Badge>
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                  Let&apos;s Connect
                </h2>
                <p className="text-white/60 max-w-lg mx-auto leading-relaxed mb-10">
                  Interested in my work or have a collaboration idea? I&apos;d
                  love to hear from you. Reach out through any of the channels
                  below.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a href="mailto:your.email@example.com">
                    <Button className="bg-teal hover:bg-teal-dark hover:border-white/20 hover:text-white hover:bg-white/10 text-white rounded-xl px-6 shadow-lg shadow-teal/20 border border-teal hover:border-white/20 transition-all">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Me
                    </Button>
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <Button
                      className="bg-teal hover:bg-white/10 hover:border-white/20 text-white rounded-xl px-6 shadow-lg shadow-teal/20 border border-teal hover:border-white/20 transition-all"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <Button
                      className="bg-teal hover:bg-white/10 hover:border-white/20 text-white rounded-xl px-6 shadow-lg shadow-teal/20 border border-teal hover:border-white/20 transition-all"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-navy text-white/50 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-serif text-lg text-white/80">
              <span className="text-teal-light">AI</span> Portfolio
            </div>
            <div className="text-sm">
              Built with passion &amp; AI · Computer Engineering Graduate
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-light transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-light transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="hover:text-teal-light transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
