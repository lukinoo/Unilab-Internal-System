import React, { useState } from "react";
import { ThirdHeader } from "../../components/Headers/ThirdHeader";
import { ProjectSlider } from "../../components/ProjectSlider";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { motion } from "framer-motion";

import {
  SDescription,
  SMainContent,
  SMainDiv,
  SMainPageSvgs,
  SStarLeftTop,
  SStarRight,
  STitle,
  SVectorBottom,
} from "./MainPage.styled";
import { ProjectData } from "../../data";
import { Link } from "react-router-dom";
import { descriptionVariants, titleVariants } from "./MainPage.variants";

const MotionLink = motion(Link);

export const MainPage = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleSliderChange = (i) => {
    setSliderIndex(i);
  };

  const { title, description } = ProjectData[sliderIndex];
  return (
    <SMainDiv>
      <ThirdHeader />
      <ProjectSlider onChange={handleSliderChange} data={ProjectData} />
      <SMainContent initial="hidden" animate="visible">
        <STitle key={"title" + sliderIndex} variants={titleVariants}>
          {title}
        </STitle>
        <SDescription
          key={"description" + sliderIndex}
          variants={descriptionVariants}
        >
          {description}
        </SDescription>
        <MotionLink to="#" layout>
          <Button width="21.25rem">ვრცლად პროექტის შესახებ</Button>
        </MotionLink>
      </SMainContent>
      <SMainPageSvgs>
        <SStarLeftTop src="assets/svg/MainPagestar2.svg" alt="StarLeftBottom" />
        <SStarRight src="assets/svg/MainPagestar1.svg" alt="StarLeftTop" />
        <SVectorBottom
          src="assets/svg/MainPageGroup.svg"
          alt="VectorRight"
          layout
        />
      </SMainPageSvgs>
      <motion.div layout>
        <Footer />
      </motion.div>
    </SMainDiv>
  );
};
