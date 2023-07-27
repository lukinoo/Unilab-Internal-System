import { SPortfolioMainDiv, STitle } from "./Portfolio.styled";
import { InternInfoContainer } from "../../components/InternInfoContainer/InternInfoContainer";

export const Portfolio = () => {
  return (
    <SPortfolioMainDiv>
      <STitle>პორტფოლიო</STitle>
      <InternInfoContainer
          name={'ნინი წიკლაური'}
          occupation={'UI/UX Designer'}
          description={'მოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებ მოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებ'}
          imgUrl={'https://cambrian.com/wp-content/uploads/2019/02/stefan-stefancik-1203044-unsplash-200x300.jpg'}
          links={{
            github: '',
            facebook: '',
            linkedIn:'',
            instagram: '',
          }}
      />
      {/* Projects pagination */}
      {/* Footer */}
    </SPortfolioMainDiv>
  )
}
