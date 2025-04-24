import React from "react";
import Section from "../Section";
import ActivityCard from "./ActivityCard";
import { activities } from "../../data/portfolioData";

const Activities: React.FC = () => (
  <Section title="Activities" id="activities">
    {activities.map((act, index) => (
      <ActivityCard key={index} activity={act} />
    ))}
  </Section>
);

export default Activities;
