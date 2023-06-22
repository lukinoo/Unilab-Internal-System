import { useState, useRef } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { v4 as uuidv4 } from "uuid";

import anotherDirectionsData from "./data";

import {
  SAnotherDirection,
  SAnotherDirWrapper,
  SEditIcon,
  SOverlay,
  SIcon,
} from "./AnotherDirection.styled";

import { LinkSvg } from "./IconSvg/LinkSvg";
import { SDeleteIcon } from "../Uploader/Uploader.styled";
import { DeleteSvg } from "../Uploader/UploadSvg/DeleteSvg";
import { EditSvg } from "../AnotherDirection/IconSvg/EditSvg";
import { Button } from "../../Button/Button";
import { PlusSvg } from "../AdditionalResources/IconSvg/PlusSvg";
import { Link } from "react-router-dom";

export const AnotherDirection = () => {
  const [data, setData] = useState(anotherDirectionsData);
  const [activeOverlays, setActiveOverlays] = useState({});

  const ref = useRef();

  useOutsideClick(ref, () => {
    setActiveOverlays({});
  });

  const handleAddData = () => {
    const newData = {
      id: uuidv4(),
      link: "#",
      title: "გამოცხადებული სხვა მიმართულება",
    };

    setData([...data, newData]);
  };

  const handleDelete = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  const handleIconClick = (id) => {
    setActiveOverlays((prevActiveOverlays) => ({
      ...prevActiveOverlays,
      [id]: !prevActiveOverlays[id],
    }));
  };

  const handleWrapperClick = (event) => {
    if (event.target === event.currentTarget) {
      setActiveOverlays({});
    }
  };

  return (
    <>
      <SAnotherDirWrapper onClick={handleWrapperClick} ref={ref}>
        {data.map((item) => {
          const { id, link, title } = item;

          return (
            <SAnotherDirection key={id}>
              <Link to={link}>
                <span>{title}</span>
              </Link>
              <SIcon onClick={() => handleIconClick(id)}>
                <LinkSvg />
              </SIcon>
              <SOverlay active={activeOverlays[id]}>
                <SEditIcon>
                  <EditSvg />
                </SEditIcon>
                <SDeleteIcon onClick={() => handleDelete(id)}>
                  <DeleteSvg />
                </SDeleteIcon>
              </SOverlay>
            </SAnotherDirection>
          );
        })}
      </SAnotherDirWrapper>
      <Button
        type="submit"
        width="14.875rem"
        height="2.875rem"
        fontSize="1rem"
        margin="0 auto"
        LeftComponent={<PlusSvg />}
        onClick={handleAddData}
      >
        დამატება
      </Button>
    </>
  );
};
