import { SPortfolioMainDiv, STitle } from "./Portfolio.styled";
import { InternInfoContainer } from "../../components/InternInfoContainer/InternInfoContainer";
import { PortfolioFooter } from "../../components/PortfolioFooter/PortfolioFooter";
import { ProjectsContainer } from "../../components/ProjectsContainer/ProjectsContainer";
import { FourthHeader } from "../../components/Headers/FourthHeader";
export const Portfolio = () => {
  return (
    <SPortfolioMainDiv>
      <FourthHeader />
      <STitle>პორტფოლიო</STitle>
      <InternInfoContainer
          name={'ნინი წიკლაური'}
          occupation={'UI/UX Designer'}
          description={'მოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებ მოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებოკლედ ჩემ შესახებ'}
          imgUrl={'https://cambrian.com/wp-content/uploads/2019/02/stefan-stefancik-1203044-unsplash-200x300.jpg'}
          links={{
            github: '',
            facebook: '',
            linkedin:'',
            instagram: '',
          }}
      />
      <ProjectsContainer projects={[
        {
          title: "პროექტის დასახელება 1",
          startDate: 'July 2022',
          endDate: 'Present',
          image: 'https://s3-alpha-sig.figma.com/img/34f9/e4f8/12aac5d63a75264eb5dde9b4ea2d1a95?Expires=1691366400&Signature=H8-MA~CMntYsHY3L4QihwCqHNdfXybKzWDumIj9pMuMHEH7EK6-5ddZwOv6MLUV5FmQeHr-ouUc~mg63LQkwaflpLQda3Rdf3kN5HKXxdPSFJO4E0NRBSLyYQYUoBHjEvzKaRaSSmNjaZvpjgn2mi2yYK~QVY7LDNLauyP~agACPGRz-vZI5tr5fx2O1isI9THiNoUnp7DeF5Eal1ckWjZuvYQJfwkkGpNNSWaFh3fi71Et6H0CU2pY0ucuDczzAIjPRN8u8EsX98F4z8FoY-g-0EdCLIG27j7gUacY3Fh5qJ8r-hHMt5Qm6m4i7xDOnvqpGowhTQNvC174Wt3XISg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          role: 'ჩემი როლი',
          description: 'მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ',
          status: 'პრაქტიკული პროექტი',
          url: '',
        },
        {
          title: "პროექტის დასახელება 2",
          startDate: 'July 2022',
          endDate: 'Present',
          image: 'https://s3-alpha-sig.figma.com/img/34f9/e4f8/12aac5d63a75264eb5dde9b4ea2d1a95?Expires=1691366400&Signature=H8-MA~CMntYsHY3L4QihwCqHNdfXybKzWDumIj9pMuMHEH7EK6-5ddZwOv6MLUV5FmQeHr-ouUc~mg63LQkwaflpLQda3Rdf3kN5HKXxdPSFJO4E0NRBSLyYQYUoBHjEvzKaRaSSmNjaZvpjgn2mi2yYK~QVY7LDNLauyP~agACPGRz-vZI5tr5fx2O1isI9THiNoUnp7DeF5Eal1ckWjZuvYQJfwkkGpNNSWaFh3fi71Et6H0CU2pY0ucuDczzAIjPRN8u8EsX98F4z8FoY-g-0EdCLIG27j7gUacY3Fh5qJ8r-hHMt5Qm6m4i7xDOnvqpGowhTQNvC174Wt3XISg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          role: 'ჩემი როლი',
          description: 'მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ',
          status: 'საფინალო პროექტი',
          url: ''
        },
        {
          title: "პროექტის დასახელება 3",
          startDate: 'July 2022',
          endDate: 'Present',
          image: 'https://s3-alpha-sig.figma.com/img/34f9/e4f8/12aac5d63a75264eb5dde9b4ea2d1a95?Expires=1691366400&Signature=H8-MA~CMntYsHY3L4QihwCqHNdfXybKzWDumIj9pMuMHEH7EK6-5ddZwOv6MLUV5FmQeHr-ouUc~mg63LQkwaflpLQda3Rdf3kN5HKXxdPSFJO4E0NRBSLyYQYUoBHjEvzKaRaSSmNjaZvpjgn2mi2yYK~QVY7LDNLauyP~agACPGRz-vZI5tr5fx2O1isI9THiNoUnp7DeF5Eal1ckWjZuvYQJfwkkGpNNSWaFh3fi71Et6H0CU2pY0ucuDczzAIjPRN8u8EsX98F4z8FoY-g-0EdCLIG27j7gUacY3Fh5qJ8r-hHMt5Qm6m4i7xDOnvqpGowhTQNvC174Wt3XISg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          role: 'ჩემი როლი',
          description: 'მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ',
          status: 'საფინალო პროექტი',
          url: ''
        },
        {
          title: "პროექტის დასახელება 4",
          startDate: 'July 2022',
          endDate: 'Present',
          image: 'https://s3-alpha-sig.figma.com/img/34f9/e4f8/12aac5d63a75264eb5dde9b4ea2d1a95?Expires=1691366400&Signature=H8-MA~CMntYsHY3L4QihwCqHNdfXybKzWDumIj9pMuMHEH7EK6-5ddZwOv6MLUV5FmQeHr-ouUc~mg63LQkwaflpLQda3Rdf3kN5HKXxdPSFJO4E0NRBSLyYQYUoBHjEvzKaRaSSmNjaZvpjgn2mi2yYK~QVY7LDNLauyP~agACPGRz-vZI5tr5fx2O1isI9THiNoUnp7DeF5Eal1ckWjZuvYQJfwkkGpNNSWaFh3fi71Et6H0CU2pY0ucuDczzAIjPRN8u8EsX98F4z8FoY-g-0EdCLIG27j7gUacY3Fh5qJ8r-hHMt5Qm6m4i7xDOnvqpGowhTQNvC174Wt3XISg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          role: 'ჩემი როლი',
          description: 'მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ',
          status: 'საფინალო პროექტი',
          url: ''
        },
        {
          title: "პროექტის დასახელება 5",
          startDate: 'July 2022',
          endDate: 'Present',
          image: 'https://s3-alpha-sig.figma.com/img/34f9/e4f8/12aac5d63a75264eb5dde9b4ea2d1a95?Expires=1691366400&Signature=H8-MA~CMntYsHY3L4QihwCqHNdfXybKzWDumIj9pMuMHEH7EK6-5ddZwOv6MLUV5FmQeHr-ouUc~mg63LQkwaflpLQda3Rdf3kN5HKXxdPSFJO4E0NRBSLyYQYUoBHjEvzKaRaSSmNjaZvpjgn2mi2yYK~QVY7LDNLauyP~agACPGRz-vZI5tr5fx2O1isI9THiNoUnp7DeF5Eal1ckWjZuvYQJfwkkGpNNSWaFh3fi71Et6H0CU2pY0ucuDczzAIjPRN8u8EsX98F4z8FoY-g-0EdCLIG27j7gUacY3Fh5qJ8r-hHMt5Qm6m4i7xDOnvqpGowhTQNvC174Wt3XISg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          role: 'ჩემი როლი',
          description: 'მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ, მოკლედ პროექტის შესახებ',
          status: 'პრაქტიკული პროექტი',
          url: ''
        },
      ]}/>
      <PortfolioFooter 
        gmail="contact@contact.ge"
        number="+995 333 67 56 43"
        links={{
          github: '',
          facebook: '',
          linkedin:'',
          instagram: '',
        }}
      />
    </SPortfolioMainDiv>
  )
}
