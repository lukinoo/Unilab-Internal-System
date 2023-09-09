import { useState, useRef } from "react";
import {
  SUploader,
  STitle,
  SInputWrapper,
  SDesk,
  UploadContentWrapper,
  SFileUpload,
  SCloudUpload,
  SOverlay,
  SDeleteIcon,
  SDownloadICon,
  SUploadFileIcon,
  SUploadImgIcon
} from "./SingleUploader.styled";
import { FileUploadSvg } from "./UploadSvg/FileUploadSvg";
import { UploadCloudSvg } from "./UploadSvg/UploadCloudSvg";
import { UploadedDoneSvg } from "./UploadSvg/UploadedDoneSvg";
import { DownloadSvg } from "./UploadSvg/DownloadSvg";

export const SingleUploader = ({ title, name, isImageType, width, height }) => {
  const [data, setData] = useState({});

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setData(file);
  };

  return (
    <SInputWrapper width={width} height={height}>
      <STitle>{title}</STitle>
      <SUploader
        active={!!data.name}
        onClick={() => !data.name && handleClick()}
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <UploadContentWrapper>
          <SFileUpload>
            {isImageType ? (<SUploadImgIcon />) : <SUploadFileIcon />}
            <SCloudUpload>
              {data?.name ? <UploadedDoneSvg /> : <UploadCloudSvg />}
            </SCloudUpload>
          </SFileUpload>
          <SDesk>{name}</SDesk>
          <SOverlay>
            {!isImageType && (
               <SDownloadICon>
               <DownloadSvg />
             </SDownloadICon>
            )}
            <SDeleteIcon onClick={() => setData({})}></SDeleteIcon>
          </SOverlay>
        </UploadContentWrapper>
      </SUploader>
    </SInputWrapper>
  );
};
