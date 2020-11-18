import { useState, createContext } from 'react'

export const BookContext = createContext()

export const BookProvider = (props) => {
    const [books, setBooks] = useState([
        {
          id: 1,
          name: "Lord of the rings",
          price: 45,
          imageUrl: "https://i.imgur.com/Iavhkzg.jpeg",
        },
        {
          id: 2,
          name: "Harry Potter",
          price: 145,
          imageUrl: "https://picsum.photos/200",
        }
      ]);

      return(
          <BookContext.Provider value={[books, setBooks]}>
              {props.children}
          </BookContext.Provider>
      )
}


