const searchModule = (() => {
  const BASE_URL = 'http://localhost:3000/api/v1/search';

  return {
    searchUsers: async () => {
      // 検索窓への入力値を習得
      const query = document.getElementById('search').value;

      const res = await fetch(BASE_URL + '?q=' + query);
      const result = await res.json();

      let body = '';

      for (let i in result) {
        const user = result[i];
        body += `<tr>
                  <td>${user.id}</td>
                  <td>${user.name}</td>               
                  <td>${user.profile}</td>
                  <td>${user.date_of_birth}</td>
                  <td>${user.created_date}</td>
                  <td>${user.updated_date}</td>
                </tr>`;
      }

      document.getElementById('users-list').innerHTML = body;
    },
  };
})();
