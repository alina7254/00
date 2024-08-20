import React from "react";
import img1 from "@/assets/burunduk6.png";
import ReplyBtn from "./ReplyBtn";


const HeaderThread = () => {
  return (
    <div className="flex flex-col p-4">
      <div className="chat chat-bubble bg-clip-border bg-base-200">
        <div className="chat-header text-sm text-base-content">
          Аноним 18/04/2024 Чтв 14:55:29 №123456789{" "}
          <span className="uppercase text-accent font-bold">op</span>
        </div>
        <div className="flex flex-row">
          <img src={img1} alt="бурундук.жпг" className="flex w-1/4 h-1/4"></img>

          <span className="flex flex-col text-base-content">
            <p className="leading-relaxed subpixel-antialiased tracking-wide uppercase text-primary font-bold text-xl font-mono font-roboto-mono">
              lorem ipsum
            </p>


            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam vitae elementum mi. Vivamus facilisis porta augue, non gravida mi dignissim a.
            Sed cursus tortor varius arcu sodales, nec vehicula ex tincidunt.
            Curabitur vitae quam feugiat justo pulvinar vehicula in at ex.
            Curabitur vel ante condimentum, pharetra lacus eu, ultricies turpis.
            Suspendisse semper auctor porta. Pellentesque eget massa at magna mollis hendrerit.
            Aenean et tincidunt metus, a tincidunt neque. Curabitur placerat, risus eget sollicitudin sagittis, lectus massa vestibulum purus, vitae tempus eros quam eget libero.
            Proin tempus dapibus tortor, feugiat imperdiet nunc mollis eget. Suspendisse at ex vehicula, rutrum tellus non, sollicitudin quam.
            Sed tincidunt dui non diam dictum porta in at purus.
            Sed sit amet lorem maximus, viverra nunc porttitor, tristique risus.
            Praesent eu vulputate ipsum, at aliquet sapien.
            Praesent sed justo eget mi iaculis porttitor a sed mi.
          </span>
        </div>
        
        <div className="chat-footer">
        <ReplyBtn></ReplyBtn>
        </div>
      </div>
    </div>
  );
};

export default HeaderThread;
