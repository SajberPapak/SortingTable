// DOM references
const usersInfo = document.querySelector(".get-users");
const usersTable = document.querySelector(".users-table");
const usersTableData = usersTable.querySelectorAll("td");
const sortUsersByFirstName = document.querySelector(".sort-users-by-firstname");
const sortUsersByLastName = document.querySelector(".sort-users-by-lastname");
const sortUsersByCity = document.querySelector(".sort-users-by-city");
const sortUsersByState = document.querySelector(".sort-users-by-state");
const sortUsersByPhone = document.querySelector(".sort-users-by-phone-number");

// console.log(
//   sortUsersByFirstName,
//   sortUsersByLastName,
//   sortUsersByCity,
//   sortUsersByState,
//   sortUsersByPhone
// );

// sorted states

const displaySortedStates = (sortedStates) => {
  const forthCells = Array.from(usersTableData).filter(
    (cell) => cell.cellIndex === 3
  );
  forthCells.map((cell, cellIndex) => {
    sortedStates.map((sortedName, sortedNameIndex) => {
      if (cellIndex === sortedNameIndex) {
        cell.innerText = sortedName;
      }
    });
  });
  sortUsersByState.setAttribute("disabled", "");
};

sortUsersByState.addEventListener("click", () => {
  const sortedStates = Array.from(usersTableData)
    .filter((cell) => cell.cellIndex === 2)
    .map((cell) => cell.textContent)
    .sort();
  displaySortedStates(sortedStates);
});

// Sorted cities

const displaySortedCities = (sortedCities) => {
  const thirdCells = Array.from(usersTableData).filter(
    (cell) => cell.cellIndex === 2
  );
  thirdCells.map((cell, cellIndex) => {
    sortedCities.map((sortedName, sortedNameIndex) => {
      if (cellIndex === sortedNameIndex) {
        cell.innerText = sortedName;
      }
    });
  });
  sortUsersByCity.setAttribute("disabled", "");
};

sortUsersByCity.addEventListener("click", () => {
  const sortedCities = Array.from(usersTableData)
    .filter((cell) => cell.cellIndex === 2)
    .map((cell) => cell.textContent)
    .sort();
  displaySortedCities(sortedCities);
});

// Sorted last names

const displaySortedLNames = (sortedLNames) => {
  const secondCells = Array.from(usersTableData).filter(
    (cell) => cell.cellIndex === 1
  );
  secondCells.map((cell, cellIndex) => {
    sortedLNames.map((sortedName, sortedNameIndex) => {
      if (cellIndex === sortedNameIndex) {
        cell.innerText = sortedName;
      }
    });
  });
  sortUsersByLastName.setAttribute("disabled", "");
};

sortUsersByLastName.addEventListener("click", () => {
  const sortedLNames = Array.from(usersTableData)
    .filter((cell) => cell.cellIndex === 1)
    .map((cell) => cell.textContent)
    .sort();
  displaySortedLNames(sortedLNames);
});

// Sorted first names

const displaySortedFNames = (sortedNames) => {
  console.log(sortedNames);
  const firstCells = Array.from(usersTableData).filter(
    (cell) => cell.cellIndex === 0
  );
  firstCells.map((cell, cellIndex) => {
    sortedNames.map((sortedName, sortedNameIndex) => {
      if (cellIndex === sortedNameIndex) {
        cell.innerText = sortedName;
      }
    });
  });
  sortUsersByFirstName.setAttribute("disabled", "");
};

sortUsersByFirstName.addEventListener("click", () => {
  const sortedFNames = Array.from(usersTableData)
    .filter((cell) => cell.cellIndex === 0)
    .map((cell) => cell.textContent)
    .sort();
  displaySortedFNames(sortedFNames);
});

// displayUsers

const displayUsers = (data) => {
  const usersResults = data.results;

  usersInfo.setAttribute("disabled", "");
  sortUsersByFirstName.removeAttribute("disabled", "");
  sortUsersByLastName.removeAttribute("disabled", "");
  sortUsersByCity.removeAttribute("disabled", "");
  sortUsersByState.removeAttribute("disabled", "");
  sortUsersByPhone.removeAttribute("disabled", "");

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
