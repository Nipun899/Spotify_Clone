import { Icon } from "@iconify/react";
const IconText = ({ iconName, displayText, active }) => {
  return (
    <div className="flex items-center justify-start cursor-pointer">
      <div className="icon px-5 py-2 ">
        <Icon icon={iconName} color={active?`white`:`gray `} fontSize={20} />
      </div>
      <div className={`displayText ${active?"text-white":"text-gray-400 hover:text-white "}  font-semibold`}>{displayText}</div>
    </div>
  );
};
export default IconText;
