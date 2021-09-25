import React, {Component} from 'react';
import Panel from "../bookViewers/panel";

class Lib extends Component {
    render() {
        const latestBooks = [
            {id:1, title:"Пиковая дама", author:"Пушкин", image:"https://api.v2.gersun.the-o.co/media/3_%D0%A8%D0%B5%D1%81%D1%82%D0%B8%D0%B3%D1%80%D0%B0%D0%BD%D0%BD%D0%B8%D0%BA%D0%B0_8lt1m4x.jpeg"},
            {id:2, title:"Преступление и наказание", author:"Достоевский", image:"https://api.v2.gersun.the-o.co/media/SL_133_DWO_%D1%81_%D0%BA%D1%80%D1%8B%D1%88%D0%BA%D0%B0%D0%BC%D0%B8.jpeg"},
            {id:3, title:"Вино из одуванчиков", author:"Бредбери", image:"https://api.v2.gersun.the-o.co/media/3xSL167_%D1%81_%D0%BA%D1%80%D1%8B%D1%88%D0%BA%D0%B0%D0%BC%D0%B8.jpeg"},
            {id:4, title:"Цифровая крепость", author:"Браун", image:"https://cdn1.ozone.ru/multimedia/wc1200/1011429201.jpg"},
            {id:5, title:"Пиковая дама", author:"Пушкин", image:""},
            {id:6, title:"Преступление и наказание", author:"", image:"https://api.v2.gersun.the-o.co/media/SL_133_DWO_%D1%81_%D0%BA%D1%80%D1%8B%D1%88%D0%BA%D0%B0%D0%BC%D0%B8.jpeg"},
            {id:7, title:"Вино из одуванчиков", author:"Бредбери", image:"https://api.v2.gersun.the-o.co/media/3xSL167_%D1%81_%D0%BA%D1%80%D1%8B%D1%88%D0%BA%D0%B0%D0%BC%D0%B8.jpeg"},
            {id:8, title:"", author:"Браун", image:"https://cdn1.ozone.ru/multimedia/wc1200/1011429201.jpg"}
        ]
        return (
            <div>
                <h1>Library</h1>
                <Panel bookSet={latestBooks}/>
            </div>
        );
    }
}

export default Lib;