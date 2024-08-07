import React, {
    useState,
    useEffect
} from "react";
import PersonCard from "../../common/cards/person-card/PersonCard.jsx";
import Team from "./TeamMembers.json";
import "./TeamMembers.css";

const TeamMembers = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        setMembers(Team);
    }, []);

    return (
        <section className="team-members-container">
            <div className="header-team-members">
                <div className="half-circle"></div>
            </div>
            <h1>Echa un vistazo a nuestro equipo</h1>
            <div className="cards-container">
                {
                    members.map((member) => {
                        return (
                            <PersonCard 
                                key={member.id}
                                id={member.id}
                                image={member.image}
                                name={member.name}
                                description={member.description}
                                socialMedia={member.social_media}
                            />
                        );
                    })
                }
            </div>
            <div className="footer-team-members">
                <div className="half-circle"></div>
            </div>
        </section>
    );
};

export default TeamMembers;