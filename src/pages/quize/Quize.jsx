import React, { useState } from "react";
import "./quize.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import QuizeMessage from "../../components/quizeComponents/quizeMessage/QuizeMessage";
import QuizeMain from "../../components/quizeComponents/quizemain/QuizeMain";
import { featureVariants } from "../../data/animation";
const Quize = () => {
  const UUU = useSelector((state) => state.authReducer.authData);
  // show the quize message or quize exam
  const [showQuize, setShowQuize] = useState(true);

  // store the lang to send quize main components to filter that lang questions to display the quize
  const [lanTofilterQuestions, setLanToFilterQuestions] = useState("");

  console.log(lanTofilterQuestions);

  return (
    <motion.div
      initial="offscreen"
      whileInView={"onscreen"}
      variants={featureVariants}
      className="quize-main"
    >
      {showQuize ? (
        <QuizeMessage
          lanTofilterQuestions={lanTofilterQuestions} // if lang not selected to display the error msg and not navigate to quizemain page
          setLanToFilterQuestions={setLanToFilterQuestions} //lang store to filter quize
          setShowQuize={setShowQuize} // navigate to quize main components
        />
      ) : (
        <QuizeMain
          lanTofilterQuestions={lanTofilterQuestions} // to display lang selected user and filter quize
        />
      )}
    </motion.div>
  );
};

export default Quize;
