export default function SocialMedia({ social }) {
    return (
        <footer className="profile-footer">

            <div className="social-links">

                <a href={social.github} target="_blank" className="social-item">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
                        className="icon-social" 
                    />
                    <span>GitHub</span>
                </a>

                <a href={social.youtube} target="_blank" className="social-item">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" 
                        className="icon-social" 
                    />
                    <span>YouTube</span>
                </a>

            </div>

        </footer>
    );
}