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
  SUploadImgIcon,
  SUploadDoneIcon,
  SUploadCloudIcon,
} from "./SingleUploader.styled";
import { SImg, SUploadedImgDiv } from "../../Uploader/Uploader.styled";
import { DownloadSvg } from "./UploadSvg/DownloadSvg";

export const SingleUploader = ({ title, name, isImageType, width, height, margin }) => {
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
    <SInputWrapper width={width} height={height} margin={margin}>
      <STitle>{title}</STitle>
      <SUploader
        active={!!data?.name}
        onClick={() => !data?.name && handleClick()}
        isImageType={isImageType}
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <UploadContentWrapper>
          {isImageType ? (
            <SFileUpload>
              {!(data?.size > 0) && <SUploadImgIcon />}
              <SCloudUpload>
                {!(data?.size > 0) && <SUploadCloudIcon />}
              </SCloudUpload>
            </SFileUpload>
          ) : (
            <SFileUpload>
              <SUploadFileIcon />
              <SCloudUpload>
                {data?.name ? <SUploadDoneIcon /> : <SUploadCloudIcon />}
              </SCloudUpload>
            </SFileUpload>
          )}
          {isImageType && data?.size > 0 && (
            <SUploadedImgDiv active={data.length}>
              <SImg src={URL.createObjectURL(data)} alt="" />
            </SUploadedImgDiv>
          )}
          {!(data?.size > 0) && <SDesk>{name}</SDesk>}
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
