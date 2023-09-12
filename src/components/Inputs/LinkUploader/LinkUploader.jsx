import { SLinkUploader, SLInkIcon, SOverlay, SEditIcon, SDeleteIcon } from "./LinkUploader.styled"

export const LinkUploader = ({
  title,

}) => {
  return (
    <SLinkUploader>
      {title}
      <SLInkIcon src="/assets/svg/linkIcon.svg" alt="link" />
      <SOverlay>
        <SEditIcon src="/assets/svg/edit.svg" alt="edit" />
        <SDeleteIcon src="/assets/svg/delete.svg" alt="delete" />
      </SOverlay>
    </SLinkUploader>
  )
}
