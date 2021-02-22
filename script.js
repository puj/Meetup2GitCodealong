fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    const posts = json;
    posts.forEach((post, index) => {
      const newRecipeElement = `<section class="recipe">Recipe #${index} : ${post.title}</section>`;
      document.getElementById('recipes').innerHTML += newRecipeElement;
    });
  });
