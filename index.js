// Write your code here!

// Function to fetch posts from JSONPlaceholder API using async/await
async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  return posts;
}

// Function to display posts in the DOM
function displayPosts(posts) {
  const postList = document.getElementById('post-list');
  
  // Loop through the posts
  for (const post of posts) {
    // Create li tag
    const li = document.createElement('li');
    
    // Create h1 tag for title
    const h1 = document.createElement('h1');
    h1.textContent = post.title;
    
    // Create p tag for body
    const p = document.createElement('p');
    p.textContent = post.body;
    
    // Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);
    
    // Append li to the ul
    postList.appendChild(li);
  }
}

// Main function to initialize the app using async/await
async function init() {
  const posts = await fetchPosts();
  displayPosts(posts);
}

// Call init function when the script loads
init();
