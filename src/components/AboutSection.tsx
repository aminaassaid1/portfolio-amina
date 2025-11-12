import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Code, Briefcase, Users, Award, Sparkles } from 'lucide-react';
import aboutImage from 'figma:asset/a1f028030c8df2875c509c92bbbd721e12dfd2f6.png';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Code, label: 'Projects Completed', value: 60, suffix: '+' },
    { icon: Award, label: 'Years Experience', value: 2, suffix: '+' },
    { icon: Users, label: 'Happy Clients', value: 40, suffix: '+' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-4 md:py-28 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full mb-6"
          >
            <Sparkles className="text-cyan-400" size={16} />
            <span className="text-sm text-cyan-400">About Me</span>
          </motion.div>
          
          <h2 className="mb-6">
            Passionate About <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Creating Digital Experiences</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            I'm a full-stack developer with a passion for building beautiful, functional web applications 
            that make a difference. Let me bring your vision to life with clean code and creative solutions.
          </p>
        </motion.div>

        {/* Two Column Layout: Image & Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              
              {/* Image container */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-500">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={aboutImage}
                    alt="Developer at work"
                    className="w-full h-auto"
                  />
                </motion.div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -top-4 -left-4 w-24 h-24 grid grid-cols-4 gap-2 opacity-50">
                {[...Array(16)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                    className="w-2 h-2 bg-cyan-400 rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="relative pl-6 border-l-4 border-gradient-to-b from-cyan-500 to-purple-500"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-500" />
                <h3 className="mb-2">My Journey</h3>
                <p className="text-slate-400">
                  With 2+ years of experience in web development, I've worked on diverse projects 
                  ranging from e-commerce platforms to custom CMS solutions. Every project is an 
                  opportunity to learn and grow.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="relative pl-6"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500" />
                <h3 className="mb-2">What I Do</h3>
                <p className="text-slate-400">
                  I specialize in WordPress development, front-end engineering, and SEO optimization. 
                  I combine technical expertise with creative problem-solving to deliver exceptional results.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="relative pl-6"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-cyan-500" />
                <h3 className="mb-2">My Approach</h3>
                <p className="text-slate-400">
                  I believe in writing clean, maintainable code and creating user experiences that delight. 
                  Every line of code is crafted with attention to detail and best practices in mind.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ 
  icon: Icon, 
  label, 
  value, 
  suffix, 
  index, 
  isInView 
}: { 
  icon: any; 
  label: string; 
  value: number; 
  suffix: string; 
  index: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(value * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 + 0.6, duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
      
      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="relative w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30"
        >
          <Icon className="text-white" size={24} />
        </motion.div>
        
        <div className="relative mb-2">
          <span className="text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {count}{suffix}
          </span>
        </div>
        
        <p className="text-slate-400 text-sm relative">{label}</p>
      </div>
    </motion.div>
  );
}
