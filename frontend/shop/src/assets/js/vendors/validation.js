(()=>{"use strict";const t=document.querySelectorAll(".needs-validation");Array.from(t).forEach((t=>{t.addEventListener("submit",(e=>{t.checkValidity()||(e.preventDefault(),e.stopPropagation()),t.classList.add("was-validated")}),!1)}))})();