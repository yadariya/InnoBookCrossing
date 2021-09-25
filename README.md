# :green_book: InnoBookCrossing - Application for sharing books at Innopolis

## :mag: General Information 

### Description

The application is designed to help people share books with each other. All you need to do - register on a website using your Telegram Alias. 

### The motivation of the project 

We all have books that we are not currently reading. Why should a book lay on a shelf if it can be useful for another person? Using the InnoBookCrossing application book owners can easily borrow available books and book lovers take it! 

### Features

* User can publish books which he\she has.
* User can borrow the book, if it is available or wait in a queue otherwise.
* User can search for an interesting book using filters.
* User can publish the book which he\she wants to find in the printed version.
* Book owner can leave feedback on a user, who took the book recently.

### Frameworks or technology

* Java
* Spring
* Swagger
* Javascript
* React

### Authors
 
 * Dariya Vakhitova
 * Alexandr Kedalo
 * Ruslan Nurutdinov
 * Roman Mukhtarov
 
## :round_pushpin: Requirement Engineering 
[Link](https://github.com/yadariya/InnoBookCrossing/blob/master/Requirement%20Engineering.pdf)

## :scroll: Design Documentation

In the development process the following principles were followed as closely as possible
* SOLID
  * single responsibility 
  * open–closed
  * Liskov substitution
  * interface segregation
  * dependency inversion

   Code Example:
   '''

    public class Book {
        @Id
        @SequenceGenerator(name = "IdSeq", sequenceName = "book_seq", allocationSize = 1)
        @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "IdSeq")
        Integer id;
        @Column(name = "title")
        String title;
        @Column(name = "author")
        String author;
        @Column(name = "genre")
        String genre;
        @Column(name = "owner")
        String owner; // заменить на юзера
        @Column(name = "description")
        String description;
        @Column(name = "image")
        String image;

        @ManyToOne//(fetch = FetchType.LAZY, optional = false)
        @JoinColumn(name = "user_id", nullable = false)
        @JsonIgnore
        private User user;

        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }
    }

 '''

* REST
  * Client–server architecture
  * Statelessness
  * Cacheability
  * Layered system
  * Code on demand
  * Uniform interface

   Code Example:

   '''

   export default function BookInfo({book}){
    return(
        <div className="info">
            <div className="imgCover">
                {book.image ? (
                    <img className="bookImg" src={book.image}/>
                ) : (
                    <img className="bookImg" src="no_image.png"/>
                )}
            </div>
            <div className="bookInfo">
                <h1>{book.title}</h1>
                <h2>{book.author}</h2>
                <h3>Genre: {book.genre}</h3>
                <br/>
                <p>Book owner: {book.owner}</p>
                <p>{book.description}</p>
            </div>


        </div>
    )
}

   '''

Frameworks:

* MVC
* Composite pattern 

## :hammer: Architecture

### Screenshots

*will be soon*

### Code example

*will be soon*

### Demo

*will be soon*

### Installation

*will be soon*
