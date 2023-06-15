import { SideHomeSvg } from "../../components/SideBar/SideSvgs/SideHomeSvg";
import { EditSvg } from "../../components/SideBar/SideSvgs/EditSvg";
import { ActivitiesSvg } from "../../components/SideBar/SideSvgs/ActivitiesSvg";
import { HDSvg } from "../../components/SideBar/SideSvgs/HDSvg";
import { HeadPhoneSvg } from "../../components/SideBar/SideSvgs/HeadPhoneSvg";
import { UsersSvg } from "../../components/SideBar/SideSvgs/UsersSvg";

export const items = [
  {
    name: "მთავარი",
    to: "/",
    icon: <SideHomeSvg />,
  },
  {
    name: "სწავლებები",
    to: "/privacy-policy",
    icon: <EditSvg />,
  },
  {
    name: "კონკურსები",
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
