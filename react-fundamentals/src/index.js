import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Revolucao from "./assets/revolucaoDosBichos.jpg";
import Guerra from "./assets/arteDaGuerrajpg.jpg";
import Principe from "./assets/oPrincipe.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book
        titule={"A Revolução dos Bichos"}
        image={Revolucao}
        author={"Geoge Orwell"}
      />
      <Book titule={"A arte da guerra"} image={Guerra} author={"Sun Tzu"} />
      <Book
        titule={"O Príncipe de Maquiavel"}
        image={Principe}
        author={"Nicolau Maquiavel"}
      />
    </section>
  );
}
const Image = ({ image }) => <img alt="Book" src={image} />;

const Title = ({ titule }) => <h2>{titule}</h2>;
const Author = ({ author }) => <h4>{author}</h4>;
const Book = ({ titule, author, image }) => {
  return (
    <article className="book">
      <Title titule={titule} />
      <Author author={author} />
      <Image image={image} />
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList className="booklist" />);
