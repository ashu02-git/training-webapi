const indexModule = (() => {
  const path = window.location.pathname;
  const uid = window.location.search.split('?uid=')[1];

  switch (path) {
    case '/':
      // 検索ボタンをクリックしたときのイベントリスナー設定
      document.getElementById('search-btn').addEventListener('click', () => {
        return searchModule.searchUsers();
      });

      // UsersモジュールのfetchAllUsersメソッドを呼び出す
      return usersModule.fetchAllUsers();

    case '/create.html':
      document.getElementById('save-btn').addEventListener('click', () => {
        return usersModule.createUser();
      });
      document.getElementById('cancel-btn').addEventListener('click', () => {
        return (window.location.href = '/');
      });
      break;

    case '/edit.html':
      document.getElementById('save-btn').addEventListener('click', () => {
        return usersModule.saveUser(uid);
      });
      document.getElementById('cancel-btn').addEventListener('click', () => {
        return (window.location.href = '/');
      });
      document.getElementById('delete-btn').addEventListener('click', () => {
        return usersModule.deleteUser(uid);
      });

      return usersModule.setExistingValue(uid);

      break;

    case '/following.html':
      return usersModule.fetchFollowingUsers(uid);

      break;

    default:
      break;
  }
})();
