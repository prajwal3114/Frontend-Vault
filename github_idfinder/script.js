const input = document.getElementById('input');
const iddata = document.getElementById('iddata');
const followers = document.getElementById('followers');
const linkhere = document.getElementById('linkhere');
const button = document.getElementById('button');

button.addEventListener('click', async function() {
  // Make the API request
  const response = await fetch(`https://api.github.com/users/${input.value}`);
  
  // Check if the response status is not OK (200)
  if (!response.ok) {
    followers.innerText = "WRONG INPUT";
    linkhere.innerText = "";
    iddata.innerText = "";
  } else {
    // Parse JSON response
    const data = await response.json();
    
    // Display the fetched data
    iddata.innerText = data.id;
    followers.innerText = `Followers: ${data.followers}`;
    linkhere.href = data.html_url; // Correct way to assign href
    linkhere.innerText = "Visit GitHub Profile"; // Text for the link
  }
});
