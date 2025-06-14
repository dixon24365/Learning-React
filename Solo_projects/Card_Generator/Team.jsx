import TeamMember from "./TeamMember.jsx";
import teamData from "./teamData.js";

export default function Team() {
  const teamMemberEntry = teamData.map((teamMemberr) => {
    return (
      <TeamMember
        name={teamMemberr.name}
        profilePic={teamMemberr.profilePic}
        role={teamMemberr.role}
        bio={teamMemberr.bio}
      />
    );
  });
  return(
  <>
  { teamMemberEntry }
  </>
  )
}
