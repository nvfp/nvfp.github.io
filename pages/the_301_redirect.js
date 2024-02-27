import entryPoint from "../shared_scripts/entry_point/index.js";
import { addAct } from "../shared_scripts/stk/index.js";

entryPoint(() => {
    const dst = document.getElementById("for_js_script").value;
    addAct(`Redirect301: ${window.location.href}  ->  ${dst}`)
    setTimeout(() => {
        window.location.href = dst;
    }, 1300);
});
