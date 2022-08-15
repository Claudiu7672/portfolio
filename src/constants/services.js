import React from "react"
import { FaCode, FaSketch } from "react-icons/fa"
import { GrShieldSecurity } from "react-icons/gr"

const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Bringing streamlined and in the same time authentic web applications into life, using cutting edge technologies like React, Node.js, MongoDB and GraphQL`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `Designing personalities for web applications. Every web app has a personality that, in the end, is an expression of my client’s vision.`,
  },
  {
    id: 3,
    icon: <GrShieldSecurity className="service-icon" />,
    title: "security",
    text: `I use my experience as a cybersecurity engineer when building and testing web applications, thus making them less prone to attack.`,
  },
]

export default services
