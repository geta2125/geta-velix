import { createRoot } from "react-dom/client";
import TailwindCSS from "./Tailwindcss";
import './tailwind.css';

createRoot(document.getElementById("root"))
    .render(
        <div>
            <TailwindCSS/>
        </div>
    )