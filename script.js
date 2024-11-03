const talents = [
    {
        name: "Artistic Drawing",
        description: "A beautiful drawing showcasing creativity and skill.",
        imageUrl: "https://i.pinimg.com/474x/76/3d/6a/763d6ae10caeee7bfcec3f5184f9210d.jpg",
        price: "$50"
    },
    {
        name: "Handmade Jewelry",
        description: "Unique handmade jewelry crafted with care.",
        imageUrl: "https://i.pinimg.com/474x/14/62/6c/14626cdca77eff91cbf06f65dded26aa.jpg",
        price: "$30"
    },
    {
        name: "Wooden Crafts",
        description: "Beautiful wooden crafts made from recycled materials.",
        imageUrl: "https://i.pinimg.com/564x/1b/05/bf/1b05bf9b03bebc9b3ae9b27e5584ef24.jpg",
        price: "$40"
    },
    {
        name: "Digital Art",
        description: "Stunning digital artwork created using graphic design software.",
        imageUrl: "https://i.pinimg.com/564x/b8/da/21/b8da21fb57b1cfd23033759520351f50.jpg",
        price: "$60"
    },
    {
        name: "Pottery",
        description: "Handcrafted pottery with unique designs.",
        imageUrl: "https://i.pinimg.com/736x/77/bd/82/77bd82a4514f9962bc25d7a6b767d227.jpg",
        price: "$45"
    },
    {
        name: "Painting",
        description: "Vibrant paintings that capture emotion and beauty.",
        imageUrl: "https://i.pinimg.com/474x/50/1f/55/501f5538b70172d094ec283e1bf87d4f.jpg",
        price: "$70"
    },
    {
        name: "Knitted Goods",
        description: "Warm and cozy knitted items made with love.",
        imageUrl: "https://i.pinimg.com/564x/0a/ce/aa/0aceaa58eca02820d6da453d42afefe9.jpg",
        price: "$25"
    },
    {
        name: "Sculpture",
        description: "Intricate sculptures made from various materials.",
        imageUrl: "https://i.pinimg.com/474x/b9/5a/85/b95a8525441ec4cafa8c4588211af6e2.jpg",
        price: "$80"
    },
    {
        name: "Photography",
        description: "Captivating photographs that tell a story.",
        imageUrl: "https://i.pinimg.com/474x/56/da/92/56da92089c1f04af705534233ccf3f63.jpg",
        price: "$35"
    },
    {
        name: "Graphic Design",
        description: "Creative graphic designs for various purposes.",
        imageUrl: "https://i.pinimg.com/474x/8c/02/55/8c02550d749f778ded3b5f840cda9901.jpg",
        price: "$55"
    }
];

const talentGrid = document.getElementById('talentGrid');

// Function to create and display talent cards
function displayTalents() {
    talents.forEach(talent => {
        const card = document.createElement('div');
        card.className = 'card';

        const image = document.createElement('img');
        image.src = talent.imageUrl;
        image.alt = talent.name;

        const title = document.createElement('h3');
        title.textContent = talent.name;

        const description = document.createElement('p');
        description.textContent = talent.description;

        // Create a paragraph for the price
        const price = document.createElement('p');
        price.textContent = `Price: ${talent.price}`;

        // Create the Buy button
        const buyButton = document.createElement('button');
        buyButton.textContent = 'Buy';
        buyButton.className = 'btn'; // Add a class for styling

        // Add event listener to navigate to payment.html on click
        buyButton.addEventListener('click', function() {
            window.location.href = 'payment.html';
        });

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(price); // Append the price to the card
        card.appendChild(buyButton); // Append the Buy button to the card

        talentGrid.appendChild(card);
    });
}

// Call the function to display talents on page load
displayTalents();
document.addEventListener('DOMContentLoaded', function () {
    const paymentForm = document.getElementById('payment-form');
    const bankingDetails = document.getElementById('banking-details');

    paymentForm.addEventListener('change', function (event) {
        if (event.target.name === 'payment-method') {
            if (event.target.value === 'net-banking') {
                bankingDetails.style.display = 'block';
            } else {
                bankingDetails.style.display = 'none';
            }
        }
    });
});
