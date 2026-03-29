export default function Container({ children }) {
    return (
        <div className="wrapper"> {}

            <div className="container-wrapper">

                <header className="container-header">
                    <h1>Portofolio Mahasiswa</h1>
                </header>

                {children}

                <footer className="container-footer">
                    <p>@ 2025 - Politeknik Caltex Riau</p>
                </footer>

            </div>

        </div>
    );
}