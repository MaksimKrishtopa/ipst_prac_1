const delayPromise = (delay: number, message: string): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message)
      }, delay)
    });
  };
  
  delayPromise(3000, "Hellooo")
    .then((result) => console.log(result));
  