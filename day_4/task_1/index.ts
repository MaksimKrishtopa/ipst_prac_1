const cleanUserData = async (users: { id: string; name: string; email: string; isActive: boolean }[]) => {
    if (Math.random() < 0.1) {
      throw new Error("Случайная ошибка");
    }
    const activeUsers = users.filter(user => user.isActive);
    const cleanedUsers = activeUsers.map(user => {
      return {
        id: user.id,
        name: user.name.trim().toLowerCase(), 
        email: user.email.toLowerCase(), 
        isActive: user.isActive 
      };
    });
    return cleanedUsers;
  };
  const users = [
    { id: "1", name: "Max", email: "max@mail.ru", isActive: true },
    { id: "2", name: "Andrew", email: "andrew@mail.ru", isActive: false },
    { id: "3", name: "Bobi", email: "bobik@gmail.com", isActive: true },
  ];
  (async () => {
    try {
      const cleanedData = await cleanUserData(users);
      console.log(cleanedData);
    } catch (error) {
      console.error("Ошибка:", (error as Error).message);
    }
  })();
  