/ Sample data for talents/products with actual talent images
const talents = [
    {
        name: "Artistic Drawing",
        description: "A beautiful drawing showcasing creativity and skill.",
        imageUrl: "https://images.unsplash.com/photo-1531270000992-7f5a8377e792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGRyYXdpbmclMjBhbmltYWx8ZW58MHx8fHwxNjcwODc0NzMw&ixlib=rb-1.2.1&q=80&w=400" // Replace with your image URL
    },
    {
        name: "Handmade Jewelry",
        description: "Unique handmade jewelry crafted with care.",
        imageUrl: "https://images.unsplash.com/photo-1589511681975-6b334e3aa5a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE2fHxoYW5kbWFkZSUyMGpld2VseXxlbnwwfHx8fDE2NzA4NzQ4MjQ&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
        name: "Wooden Crafts",
        description: "Beautiful wooden crafts made from recycled materials.",
        imageUrl: "https://images.unsplash.com/photo-1504384308090-c894r0t1r32k?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxlbnwwfHx8fDE2NzA4NzQ4MzU&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
        name: "Digital Art",
        description: "Stunning digital artwork created using graphic design software.",
        imageUrl: "https://images.unsplash.com/photo-1597496460332-66e75de95137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxlbnwwfHx8fDE2NzA4NzQ4NDA&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
        name: "Pottery",
        description: "Handcrafted pottery with unique designs.",
        imageUrl: "https://images.unsplash.com/photo-1506802474368-5a906b4d0cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBvdHRlcnl8ZW58MHx8fHwxNjcwODc0ODgw&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
        name: "Painting",
        description: "Vibrant paintings that capture emotion and beauty.",
        imageUrl: "https://images.unsplash.com/photo-1501238286838-3e6baf4c3e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxwYWludGluZ3xlbnwwfHx8fDE2NzA4NzQ4OTY&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
        name: "Knitted Goods",
        description: "Warm and cozy knitted items made with love.",
        imageUrl: "https://images.unsplash.com/photo-1510487630303-4f8f4d4a0a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxrbnl0dGVkfGVufDB8fHx8MTY3MDg3NDkwMQ&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
        name: "Sculpture",
        description: "Intricate sculptures made from various materials.",
        imageUrl: "https://images.unsplash.com/photo-1601191142673-6b14325b0bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE2fHxzY3VsdHR1cmV8ZW58MHx8fHwxNjcwODc0OTIx&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
        name: "Photography",
        description: "Captivating photographs that tell a story.",
        imageUrl: "https://images.unsplash.com/photo-1472809491955-929b6c74c60d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE3fHxwaG90b2dyYXBoeXxlbnwwfHx8fDE2NzA4NzQ5Njc&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
        name: "Graphic Design",
        description: "Creative graphic designs for various purposes.",
        imageUrl: "https://images.unsplash.com/photo-1587005861471-40f428ac1b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIwfHxncmFwaGljJTIwZGVza2V8ZW58MHx8fHwxNjcwODc1MDA1&ixlib=rb-1.2.1&q=80&w=400"
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

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);

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
document.addEventListener('DOMContentLoaded', function () {
    const paymentForm = document.getElementById('payment-form');
    const bankingDetails = document.getElementById('banking-details');
    const walletDetails = document.getElementById('wallet-details');

    paymentForm.addEventListener('change', function (event) {
        if (event.target.name === 'payment-method') {
            bankingDetails.style.display = 'none';
            walletDetails.style.display = 'none';

            if (event.target.value === 'net-banking') {
                bankingDetails.style.display = 'block';
            } else if (event.target.value === 'wallets') {
                walletDetails.style.display = 'block';
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const chatForm = document.getElementById('chat-form');
    const messageDisplay = document.getElementById('message-display');
    const chatMessageInput = document.getElementById('chat-message');

    chatForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        
        const messageText = chatMessageInput.value;
        
        if (messageText.trim() !== "") {
            const messageElement = document.createElement('div');
            messageElement.className = 'message';
            messageElement.textContent = messageText;

            messageDisplay.appendChild(messageElement);
            messageDisplay.scrollTop = messageDisplay.scrollHeight; // Scroll to the bottom
            chatMessageInput.value = ""; // Clear the input
        }
    });
});