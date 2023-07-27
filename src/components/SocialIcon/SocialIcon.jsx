const ICONS = {
  github: '',
  facebook: '',
  linkedin: '',
  intagram: '',
}

export const SocialIcon = ({social, link}) => {
  return (
    <a href={link}>
      <img src={ICONS[social]} alt={social} />
    </a>
  )
}
