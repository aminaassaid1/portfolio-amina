import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import Slider from 'react-slick';

import sushiProImage from 'figma:asset/760aaa914b32198ff8cc7c10b942acd399f838b4.png';
import talensioImage from 'figma:asset/2bf43e0eb00df15be7d881e3dc771482a4a20411.png';

export function ProjectGallery() {
  const ref = useRef(null);
  const sliderRef = useRef<any>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: 'Sushi Pro',
      category: 'WordPress Development',
      description: 'Sushi restaurant website',
      image: sushiProImage,
      tags: ['WordPress'],
      link: 'http://sushipro.ma/',
      details: {
        client: 'Sushi Pro Restaurant',
        description: 'A beautiful, fully responsive sushi restaurant website that showcases Japanese cuisine elegantly. Built with a custom WordPress theme and WooCommerce integration for seamless online orders. Features include an intuitive online menu browsing system, integrated reservation system with calendar functionality, customer review integration, and mobile optimization to capture on-the-go customers. The website successfully increased online reservations by 150% and boosted online orders by 40% within the first month, while mobile traffic grew by 65%.',
        technologies: ['WordPress'],
      },
    },
    {
      title: 'Dépannage Auto 24/7',
      category: 'WordPress Development',
      description: 'Auto towing service platform',
      image: 'https://images.unsplash.com/photo-1742069028875-93c524b6fa95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwdG93aW5nJTIwc2VydmljZSUyMHRydWNrfGVufDF8fHx8MTc2MzAzNjEzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['WordPress'],
      link: 'https://depannauto247.fr/',
      details: {
        client: 'Dépannage Auto 24/7',
        description: 'A comprehensive auto towing service platform designed for 24/7 emergency roadside assistance. Built with custom WordPress development featuring emergency request forms, Google Maps integration for real-time vehicle tracking, automated SMS notifications via Twilio, and a dispatcher dashboard for efficient service coordination. The platform achieved complete 24/7 operational reliability, handles over 200 emergency requests monthly, reduced average response time by 35%, and maintains a 92% customer satisfaction rating.',
        technologies: ['WordPress'],
      },
    },
    {
      title: 'Talensio',
      category: 'WordPress Development',
      description: 'Professional training center website',
      image: talensioImage,
      tags: ['WordPress'],
      link: 'https://talensio.ma/',
      details: {
        client: 'Talensio Training Center',
        description: 'A modern professional training center website featuring a comprehensive e-learning platform. Implemented using WordPress with LearnDash LMS for course management, custom user roles for students and instructors, advanced course catalog with filtering capabilities, and integrated payment processing through WooCommerce. The platform includes a student portal for progress tracking and an automated certification system. Successfully enrolled over 2,000 students in the first year, launched 10+ professional training courses, achieved an 85% course completion rate, and saves 20 hours per week through automated certification generation.',
        technologies: ['WordPress'],
      },
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    arrows: false,
  };

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

        {/* Carousel Container */}
        <div className="relative px-4 md:px-16">
          {/* Custom Navigation Buttons */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-cyan-500/50 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-all shadow-lg shadow-cyan-500/20 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-cyan-500/50 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-all shadow-lg shadow-cyan-500/20 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel */}
          <Slider ref={sliderRef} {...sliderSettings}>
            {projects.map((project, index) => (
              <div key={index} className="px-4">
                <ProjectCard 
                  project={project} 
                  index={index} 
                  isInView={isInView}
                  onViewDetails={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </Slider>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
            View All Projects
          </Button>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-cyan-400">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                {/* Project Image */}
                <div className="relative h-64 rounded-xl overflow-hidden">
                  {typeof selectedProject.image === 'string' ? (
                    <ImageWithFallback
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>

                {/* Project Info */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 inline-block">
                  <Users className="text-cyan-400 mb-2" size={20} />
                  <p className="text-xs text-slate-400">Client</p>
                  <p style={{ color: 'white' }} className="text-sm">{selectedProject.details.client}</p>
                </div>

                {/* Project Description */}
                <div>
                  <h4 className="mb-3 text-cyan-400">Project Overview</h4>
                  <p className="text-slate-300 leading-relaxed">{selectedProject.details.description}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.technologies.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <Button
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 hover:text-white"
                    onClick={() => window.open(selectedProject.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Project
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Custom Carousel Styles */}
      <style>{`
        .slick-dots {
          bottom: -50px;
        }
        .slick-dots li button:before {
          color: #22d3ee;
          font-size: 10px;
        }
        .slick-dots li.slick-active button:before {
          color: #22d3ee;
        }
        .slick-track {
          display: flex !important;
          gap: 0;
        }
        .slick-slide {
          height: inherit !important;
          float: none !important;
        }
        .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, index, isInView, onViewDetails }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all h-full flex flex-col">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="h-full"
          >
            {typeof project.image === 'string' ? (
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <motion.button
              onClick={onViewDetails}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/50"
            >
              <ExternalLink size={20} />
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-cyan-400 text-sm mb-2">{project.category}</p>
          <h3 className="mb-2">{project.title}</h3>
          <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <Button
            onClick={onViewDetails}
            variant="outline"
            className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
}