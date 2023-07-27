import githubSvg from "/assets/svg/github.svg";
import facebookSvg from "/assets/svg/facebook.svg";
import linkedInSvg from "/assets/svg/linkedin.svg";
import instagramSvg from "/assets/svg/instagram.svg";

const ICONS = {
  github: githubSvg,
  facebook: facebookSvg,
  linkedin: linkedInSvg,
  instagram: instagramSvg
}

export const SocialIcon = ({social, link}) => {
  return (
    <a href={link}>
      <img src={ICONS[social]} alt={social} />
    </a>
  )
}
