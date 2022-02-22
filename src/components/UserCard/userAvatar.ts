import apiResource from '../../module/api';

const userAvatar = document.createElement('img');
userAvatar.src = '../../assets/svg/lion-head-svgrepo-com.svg';
userAvatar.classList.add('user-avatar');
userAvatar.addEventListener('click', () => {
  apiResource.deleteUser();
});
export default userAvatar;
