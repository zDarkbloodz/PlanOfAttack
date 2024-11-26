import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CyberCard, CyberButton, CyberTable } from './CyberCard';

const PlanOfAttack = () => {
  const [activeWeek, setActiveWeek] = useState(1);
  const [showFullDetails, setShowFullDetails] = useState(false);

  const weeks = [
    {
      id: 1,
      name: "Week 1",
      color: "from-cyan-600 to-blue-700",
      period: "Nov 24 – Nov 30",
      tasks: [
        "Submit Assignment 1.1 (Plan of Attack) by Nov 30",
        "Research and submit Assignment 1.2 (Industry Websites)",
        "Watch Welcome Video and review materials"
      ],
      commitments: [
        "Work (Mon-Wed, 3 pm - 2 am)",
        "Gym (Mon-Wed, 2 am - 4 am)",
        "Dinner with friends and family on Thursday",
        "Prep for upcoming assigments on Friday",
        "Sunday rest day"
      ]
    },
    {
      id: 2,
      color: "from-purple-800 to-cyan-800",
      name: "Week 2",
      period: "Dec 1 – Dec 7",
      tasks: [
        "Submit Assignment 2.1 (Industry Growth)",
        "Complete Assignment 2.2 (Industry Terms)",
        "Research and submit Assignment 2.3 (Industry Jobs)"
      ],
      commitments: [
        "Work (Mon-Thu, 3 pm - 2 am)",
        "Gym (Mon-Thu, 2 am - 4 am)",
        "Relaxing Coding tutorials (Fri-Sat)"
      ]
    },
    {
      id: 3,
      color: "from-blue-800 to-green-600",
      name: "Week 3",
      period: "Dec 8 – Dec 14",
      tasks: [
        "Submit Assignment 3.0 (Networking Plan)",
        "Complete Assignment 3.1 (Mission Statement)",
        "Create and submit Assignment 3.2 (Know Your Program)"
      ],
      commitments: [
        "Work (Mon-Thu, 3 pm - 2 am)",
        "Gym (Mon-Thu, 2 am - 4 am)",
        "Gaming with friends on Sunday night"
      ]
    },
    {
      id: 4,
      color: "from-green-600 to-yellow-800",
      name: "Week 4",
      period: "Dec 15 – Dec 19",
      tasks: [
        "Submit Assignment 4.0 (Reflection Video)",
        "Complete Assignment 4.1 (Professional Spotlight)",
        "Final course wrap-up"
      ],
      commitments: [
        "Work (Mon-Thu, 3 pm - 2 am)",
        "Gym (Mon-Thu, 2 am - 4 am)",
        "Celebrate completion of the course on Dec 19!"
      ]
    }
  ];

  const assignments = [
    { id: "1.1", name: "Plan of Attack", estTime: "2 hours", actualTime: "4 hours", notes: "Create detailed schedule" },
    { id: "1.2", name: "Industry Websites", estTime: "3 hours", actualTime: "3 hours", notes: "Research websites" },
    { id: "2.1", name: "Industry Growth", estTime: "2.5 hours", actualTime: "", notes: "Post & replies" },
    { id: "2.2", name: "Portfolio Competency", estTime: "1.5 hours", actualTime: "", notes: "Define terms" },
    { id: "2.3", name: "Industry Jobs", estTime: "2 hours", actualTime: "", notes: "Research careers" },
    { id: "3.0", name: "Networking Plan", estTime: "2 hours", actualTime: "", notes: "Strategy development" },
    { id: "3.1", name: "Mission Statement", estTime: "2 hours", actualTime: "", notes: "Write statement" },
    { id: "3.2", name: "Know Your Program", estTime: "3 hours", actualTime: "", notes: "Create video" },
    { id: "4.0", name: "Reflection Video", estTime: "2 hours", actualTime: "", notes: "Record reflection" },
    { id: "4.1", name: "Professional Spotlight", estTime: "2 hours", actualTime: "", notes: "Research leader" }
  ];

  return (
    <div className="min-h-screen text-cyan-400 p-6">
      <motion.div 
        className="max-w-7xl mx-auto relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Enhanced Header */}
        <CyberCard className="mb-8">
          <motion.h1 
            className="text-4xl font-bold cyber-text glitch"
            data-text="PLAN_OF_ATTACK.exe"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="cyber-box p-6">
              <h1 className="cyber-text-glow text-4xl font-bold">
              PLAN_OF_ATTACK.exe
                </h1>
            </div>
          </motion.h1>
          <p className="text-sm text-cyan-300 mt-2 cyber-text">
            OPERATIONAL_PERIOD: NOV.24.2024 - DEC.19.2024
          </p>
        </CyberCard>

        {/* Enhanced Credentials and System Access */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <CyberCard>
            <h2 className="text-2xl font-bold mb-4 text-cyan-300 cyber-text">USER_CREDENTIALS</h2>
            <div className="space-y-2">
              <p><span className="text-cyan-600">[NAME]</span> Eric J. Reyes Rivera</p>
              <p><span className="text-cyan-600">[ID]</span> 0005371955</p>
              <p><span className="text-cyan-600">[SECTOR]</span> TEM1001-O, Section 16</p>
              <p><span className="text-cyan-600">[SPECIALIZATION]</span> Computer Science with AI Concentration</p>
              <p><span className="text-cyan-600">[CONTACT]</span> zplndererz@gmail.com</p>
            </div>
          </CyberCard>

          <CyberCard>
            <h2 className="text-2xl font-bold mb-4 text-cyan-300 cyber-text">SYSTEM_ACCESS</h2>
            <div className="space-y-2">
              <p><span className="text-cyan-600">[PRIMARY_TERMINAL]</span> MacBook</p>
              <p><span className="text-cyan-600">[BACKUP_SYSTEM]</span> Dell Laptop</p>
              <p><span className="text-cyan-600">[NETWORK]</span> Home WiFi + Mobile Hotspot</p>
              <p><span className="text-cyan-600">[AVAILABILITY]</span> 24/7</p>
              <p><span className="text-cyan-600">[BACKUP_ACCESS]</span> Library Hours</p>
            </div>
          </CyberCard>
        </motion.div>

        {/* Enhanced Week Selection */}
        <div className="mb-8">
          <div className="flex space-x-2 mb-4 overflow-x-auto">
            {weeks.map((week) => (
              <CyberButton
                key={week.id}
                onClick={() => setActiveWeek(week.id)}
                active={activeWeek === week.id}
                className={`bg-gradient-to-r ${week.color}`}
              >
                {week.name}
              </CyberButton>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {weeks.map((week) => (
              week.id === activeWeek && (
                <CyberCard key={week.id}>
                  <motion.h3 
                    className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 week-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {week.period}
                  </motion.h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-cyan-300 cyber-text">MISSION_OBJECTIVES</h4>
                      <ul className="space-y-2">
                        {week.tasks.map((task, index) => (
                          <motion.li 
                            key={index}
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <span className="text-cyan-600">►</span>
                            <span>{task}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium text-cyan-300 cyber-text">PERSONAL_PROTOCOLS</h4>
                      <ul className="space-y-2">
                        {week.commitments.map((commitment, index) => (
                          <motion.li 
                            key={index}
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <span className="text-cyan-600">►</span>
                            <span>{commitment}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CyberCard>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Enhanced Assignment Matrix */}
        <CyberCard className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300 cyber-text">MISSION_PARAMETERS</h2>
          <CyberTable 
            headers={["ID", "OBJECTIVE", "EST_TIME", "ACTUAL", "NOTES"]}
            data={assignments}
          />
        </CyberCard>

        {/* Enhanced Daily Runtime Schedule */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <CyberCard>
            <h2 className="text-2xl font-bold mb-4 text-cyan-300 cyber-text">DAILY_RUNTIME</h2>
            <div className="space-y-3">
              <motion.div 
                className="flex justify-between items-center p-2 border border-cyan-700 rounded hologram"
                whileHover={{ scale: 1.02 }}
              >
                <span>03:00 pm - 02:00 am</span>
                <span className="text-yellow-400">WORK_SEQUENCE</span>
              </motion.div>
              <motion.div 
                className="flex justify-between items-center p-2 border border-cyan-700 rounded hologram"
                whileHover={{ scale: 1.02 }}
              >
                <span>02:00 am - 04:00 am</span>
                <span className="text-green-400">PHYSICAL_MAINTENANCE</span>
              </motion.div>
              <motion.div 
                className="flex justify-between items-center p-2 border border-cyan-700 rounded hologram"
                whileHover={{ scale: 1.02 }}
              >
                <span>POST_SLEEP</span>
                <span className="text-blue-400">STUDY_PROTOCOL</span>
              </motion.div>
            </div>
          </CyberCard>

          <CyberCard>
            <h2 className="text-2xl font-bold mb-4 text-cyan-300 cyber-text">PERSONAL_INTEGRATION</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-cyan-400 mb-2 cyber-text">HEALTH_PROTOCOL</h3>
                <p>Mon-Thu schedule (02:00 am - 04:00 am)</p>
                <p>Flexible for priority assignments</p>
              </div>
              <div>
                <h3 className="text-cyan-400 mb-2 cyber-text">SOCIAL_PROTOCOL</h3>
                <p>Saturday: Friends & Family integration</p>
                <p>Sunday: Gaming network maintenance</p>
              </div>
            </div>
          </CyberCard>
        </div>

        {/* Enhanced System Notes */}
        <CyberCard>
          <h2 className="text-2xl font-bold mb-4 text-cyan-300 cyber-text">SYSTEM_NOTES</h2>
          <p className="text-cyan-400 font-mono mb-4">
            Plan will be maintained on local system (desktop) and cloud backup (Google Drive).
            Physical backup will be displayed at primary workstation for constant reference.
            In case of emergency, I will have a backup being host by vercel server.
          </p>
          <motion.button
            onClick={() => setShowFullDetails(!showFullDetails)}
            className="text-cyan-500 hover:text-cyan-400 underline cyber-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showFullDetails ? 'MINIMIZE_DETAILS' : 'EXPAND_DETAILS'}
          </motion.button>
          <AnimatePresence>
            {showFullDetails && (
              <motion.div 
                className="mt-4 space-y-2 text-cyan-300"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <p>► Complete assignments post-physical maintenance</p>
                <p>► Utilize weekends for major projects</p>
                <p>► Maintain regular system breaks during study protocols</p>
              </motion.div>
            )}
          </AnimatePresence>
        </CyberCard>
      </motion.div>
    </div>
  );
};

export default PlanOfAttack;