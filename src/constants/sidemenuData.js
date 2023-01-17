import { FaUserAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { RiSurveyFill } from "react-icons/ri";

const iconColor = "#8f9691";
const activeIconColor = "#16348D";

const sidemenuData = [
  {
    id: "viewuser",
    label: "Surgeons",
    icon: <FaUserAlt size={18} color={iconColor} />,
    activeIcon: <FaUserAlt size={18} color={activeIconColor} />,
    to: `view-surgeons`,
  },
  {
    id: "viewcategories",
    label: "Categories",
    icon: <MdCategory size={18} color={iconColor} />,
    activeIcon: <MdCategory size={18} color={activeIconColor} />,
    to: `view-categories`,
  },
  {
    id: "viewsurveys",
    label: "Surveys",
    icon: <RiSurveyFill size={18} color={iconColor} />,
    activeIcon: <RiSurveyFill size={18} color={activeIconColor} />,
    to: `view-surveys`,
  },
];

export default sidemenuData;
