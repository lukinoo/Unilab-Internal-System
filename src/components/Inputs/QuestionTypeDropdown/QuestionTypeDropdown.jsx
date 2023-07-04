import React, { useRef } from "react";
import {
  SArrowButton,
  SDropdownWrapper,
  SDropdownItem,
} from "../Dropdown/Dropdown.styled";
import { DropArrow } from "../../DropArrow";
import { questionDropdownVariants } from "./QuestionTypeDropdown.variants";
import {
  SQuestionTypeDropdownButton,
  SQuestionTypeDropdownList,
} from "./QuestionTypeDropdown.styled";
import { getLongestString } from "../../../utils/dropdown";
import { useAutoClose } from "../../../hooks/useAutoClose";
import { AnimatePresence } from "framer-motion";
import { QuestionTypeDropdownInput } from "../QuestionTypeDropdownInput/QuestionTypeDropdownInput";

import checkboxSvg from "/assets/svg/checkbox.svg";
import multipleChoiceSvg from "/assets/svg/multipleChoice.svg";
import textboxSvg from "/assets/svg/textbox.svg";
import ratingScaleSvg from "/assets/svg/ratingScale.svg";

const IMAGES = {
  1: checkboxSvg,
  2: multipleChoiceSvg,
  3: textboxSvg,
  4: ratingScaleSvg,
};

export const QuestionTypeDropdown = (props) => {
  const { action, items, value, listWidth, showImgs, displayScroll } = props;

  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useAutoClose(dropdownRef, false);

  const longestItem = items && getLongestString(Object.values(items));

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (id) => {
    toggleOpen();
    action(id);
  };

  return (
    <SDropdownWrapper ref={dropdownRef}>
      <QuestionTypeDropdownInput
        width={"16.875rem"}
        value={items && items[value]}
        readOnly
        type={"text"}
        onClick={toggleOpen}
        bgImage={showImgs && IMAGES[value]}
        RightComponent={
          <SArrowButton type="button" title="toggle dropdown">
            <DropArrow isOpen={isOpen} />
          </SArrowButton>
        }
      />
      <AnimatePresence>
        {isOpen && (
          <SQuestionTypeDropdownList
            variants={questionDropdownVariants}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            transition={{ duration: 0.4, type: "spring" }}
            width={listWidth}
            displayScroll={displayScroll}
          >
            {!items ? (
              <span>--- no items ---</span>
            ) : (
              Object.entries(items).map(([id, value]) => {
                return (
                  <SDropdownItem key={id}>
                    <SQuestionTypeDropdownButton
                      type="button"
                      onClick={() => handleSelect(id)}
                      data-longestitem={longestItem}
                      bgImage={showImgs && IMAGES[id]}
                    >
                      {value}
                    </SQuestionTypeDropdownButton>
                  </SDropdownItem>
                );
              })
            )}
          </SQuestionTypeDropdownList>
        )}
      </AnimatePresence>
    </SDropdownWrapper>
  );
};
