document.addEventListener("DOMContentLoaded", function () {
    const optionMenu = document.querySelector(".select-menu"),
          selectBtn = optionMenu.querySelector(".select-btn"),
          options = optionMenu.querySelectorAll(".option"),
          sBtn_text = optionMenu.querySelector(".sBtn-text");

    selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

    options.forEach(option => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active"); // Close the dropdown

            switch (selectedOption) {
                case 'Optimize my code':
                    CoCoJob = 1;
                    break;
                case "Write the code's function":
                    CoCoJob = 2;
                    break;
                case 'Write feedback':
                    CoCoJob = 3;
                    break;
                case 'Provide quality code suggestions':
                    CoCoJob = 4;
                    break;
                default:
                    CoCoJob = 0;
            }

            console.log(`Selected option: ${selectedOption}, CoCoJob: ${CoCoJob}`);
        });
    });
});
