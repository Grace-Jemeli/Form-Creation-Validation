// Step 1: Define async function
async function fetchUserData() {
  // Step 2: API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 3: Select the container element
  const dataContainer = document.getElementById('api-data');

  try {
    // Step 4: Fetch and parse the data
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Step 5: Clear the loading message
    dataContainer.innerHTML = '';

    // Step 6: Create and populate the user list
    const userList = document.createElement('ul');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Step 7: Append list to the container
    dataContainer.appendChild(userList);

  } catch (error) {
    // Step 8: Handle fetch errors
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

// Step 9: Invoke function when DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
