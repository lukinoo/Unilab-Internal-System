import githubSvg from "/assets/svg/github.svg";
import facebookSvg from "/assets/svg/facebook.svg";
import linkedInSvg from "/assets/svg/linkedin.svg";
import instagramSvg from "/assets/svg/instagram.svg";
import { SSocialIcon } from "./SocialIcon.styled";

const ICONS = {
  github: githubSvg,
  facebook: facebookSvg,
  linkedin: linkedInSvg,
  instagram: instagramSvg
}

export const SocialIcon = ({social, link}) => {
  return (
    <SSocialIcon href={link} target="_blank">
      <img src={ICONS[social]} alt={social} />
    </SSocialIcon>
  )
}
