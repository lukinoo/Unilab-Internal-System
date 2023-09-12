import { SLinkUploader, SLInkIcon, SOverlay, SEditIcon, SDeleteIcon, SIconsDiv, SIconWrapper } from "./LinkUploader.styled"

export const LinkUploader = ({
  title,

}) => {
  return (
    <SLinkUploader>
      {title}
      <SLInkIcon src="/assets/svg/linkIcon.svg" alt="link" />
      <SOverlay>
        <SIconsDiv>
          <SIconWrapper>
            <SEditIcon src="/assets/svg/edit.svg" alt="edit" />
          </SIconWrapper>
          <SIconWrapper>
            <SDeleteIcon src="/assets/svg/delete.svg" alt="delete" />
          </SIconWrapper>
        </SIconsDiv>
      </SOverlay>
    </SLinkUploader>
  )
}
