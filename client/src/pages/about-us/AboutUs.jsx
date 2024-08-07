import React from "react";
import MissionVisionExperience from "../../components/sections/mission-vision-experience/MissionVisionExperience.jsx";
import TeamMembers from "../../components/sections/team-members/TeamMembers.jsx";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <section className="about-us-container">
            <MissionVisionExperience />
            <TeamMembers />
        </section>
    );
};

export default AboutUs;