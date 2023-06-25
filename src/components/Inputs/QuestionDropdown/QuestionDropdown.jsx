import React, { useRef } from "react";
import {
  SArrowButton,
  SDropdownWrapper,
} from "../Dropdown/Dropdown.styled";
import { DropArrow } from "../../DropArrow";
import { questionDropdownVariants } from "./QuestionDropdown.variants";
import {
  SQuestionDropdownItem,
  SQuestionDropdownButton,
  SQuestionDropdownList,
} from "./QuestionDropdown.styled";
import { getLongestString } from "../../../utils/dropdown";
import { useAutoClose } from "../../../hooks/useAutoClose";
import { AnimatePresence } from "framer-motion";
import { QuestionDropdownInput } from "../QuestionDropdownInput/QuestionDropdownInput";

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

export const QuestionDropdown = (props) => {
  const { setQuestionTypeId, items, value } = props;
  console.log(items[value]);
  console.log("value: ", value);

  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useAutoClose(dropdownRef, false, () => {}); // empty function in the place of onClose

  const longestItem = items && getLongestString(Object.values(items));

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (id) => {
    toggleOpen();
    setQuestionTypeId(id);
  };

  return (
    <SDropdownWrapper ref={dropdownRef}>
      <QuestionDropdownInput
        width={"16.875rem"}
        value={items && items[value]}
        readOnly
        type={"text"}
        onClick={toggleOpen}
        bgImage={IMAGES[value]}
        RightComponent={
          <SArrowButton type="button" title="toggle dropdown">
            <DropArrow isOpen={isOpen} />
          </SArrowButton>
        }
      />
      <AnimatePresence>
        {isOpen && (
          <SQuestionDropdownList
            variants={questionDropdownVariants}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            transition={{ duration: 0.4, type: "spring" }}
          >
            {!items ? (
              <span>--- no items ---</span>
            ) : (
              Object.entries(items).map(([id, value]) => {
                return (
                  <SQuestionDropdownItem key={id}>
                    <SQuestionDropdownButton
                      type="button"
                      onClick={() => handleSelect(id)}
                      data-longestitem={longestItem}
                      bgImage={IMAGES[id]}
                    >
                      {value}
                    </SQuestionDropdownButton>
                  </SQuestionDropdownItem>
                );
              })
            )}
          </SQuestionDropdownList>
        )}
      </AnimatePresence>
    </SDropdownWrapper>
  );
};
