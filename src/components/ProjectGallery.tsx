import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzYyODcxOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#',
    },
    {
      title: 'Mobile Fitness App',
      category: 'Mobile Development',
      description: 'Cross-platform fitness tracking app with workout plans, progress tracking, and social features.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyODg2Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React Native', 'Firebase', 'Redux'],
      link: '#',
      github: '#',
    },
    {
      title: 'UI/UX Design System',
      category: 'Design',
      description: 'Comprehensive design system with reusable components, documentation, and Figma integration.',
      image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWdufGVufDF8fHx8MTc2Mjk1MDgzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Figma', 'Tailwind', 'Storybook'],
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 px-4 md:px-6 lg:px-8 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Recent Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Check out some of my latest work. Each project represents a unique challenge 
            and showcases different skills and technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isInView={isInView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isInView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="h-full"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <motion.a
              href={project.link}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white hover:bg-cyan-600 transition-colors"
            >
              <ExternalLink size={20} />
            </motion.a>
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white hover:bg-slate-600 transition-colors"
            >
              <Github size={20} />
            </motion.a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-cyan-400 text-sm mb-2">{project.category}</p>
          <h3 className="mb-2">{project.title}</h3>
          <p className="text-slate-400 text-sm mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}