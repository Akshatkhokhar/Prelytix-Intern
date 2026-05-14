function SkillBadge({ name, level }) {
  return (
    <div className="ak-skill-badge">
      <span className="ak-skill-name">{name}</span>
      <span className="ak-skill-level">{level}% {level >= 90 && "🔥"}</span>
    </div>
  );
}

export default SkillBadge;
