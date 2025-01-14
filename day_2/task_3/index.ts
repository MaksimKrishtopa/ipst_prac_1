
type SourceData = {
    title: string
    year: number
    author: string
  }
  
  type TargetData = {
    title: string
    year: number
    author: string
    preview: string
    url: string
  }
  

  const createBook = (title: string, year: number, author: string): TargetData => {

    return {
      title,
      year,
      author,
      preview: `Название: ${title}, Автор: ${author}, Год: ${year}`,
      url: `www.someurl.com/preview?title=${title}&year=${year}&author=${author}`
    }
  }
  

  const source: SourceData = {
    title: "Harry Potter",
    year: 1997,
    author: "J.K. Rowling"
  }
  
  
  console.log(createBook(source.title, source.year, source.author))
  