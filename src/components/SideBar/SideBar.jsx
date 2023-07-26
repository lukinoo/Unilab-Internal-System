import React, { Fragment, useRef } from "react";
import { useAutoClose } from "../../hooks/useAutoClose";
import { DropArrow } from "../DropArrow";
import { SideButton } from "../Buttons/SideButton";
import { SideDropdown } from "../Inputs/SideDropdown";
import {
  SSideBarContainer,
  SSideBarDiv,
  SSideBarButton,
  SSideBarArrowButton,
  SSideBarImg
} from "./SideBar.styled";
import { sideBarData } from "./sideBarData";

export const SideBar = ({ items = sideBarData }) => {
  const dropdownRef = useRef(null);
  const [showSideBar, setShowSideBar] = useAutoClose(dropdownRef, false);

  return (
    <SSideBarContainer
      ref={dropdownRef}
      initial={{ width: "5.25rem" }}
      animate={{ width: showSideBar ? "22rem" : "5.25rem" }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <SSideBarDiv>
        {items.map((item, index) => (
          <Fragment key={index}>
            {item.children ? (
              <SideDropdown
                showSideBar={showSideBar}
                path={item.to}
                label={item.label}
                items={item.children}
                LeftComponent={<SSideBarImg src={item.icon} alt="" />}
                key={item.name}
              >
                {item.name}
              </SideDropdown>
            ) : (
              <SideButton
                to={item.to}
                LeftComponent={<SSideBarImg src={item.icon} alt="" />}
                key={item.name}
              >
                {item.name}
              </SideButton>
            )}
          </Fragment>
        ))}
      </SSideBarDiv>

      <SSideBarButton
        onClick={() => {
          setShowSideBar(!showSideBar);
        }}
      >
        <SSideBarArrowButton title="toggle dropdown">
          <DropArrow isOpen={showSideBar} stroke={"#FFFFFF"} />
        </SSideBarArrowButton>
      </SSideBarButton>
    </SSideBarContainer>
  );
};
