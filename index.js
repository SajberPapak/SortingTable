// DOM references
const usersInfo = document.querySelector(".get-users");
const usersTable = document.querySelector(".users-table");
const usersTableData = usersTable.querySelectorAll("td");

// displayUsers

const displayUsers = (data) => {
  const usersResults = data.results;
  console.log(usersResults);

  // making array for firstNames, lastNames, cities and states

  const firstNames = usersResults.map((firstName) => firstName.name.first);
  const lastNames = usersResults.map((lastName) => lastName.name.last);
  const cities = usersResults.map((city) => city.location.city);
  const states = usersResults.map((contry) => contry.location.state);
  const phoneNumbers = usersResults.map((phoneNumber) => phoneNumber.phone);

  // making arrays from table cells

  const firtsCells = Array.from(usersTableData).filter(
    (cell) => cell.cellIndex === 0
  );

  // populate names with corespodant cells
  firtsCells.map((cell, cellIndex) => {
    firstNames.map((name, nameIndex) => {
      if (cellIndex === nameIndex) {
        cell.innerText = name;
      }
    });
  });

  const secondCells = Array.from(usersTableData).filter(
    (cell) => cell.cellIndex === 1
  );

  secondCells.map((cell, cellIndex) => {
    lastNames.map((name, nameIndex) => {
      if (cellIndex === nameIndex) {
        cell.innerText = name;
      }
    });
  });

  const thirdCells = Array.from(usersTableData).filter(
    (cell) => cell.cellIndex === 2
  );

  thirdCells.map((cell, cellIndex) => {
    cities.map((city, cityIndex) => {
      if (cellIndex === cityIndex) {
        cell.innerText = city;
      }
    });
  });

  const fourthCells = Array.from(usersTableData).filter(
    (cell) => cell.cellIndex === 3
  );

  fourthCells.map((cell, cellIndex) => {
    states.map((state, stateIndex) => {
      if (cellIndex === stateIndex) {
        cell.innerText = state;
      }
    });
  });

  const fifthCells = Array.from(usersTableData).filter(
    (cell) => cell.cellIndex === 4
  );

  fifthCells.map((cell, cellIndex) => {
    phoneNumbers.map((number, numberIndex) => {
      if (cellIndex === numberIndex) {
        cell.innerText = number;
      }
    });
  });
};

// getUsers

const getUsers = async () => {
  const response = await fetch("https://randomuser.me/api/?results=4");
  const usersData = await response.json();
  return usersData;
};

// event listeners

usersInfo.addEventListener("click", () => {
  getUsers().then((data) => displayUsers(data));
});
