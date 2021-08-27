import styles from "./team.module.css";
import TeamCard from "./TeamCard";
import { teamMembers } from "./TeamData";
export default function Team() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>OUR TEAM</h1>
      <h2 className={styles.subHeading}>
        An incredible team of <br /> amazing individuals
      </h2>
      <div className={styles.teamMembersWrapper}>
        {teamMembers.map(({ image, name, title, twitter, github }) => (
          <TeamCard
            name={name}
            image={image}
            title={title}
            twitter={twitter}
            github={github}
          />
        ))}
      </div>
    </div>
  );
}
