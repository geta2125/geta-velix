export default function InfoDetail({ data }) {
    return (
        <div className="details-grid">

            <div className="info-card">
                <label>NIM</label>
                <p>{data.nim}</p>
            </div>

            <div className="info-card">
                <label>Email</label>
                <p>{data.email}</p>
            </div>

        </div>
    );
}