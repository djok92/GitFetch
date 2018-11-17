const clientId = "b4433b6cfb2d1766eed8";
const clientSecret = "016f2bbbf88e27589d6d1846d4f0994dd89e6911";

const profileContainer = document.querySelector(".main__profile-container");
const searchButton = document.querySelector(".form__button");
const inputValue = document.querySelector(".form__input");

const userName = document.querySelector(".main__profile-name");
const userUserName = document.querySelector(".main__profile-username");
const userRepos = document.querySelector(".main__profile-repos");
const userUrl = document.querySelector(".main__profile-url");

searchButton.addEventListener("click", () => {
  showData();
});

async function handleRequest(user) {
  const apiCall = await fetch(`https://api.github.com/users/${user}?client_id=${clientId}&client_secret=${clientSecret}`);
  const data = await apiCall.json();
  return {
    data
  };
}


function showData() {
  handleRequest(inputValue.value).then(res => {
    userName.innerHTML = `Name: ${res.data.name}`;
    userUserName.innerHTML = `Username: ${res.data.login}`;
    userRepos.innerHTML = `Repos: ${res.data.public_repos}`;
    userUrl.innerHTML = `Url: ${res.data.url}`;
    profileContainer.style.display = "block";
  });
}