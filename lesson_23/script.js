`use strict`;
fetch(`https://reqres.in/api/users?per_page=12`)
  .then((Response) => {
    return Response.json();
  })
  .then((body) => {
    console.log(`---------`);
    console.log(`Пункт №1: Данные всех пользователей`);
    console.log(`---------`);
    console.log(body.data);
    console.log(`---------`);
    console.log(`Пункт №2: Фамилии всех пользователей`);
    console.log(`---------`);
    body.data?.forEach((item) => {
      console.log(item?.last_name);
    });
    console.log(`---------`);
    console.log(
      `Пункт №3: Данные всех пользователей, фамилии которых начинаются на F`
    );
    console.log(`---------`);
    let userListFiltered = body.data.filter((item) =>
      item?.last_name.startsWith(`F`)
    );
    console.log(userListFiltered);
    console.log(`---------`);
    let userListNames = body.data.reduce((total, item) => {
      total += item.first_name + ` ` + item.last_name + `, `;
      return total;
    }, ``);
    // const str = String(userListNames);
    // const newUserListNames = str.slice(0, -1);
    console.log(
      `Пункт №4: Наша база содержит данные следующих пользователей:`,
      userListNames
    );
    console.log(`---------`);
    console.log(`Пункт №5: Ключи в объекте пользователя:`);
    console.log(`---------`);
    console.log(Object.keys(body.data[0]));
  });
