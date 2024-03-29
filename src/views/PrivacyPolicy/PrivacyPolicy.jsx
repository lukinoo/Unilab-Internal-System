import React from "react";
import { Footer } from "../../components/Footer";
import { SecondHeader } from "../../components/Headers/SecondHeader";
import {
  SPrivacyPolicyView,
  SPrivacyPolicy,
  STitle,
  SPreRegistrationSection,
} from "./PrivacyPolicy.styled";

import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
  return (
    <SPrivacyPolicyView>
      <SecondHeader />
      <SPrivacyPolicy>
        <STitle>გამარჯობა</STitle>
        <SPreRegistrationSection>
          <h4>გთხოვთ, გაეცნოთ საიტის მოხმარების წესებსა და პირობებს</h4>
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
          </ul>
        </SPreRegistrationSection>
        <SPreRegistrationSection>
          <h4>გთხოვთ, გაეცნოთ საიტის მოხმარების წესებსა და პირობებს</h4>
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
          </ul>
        </SPreRegistrationSection>
        <Link to="/registration">
          <Button width="21.25rem">გავეცანი</Button>
        </Link>
      </SPrivacyPolicy>
      <Footer />
    </SPrivacyPolicyView>
  );
};
