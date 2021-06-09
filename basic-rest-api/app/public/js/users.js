// 即時関数でモジュール化
const usersModule = (() => {
  const BASE_URL = 'http://localhost:3000/api/v1/users';

  return {
    fetchAllUsers: async () => {
      const res = await fetch(BASE_URL);
      const users = await res.json();

      for (let i in users) {
        const user = users[i];
        const body = `<tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>               
                        <td>${user.profile}</td>
                        <td>${user.date_of_birth}</td>
                        <td>${user.created_date}</td>
                        <td>${user.updated_date}</td>
                      </tr>`;
        document
          .getElementById('users-list')
          .insertAdjacentHTML('beforeend', body);
      }
    },
  };
})();
