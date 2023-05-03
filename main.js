const productUrl = window.location.href; // pobranie linku aktualnej strony
const productImage = document
  .querySelector('.gallery-item__image')
  .getAttribute('src'); // pobranie zawartości która znajduje się w atrybucie src czyli zdjęcia
const productName = document.querySelector(
  '.product-intro__title-text'
).innerText; // pobranie zawartości znacznika o klasie .product-intro__title-text
const productPrice = document.querySelector('.price__value').innerText; // pobranie zawartosci znacznika o klasie .price__value

const products = {
  productUrl,
  productImage,
  productName,
  productPrice,
}; // stworzenie obiektu i przypisanie do niego pobranych elementów strony

const key = localStorage.getItem('electronicProducts'); // pobranie klucza z local storage o nazwie electronicProducts który przechowuje produkty

let toJS = JSON.parse(key); // przekonwertowanie ze stringa na obiekt

if (toJS === null) toJS = []; // jeśli zmienna toJS jest null czyli za pierwszym razem kiedy nic nie ma w local storage (z kluczem electronicProducts) to tworzymy pustą tablice i przypisujemy ją do zmiennej toJS.

toJS.push(products); // używamy metody tablicowej push która dodaje element (obiekt products) na koniec tablicy toJS

localStorage.setItem('electronicProducts', JSON.stringify(toJS)); // zapisanie produktów w local storage. Wykorzystujemy klucz electronicProducts i konwertuje na string ponieważ dane w local storage muszą miec typ string.
