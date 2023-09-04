import designerSvg from "/assets/svg/designer.svg";
import developerModeSvg from "/assets/svg/developerMode.svg";
import activitiesSvg from "/assets/svg/activities.svg";
import headphoneSvg from "/assets/svg/headphones.svg";
import hardDriveSvg from "/assets/svg/hard-drive.svg";
import usersSvg from "/assets/svg/users.svg";

export const items = [
  {
    name: "UI/UX დიზაინერი",
    to: "/",
    icon: designerSvg,
  },
  {
    name: "FRONT-END დეველოპერი",
    to: "/privacy-policy",
    icon: developerModeSvg,
  },
  {
    name: "FrontEnd-კონკურსები",
    to: "/",
    icon: activitiesSvg,
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
    icon: headphoneSvg,
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
    icon: hardDriveSvg,
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
    icon: usersSvg,
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
