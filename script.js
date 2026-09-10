

console.log("Welcome to Coffee Nest!");

// ==========================
// Back To Top
// ==========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function(){

    if (backToTop) {

        if(window.scrollY > 400){

            backToTop.style.display = "flex";

        }else{

            backToTop.style.display = "none";

        }

    }

});


if (backToTop) {

    backToTop.addEventListener("click", function(){

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

document.addEventListener("DOMContentLoaded", function () {

    const customizeBtn = document.querySelector(".customize-btn");

    if (!customizeBtn) return;

    customizeBtn.addEventListener("click", function () {

        const size = document.querySelector(
            'input[name="coffee-size"]:checked'
        ).value;

        const selects = document.querySelectorAll(
            ".customize-group select"
        );

        const sugar = selects[0].value;
        const milk = selects[1].value;

        const checkboxes = document.querySelectorAll(
            '.extra-options input[type="checkbox"]'
        );

        let extras = [];

        if (checkboxes[0].checked) {
            extras.push("Extra Shot");
        }

        if (checkboxes[1].checked) {
            extras.push("Whipped Cream");
        }

        let message =
            "☕ Your Coffee is Customized!\n\n" +
            "Size: " + size + "\n" +
            "Sugar: " + sugar + "\n" +
            "Milk: " + milk + "\n" +
            "Extras: " + (extras.length ? extras.join(", ") : "None");

        alert(message);

    });

});


// ==========================
// Coffee of the Day
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    const coffeeOfDay = [
        {
            name: "Espresso",
            description: "Rich, bold and intense coffee for a perfect start to your day.",
            price: "PKR 450",
            image: "images/espresso.jpeg"
        },
        {
            name: "Cappuccino",
            description: "Smooth espresso topped with creamy steamed milk foam.",
            price: "PKR 650",
            image: "images/cappuccino.jpeg"
        },
        {
            name: "Latte",
            description: "Smooth and creamy coffee made with rich espresso and milk.",
            price: "PKR 700",
            image: "images/latte.jpeg"
        },
        {
            name: "Mocha",
            description: "Delicious coffee blended with rich chocolate for a sweet treat.",
            price: "PKR 750",
            image: "images/mocha.jpeg"
        },
        {
            name: "Iced Latte",
            description: "Refreshing chilled espresso with creamy milk and ice.",
            price: "PKR 750",
            image: "images/iced-latte.jpeg"
        },
        {
            name: "Caramel Frappé",
            description: "Refreshing caramel coffee blended with ice and topped with whipped cream.",
            price: "PKR 900",
            image: "images/caramel-frappe.jpeg"
        },
        {
            name: "Vanilla Frappé",
            description: "Sweet vanilla coffee blended with ice for a refreshing experience.",
            price: "PKR 900",
            image: "images/vanilla-frappe.jpeg"
        }
    ];

    const today = new Date();
    const dayNumber = Math.floor(
        (today - new Date(today.getFullYear(), 0, 0)) / 86400000
    );

    const coffee = coffeeOfDay[dayNumber % coffeeOfDay.length];

    document.getElementById("coffeeDayName").textContent = coffee.name;
    document.getElementById("coffeeDayDescription").textContent = coffee.description;
    document.getElementById("coffeeDayPrice").textContent = coffee.price;
    document.getElementById("coffeeDayImage").src = coffee.image;
    document.getElementById("coffeeDayImage").alt = coffee.name;

    document.getElementById("coffeeDayBtn").addEventListener("click", function () {

        alert(
            "☕ Today's Special\n\n" +
            coffee.name + "\n" +
            coffee.price + "\n\n" +
            "Thank you for choosing Coffee Nest!"
        );

    });

});

// ==========================
// Seasonal Theme & Coffees
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    const seasonalButtons = document.querySelectorAll(".seasonal-btn");
    const resetTheme = document.getElementById("resetTheme");

    const seasonalMenu = document.getElementById("seasonalCoffeeMenu");
    const seasonalTitle = document.getElementById("seasonalTitle");
    const seasonalContainer = document.getElementById("seasonalCoffeeContainer");


    const seasonalCoffees = {

        eid: {
            title: "🌙 Eid Special Coffees",
            coffees: [
                {
                    name: "Eid Caramel Latte",
                    description: "Creamy latte with delicious caramel flavor.",
                    price: "PKR 850",
                    image: "images/latte.jpeg"
                },
                {
                    name: "Eid Mocha Delight",
                    description: "Rich chocolate mocha made specially for Eid.",
                    price: "PKR 900",
                    image: "images/mocha.jpeg"
                },
                {
                    name: "Eid Vanilla Frappe",
                    description: "Sweet vanilla frappe perfect for Eid celebrations.",
                    price: "PKR 950",
                    image: "images/vanilla-frappe.jpeg"
                }
            ]
        },


        ramadan: {
            title: "🌙 Ramadan Special Coffees",
            coffees: [
                {
                    name: "Ramadan Dates Latte",
                    description: "Creamy coffee with a delicious dates-inspired flavor.",
                    price: "PKR 850",
                    image: "images/latte.jpeg"
                },
                {
                    name: "Iftar Caramel Coffee",
                    description: "A smooth caramel coffee perfect for your Iftar evening.",
                    price: "PKR 900",
                    image: "images/caramel-frappe.jpeg"
                },
                {
                    name: "Ramadan Mocha",
                    description: "Rich chocolate coffee for a relaxing Ramadan evening.",
                    price: "PKR 900",
                    image: "images/mocha.jpeg"
                }
            ]
        },


        newyear: {
            title: "🎆 New Year Special Coffees",
            coffees: [
                {
                    name: "New Year Caramel Frappe",
                    description: "Celebrate the New Year with a refreshing caramel frappe.",
                    price: "PKR 950",
                    image: "images/caramel-frappe.jpeg"
                },
                {
                    name: "Midnight Mocha",
                    description: "A rich and creamy mocha for your midnight celebration.",
                    price: "PKR 1000",
                    image: "images/iced-mocha.jpeg"
                },
                {
                    name: "Vanilla Celebration Coffee",
                    description: "Sweet vanilla coffee to start your New Year beautifully.",
                    price: "PKR 950",
                    image: "images/vanilla-frappe.jpeg"
                }
            ]
        }

    };


    seasonalButtons.forEach(function(button){

        button.addEventListener("click", function(){

            const theme = this.getAttribute("data-theme");

            document.body.classList.remove(
                "ramadan-theme",
                "eid-theme",
                "newyear-theme"
            );

            document.body.classList.add(theme + "-theme");

            localStorage.setItem("coffeeNestTheme", theme);


            // Show seasonal coffees

            const data = seasonalCoffees[theme];

            seasonalTitle.textContent = data.title;

            seasonalContainer.innerHTML = "";

            data.coffees.forEach(function(coffee){

                seasonalContainer.innerHTML += `
                    <div class="seasonal-coffee-card">

                        <img src="${coffee.image}" alt="${coffee.name}">

                        <h3>${coffee.name}</h3>

                        <p>${coffee.description}</p>

                        <span class="seasonal-coffee-price">
                            ${coffee.price}
                        </span>

                    </div>
                `;

            });

            seasonalMenu.style.display = "block";

            seasonalMenu.scrollIntoView({
                behavior: "smooth"
            });

        });

    });


    // Reset Theme

    if(resetTheme){

        resetTheme.addEventListener("click", function(){

            document.body.classList.remove(
                "ramadan-theme",
                "eid-theme",
                "newyear-theme"
            );

            localStorage.removeItem("coffeeNestTheme");

            seasonalMenu.style.display = "none";

        });

    }

});

// ==========================
// Coffee Recommendation Quiz
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    const quizBtn = document.getElementById("coffeeQuizBtn");

    quizBtn.addEventListener("click", function () {

        const strength = document.querySelector(
            'input[name="strength"]:checked'
        );

        const temperature = document.querySelector(
            'input[name="temperature"]:checked'
        );

        const sweetness = document.querySelector(
            'input[name="sweetness"]:checked'
        );


        if (!strength || !temperature || !sweetness) {

            alert("☕ Please answer all 3 questions first!");

            return;
        }


        let coffee;


        // Strong + Hot

        if (strength.value === "strong" &&
            temperature.value === "hot") {

            coffee = {
                name: "Espresso",
                description: "A rich and bold coffee for those who love a strong taste.",
                price: "PKR 450",
                image: "images/espresso.jpeg"
            };

        }


        // Mild + Hot

        else if (strength.value === "mild" &&
                 temperature.value === "hot") {

            coffee = {
                name: "Latte",
                description: "Smooth and creamy coffee with a mild and comforting taste.",
                price: "PKR 700",
                image: "images/latte.jpeg"
            };

        }


        // Strong + Cold

        else if (strength.value === "strong" &&
                 temperature.value === "cold") {

            coffee = {
                name: "Iced Americano",
                description: "Refreshing cold coffee with a strong espresso flavor.",
                price: "PKR 650",
                image: "images/iced-americano.jpeg"
            };

        }


        // Mild + Cold

        else {

            coffee = {
                name: "Iced Latte",
                description: "A smooth and refreshing cold coffee with creamy milk.",
                price: "PKR 750",
                image: "images/iced-latte.jpeg"
            };

        }


        // Sweet preference

        if (sweetness.value === "sweet") {

            if (temperature.value === "cold") {

                coffee = {
                    name: "Vanilla Frappé",
                    description: "A sweet and creamy vanilla coffee blended with ice.",
                    price: "PKR 900",
                    image: "images/vanilla-frappe.jpeg"
                };

            } else {

                coffee = {
                    name: "Mocha",
                    description: "A delicious sweet coffee blended with rich chocolate.",
                    price: "PKR 750",
                    image: "images/mocha.jpeg"
                };

            }

        }


        document.getElementById("recommendedCoffeeImage").src =
            coffee.image;

        document.getElementById("recommendedCoffeeImage").alt =
            coffee.name;

        document.getElementById("recommendedCoffeeName").textContent =
             coffee.name;

        document.getElementById("recommendedCoffeeDescription").textContent =
            coffee.description;

        document.getElementById("recommendedCoffeePrice").textContent =
            coffee.price;

        document.getElementById("coffeeQuizResult").style.display =
            "block";

        document.getElementById("coffeeQuizResult").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});


// ==========================
// AI COFFEE ASSISTANT
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    const assistantBtn =
        document.getElementById("coffeeAssistantBtn");

    const assistantBox =
        document.getElementById("coffeeAssistant");

    const closeAssistant =
        document.getElementById("closeAssistant");

    const assistantInput =
        document.getElementById("assistantInput");

    const assistantSend =
        document.getElementById("assistantSend");

    const assistantMessages =
        document.getElementById("assistantMessages");


    // Stop if AI Assistant is not on this page
    if (
        !assistantBtn ||
        !assistantBox ||
        !closeAssistant ||
        !assistantInput ||
        !assistantSend ||
        !assistantMessages
    ) {
        return;
    }


    // ==========================
    // OPEN CHAT
    // ==========================

    assistantBtn.addEventListener("click", function () {

        assistantBox.style.display = "flex";

        assistantInput.focus();

    });


    // ==========================
    // CLOSE CHAT
    // ==========================

    closeAssistant.addEventListener("click", function () {

        assistantBox.style.display = "none";

    });


    // ==========================
    // ADD MESSAGE
    // ==========================

    function addMessage(message, type) {

        const messageDiv =
            document.createElement("div");

        messageDiv.className =
            "assistant-message " + type;

        messageDiv.innerHTML = message;

        assistantMessages.appendChild(messageDiv);

        assistantMessages.scrollTop =
            assistantMessages.scrollHeight;

    }


    // ==========================
    // COFFEE DATABASE
    // ==========================

    const coffees = [

        {
            name: "Caramel Frappé",
            price: "PKR 900",
            description:
                "Refreshing caramel coffee with whipped cream.",
            keywords: [
                "sweet",
                "cold",
                "caramel",
                "frappe",
                "frappé",
                "creamy",
                "refreshing"
            ]
        },

        {
            name: "Vanilla Frappé",
            price: "PKR 900",
            description:
                "Sweet vanilla coffee blended with ice.",
            keywords: [
                "sweet",
                "cold",
                "vanilla",
                "frappe",
                "frappé",
                "ice"
            ]
        },

        {
            name: "Oreo Coffee Frappé",
            price: "PKR 950",
            description:
                "Blended coffee with Oreo cookies.",
            keywords: [
                "sweet",
                "cold",
                "oreo",
                "cookie",
                "chocolate",
                "frappe",
                "frappé"
            ]
        },

        {
            name: "Honey Coconut Frappé",
            price: "PKR 1000",
            description:
                "Creamy honey coconut blended with ice.",
            keywords: [
                "sweet",
                "cold",
                "honey",
                "coconut",
                "creamy",
                "frappe",
                "frappé"
            ]
        },

        {
            name: "Iced Latte",
            price: "PKR 750",
            description:
                "Chilled espresso with creamy milk and ice.",
            keywords: [
                "cold",
                "iced",
                "milk",
                "creamy",
                "smooth",
                "latte"
            ]
        },

        {
            name: "Iced Americano",
            price: "PKR 650",
            description:
                "Refreshing espresso served over ice.",
            keywords: [
                "cold",
                "iced",
                "strong",
                "refreshing",
                "americano"
            ]
        },

        {
            name: "Iced Mocha",
            price: "PKR 850",
            description:
                "Cold coffee blended with rich chocolate.",
            keywords: [
                "cold",
                "iced",
                "chocolate",
                "sweet",
                "mocha"
            ]
        },

        {
            name: "Espresso",
            price: "PKR 450",
            description:
                "Rich, bold and intense coffee.",
            keywords: [
                "hot",
                "strong",
                "bold",
                "intense",
                "espresso",
                "cheap",
                "sasti"
            ]
        },

        {
            name: "Americano",
            price: "PKR 500",
            description:
                "Espresso blended with hot water.",
            keywords: [
                "hot",
                "strong",
                "americano",
                "simple",
                "cheap",
                "sasti"
            ]
        },

        {
            name: "Cappuccino",
            price: "PKR 650",
            description:
                "Espresso with steamed milk foam.",
            keywords: [
                "hot",
                "milk",
                "creamy",
                "foam",
                "cappuccino"
            ]
        },

        {
            name: "Latte",
            price: "PKR 700",
            description:
                "Smooth coffee with creamy milk.",
            keywords: [
                "hot",
                "milk",
                "creamy",
                "smooth",
                "latte"
            ]
        },

        {
            name: "Flat White",
            price: "PKR 700",
            description:
                "Velvety smooth espresso coffee.",
            keywords: [
                "hot",
                "smooth",
                "milk",
                "espresso"
            ]
        },

        {
            name: "Mocha",
            price: "PKR 750",
            description:
                "Coffee blended with chocolate.",
            keywords: [
                "hot",
                "chocolate",
                "sweet",
                "mocha"
            ]
        },

        {
            name: "Macchiato",
            price: "PKR 650",
            description:
                "Espresso topped with milk foam.",
            keywords: [
                "hot",
                "strong",
                "milk",
                "foam",
                "espresso"
            ]
        },

        {
            name: "Affogato",
            price: "PKR 800",
            description:
                "Espresso over vanilla ice cream.",
            keywords: [
                "sweet",
                "vanilla",
                "ice cream",
                "dessert",
                "espresso"
            ]
        }

    ];


    // ==========================
    // FIND BEST COFFEE
    // ==========================

    function findBestCoffee(text) {

        let bestCoffee = null;

        let bestScore = 0;

        coffees.forEach(function (coffee) {

            let score = 0;

            coffee.keywords.forEach(function (keyword) {

                if (text.includes(keyword)) {

                    score++;

                }

            });

            if (score > bestScore) {

                bestScore = score;

                bestCoffee = coffee;

            }

        });

        return bestCoffee;

    }


    // ==========================
    // AI RESPONSE
    // ==========================

    function getResponse(userText) {

        const text =
            userText.toLowerCase();


        // Greeting

        if (
            text.includes("hi") ||
            text.includes("hello") ||
            text.includes("hey") ||
            text.includes("salam") ||
            text.includes("assalam")
        ) {

            return `
                👋 Hello! Welcome to
                <strong>Coffee Nest</strong> ☕
                <br><br>
                I'm here to help you choose your perfect coffee!
                <br><br>
                You can ask me about:
                <br>
                ☕ Hot Coffee
                <br>
                🧊 Cold Coffee
                <br>
                🍫 Chocolate Coffee
                <br>
                🍯 Sweet Coffee
                <br>
                💰 Prices
                <br>
                🥛 Milk Coffee
            `;

        }


        // Menu

        if (
            text.includes("menu") ||
            text.includes("available") ||
            text.includes("options")
        ) {

            return `
                ☕ We have many delicious options!
                <br><br>

                <strong>Hot Coffee:</strong>
                <br>
                Espresso, Americano, Cappuccino,
                Latte, Flat White, Mocha,
                Macchiato & Affogato.
                <br><br>

                <strong>Cold Coffee:</strong>
                <br>
                Iced Latte, Iced Americano,
                Iced Mocha, Caramel Frappé,
                Vanilla Frappé, Oreo Coffee Frappé
                & Honey Coconut Frappé.
            `;

        }


        // Cheapest

        if (
            text.includes("cheap") ||
            text.includes("cheapest") ||
            text.includes("sasti") ||
            text.includes("kam price") ||
            text.includes("budget")
        ) {

            return `
                💰 Our most affordable coffee is
                <strong>Espresso</strong>.
                <br><br>
                ☕ Espresso — <strong>PKR 450</strong>
                <br>
                ☕ Americano — <strong>PKR 500</strong>
            `;

        }


        // Chocolate

        if (
            text.includes("chocolate") ||
            text.includes("choco")
        ) {

            if (
                text.includes("cold") ||
                text.includes("iced")
            ) {

                return `
                    🍫🧊 I recommend
                    <strong>Iced Mocha</strong>!
                    <br><br>
                    Cold coffee blended with rich chocolate.
                    <br>
                    Price: <strong>PKR 850</strong>
                `;

            }

            return `
                🍫☕ I recommend
                <strong>Mocha</strong>!
                <br><br>
                Coffee blended with rich chocolate.
                <br>
                Price: <strong>PKR 750</strong>
            `;

        }


        // Strong coffee

        if (
            text.includes("strong") ||
            text.includes("bold") ||
            text.includes("intense")
        ) {

            if (
                text.includes("cold") ||
                text.includes("iced")
            ) {

                return `
                    🧊☕ I recommend
                    <strong>Iced Americano</strong>.
                    <br><br>
                    Refreshing cold coffee with
                    a strong espresso flavor.
                    <br>
                    Price: <strong>PKR 650</strong>
                `;

            }

            return `
                ☕ I recommend
                <strong>Espresso</strong>!
                <br><br>
                Rich, bold and intense coffee.
                <br>
                Price: <strong>PKR 450</strong>
            `;

        }


        // Sweet + Cold

        if (
            text.includes("sweet") &&
            (
                text.includes("cold") ||
                text.includes("iced")
            )
        ) {

            return `
                🧊🍯 I recommend
                <strong>Caramel Frappé</strong>!
                <br><br>
                Sweet, creamy and refreshing
                with delicious caramel flavor.
                <br>
                Price: <strong>PKR 900</strong>
            `;

        }


        // Creamy / Milk

        if (
            text.includes("milk") ||
            text.includes("creamy")
        ) {

            if (
                text.includes("cold") ||
                text.includes("iced")
            ) {

                return `
                    🧊🥛 I recommend
                    <strong>Iced Latte</strong>!
                    <br><br>
                    Chilled espresso with creamy
                    milk and ice.
                    <br>
                    Price: <strong>PKR 750</strong>
                `;

            }

            return `
                🥛☕ I recommend
                <strong>Latte</strong>!
                <br><br>
                Smooth coffee with creamy milk.
                <br>
                Price: <strong>PKR 700</strong>
            `;

        }


        // Cold coffee

        if (
            text.includes("cold") ||
            text.includes("iced") ||
            text.includes("refreshing")
        ) {

            return `
                🧊☕ I recommend
                <strong>Iced Latte</strong>!
                <br><br>
                Refreshing, creamy and smooth.
                <br>
                Price: <strong>PKR 750</strong>
            `;

        }


        // Hot coffee

        if (text.includes("hot")) {

            return `
                ☕ I recommend
                <strong>Cappuccino</strong>!
                <br><br>
                Espresso with steamed milk foam.
                <br>
                Price: <strong>PKR 650</strong>
            `;

        }


        // Search coffee name

        const coffee =
            findBestCoffee(text);

        if (coffee) {

            return `
                ☕ I recommend
                <strong>${coffee.name}</strong>!
                <br><br>
                ${coffee.description}
                <br>
                Price:
                <strong>${coffee.price}</strong>
            `;

        }


        // Default

        return `
            ☕ I'm here to help you choose!
            <br><br>
            Try asking:
            <br>
            • "Mujhe sweet cold coffee chahiye"
            <br>
            • "Strong coffee recommend karo"
            <br>
            • "Chocolate coffee chahiye"
            <br>
            • "Mujhe creamy coffee chahiye"
            <br>
            • "PKR 800 ke andar coffee batao"
            <br>
            • "Cold coffee mein kya best hai?"
        `;

    }


    // ==========================
    // SEND MESSAGE
    // ==========================

    function sendMessage() {

        const text =
            assistantInput.value.trim();

        if (text === "") {

            return;

        }


        // User message

        addMessage(text, "user");

        assistantInput.value = "";


        // Bot response

        setTimeout(function () {

            const response =
                getResponse(text);

            addMessage(response, "bot");

        }, 400);

    }


    // ==========================
    // SEND BUTTON
    // ==========================

    assistantSend.addEventListener(
        "click",
        sendMessage
    );


    // ==========================
    // ENTER KEY
    // ==========================

    assistantInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                sendMessage();

            }

        }
    );


    // ==========================
    // QUICK QUESTIONS
    // ==========================

    const quickButtons =
        document.querySelectorAll(
            ".quick-questions button"
        );


    quickButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                assistantInput.value =
                    this.dataset.question;

                sendMessage();

            }
        );

    });

});

