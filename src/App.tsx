/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState } from "react";
import {
  BarChart3,
  ChevronDown,
  Cloud,
  Code2,
  Compass,
  Cpu,
  ExternalLink,
  Globe,
  Lightbulb,
  Mail,
  MapPin,
  MessageSquare,
  Network,
  Phone,
  ShieldCheck,
  Users,
  Zap,
  CheckCircle2,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import ardenzaTechLogo from "./assets/ardenza-tech-logo.png";
import background1 from "./assets/background 1.jpg";
import background2 from "./assets/background 2.jfif";
import dataCenter3Image from "./assets/Data Center 3.jpeg";
import founderImage from "./assets/Profile.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function App() {
  const [expandedCore, setExpandedCore] = useState(false);
  const [expandedGrowth, setExpandedGrowth] = useState(false);
  const [expandedElite, setExpandedElite] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  description: "",
  urgency: "",
});

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/send-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        description: "",
        urgency: "",
      });
    } else {
    setErrorMessage(result.error || "Failed to send your message.");
setSuccessMessage("");
    }
  } catch (error) {
    console.error(error);
    setErrorMessage("Unable to connect to the server. Please try again later.");
setSuccessMessage("");
  }
};
  const coreItems = [
    "Network assessment and consultation",
    "Basic connectivity troubleshooting",
    "Network documentation and diagrams",
    "Basic security recommendations",
  ];

  const growthItems = [
    "Basic LAN/Wi-Fi network setup",
    "Router and switch configuration",
    "IP addressing and connectivity setup",
    "Basic network security",
    "Initial testing and validation",
    "VLAN configuration and segmentation (802.1q)",
    "Network performance optimization",
    "Device configuration (routers, switches, firewalls)",
    "Basic monitoring setup",
    "Security enhancements",
    "Wireless network design and implementation",
    "Network documentation and asset management",
  ];

  const eliteItems = [
    "VLAN configuration and segmentation (802.1q)",
    "Network performance optimization",
    "Device configuration (routers, switches, firewalls)",
    "Basic monitoring setup",
    "Security enhancements",
    "Advanced network architecture design",
    "High availability and redundancy configuration",
    "Scalable enterprise routing design",
    "Network automation and monitoring tools",
    "Advanced security implementation",
    "Performance tuning and failover testing",
    "SD-WAN and cloud network integration",
    "Zero Trust security architecture",
    "Multi-site network orchestration",
    "AI-powered network analytics",
    "24/7 network operations center (NOC) support",
    "Disaster recovery and business continuity planning",
    "Global network deployment and management",
    "Compliance and audit-ready network infrastructure",
  ];
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-blue/30">
      {/* Top Bar */}
      <div className="hidden lg:block bg-brand-navy border-b border-white/10 text-white/80 py-2.5 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin id="loc-icon" size={14} className="text-brand-blue" />
              <span>8206 Louisiana Blvd NE, Ste A#9498 Albuquerque, NM 87113, USA   </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail id="email-icon" size={14} className="text-brand-blue" />
              <span>info@ ardenzatech.com</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone id="phone-icon" size={14} className="text-brand-blue" />
              <span>+1 (505) 227-7705</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/shawn-taruvinga-030988335"
                target="_blank"
                rel="noreferrer noopener"
                className="text-current"
              >
                <Linkedin
                  size={16}
                  className="cursor-pointer hover:text-brand-blue transition-colors"
                />
              </a>
              <div className="flex items-center gap-1 cursor-pointer hover:text-brand-blue transition-colors">
                <Globe size={14} />
                <span>EN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <img
              src={ardenzaTechLogo}
              alt="Ardenza - Tech Logo"
              className="h-14 w-auto object-contain drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-500 hover:scale-110 filter brightness-125 contrast-125 saturate-125 hover:brightness-130 hover:contrast-130 relative z-10"
            />
          </div>

          <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-600">
            <li>
              <a href="#home" className="hover:text-brand-blue transition-colors scroll-smooth">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-brand-blue transition-colors py-1"
              >
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-brand-blue transition-colors">
                Services
              </a>
            </li>
                        <li>
              <a href="#industries" className="hover:text-brand-blue transition-colors">
                Industries
              </a>
            </li>
            <li>
              <a href="#insights" className="hover:text-brand-blue transition-colors">
                Insights
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-brand-blue transition-colors">
                Contact Us
              </a>
            </li>
          </ul>

          <a
            id="cta-header"
            href="#contact"
            className="inline-flex items-center justify-center bg-brand-blue hover:bg-blue-600 text-white px-6 py-2.5 rounded-sm font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-blue/20"
          >
            Get in Touch
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[500px] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          {/* Desktop Background */}
          <img
            src={background1}
            alt="Data Center Background"
            className="hidden md:block w-full h-full object-cover"
          />
          {/* Mobile Background */}
          <img
            src={background2}
            alt="Data Center Background Mobile"
            className="block md:hidden w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-r from-brand-deep via-brand-deep/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ardenza Tech
            </h2>
            <p className="text-xl md:text-2xl font-semibold mb-6">
              <span className="text-white">
                Secure, Scalable IT Solutions for Modern Busineses
              </span>{" "}
              <span className="text-brand-blue">
                Networking, Cybersecurity, Cloud, and infrastructure Solutions designed to keep your business connected, secure, and ready for growth
              </span>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Ardenza Tech, delivers secure scalable and high-performance IT
              and networking solutions designed to keep your business connected and
              efficient. Global delivery across the United States, GCC, Europe and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
  <a
    href="#contact"
    className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
  >
    Book Free Consultation
  </a>

  <a
    href="#services"
    className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-navy transition"
  >
    View Services
  </a>
</div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
              About Ardenza Tech
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-brand-blue leading-tight">
              Built on Expertise.
              <br />
              Driven by Purpose.
            </h3>
            <div className="h-1 w-20 bg-brand-blue" />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>ArdenzaTech is a forward-thinking, technology-focused company focused on delivering high
performance networking, IT consulting services and infrastructure solutions. built on strong
technical expertise and a commitment to reliability we help businesses design, implement and
maintain efficient network systems.We follow proven industry practices while adapting to modern demands, ensuring every solution is
secure, scalable and built for long-term performance.
              </p>
              <p>
                <span className="text-brand-blue">Mission:</span> To deliver dependable technology solutions that enhance business performance and empower
businesses to grow.
              </p>
              <p>
                <span className="text-brand-blue">Vision:</span> To establish Ardenza Tech as a trusted IT consulting brand serving enterprises across regional and
international markets.
We design and deploy network solutions using industry-standard technologies including enterprise networking, wireless, cloud, and security technologies
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-blue/10 rounded-xl" />
              <img
                src={dataCenter3Image}
                alt="Data Center"
                className="relative rounded-lg shadow-2xl w-full h-[450px] object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all group">
                <Cpu
                  className="text-brand-blue mb-2 group-hover:scale-110 transition-transform"
                  size={24}
                />
                <span className="text-[10px] uppercase font-bold text-brand-navy">
                  Hands-on Expertise
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all group">
                <Users
                  className="text-brand-blue mb-2 group-hover:scale-110 transition-transform"
                  size={24}
                />
                <span className="text-[10px] uppercase font-bold text-brand-navy">
                  Client-Focused Approach
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all group">
                <ShieldCheck
                  className="text-brand-blue mb-2 group-hover:scale-110 transition-transform"
                  size={24}
                />
                <span className="text-[10px] uppercase font-bold text-brand-navy">
                  Integrity & Transparency
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-blue font-bold tracking-widest text-xs uppercase">
              Core Services
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy">
              Reliable IT & Network Solutions
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Ardenza Tech provides reliable, scalable and secure IT and network solutions designed 
              to support modern business operations across global markets
            </p>
          </div>

          {/* Assessment/Health Check */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-brand-blue/5 to-brand-navy/5 rounded-xl p-8 border border-brand-blue/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-white" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-brand-navy">Assessment & Health Check</h4>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                A detailed evaluation of network performance, security posture and infrastructure reliability to 
                identify risks and improvement opportunities
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-brand-blue" size={18} />
                  <span className="text-gray-700">Network performance analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-brand-blue" size={18} />
                  <span className="text-gray-700">Device and configuration review</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-brand-blue" size={18} />
                  <span className="text-gray-700">Security and access control assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-brand-blue" size={18} />
                  <span className="text-gray-700">Identification of bottlenecks and single points of failure</span>
                </div>
              </div>
              <div className="bg-brand-blue/10 rounded-lg p-4">
                <p className="text-brand-navy font-semibold text-center">
                  🛡️ We identify problems before they become outages
                </p>
              </div>
            </div>
          </motion.div>

          {/* Core Services */}
          <div className="mb-20">
            <h4 className="text-2xl font-bold text-brand-navy mb-8 text-center">Core Services</h4>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Network />,
                  title: "Network Design & Implementation",
                  description: "Comprehensive network architecture design and implementation tailored to your business needs"
                },
                {
                  icon: <Lightbulb />,
                  title: "IT Consulting",
                  description: "Strategic IT guidance to optimize your technology investments and infrastructure"
                },
                {
                  icon: <BarChart3 />,
                  title: "Infrastructure Optimization",
                  description: "Performance tuning and optimization of existing infrastructure for maximum efficiency"
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h5 className="text-lg font-bold text-brand-navy mb-3">{service.title}</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Service Tiers */}
          <div className="mb-20">
            <h4 className="text-2xl font-bold text-brand-navy mb-12 text-center">Service Tiers</h4>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Core Tier */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all ${
                  expandedCore ? "h-auto" : "h-[360px]"
                }`}
              >
                <div
                  className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-t-xl border-b border-gray-200 cursor-pointer"
                  onClick={() => setExpandedCore(!expandedCore)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="text-xl font-bold text-brand-navy mb-2">Core Tier</h5>
                      <p className="text-gray-600 text-sm">Essential network foundation for startups and small businesses</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedCore ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <ChevronDown className="text-brand-blue" size={24} />
                    </motion.div>
                  </div>
                </div>
                {!expandedCore && (
                  <div className="p-6">
                    <div className="rounded-3xl bg-slate-50 border border-slate-200 p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="grid place-items-center h-12 w-12 rounded-2xl bg-brand-blue/10 text-brand-blue">
                          <Network size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-brand-navy">Core Network Diagram</p>
                          <p className="text-xs text-gray-500">Topology layout for a stable foundation</p>
                        </div>
                      </div>
                      <div className="relative h-32 rounded-3xl bg-white border border-slate-200 p-4 mb-4">
                        <div className="absolute top-1/3 left-4 h-3 w-3 rounded-full bg-brand-blue" />
                        <div className="absolute top-1/3 left-16 h-0.5 w-20 bg-brand-blue/50" />
                        <div className="absolute top-1/3 left-40 h-3 w-3 rounded-full bg-brand-blue" />
                        <div className="absolute bottom-7 left-16 h-0.5 w-20 bg-brand-blue/50" />
                        <div className="absolute bottom-10 left-9 h-12 w-14 rounded-2xl border border-brand-blue/20 bg-brand-blue/5 flex items-center justify-center text-[10px] text-brand-blue">
                          Core
                        </div>
                        <div className="absolute bottom-7 left-36 h-10 w-16 rounded-2xl border border-brand-blue/20 bg-brand-blue/5 flex items-center justify-center text-[10px] text-brand-blue">
                          Edge
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-[10px] text-gray-500">
                        <span className="rounded-full bg-brand-blue/10 px-2 py-1">LAN</span>
                        <span className="rounded-full bg-brand-blue/10 px-2 py-1">Routing</span>
                        <span className="rounded-full bg-brand-blue/10 px-2 py-1">Security</span>
                      </div>
                    </div>
                  </div>
                )}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: expandedCore ? 1 : 0, height: expandedCore ? "auto" : 0 }}
                  transition={{ duration: 0.28 }}
                  className="overflow-hidden"
                >
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {coreItems.sort().map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="text-brand-blue mt-0.5" size={16} />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="bg-brand-blue/5 rounded-lg p-4">
                      <p className="text-brand-navy font-semibold text-sm text-center">
                        Outcome: Clear network roadmap and foundational guidance
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Growth Tier */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`bg-white rounded-xl shadow-lg border-2 border-brand-blue/20 hover:shadow-2xl transition-all relative ${
                  expandedGrowth ? "h-auto" : "h-[360px]"
                }`}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-blue text-white px-4 py-1 rounded-full text-xs font-bold">POPULAR</span>
                </div>
                <div
                  className="bg-gradient-to-r from-brand-blue/10 to-brand-blue/5 p-6 rounded-t-xl border-b border-brand-blue/20 cursor-pointer"
                  onClick={() => setExpandedGrowth(!expandedGrowth)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="text-xl font-bold text-brand-navy mb-2">Growth Tier</h5>
                      <p className="text-gray-600 text-sm">Complete network implementation with structured design and optimization</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedGrowth ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <ChevronDown className="text-brand-blue" size={24} />
                    </motion.div>
                  </div>
                </div>
                {!expandedGrowth && (
                  <div className="p-6">
                    <div className="rounded-3xl bg-slate-50 border border-slate-200 p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="grid place-items-center h-12 w-12 rounded-2xl bg-brand-blue/10 text-brand-blue">
                          <Cpu size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-brand-navy">Growth System Diagram</p>
                          <p className="text-xs text-gray-500">Service delivery and optimization flow</p>
                        </div>
                      </div>
                      <div className="relative h-32 rounded-3xl bg-white border border-slate-200 p-4 mb-4">
                        <div className="absolute top-5 left-5 h-8 w-8 rounded-2xl bg-brand-blue/5 border border-brand-blue/20 flex items-center justify-center text-brand-blue text-xs">
                          App
                        </div>
                        <div className="absolute top-6 left-20 h-0.5 w-24 bg-brand-blue/50" />
                        <div className="absolute top-5 left-44 h-8 w-8 rounded-2xl bg-brand-blue/5 border border-brand-blue/20 flex items-center justify-center text-brand-blue text-xs">
                          DB
                        </div>
                        <div className="absolute top-20 left-24 h-0.5 w-24 bg-brand-blue/50" />
                        <div className="absolute bottom-6 left-20 h-8 w-8 rounded-2xl bg-brand-blue/5 border border-brand-blue/20 flex items-center justify-center text-brand-blue text-xs">
                          Net
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-[10px] text-gray-500">
                        <span className="rounded-full bg-brand-blue/10 px-2 py-1">Wi-Fi</span>
                        <span className="rounded-full bg-brand-blue/10 px-2 py-1">VLAN</span>
                        <span className="rounded-full bg-brand-blue/10 px-2 py-1">Monitoring</span>
                      </div>
                    </div>
                  </div>
                )}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: expandedGrowth ? 1 : 0, height: expandedGrowth ? "auto" : 0 }}
                  transition={{ duration: 0.28 }}
                  className="overflow-hidden"
                >
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {growthItems.sort().map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="text-brand-blue mt-0.5" size={16} />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="bg-brand-blue/10 rounded-lg p-4">
                      <p className="text-brand-navy font-semibold text-sm text-center">
                        Outcome: A fully deployed, optimized network ready for business operations
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Elite Tier */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all ${
                  expandedElite ? "h-auto" : "h-[360px]"
                }`}
              >
                <div
                  className="bg-gradient-to-r from-brand-navy/5 to-brand-blue/10 p-6 rounded-t-xl border-b border-brand-blue/20 cursor-pointer"
                  onClick={() => setExpandedElite(!expandedElite)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="text-xl font-bold text-brand-navy mb-2">Elite Tier</h5>
                      <p className="text-gray-600 text-sm">Enterprise-grade architecture with advanced automation, security, and global scalability</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedElite ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <ChevronDown className="text-brand-blue" size={24} />
                    </motion.div>
                  </div>
                </div>
                {!expandedElite && (
                  <div className="p-6">
                    <div className="rounded-3xl bg-slate-50 border border-slate-200 p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="grid place-items-center h-12 w-12 rounded-2xl bg-brand-blue/10 text-brand-blue">
                          <ShieldCheck size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-brand-navy">Elite Architecture Diagram</p>
                          <p className="text-xs text-gray-500">Enterprise scale, redundancy, and security</p>
                        </div>
                      </div>
                      <div className="relative h-32 rounded-3xl bg-white border border-slate-200 p-4 mb-4">
                        <div className="absolute top-5 left-5 h-9 w-9 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue text-[10px]">
                          HQ
                        </div>
                        <div className="absolute top-7 left-20 h-0.5 w-28 bg-brand-blue/50" />
                        <div className="absolute top-5 left-52 h-9 w-9 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue text-[10px]">
                          DC
                        </div>
                        <div className="absolute top-20 left-30 h-0.5 w-28 bg-brand-blue/50" />
                        <div className="absolute bottom-6 left-28 h-9 w-9 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue text-[10px]">
                          NOC
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-[10px] text-gray-500">
                        <span className="rounded-full bg-brand-blue/10 px-2 py-1">Security</span>
                        <span className="rounded-full bg-brand-blue/10 px-2 py-1">Redundancy</span>
                        <span className="rounded-full bg-brand-blue/10 px-2 py-1">Global</span>
                      </div>
                    </div>
                  </div>
                )}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: expandedElite ? 1 : 0, height: expandedElite ? "auto" : 0 }}
                  transition={{ duration: 0.28 }}
                  className="overflow-hidden"
                >
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {eliteItems.sort().map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="text-brand-blue mt-0.5" size={16} />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="bg-brand-navy/10 rounded-lg p-4">
                      <p className="text-brand-navy font-semibold text-sm text-center">
                        Outcome: Mission-critical network infrastructure with global reach and enterprise excellence
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Engagement Models */}
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-brand-navy mb-4 text-center">Engagement Models</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mb-4">
                  <Zap size={24} />
                </div>
                <h5 className="text-lg font-bold text-brand-navy mb-3">One-off Projects</h5>
                <p className="text-gray-600 text-sm mb-4">Short-term, solution-focused engagements</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Network setup</li>
                  <li>• VLAN configuration</li>
                  <li>• Troubleshooting</li>
                  <li>• Infrastructure audits</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h5 className="text-lg font-bold text-brand-navy mb-3">Ongoing Support</h5>
                <p className="text-gray-600 text-sm mb-4">Continuous monitoring, maintenance and optimization to ensure stability, performance and security over time</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mb-4">
                  <Lightbulb size={24} />
                </div>
                <h5 className="text-lg font-bold text-brand-navy mb-3">Consulting Engagements</h5>
                <p className="text-gray-600 text-sm mb-4">Strategic planning and system improvement</p>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-8 space-y-3">
            <span className="text-brand-blue font-bold tracking-widest text-xs uppercase">
              Industries We Support
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy">
              Enterprise-Grade Solutions for Every Sector
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We understand enterprise-grade environments and we adapt solutions based on operational risk and scale
            </p>
          </div>

          {/* Industries Grid */}
          <div className="space-y-16">
            {/* SMEs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                  <Code2 className="text-white" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-brand-navy">Small and Medium Enterprises (SMEs)</h4>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Practical cost-effective networking solutions designed for growing businesses
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Affordable network design and deployment</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Scalable infrastructure planning</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Remote access and cloud connectivity</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Ongoing optimization support options</span>
                </div>
              </div>
            </motion.div>

            {/* Telecommunications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-r from-brand-blue/5 to-white rounded-xl p-8 border border-brand-blue/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                  <Network className="text-white" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-brand-navy">Telecommunications and Service Providers</h4>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Designed for high-performance and carrier-grade environments where uptime and efficiency are critical
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Network design and backbone optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Routing and switching architecture support</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Infrastructure troubleshooting</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Performance tuning and scalable connectivity solutions</span>
                </div>
              </div>
            </motion.div>

            {/* Legal and Professional Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-white" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-brand-navy">Legal and Professional Services</h4>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Focused on secure, stable systems that protect sensitive data and ensure uninterrupted workflows
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Secure network architecture and access control</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Reliable communication and file sharing systems</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Risk-aware infrastructure design</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Support for cloud-based legal tools and platforms</span>
                </div>
              </div>
            </motion.div>

            {/* Education Institutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-brand-blue/5 to-white rounded-xl p-8 border border-brand-blue/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-brand-navy">Education Institutions</h4>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Supporting digital learning environments with reliable and manageable network systems
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Campus-wide network and Wi-Fi deployment</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Secure access for staff and students</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Centralized network management solutions</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Scalable infrastructure for growing institutions</span>
                </div>
              </div>
            </motion.div>

            {/* Healthcare and Medical */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-white" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-brand-navy">Healthcare and Medical Environments</h4>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Supporting critical environments where network stability and security directly impact operations
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Secure and segmented network design</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Reliable connectivity for systems and records</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">High-availability infrastructure planning</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Focus on operational continuity and data protection</span>
                </div>
              </div>
            </motion.div>

            {/* Enterprise and Corporate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-brand-navy/5 to-white rounded-xl p-8 border border-brand-navy/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center">
                  <Globe className="text-white" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-brand-navy">Enterprise and Corporate Organizations</h4>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                We support corporate environments that depend on stable, secure, and scalable network infrastructure for daily operations
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Branch connectivity and enterprise networking</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Secure internal communications systems</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-blue mt-0.5" size={18} />
                  <span className="text-gray-700">Infrastructure scaling and performance optimization</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-blue font-bold tracking-widest text-xs uppercase">
              Network Insights
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy">
              Real-World Network Wisdom
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Practical insights drawn from networking, cybersecurity, and infrastructure best practices.
            </p>
          </div>

          {/* Insights Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Insight 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-navy mb-3">
                    Networks rarely fail in one place—they fail in chains
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Most outages don't come from a single device failing. They come from a chain reaction: a small misconfiguration in one segment triggers congestion, routing instability, or authentication issues elsewhere. The real problem is usually dependency, not the device itself.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Insight 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-brand-blue/5 to-white rounded-xl p-6 border border-brand-blue/20 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-navy mb-3">
                    "Stable" networks are usually just well-controlled ones
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    There is no such thing as a perfect network. What people call stability is actually strict control over changes, configurations, and access. The more disciplined the change management, the more "stable" the network appears.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Insight 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-navy mb-3">
                    Wi-Fi problems are often design problems in disguise
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    When users complain about Wi-Fi, the instinct is to blame access points. In reality, the issue is often coverage planning, interference, or poor channel design—not the hardware itself.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Insight 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-brand-blue/5 to-white rounded-xl p-6 border border-brand-blue/20 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-navy mb-3">
                    Most network upgrades fail because they don't fix the architecture
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Upgrading routers, switches, or bandwidth doesn't solve structural issues. If the underlying architecture is weak, the same problems return at a larger scale.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Insight 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-navy mb-3">
                    Security is weakest at the points people trust the most
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    The most dangerous vulnerabilities are often not external attacks, but trusted internal access points—shared credentials, overly broad permissions, and unmanaged admin access.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Insight 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-brand-blue/5 to-white rounded-xl p-6 border border-brand-blue/20 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-navy mb-3">
                    Monitoring tools don't improve networks—they expose them
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Monitoring systems don't fix anything on their own. They simply reveal how fragile or stable a network already is. The real improvement comes from what you do after you see the data.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Insight 7 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">7</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-navy mb-3">
                    Small networks don't stay small for long in practice
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Even "simple" business networks grow unpredictably. Systems designed without scalability in mind often require complete redesign within a short time of expansion.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Insight 8 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-brand-blue/5 to-white rounded-xl p-6 border border-brand-blue/20 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">8</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-navy mb-3">
                    Most downtime is caused by human change, not technical failure
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    The majority of real-world outages come from configuration changes, updates, or manual interventions—not spontaneous hardware failure.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Founder Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-brand-navy to-brand-blue rounded-xl p-8 text-white"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-6">
                  <h4 className="text-2xl font-bold mb-4">About the Founder</h4>
                  <p className="text-white/90 text-lg leading-relaxed">
                    The insights shared here are drawn from practical experience in networking, cybersecurity, cloud technologies, and IT infrastructure. They are designed to help businesses make informed technology decisions, strengthen security, and build reliable, scalable IT environments.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-bold">Shawn Taruvinga</p>
                  <p className="text-brand-blue font-semibold">Founder & Network Consultant</p>
                  <p className="text-white/80">
                  Shawn is the founder of ArdenzaTech, an IT consulting company focused on delivering secure, scalable, and innovative technology solutions. His areas of interest include enterprise networking, cybersecurity, cloud solutions, and IT infrastructure optimization. Through ArdenzaTech, he works to help organizations leverage technology to improve performance, enhance security, and support long-term growth
                  </p>
                </div>
              </div>
              
              {/* Founder Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={founderImage}
                    alt="Shawn Taruvinga - Founder"
                    className="w-64 h-64 object-cover rounded-xl border-2 border-white/20 shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-brand-blue rounded-full p-3">
                    <ShieldCheck className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
      
      
      
      {/* Contact Us Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-blue font-bold tracking-widest text-xs uppercase">
              Contact Us
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy">
              Let's Start the Conversation
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We look forward to understanding your requirements and delivering structured, reliable IT solutions aligned with your operational needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h4 className="text-xl font-bold text-brand-navy mb-6">Get in Touch</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-900 font-medium">info@ardenzatech.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-900 font-medium">+1 (505) 227-7705</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-900 font-medium">Albuquerque, New Mexico, USA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Contact */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h4 className="text-lg font-bold text-brand-navy mb-4">Direct Contact</h4>
                <div className="space-y-3">
                  <p className="text-xl font-bold text-brand-navy">Shawn Taruvinga</p>
                  <p className="text-brand-blue font-semibold">Founder and Network Consultant</p>
                  <p className="text-gray-600 text-sm">Ardenza Tech</p>
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <Mail className="text-brand-blue" size={16} />
                      <span className="text-gray-700 text-sm">shawn@ardenzatech.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action Note */}
              <div className="bg-brand-blue/10 rounded-lg p-4 border border-brand-blue/20">
                <p className="text-brand-navy font-semibold text-sm text-center">
                  "All engagements are scoped and priced based on technical requirements, complexity, and business criticality."
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h4 className="text-xl font-bold text-brand-navy mb-6">Send Us a Message</h4>
                {successMessage && (
  <div className="mb-4 p-4 rounded-lg bg-green-100 text-green-800 border border-green-300">
    {successMessage}
  </div>
)}

{errorMessage && (
  <div className="mb-4 p-4 rounded-lg bg-red-100 text-red-800 border border-red-300">
    {errorMessage}
  </div>
)}
                <form onSubmit={handleSubmit}
                 className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
                        placeholder="John Doe"
                        value={formData.name}
  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
                        placeholder="john@example.com"
                        value={formData.email}
  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company [optional]
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
                        placeholder="Your Company Name"
                        value={formData.company}
  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone [optional]
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Select a service</option>
                      <option value="health-check">Network health check</option>
                      <option value="design-implementation">Network design and implementation</option>
                      <option value="troubleshooting-optimization">Troubleshooting and optimization</option>
                      <option value="infrastructure-design">Infrastructure design</option>
                      <option value="security-review">Security review</option>
                      <option value="ongoing-support">Ongoing support</option>
                      <option value="consultation">Consultation</option>
                      <option value='other'>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors resize-vertical"
                      placeholder="Please describe your project requirements..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level *
                    </label>
                    <div className="flex gap-4">
                      {[
                        { value: 'low', label: 'Low', color: 'green' },
                        { value: 'medium', label: 'Medium', color: 'yellow' },
                        { value: 'high', label: 'High', color: 'red' }
                      ].map((level) => (
                        <label key={level.value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="urgency"
                            value={level.value}
                            required
                            className="w-4 h-4 text-brand-blue focus:ring-brand-blue"
                          />
                          <span className="text-sm font-medium text-gray-700">{level.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-brand-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-blue/20"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-deep text-white/70 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={ardenzaTechLogo}
                alt="Ardenza - Tech Logo"
                className="h-12 w-auto object-contain drop-shadow-lg filter brightness-120 contrast-120 saturate-120 relative z-10"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Delivering expert IT consulting and network solutions with
              excellence and integrity across global markets.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/shawn-taruvinga-030988335"
                target="_blank"
                rel="noreferrer noopener"
                className="text-current"
              >
                <Linkedin className="hover:text-brand-blue cursor-pointer transition-colors" />
              </a>
              <a
                href="https://x.com/ShawnTR4304"
                target="_blank"
                rel="noreferrer noopener"
                className="text-current"
              >
                <Twitter className="hover:text-brand-blue cursor-pointer transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61589702519154"
                target="_blank"
                rel="noreferrer noopener"
                className="text-current"
              >
                <Facebook className="hover:text-brand-blue cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Quick Links</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="hover:text-brand-blue transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-blue transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-blue transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-brand-blue transition-colors">
                  Insights
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-blue transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Services</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-brand-blue transition-colors">
                  Network Design & Architecture
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-blue transition-colors">
                  Network Security & Automation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-blue transition-colors">
                  Cloud & Hybrid Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-blue transition-colors">
                  Infrastructure Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-blue transition-colors">
                  IT Strategy & Advisory
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Contact Us</h5>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-brand-blue shrink-0" size={16} />
                <span>Albuquerque, New Mexico, USA</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-brand-blue shrink-0" size={16} />
                <span>info@ardenzatech.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-brand-blue shrink-0" size={16} />
                <span>+1 (505) 227-7705</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Ardenza Tech LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
