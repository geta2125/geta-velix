import { createRoot } from "react-dom/client";
import Container from "./Container";
import BiodataDiri from "./BiodataDiri";
import './custom.css';

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Container>
                 <BiodataDiri/>
            </Container>
        </div>
    )


    // "kenapa cuma panggil BiodataDiri?"
    // "Karena komponen lain adalah child component yang di-manage di dalam BiodataDiri sebagai parent component."