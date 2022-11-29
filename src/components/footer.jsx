import React from "react";
import { TfiTwitter, TfiInstagram, TfiCommentAlt, TfiInfoAlt } from "react-icons/tfi";
import { motion } from "framer-motion";
import "./footer.scss";

export default function Footer() {
  return (
    <>
      <div className='foot container-fluid p-2 mt-5'>
        <motion.div
          whileHover={{ scale: 1.3 }}
          initial={{ opacity: -1 }}
          whileInView={{ opacity: 1 }}
          className='buttonWrap p-2'
        >
          <div className='imgWrap'>
            <TfiTwitter />
          </div>
          <h5>Twitter</h5>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          initial={{ opacity: -1 }}
          whileInView={{ opacity: 1 }}
          className='buttonWrap p-2'
        >
          <div className='imgWrap'>
            <TfiInstagram />
          </div>
          <h5>Instagram</h5>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          initial={{ opacity: -1 }}
          whileInView={{ opacity: 1 }}
          className='buttonWrap p-2'
        >
          <div className='imgWrap'>
            <TfiCommentAlt />
          </div>
          <h5>Contact Us</h5>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          initial={{ opacity: -1 }}
          whileInView={{ opacity: 1 }}
          className='buttonWrap p-2'
        >
          <div className='imgWrap'>
            <TfiInfoAlt />
          </div>
          <h5>Privacy policy & TOS</h5>
        </motion.div>
      </div>
    </>
  );
}
