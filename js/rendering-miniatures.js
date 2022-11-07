const usersPhotoList = document.querySelector('.pictures');
const userPhotoTemplate = document.querySelector('#picture').content;

const createListFragment = document.createDocumentFragment();

function renderingMiniature(loadedPhoto) {
  loadedPhoto.forEach(({url, likes, comments}) => {
    const newPhoto = userPhotoTemplate.cloneNode(true);

    newPhoto.querySelector('.picture__img').src = url;
    newPhoto.querySelector('.picture__comments').textContent = comments.length;
    newPhoto.querySelector('.picture__likes').textContent = likes;

    createListFragment.appendChild(newPhoto);
  });

  usersPhotoList.appendChild(createListFragment);
}

export {
  renderingMiniature
};
