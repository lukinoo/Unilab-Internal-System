import React from "react";
import {
  SAboutProjectView,
  SAboutProject,
  STitle,
  SAboutSection,
  SAboutLine,
  SAboutSvg,
  StarMiddleSvg,
} from "./AboutProject.styled";
import { FourthHeader } from "../../components/Headers/FourthHeader";
import { Footer } from "../../components/Footer";
import { ContributorsSlider } from "../../components/ContributorsSlider";

export const AboutProject = () => {
  return (
    <SAboutProjectView>
      <FourthHeader />
      <SAboutProject>
        <img src="assets/svg/starTop.svg" alt="" />
        <STitle>პროექტის შესახებ</STitle>
        <SAboutSection>
          <ul>
            <li>
              ოდესმე გიფიქრია პატარა ოთახზე, რომელში შესვლისას დროსა და სივრცეში
              იკარგები და საშუალება გეძლევა მომავლის გარკვეული ნაწილი დაინახო?
              ისეთი იმპულსები მიიღო, რომლებიც სუპერძალებს შეგძენდა?
            </li>
            <li>
              მოგესალმებით ილიაუნის კიბერლაბორატორია უნილაბში, რომელიც
              საშუალებას მოგცემს საკუთარ თავში ახალი შესაძლებლობები, ინტერესები
              და უნარები აღმოაჩინო, შენ ირგვლივ სამყაროს განვითარების ტემპს
              ყურადღება არ მიაქციო და თავს ისე შემოუძახო, რომ ხვალ უკვე დროს
              გაუსწრო და შენს გუშინდელ თავზე სინათლის წლით წინ იყო.
            </li>
            <li>
              აქ ყველა ერთად ვცდილობთ მომავალში ადამიანის როლს მნიშვნელობა
              შევძინოთ, რათა ერთი შეხედვით საშიშ, რობოტიზირებულ მომავალში
              ამომავალი წერტილი კვლავ ადამიანი იყოს. სივრცეში, რომელშიც მომავლის
              პროფესიები ჩვენთვის უმნიშვნელოვანესია და მათ გარეშე დროში
              მოგზაურობა მარსზე უჟანგბადოდ გარეშე გაფრენის ტოლფასია.
            </li>
            <li>
              უნილაბი, ილიას სახელმწიფო უნივერსიტეტის ორი ურთიერთშემავსებელი
              კომპონენტისგან შემდგარი სივრცე, აერთიანებს თეორიული სწავლებისა და
              პრაქტიკული გამოცდილების მიღების შესაძლებლობებს.
            </li>
            <li>
              ჩვენ გვჯერა, რომ დღეს მხოლოდ თეორიული ცოდნა კოსმოსში მოგზაურობისას
              მთვარეზე დარჩენას ჰგავს. რეალური თავგადასავალი სწორედ მთვარის
              მიღმა და თეორიული ცოდნის მიღების შემდეგ პრაქტიკაში გველის.
            </li>
          </ul>
        </SAboutSection>
        <SAboutLine>
          <img src="/assets/svg/lineLeft.svg" alt="lineLeft" />
        </SAboutLine>
        <span>პროექტზე მუშაობდნენ</span>
        <ContributorsSlider />
      </SAboutProject>

      <SAboutSvg>
        <StarMiddleSvg src="assets/svg/starMiddleRight.svg" alt="starMiddle" />
      </SAboutSvg>
      
      <Footer />
    </SAboutProjectView>
  );
};
