import React from "react";
import ReactDom from "react-dom";

//     CSS
import "./style.css"

function Booklist() {
  return ( 
  <section className="booklist">
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </section>);
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />     
      <Author />
    </article>
)};

const Image = () => {
  return (
  <img id="img1" src="https://i.pinimg.com/originals/76/97/0f/76970f6adc8216ba05ec4b506e50c074.jpg" alt=''/>
)}

const Title = () => {
  return <h1>Some name</h1>
}

const Author = () => <h4>Some Author</h4>;

ReactDom.render(<Booklist />, document.getElementById("root"));
