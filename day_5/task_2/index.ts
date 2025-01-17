type Banknotes = {
    [denomination: number]: number; 
  };
  
  function optimalBanknotes(sum: number): Banknotes {
    if (sum <= 0 || !Number.isInteger(sum)) {
      throw new Error("Введите целое положительное число.");
    }
  
    const denominations = [100, 50, 10, 5, 2, 1];
    const break_banknotes: Banknotes = {};
  
    for (const denomination of denominations) {
      const count = Math.floor(sum / denomination); 
      if (count > 0) {
        break_banknotes[denomination] = count;
        sum -= count * denomination; 
      }
    }
  
    return break_banknotes;
  }
  
  const input = prompt("Введите сумму для разбиения на купюры (целое положительное число):");
  
  if (input !== null) {
    try {
      const sum = parseInt(input, 10);
      const result = optimalBanknotes(sum);
  
      console.log(`Сумма: ${sum}`);
      console.log("Разбиение на купюры:", result);
    } catch (error) {
      console.error((error as Error).message);
    }
  }
  