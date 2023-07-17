import React, { useRef } from "react";
import { popupVariants } from "./Popup.variants";
import { useAutoClose } from "../../../hooks/useAutoClose";
import { DropArrow } from "../../DropArrow";
import { AnimatePresence } from "framer-motion";
import {
  SFourthHeader,
  SHeaderUnilabLogo,
  SHeaderProperty,
  SProfileDiv,
  SProfilePicture,
  SProfileChevronWrapper,
  SLanguageDiv,
  SLanguageText,
  SLanguageDropDown,
  SPopup,
  SPopupDiv,
  SUserName,
  SUserBorder,
  SMyAccount,
  SMyAccountImg,
  SLogOut,
  SLogOutImg,
  SUserProperty,
} from "./FourthHeader.styled";

export const FourthHeader = () => {
  const profileRef = useRef(null);
  const [isOpen, setIsOpen] = useAutoClose(profileRef, false);

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SFourthHeader>
      <SHeaderUnilabLogo to={"/"}>
        <img src="assets/images/unilab.webp" alt="Unilab" />
      </SHeaderUnilabLogo>
      <SHeaderProperty>
        <SProfileDiv onClick={handleClickOpen} ref={profileRef}>
          <SProfilePicture src="assets/images/image 5.png" alt="image5" />
          <SProfileChevronWrapper>
            <DropArrow isOpen={isOpen} stroke="#C2C2C2" />
          </SProfileChevronWrapper>
          <AnimatePresence>
            {isOpen && (
              <SPopup
                variants={popupVariants}
                initial={"hidden"}
                animate={"visible"}
                exit={"hidden"}
                transition={{ type: "spring", duration: 0.4 }}
              >
                <SPopupDiv>
                  <SUserName>ნინი წიკლაური</SUserName>
                  <SUserProperty>
                    <SUserBorder></SUserBorder>
                    <SMyAccount>
                      <SMyAccountImg src="assets/svg/user.svg" alt="user" />
                      <span>My Account</span>
                    </SMyAccount>
                    <SLogOut>
                      <SLogOutImg
                        src="assets/svg/log-out.svg"
                        alt="log-out"
                      />
                      <span>Log out</span>
                    </SLogOut>
                  </SUserProperty>
                </SPopupDiv>
              </SPopup>
            )}
          </AnimatePresence>
        </SProfileDiv>
        <SLanguageDiv>
          <SLanguageText>GEO</SLanguageText>
          <SLanguageDropDown
            src="assets/svg/LanguageDropDown.svg"
            alt="ProfileDropDown"
          />
        </SLanguageDiv>
      </SHeaderProperty>
    </SFourthHeader>
  );
};
