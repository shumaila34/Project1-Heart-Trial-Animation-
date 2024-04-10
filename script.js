 
const bodyEl = document.querySelector("body");
        bodyEl.addEventListener("mousemove", (event) => {
            const XPos = event.offsetX;
            const YPos = event.offsetY;
            const spanEl = document.createElement("span");
            spanEl.style.left = XPos + "px";
            spanEl.style.top = YPos + "px";

            bodyEl.appendChild(spanEl);
        });
