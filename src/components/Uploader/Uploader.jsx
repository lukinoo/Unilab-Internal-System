import React from "react";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  SCloudUpload,
  SDeleteIcon,
  SDesk,
  SFileUpload,
} from "../Buttons/Uploader/Uploader.styled";
import { FileUploadSvg } from "../Buttons/Uploader/UploadSvg/FileUploadSvg";
import { DeleteSvg } from "../Buttons/Uploader/UploadSvg/DeleteSvg";
import { UploadedDoneSvg } from "../Buttons/Uploader/UploadSvg/UploadedDoneSvg";
import { UploadCloudSvg } from "../Buttons/Uploader/UploadSvg/UploadCloudSvg";
import {
  SFlexColumnDiv,
  SUploadedFile,
  SUploaderWrapper,
  SOverlay,
  SImg,
  SUploadedImg,
} from "./Uploader.styled";

export const Uploader = ({ imageType }) => {
  const [data, setData] = useState([]);
  const name = imageType ? "ატვირთეთ ფოტო" : "ატვირთეთ ფაილი";

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setData([file, ...data]);
  };

  const handleDelete = (i) => {
    const filteredData = data.filter((item, index) => index !== i);
    setData(filteredData);
  };

  return (
    <SUploaderWrapper item={data.length > 0}>
      {data.map((item, i) => {
        // For image upload
        let imageURL;
        if (imageType) {
          if (item instanceof File) imageURL = URL.createObjectURL(item);
          return (
            <SUploadedImg key={uuidv4()} active={data.length}>
              {/* FOR IMAGE DISPLAY */}
              <SImg src={imageURL} alt="item" />
              <SOverlay>
                <SDeleteIcon onClick={() => handleDelete(i)}>
                  <DeleteSvg />
                </SDeleteIcon>
              </SOverlay>
            </SUploadedImg>
          );
        }
        return (
          <SUploadedFile key={uuidv4()} active={data.length}>
            <SFileUpload style={{ scale: "0.7" }}>
              <FileUploadSvg />
              <SCloudUpload>
                <UploadedDoneSvg />
              </SCloudUpload>
            </SFileUpload>
            <SDesk>{data.length && "ფაილი ატვირთულია"}</SDesk>
            <SOverlay>
              <SDeleteIcon onClick={() => handleDelete(i)}>
                <DeleteSvg />
              </SDeleteIcon>
            </SOverlay>
          </SUploadedFile>
        );
      })}
      <SFlexColumnDiv
        topLeft={data.length}
        active={!!data.name}
        onClick={() => !data.name && handleClick()}
      >
        <SFileUpload>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <FileUploadSvg />
          <SCloudUpload>
            <UploadCloudSvg />
          </SCloudUpload>
        </SFileUpload>
        <SDesk style={{ fontSize: "1rem" }}>{name}</SDesk>
      </SFlexColumnDiv>
    </SUploaderWrapper>
  );
};
