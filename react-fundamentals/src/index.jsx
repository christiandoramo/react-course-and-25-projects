import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import "./index.css";
import Revolucao from "./assets/revolucaoDosBichos.jpg";
import Guerra from "./assets/arteDaGuerra.jpg";
import Principe from "./assets/oPrincipe.jpg";

const booksArray = [
  {
    titule: "A arte da guerra",
    image: Guerra,
    author: "Sun Tzu",
    link: "https://www.amazon.com.br/arte-guerra-Sun-Tzu/dp/8594318596/ref=d_pd_sim_sccl_3_4/132-4267456-1774011?pd_rd_w=b6drP&content-id=amzn1.sym.45c7db3b-eda8-4e45-8990-7b4f7d989e0b&pf_rd_p=45c7db3b-eda8-4e45-8990-7b4f7d989e0b&pf_rd_r=GW8FW3C779YMZGDH3Q1Z&pd_rd_wg=46FER&pd_rd_r=168cdbe4-e694-4e1f-866d-7d1f60624d3b&pd_rd_i=8594318596&psc=1",
  },
  {
    titule: "O Príncipe de Maquiavel",
    image: Principe,
    author: "Nicolau Maquiavel",
    link: "https://www.amazon.com.br/dp/8572839046/ref=sspa_dk_detail_4?psc=1&pd_rd_i=8572839046&pd_rd_w=2YgRD&content-id=amzn1.sym.dd14805d-2347-4e14-a8a3-4a68eee2b6c8&pf_rd_p=dd14805d-2347-4e14-a8a3-4a68eee2b6c8&pf_rd_r=GP94BG4YPF7PQ6B8Y7X0&pd_rd_wg=kiwFs&pd_rd_r=8e2b49ff-0f2a-4063-8b62-66f567626ad6&s=books&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw",
  },
  {
    titule: "A Revolução dos Bichos",
    image: Revolucao,
    author: "George Orwell",
    link: "https://www.amazon.com.br/revolu%C3%A7%C3%A3o-dos-bichos-conto-fadas/dp/8535909559/ref=asc_df_8535909559/?tag=googleshopp00-20&linkCode=df0&hvadid=379738402701&hvpos=&hvnetw=g&hvrand=391533519928598003&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001625&hvtargid=pla-333762631610&psc=1",
  },
];

const Titulo = styled.h1`
  width: 100%;
  text-align: center;
`;

function BookFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault(); // Evita a recarga da página
    const submittedValue = e.target.busca.value; // 'busca' é o nome do campo de entrada
    setSearchTerm(submittedValue);

    const filtered = booksArray.filter((book) =>
      book.titule.trim().toLowerCase().includes(searchTerm.trim().toLowerCase())
    );

    setFilteredBooks(filtered);
  }

  return (
    <>
      <form style={{ margin: "20px" }} onSubmit={handleSubmit}>
        <label htmlFor="busca"></label>
        <input
          placeholder="busque o livro aqui"
          type="text"
          id="busca"
          name="busca"
          onChange={(e) => setSearchTerm(e.target.value)} // Atualize searchTerm no evento onChange
        />
        <button onSubmit={handleSubmit}>Buscar</button>
      </form>
      <Titulo>Best Books</Titulo>
      <BookList booklist={filteredBooks} />
    </>
  );
}

const Book = ({ image, titule, author, number, link }) => (
  <article className="book">
    <span className="number"># {number + 1}</span>
    <h2>{titule}</h2>
    <h4>{author}</h4>
    <a target="_blank" href={link} rel="noreferrer">
      <img alt="Book" src={image} />
    </a>
  </article>
);

const BookList = ({ booklist }) => {
  return (
    <section className="booklist">
      {booklist.map((book, index) => (
        <Book key={index} {...book} number={index} />
      ))}
    </section>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookFilter />);
