export default function SkillBadge({ skills }) {
    return (
        <div className="badge-container">
            {skills.map((s) => (
                <span key={s}className="skill-badge">
                    {s}
                </span>
            ))}
        </div>
    );
}