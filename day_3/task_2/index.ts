const fetchData = async (url: string): Promise<any> => {
    const response = await fetch(url)
    return response.json()
  };
  
  (async () => {
    const apiUrl = "https://reqres.in/api/users/";
    try {
      const result = await fetchData(apiUrl)
      console.log(result)
    } catch (error) {
      console.error("Ошибка при загрузке данных", error instanceof Error ? error.message : error)
    }
  })();
  