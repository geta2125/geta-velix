import SkillBadge from "./SkillBadge";

export default function ProfileHeader({ data }) {
    return (
        <section className="profile-header">

            <div className="avatar-container">
                <img src="/img/foto.jpeg" alt="Geta" className="avatar" />
            </div>

            <h1 className="name">{data.nama}</h1>

            <p className="role">
                {data.prodi} @ {data.kampus}
            </p>

            <SkillBadge skills={data.skill} />

        </section>
    );
}