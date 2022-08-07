import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaTwitterSquare,
} from "react-icons/fa"
import { RiInstagramLine, RiInstagramFill } from "react-icons/ri"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/claudiu.popa.716",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/popaclaudiu/",
  },
  {
    id: 3,
    icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
    url: "https://dribbble.com/claudiufpopa29",
  },
  {
    id: 4,
    icon: <RiInstagramLine className="social-icon"></RiInstagramLine>,
    url: "https://www.instagram.com/claudiup_15/",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/Claudiufpopa",
  },
]

export default data
