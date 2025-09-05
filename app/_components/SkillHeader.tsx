import React from "react";
import { SkillHeaderProps } from "../_types&data/type";

export default function SkillHeader({ skill }: SkillHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-3 sm:mb-4">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className={`p-1.5 sm:p-2 ${skill.color} rounded-lg text-white`}>
          {React.cloneElement(skill.icon, {
            className: `${skill.icon.props.className || ""} h-4 w-4 sm:h-5 sm:w-5`,
          })}
        </div>
        <h3 className="font-medium text-sm sm:text-base md:text-lg text-gray-900">
          {skill.name}
        </h3>
      </div>
      <span className="text-xs sm:text-sm font-medium text-gray-500">
        {skill.level}%
      </span>
    </div>
  );
}
