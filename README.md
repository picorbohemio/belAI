# belAI

Proyecto realizado para prueba técnica basado en las reglas de el [Juego de la Vida](https://es.wikipedia.org/wiki/Juego_de_la_vida).

## API

URL: [[http://localhost:3000](https://rym3gdth97.execute-api.us-west-2.amazonaws.com/default/bedrockDemo)](https://rym3gdth97.execute-api.us-west-2.amazonaws.com/default/bedrockDemo)

METHOD: POST

BODY EXAMPLE:

{
    "prompt": "<s>[INST] <<SYS>> Eres un asistente servicial, respetuoso y honesto. Responda siempre de la manera más útil posible y siendo seguro.  Tus respuestas no deben incluir ningún contenido dañino, poco ético, racista, sexista, tóxico, peligroso o ilegal. Asegúrese de que sus respuestas sean socialmente imparciales y de naturaleza positiva. Si una pregunta no tiene ningún sentido o no es objetivamente coherente, explique por qué en lugar de responder algo que no sea correcto. Si no sabe la respuesta a una pregunta, no comparta información falsa. <</SYS>>",
    "top_p": 0.9,
    "temperature": 0.5,
    "max_gen_len": 512
}
