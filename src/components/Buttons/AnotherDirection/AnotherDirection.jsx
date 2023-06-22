import React from "react";
import {
  SAnotherDirection,
  SAnotherDirWrapper,
  SEditIcon,
  SOverlay,
} from "./AnotherDirection.styled";
import { LinkSvg } from "./IconSvg/LinkSvg";
import { SDeleteIcon } from "../Uploader/Uploader.styled";
import { DeleteSvg } from "../Uploader/UploadSvg/DeleteSvg";
import { EditSvg } from "../AnotherDirection/IconSvg/EditSvg";

export const AnotherDirection = () => {
  return (
    <SAnotherDirWrapper>
      <SAnotherDirection>
        <a href="#">
          <span>გამოცხადებული სხვა მიმართულება</span>
          <LinkSvg />
        </a>
        <SOverlay>
          <SEditIcon>
            <EditSvg />
          </SEditIcon>
          <SDeleteIcon>
            <DeleteSvg />
          </SDeleteIcon>
        </SOverlay>
      </SAnotherDirection>
      <SAnotherDirection>
        <a href="#">
          <span>გამოცხადებული სხვა მიმართულება</span>
          <LinkSvg />
        </a>
        <SOverlay>
          <SEditIcon>
            <EditSvg />
          </SEditIcon>
          <SDeleteIcon>
            <DeleteSvg />
          </SDeleteIcon>
        </SOverlay>
      </SAnotherDirection>
      <SAnotherDirection>
        <a href="#">
          <span>გამოცხადებული სხვა მიმართულება</span>
          <LinkSvg />
        </a>
        <SOverlay>
          <SEditIcon>
            <EditSvg />
          </SEditIcon>
          <SDeleteIcon>
            <DeleteSvg />
          </SDeleteIcon>
        </SOverlay>
      </SAnotherDirection>
    </SAnotherDirWrapper>
  );
};
