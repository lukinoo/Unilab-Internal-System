import React, { useRef } from "react";
import { useAutoClose } from "../../hooks/useAutoClose";
import { DropArrow } from "../DropArrow";
import { SideButton } from "../Buttons/SideButton";
import { SideDropdown } from "../Inputs/SideDropdown";
import { SideHomeSvg } from "./SideSvgs/SideHomeSvg";
import { EditSvg } from "./SideSvgs/EditSvg";
import { ActivitiesSvg } from "./SideSvgs/ActivitiesSvg";

import {
  SSideBarContainer,
  SSideBarDiv,
  SSideBarButton,
  SSideBarArrowButton,
} from "./SideBar.styled";
import { HeadPhoneSvg } from "./SideSvgs/HeadPhoneSvg";
import { HDSvg } from "./SideSvgs/HDSvg";
import { UsersSvg } from "./SideSvgs/UsersSvg";

export const SideBar = () => {
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
        <SideButton to="/" LeftComponent={<SideHomeSvg />}>
          მთავარი
        </SideButton>
        <SideButton to="/privacy-policy" LeftComponent={<EditSvg />}>
          სწავლებები
        </SideButton>
        <SideDropdown
          showSideBar={showSideBar}
          path={"/"}
          items={["მოსწავლე", "სტუდენტი", "კურსდამთავრებული"]}
          LeftComponent={<ActivitiesSvg />}
        >
          კონკურსები
        </SideDropdown>
        <SideDropdown
          showSideBar={showSideBar}
          path={"/"}
          items={["მოსწავლე", "სტუდენტი", "კურსდამთავრებული"]}
          LeftComponent={<HeadPhoneSvg />}
        >
          აქტივობები
        </SideDropdown>
        <SideDropdown
          showSideBar={showSideBar}
          path={"/"}
          items={["მოსწავლე", "სტუდენტი", "კურსდამთავრებული"]}
          LeftComponent={<HDSvg />}
        >
          მოწყობილობები
        </SideDropdown>
        <SideDropdown
          showSideBar={showSideBar}
          path={"/"}
          items={["მოსწავლე", "სტუდენტი", "კურსდამთავრებული"]}
          LeftComponent={<UsersSvg />}
        >
          მომხმარებლების მართვა
        </SideDropdown>
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
