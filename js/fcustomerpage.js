// Simulated data from local storage
const customerData = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    password: "********",
    familyCount: 4,
    address: {
        doorNumber: "123",
        street: "Main St",
        landmark: "Park",
        district: "City",
        pincode: "123456",
        state: "State"
    }
};

// Function to populate customer details
function populateCustomerDetails() {
    document.getElementById("name").textContent = customerData.name;
    document.getElementById("email").textContent = customerData.email;
    document.getElementById("phone").textContent = customerData.phone;
    document.getElementById("password").textContent = customerData.password;
    document.getElementById("familyCount").textContent = customerData.familyCount;

    // Construct the full address
    const fullAddress = `${customerData.address.doorNumber}, ${customerData.address.street}, ${customerData.address.landmark}, ${customerData.address.district}, ${customerData.address.pincode}, ${customerData.address.state}`;
    document.getElementById("fullAddress").textContent = fullAddress;
}

// Populate customer details when the page loads
populateCustomerDetails();


// waste page