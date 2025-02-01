import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Driver Drowsiness Detection",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Developed a deep learning model for detecting driver drowsiness to enhance road safety.",
  },
  {
    id: 2,
    title: "Plant Disease Detection",
    img: "https://images.pexels.com/photos/30438530/pexels-photo-30438530/free-photo-of-close-up-of-green-leaves-with-dark-spots-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Implemented a machine learning model to identify plant diseases, aiding in early diagnosis and prevention.",
  },
  {
    id: 3,
    title: "Lung Disease Prediction",
    img: "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Designed a predictive AI model for early lung disease detection using medical imaging and deep learning techniques.",
  },
  {
    id: 4,
    title: "Text to Video using AI",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Developed an AI-powered system that converts textual input into video format, automating multimedia content creation.",
  },
  {
    id: 5,
    title: "Portfolio Website Generator",
    img: "https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Created a tool that dynamically generates portfolio websites, streamlining the process for professionals and students.",
  },
  {
    id: 6,
    title: "Project Management for Final Year Students",
    img: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Developed frontend platform to assist final-year students in managing their academic projects efficiently.",
  },
  {
    id: 7,
    title: "Collaborative Task Management",
    img: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Currently Building a task management system enabling seamless collaboration among team members with real-time updates.",
  },
];


const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
