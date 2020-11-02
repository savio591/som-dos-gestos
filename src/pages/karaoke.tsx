import React from "react";
import "../styles/global.css";
import "../styles/pages/karaoke.css";

function Karaoke() {
    const letra = "Alguém com seu carinho";
    const letra2 = "E lembrei de um tempo";
    const letra3 = "Porque o passado";
    const letra4 = "Me traz uma lembrança";

  return (
      <div id="container">
        <div className="camera_interprete">

        </div>

        <div className="camera_usuario">
        
        </div>

        <div className="letras">
            <p>
                <span data-text={letra} className="word">{letra}</span>
            </p>
            <p>
                <span data-text={letra2} className="word2">{letra2}</span>
            </p>
            <p>
                <span data-text={letra3} className="word3" >{letra3}</span>
            </p>
            <p>
                <span data-text={letra4} className="word4" >{letra4}</span>
            </p>
        </div>
      </div>
  )
}
  export default Karaoke;