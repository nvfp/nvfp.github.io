import entryPoint from "../shared_scripts/entry_point/index.js";
import { addAct } from "../shared_scripts/stk/index.js";

entryPoint(() => {
    const dst = "https://nvalentinus.com" + window.location.pathname + window.location.search;
    addAct(`Redirect ${window.location.href}  ->  ${dst}`)
    setTimeout(() => {
        window.location.href = dst;
    }, 1300);
});
