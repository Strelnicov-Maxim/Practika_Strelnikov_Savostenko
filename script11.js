const brand_item = document.getElementById("marka").value;
const type_item = document.getElementById("product").value;
console.log(brand_item, type_item);

// Вынимаем https ссылку строки
function getValue(array) {
  array.sort(sortFunction);
  function sortFunction(a, b) {
    if (a.name === b.name) {
      return 0;
    } else {
      return a.name < b.name ? -1 : 1;// от а до я 
    }
  }
  console.log(array);
  function sortFunction(a, b) {
    if (Number(a.price) === Number(b.price)) {
      return 0;
    } else {
      return Number(a.price) < Number(b.price) ? -1 : 1; //Цена по возрастанию
    }
  }
  console.log(array);
}
// Обращаемся к базе данных через fetch и .then
const krData = function (brand_item, type_item) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand_item}&product_type=${type_item} `
  )
    .then((response) => {
      console.log(response.status);

      if (!response.ok)
        throw new Error(`Ошибка :( ${response.status}`);
      return response.json();
    })
    .then(function (data) {
      getValue(data);
    });
};
