import { SLinkUploader, SLInkIcon } from "./LinkUploader.styled"

export const LinkUploader = ({
  title,

}) => {
  return (
    <SLinkUploader>
      {title}
      <SLInkIcon src="/assets/svg/linkIcon.svg" alt="link" />
    </SLinkUploader>
  )
}
