import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import more from "../assets/more.svg";
import send from "../assets/send.svg";
import axios from "axios";
import React from "react";

const baseURL = "https://rym3gdth97.execute-api.us-west-2.amazonaws.com/default/bedrockDemo";

const Main = () => {

  const [post, setPost] = React.useState(null);
  const [formValue, setFormValue] = React.useState('');

  React.useEffect(() => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "prompt": "<s>[INST] <<SYS>> Eres un asistente servicial, respetuoso y honesto. Responda siempre de la manera más útil posible y siendo seguro.  Tus respuestas no deben incluir ningún contenido dañino, poco ético, racista, sexista, tóxico, peligroso o ilegal. Asegúrese de que sus respuestas sean socialmente imparciales y de naturaleza positiva. Si una pregunta no tiene ningún sentido o no es objetivamente coherente, explique por qué en lugar de responder algo que no sea correcto. Si no sabe la respuesta a una pregunta, no comparta información falsa. <</SYS>>",
        "top_p": 0.9,
        "temperature": 0.5,
        "max_gen_len": 512
    }),
  };
    fetch(baseURL, requestOptions)
        .then(response => response.json())
        .then((data) => {
          setPost(data);
          console.log(data.name)
        });
  }, []);


  return (
    <div className="main-content scroll pb-48">
      <div className="content">
        <div className="fixed-logo">
          <img src={logo} alt="" width="200" />
        </div>
        <div className="header pt-120">
          <h1>Hola Mónica</h1>
          <h1>¿En qué puedo ayudarte hoy?</h1>
        </div>
        <div className="grid-flex mt-48">
          <a className="btn btn-secondary" href="">
            <img src={more} alt="" width="24" /> Enviar un catálogo
            personalizado
          </a>
          <a className="btn btn-secondary" href="">
            <img src={more} alt="" width="24" /> Aprender algo nuevo
          </a>
          <a className="btn btn-secondary" href="">
            <img src={more} alt="" width="24" /> Crear un post para redes
          </a>
        </div>
        <div className="input-prompt pb-80 pt-180">
          <div className="text-left">
            <h4>
              Lección: Cómo Vender en Facebook para Consultoras de Belleza
            </h4>
            <p>
              Facebook es una poderosa plataforma para vender productos de
              belleza. Comienza creando una página profesional donde puedas
              publicar contenido sobre los productos que ofreces. Asegúrate de
              incluir fotos atractivas, descripciones claras y enlaces a tu
              catálogo. Usa el Marketplace de Facebook para llegar a un público
              más amplio, publicando tus productos con imágenes de alta calidad
              y descripciones detalladas.
            </p>
            <p>
              Interactúa con tu audiencia respondiendo a comentarios y mensajes
              rápidamente. También puedes unirte a grupos de Facebook
              relacionados con la belleza y ofrecer asesoría, demostrando tu
              experiencia. No olvides utilizar anuncios pagados para promocionar
              productos y llegar a más personas.
            </p>
            <p>
              Descubre más sobre cómo vender en Facebook aquí: Link al Curso
              Completo de Ventas en Facebook
            </p>
            <p>Otras Lecciones Complementarias:</p>
            <p>¿Necesitas más información sobre este u otro tema?</p>
          </div>

          <div className="text-right">
            <h3>Quiero aprender sobre....</h3>
          </div>
        </div>
      </div>
      <form>
        <div className="prompt">
          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Comienza a escribir..."
              name="prompt"
              id=""
              cols="30"
              rows="3" />

          <button type="submit" disabled={!formValue} className="btn btn-rounded-primary"><img src={send} alt="" width="24" /></button>
        </div>
    </form>
      
    </div>
  );
};

export default Main;
