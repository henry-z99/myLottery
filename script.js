function generateNumbers() {  
    const numbersContainer = document.getElementById('lottoNumbers');  
    numbersContainer.innerHTML = ''; // 清空之前生成的号码  
  
    // 假设大乐透是从1-35中选择5个号码，从1-12中选择2个号码  
    const mainNumbers = [];  
    const bonusNumbers = [];  
  
    // 生成主号码  
    while (mainNumbers.length < 5) {  
        const randomNumber = Math.floor(Math.random() * 35) + 1; // 生成1到35之间的随机数  
        if (!mainNumbers.includes(randomNumber)) {  
            mainNumbers.push(randomNumber);  
        }  
    }  
  
    // 生成附加号码  
    while (bonusNumbers.length < 2) {  
        const randomBonus = Math.floor(Math.random() * 12) + 1; // 生成1到12之间的随机数  
        if (!bonusNumbers.includes(randomBonus)) {  
            bonusNumbers.push(randomBonus);  
        }  
    }  
  
    // 排序并显示号码  
    mainNumbers.sort((a, b) => a - b);  
    bonusNumbers.sort((a, b) => a - b);  
  
    const mainNumbersStr = mainNumbers.join(', ');  
    const bonusNumbersStr = bonusNumbers.join(', ');  
  
    numbersContainer.innerHTML = `主号码: ${mainNumbersStr}<br>附加号码: ${bonusNumbersStr}`;  
}