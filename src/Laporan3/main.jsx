import { createRoot } from "react-dom/client";
import './tailwind.css';
import Tailwindcss from "./Tailwindcss";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Tailwindcss/>
        </div>
    )