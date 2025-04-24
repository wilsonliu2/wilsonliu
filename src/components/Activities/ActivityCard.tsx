import React from "react";
import { ActivityItem } from "../../data/portfolioData";

interface ActivityCardProps {
  activity: ActivityItem;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => (
  <div className="p-3 rounded-lg animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors">
    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
      <h3 className="text-md font-semibold text-slate-200">{activity.title}</h3>
      <p className="text-xs text-slate-400 mt-1 sm:mt-0">{activity.duration}</p>
    </div>
    <p className="text-sm font-medium text-slate-300 mb-1.5">
      {activity.organization}
    </p>
    <p className="text-xs text-slate-400">{activity.description}</p>
  </div>
);

export default ActivityCard;
