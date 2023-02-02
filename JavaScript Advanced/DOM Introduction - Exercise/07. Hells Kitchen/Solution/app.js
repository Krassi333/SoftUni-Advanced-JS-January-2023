function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let restaurants = {};

      for (let el of input) {
         let [restaurantName, employeesList] = el.split(' - ');
         employeesList = employeesList.split(', ');

         if (!restaurants.hasOwnProperty(restaurantName)) {
            restaurants[restaurantName] = {
               employees: employeesList,
               avgSalary: averageSalary(employeesList),
               bestSalary: bestSal(employeesList)
            }
         } else {
            restaurants[restaurantName].employees = restaurants[restaurantName].employees.concat(employeesList);
            restaurants[restaurantName].avgSalary = averageSalary(restaurants[restaurantName].employees);
            restaurants[restaurantName].bestSalary = bestSal(restaurants[restaurantName].employees);
         }
      }

      let sortedRestaurants = Object.entries(restaurants).sort(([keyA, valA], [keyB, valB]) => valB.avgSalary - valA.avgSalary);
      let bestRestaurant = sortedRestaurants[0][0];
      document.querySelector('#bestRestaurant p').innerText = `Name: ${sortedRestaurants[0][0]} Average Salary: ${sortedRestaurants[0][1].avgSalary.toFixed(2)} Best Salary: ${sortedRestaurants[0][1].bestSalary.toFixed(2)}`
      let objWorkers = {};

      for (let el of restaurants[bestRestaurant].employees) {
         let [name, salary] = el.split(' ');
         objWorkers[name] = salary;
      }

      objWorkers = Object.entries(objWorkers).sort(([keyA, valA], [keyB, valB]) => valB - valA);
      let res = '';

      for (let el of objWorkers) {
         res += `Name: ${el[0]} With Salary: ${el[1]} `;
      }
      document.querySelector('#workers p').innerText = res;
      //----------------------------------
      function averageSalary(employees) {
         let allSalary = 0;
         for (let i = 0; i < employees.length; i++) {
            let [workerName, salary] = employees[i].split(' ');
            allSalary += Number(salary);
         }
         return allSalary / employees.length;
      }

      function bestSal(employees) {
         let salaryArray = [];

         for (let i = 0; i < employees.length; i++) {
            let [workerName, salary] = employees[i].split(' ');
            salaryArray.push(Number(salary));
         }

         salaryArray = salaryArray.sort((a, b) => b - a);
         return salaryArray[0];
      }
   }
}