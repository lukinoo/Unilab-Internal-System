import { SLinkUploader, SLInkIcon, SOverlay, SEditIcon, SDeleteIcon, SIconsDiv, SIconWrapper } from "./LinkUploader.styled"

export const LinkUploader = ({
  title,
  handleUpdate,
  handleDelete
}) => {
  return (
    <SLinkUploader>
      {title}
      <SLInkIcon src="/assets/svg/linkIcon.svg" alt="link" />
      <SOverlay>
        <SIconsDiv>
          <SIconWrapper onClick={handleUpdate}>
            <SEditIcon src="/assets/svg/edit.svg" alt="edit"/>
          </SIconWrapper>
          <SIconWrapper onClick={handleDelete}>
            <SDeleteIcon src="/assets/svg/delete.svg" alt="delete" />
          </SIconWrapper>
        </SIconsDiv>
      </SOverlay>
    </SLinkUploader>
  )
}
