const sugest_div = document.querySelector(".sugest__div");
const main = document.querySelector(".main__container");
const perfils = document.querySelector(".perfils")

function addSugestUser(array) {
  let array_ = filter(array);

  for (let i = 0; i < array_.length; i++) {
    const sugest_post_user = document.createElement("div");
    sugest_post_user.classList.add("sugest__post__user");

    const img_icon = document.createElement("img");
    img_icon.classList.add("img__icon");
    img_icon.src = array_[i].img;
    img_icon.alt = "icon";

    const sugest_user_detals = document.createElement("div");
    sugest_user_detals.classList.add = "sugest__user__detals";

    const h3 = document.createElement("h3");
    h3.innerText = array_[i].user;

    const p = document.createElement("p");
    p.innerText = array_[i].stack;

    sugest_user_detals.append(h3, p);

    const button_follow = document.createElement("button");
    button_follow.classList.add("button__follow");
    button_follow.innerText = "Seguir";
    following(button_follow);

    sugest_post_user.append(img_icon, sugest_user_detals, button_follow);

    perfils.appendChild(sugest_post_user);
  }
}

function following(b) {
  b.addEventListener("click", () => {
    if (b.classList.value == "button__follow") {
      b.innerText = "Seguindo";
      b.classList = "button__following";
    } else {
      b.innerText = "Seguir";
      b.classList = "button__follow";
    }
  });
}

const section_post = document.querySelector(".section__posts");

function createPost(array) {
  section_post.innerHTML = "";
  let array_ = filterPoster(array);
  for (let i = 0; i < array_.length; i++) {
    const article_post = document.createElement("article");
    article_post.classList.add("article__post");

    const post_user = document.createElement("div");
    post_user.classList.add("post__user");

    const img = document.createElement("img");
    img.classList.add("img__icon");
    img.src = array_[i].img;

    const user_detals = document.createElement("div");
    user_detals.classList.add("user__detals");

    const h3 = document.createElement("h3");
    h3.innerText = array_[i].user;

    const p = document.createElement("p");
    p.innerText = array_[i].stack;

    user_detals.append(h3, p);

    post_user.append(img, user_detals);

    const h2 = document.createElement("h2");
    h2.innerText = array[i].title;

    const p_description = document.createElement("p");
    p_description.innerText = array[i].text;

    const button_andLike = document.createElement("div");
    button_andLike.classList.add("button__andLike");

    const button = document.createElement("button");
    button.classList.add("button__open--article");
    button.id = array[i].id_post;
    button.innerText = "Abrir post";

    const div_like = document.createElement("div");
    div_like.classList.add("div__like");

    const img_like = document.createElement("span");
    img_like.classList.add("like");

    let cont_ = 0;

    const cont = document.createElement("span");
    cont.innerText = cont_;

    likeClick(img_like, cont_, cont);

    cont.value;

    div_like.append(img_like, cont);

    button_andLike.append(button, div_like);

    article_post.append(post_user, h2, p_description, button_andLike);

    section_post.appendChild(article_post);
  }
}

function addPostusers(array) {
  addMyPost();
  createPost(array);
}

function addMyPost() {
  const button_post = document.querySelector(".button__pub");

  const titleInput = document.querySelector(".title");

  const descriptionInput = document.querySelector("#description");

  button_post.addEventListener("click", () => {
    let objPost = {};

    objPost.id_post = 1;
    objPost.user = 1;
    objPost.title = titleInput.value;
    objPost.text = descriptionInput.value;

    posts.unshift(objPost);

    for (let i = 1; i < posts.length; i++) {
      posts[i].id_post = posts[i].id_post + 1;
    }

    titleInput.value = "";
    descriptionInput.value = "";

    createPost(posts);

    modalOpen(posts);
  });
}

addPostusers(posts);

function likeClick(b, c_, c) {
  b.addEventListener("click", () => {
    if (b.classList.value === "like") {
      b.classList = "like--like";
      c_ += 1;
      c.innerText = c_;
    } else {
      b.classList = "like";
      c_ -= 1;
      c.innerText = c_;
    }
  });
}

function filter(array) {
  let array_ = [];

  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] === users[i].id) {
        array_.push(users[i]);
      }
    }
  }
  return array_;
}

function filterPoster(array) {
  let array_ = [];

  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j].user === users[i].id) {
        array_.push(users[i]);
      }
    }
  }
  return array_;
}

addSugestUser(sugestUsers);

function modalOpen(array) {
  const button_open_article = document.querySelectorAll(
    ".button__open--article"
  );

  for (let i = 0; i < button_open_article.length; i++) {
    button_open_article[i].addEventListener("click", () => {
      for (let j = 0; j < array.length; j++) {
        if (button_open_article[i].id == array[j].id_post) {
          const modal = document.createElement("div");
          modal.classList.add("modal");
          const modal_container = document.createElement("div");
          modal_container.classList.add("modal__container");
          const modal_div = document.createElement("div");
          const post_user = document.createElement("div");
          post_user.classList.add("post__user");
          const user_detals = document.createElement("div");
          const img = document.createElement("img");
          img.classList.add("img__icon");
          user_detals.classList.add("user__detals");
          const h3 = document.createElement("h3");
          const p = document.createElement("p");

          for (let v = 0; v < users.length; v++) {
            if (users[v].id === array[j].user) {
              img.src = users[v].img;
              h3.innerText = users[v].user;
              p.innerText = users[v].stack;
            }
          }

          const span = document.createElement("span");
          span.innerText = "X";
          span.classList.add("button__close");

          span.addEventListener("click", () => {
            modal.remove();
          });

          user_detals.append(h3, p);
          post_user.append(img, user_detals);
          modal_div.append(post_user, span);

          const h2 = document.createElement("h2");
          h2.innerText = array[j].title;
          const p_description = document.createElement("p");
          p_description.innerText = array[j].text;

          modal_container.append(modal_div, h2, p_description);

          modal.appendChild(modal_container);

          main.appendChild(modal);

          return main;
        }
      }
    });
  }
}

modalOpen(posts);
