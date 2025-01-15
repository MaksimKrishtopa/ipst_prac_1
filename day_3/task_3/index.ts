enum UserStatus {
    Active = "active",
    Delete = "delete",
  }

const fakeApi = (delay: number): Promise<{ id: string, name: string, phone: string, email: string, location: string, status: UserStatus }[]> => {
    
    return new Promise((resolve) => {
   
      const data = [
        {
          id: crypto.randomUUID(),
          name: "Max",
          phone: "89234259069",
          email: "max@mail.ru",
          location: "Tomsk, Russia",
          status: UserStatus.Active,
        },
        {
          id: crypto.randomUUID(),
          name: "Andrew",
          phone: "89618893909",
          email: "andrew@mail.ru",
          location: "Moscow, Russia",
          status: UserStatus.Delete,
        },
        {
          id: crypto.randomUUID(),
          name: "Bobi",
          phone: "+12345678910",
          email: "bobi@gmail.com",
          location: "Chicago, USA",
          status: UserStatus.Active,
        },
      ];
      setTimeout(() => {
        resolve(data); 
      }, delay);
    });
  };

  (async () => {
    console.log("Запрос данных");
    try {
      const users = await fakeApi(2000);
      console.log(users);
    } catch (error) {
      console.error("Ошибка", error);
    }
  })();


  