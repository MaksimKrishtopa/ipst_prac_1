type UserWithGadget = {
    id: string
    name: string
    gadget: {
      id: string
      name: string
      price: string | undefined
    };
  };
  
  type UserWithGadgets = {
    id: string
    name: string
    gadgets: {
      id: string
      name: string
      price: string | undefined
    }[];
  };
  
  const input_data: UserWithGadget[] = [
    {
      id: "1",
      name: "Khalid Kashmiri",
      gadget: { id: "101", name: "Phone", price: "1000" },
    },
    {
      id: "2",
      name: "Khidir Karawita",
      gadget: { id: "102", name: "Tablet", price: undefined },
    },
    {
      id: "1",
      name: "Khalid Kashmiri",
      gadget: { id: "103", name: "Laptop", price: "1500" },
    },
  ];
  
  const groupUserGadgets = (users: UserWithGadget[]): UserWithGadgets[] => {
    const user_map: { [id: string]: UserWithGadgets } = {};
  
    users.forEach(({ id, name, gadget }) => {

      if (!user_map[id]) {
        user_map[id] = { id, name, gadgets: [] }
      }
  
      user_map[id].gadgets.push(gadget)
    });
  
    return Object.values(user_map);
  };
  
  console.log(groupUserGadgets(input_data))
  