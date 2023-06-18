import { ActivitiesSvg } from "../../components/SideBar/SideSvgs/ActivitiesSvg";
import { HDSvg } from "../../components/SideBar/SideSvgs/HDSvg";
import { HeadPhoneSvg } from "../../components/SideBar/SideSvgs/HeadPhoneSvg";
import { UsersSvg } from "../../components/SideBar/SideSvgs/UsersSvg";
import { DesignerSvg } from "../../components/SideBar/SideSvgs/DesignerSvg";
import { DeveloperModeSvg } from "../../components/SideBar/SideSvgs/DeveloperModeSvg";

export const items = [
  {
    name: "UI/UX დიზაინერი",
    to: "/",
    icon: <DesignerSvg />,
  },
  {
    name: "FRONT-END დეველოპერი",
    to: "/privacy-policy",
    icon: <DeveloperModeSvg />,
  },
  {
    name: "FrontEnd-კონკურსები",
    to: "/",
    icon: <ActivitiesSvg />,
    label: "Courses",
    children: [
      {
        name: "მოსწავლე",
        to: "/privacy-policy",
      },
      {
        name: "სტუდენტი",
        to: "#",
      },
      {
        name: "კურსდამთავრებული",
        to: "#",
      },
    ],
  },
  {
    name: "აქტივობები",
    to: "/",
    icon: <HeadPhoneSvg />,
    label: "Activities",
    children: [
      {
        name: "მოსწავლე",
        to: "/privacy-policy",
      },
      {
        name: "სტუდენტი",
        to: "#",
      },
      {
        name: "კურსდამთავრებული",
        to: "#",
      },
    ],
  },
  {
    name: "მოწყობილობები",
    to: "/",
    icon: <HDSvg />,
    label: "Devices",
    children: [
      {
        name: "მოსწავლე",
        to: "/privacy-policy",
      },
      {
        name: "სტუდენტი",
        to: "#",
      },
      {
        name: "კურსდამთავრებული",
        to: "#",
      },
    ],
  },
  {
    name: "მომხმარებლების მართვა",
    to: "/",
    icon: <UsersSvg />,
    label: "User Control",
    children: [
      {
        name: "მოსწავლე",
        to: "/privacy-policy",
      },
      {
        name: "სტუდენტი",
        to: "#",
      },
      {
        name: "კურსდამთავრებული",
        to: "#",
      },
    ],
  },
];
