import { useState } from "react";
import Links from "./links/Links.jsx";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton.jsx";
import { motion } from "framer-motion";

const SidebarNew = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(100% at 500px 50px)",

      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.7,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebarNew" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default SidebarNew;
