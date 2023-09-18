import React from "react";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  SCloudUpload,
  SDeleteIcon,
  SDesk,
  SFileUpload,
  SUploadFileIcon,
  SUploadImgIcon,
  SUploadDoneIcon,
  SUploadCloudIcon,
  STitle,
} from "../Buttons/SingleUploader/SingleUploader.styled";
import {
  SFlexColumnDiv,
  SUploadedFile,
  SUploaderWrapper,
  SOverlay,
  SImg,
  SUploadedImgDiv,
  SUploaderDiv,
} from "./Uploader.styled";

export const Uploader = ({ isImageType, label }) => {
  const [data, setData] = useState([]);
  const name = isImageType ? "ატვირთეთ ფოტო" : "ატვირთეთ ფაილი";

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) setData([file, ...data]);
  };

  const handleDelete = (i) => {
    const filteredData = data.filter((item, index) => index !== i);
    setData(filteredData);
  };

  return (
    <SUploaderDiv>
      {label && <STitle>{label}</STitle>}
      <SUploaderWrapper item={data.length > 0}>
        {data.map((item, i) => {
          // For image upload
          let imageURL;
          if (isImageType) {
            if (item instanceof File) imageURL = URL.createObjectURL(item);
            return (
              <SUploadedImgDiv key={uuidv4()} active={data.length}>
                <SImg src={imageURL} alt="item" />
                <SOverlay>
                  <SDeleteIcon onClick={() => handleDelete(i)} />
                </SOverlay>
              </SUploadedImgDiv>
            );
          }
          return (
            <SUploadedFile key={uuidv4()} active={data.length}>
              <SFileUpload style={{ scale: "0.7" }}>
                {isImageType ? <SUploadImgIcon /> : <SUploadFileIcon />}
                <SCloudUpload>
                  <SUploadDoneIcon />
                </SCloudUpload>
              </SFileUpload>
              <SDesk>{data.length && "ფაილი ატვირთულია"}</SDesk>
              <SOverlay>
                <SDeleteIcon onClick={() => handleDelete(i)} />
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
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
            {isImageType ? <SUploadImgIcon /> : <SUploadFileIcon />}
            <SCloudUpload>
              <SUploadCloudIcon />
            </SCloudUpload>
          </SFileUpload>
          <SDesk style={{ fontSize: "1rem" }}>{name}</SDesk>
        </SFlexColumnDiv>
      </SUploaderWrapper>
    </SUploaderDiv>
  );
};
