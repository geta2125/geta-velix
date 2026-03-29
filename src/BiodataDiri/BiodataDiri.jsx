import ProfileHeader from "./ProfileHeader";
import InfoDetail from "./InfoDetail";
import Pendidikan from "./Pendidikan";
import Organisasi from "./Organisasi";
import SocialMedia from "./SocialMedia";

export default function BiodataDiri() {
    const dataSaya = {
        nama: "Geta Dewi Artika Sari",
        nim: "2457301061",
        prodi: "Sistem Informasi",
        kampus: "Politeknik Caltex Riau",
        email: "geta24si@mahasiswa.pcr.ac.id",
        social: {
            github: "https://github.com/geta2125",
            youtube: "https://www.youtube.com/@gtdwatksr"
        },
        skill: ["UI/UX Design", "Business Analysis", "System Analysis"]
    };

    return (
        <main className="profile-card">

            <ProfileHeader data={dataSaya} />

            <hr className="divider" />

            <InfoDetail data={dataSaya} />

            <div className="experience-section">
                <Pendidikan />
                <Organisasi />
            </div>

            <SocialMedia social={dataSaya.social} />

        </main>
    );
}