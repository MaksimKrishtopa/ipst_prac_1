type Choice = "Камень" | "Ножницы" | "Бумага";

const choices: Choice[] = ["Камень", "Ножницы", "Бумага"];

function playGame(playerChoice: Choice): { 
    player: Choice; 
    computer: Choice; 
    result: string; 
}


{
    const computerChoice: Choice = choices[Math.floor(Math.random() * choices.length)];

    let result: string;
    if (playerChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (playerChoice === "Камень" && computerChoice === "Ножницы") ||
        (playerChoice === "Ножницы" && computerChoice === "Бумага") ||
        (playerChoice === "Бумага" && computerChoice === "Камень")
    ) {
        result = "Победа!";
    } else {
        result = "Не повезло(";
    }

    return {
        player: playerChoice,
        computer: computerChoice,
        result,
    };
}

const input = prompt("Введите  введите 'Камень', 'Ножницы' или 'Бумага':");

if (input && choices.includes(input as Choice)) {
    const playerChoice = input as Choice;
    const gameResult = playGame(playerChoice);
    console.log(`Вы выбрали: ${gameResult.player}`);
    console.log(`Компьютер выбрал: ${gameResult.computer}`);
    console.log(gameResult.result);
} else {
    console.error("Ошибка: Пожалуйтса, введите 'Камень', 'Ножницы' или 'Бумага'.");
}
