import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Revolucao from "./assets/revolucaoDosBichos.jpg";
import Guerra from "./assets/arteDaGuerra.jpg";
import Principe from "./assets/oPrincipe.jpg";
import SearchInput from "./components/searchInput";

const booksArray = [{titule:"A arte da guerra", image:{Guerra}, author:"Sun Tzu"},{titule:"O Príncipe de Maquiavel", image:{Principe}, author:"Nicolau Maquiavel"},{titule:"A Revolução dos Bichos", image:{Revolucao}, author:"George Orwell"}];

function bookfilter(){
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit (){

  }

  useEffect(() =>{
    const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
    setFilteredProducts(filtered);
    }  );

  )
  return(
    <>
    <form>
    <SearchInput books={booksArray} searchTerm={searchTerm} onClick={handleSubmit} />
    </form>
    </>
  )
}

function BookList ({booklist}){
    booklist.map((book, index) =>{
    const Image = ({ image }) => <img alt="Book" src={image} />;
    const Title = ({ titule }) => <h2>{titule}</h2>;
    const Author = ({ author }) => <h4>{author}</h4>;
      <article key={index} className="book">
        <Title />
        <Author/>
        <Image/>
      </article>
    })
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList className="booklist" />);
