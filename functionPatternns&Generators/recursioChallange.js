function searchEmployeeById(data, targetId) {
    let results = []
    for (let key in data) {
        if (key === 'employees') {
            for (let item of data[key]) {
               if (item.id === targetId) {
                   results.push(item)
               } 
            }
        } else if (typeof data[key] === 'object') {
            results = [...results, ...searchEmployeeById(data[key], targetId)]
        }
    }
    return results
}

const employee = searchEmployeeById(organizationData, 5) // pass in data and employee id.
const employee2 = searchEmployeeById(organizationData, 6) // pass in data and employee id.

console.log('employee: ', employee) // Output: [{id: 5, name: "Kwame Mensah", position: "Sales Executive"}]
console.log('employee2: ', employee2)
/*
employee: [{id: 5, name: 'Kwame Mensah', position: 'Sales Executive'}]
employee2: [{id: 6, name: 'Li Wei Chen', position: 'Support Specialist'}]
*/

//Varianta in care obiectul employees poate sa aibe nume diferite:

/*
function searchEmployeeById(organizationData, id, results = []) {
  

    // 1. Verificăm dacă nodul curent este un obiect care are ID-ul căutat
    if (organizationData && organizationData.id === id) {
        results.push(organizationData);
    }

    // 2. Dacă nodul curent este un Array (ex: lista de employees)
    if (Array.isArray(organizationData)) {
        for (const item of organizationData) {
            // Pasăm array-ul 'results' mai departe pentru a colecta restul de potriviri
            searchEmployeeById(item, id, results);
        }
    } 
    // 3. Dacă nodul curent este un Obiect (ex: headquarters, hr, office1)
    else if (typeof organizationData === 'object' && organizationData !== null) {
        for (const key in organizationData) {
            // Explorăm recursiv fiecare ramură a obiectului
            searchEmployeeById(organizationData[key], id, results);
        }
    }

    // 4. Returnăm array-ul cu toate potrivirile găsite
    
    return results;


}

const employee = searchEmployeeById(organizationData, 3) // pass in data and employee id.

console.log(employee) // Output: [{id: 5, name: "Kwame Mensah", position: "Sales Executive"}]
//console.log(organizationData)
//[{id: 3, name: 'Miguel García', position: 'HR Manager'}, {id: 3, name: 'Kwame Mensah', position: 'Sales Executive'}]
*/


//Datele

export const organizationData = {
  headquarters: {
    finance: {
      employees: [
        { id: 1, name: "Amina Al-Farsi", position: "Accountant" },
        { id: 2, name: "Hiroshi Tanaka", position: "Financial Analyst" },
      ],
      budget: 500000
    },
    hr: {
      employees: [
        { id: 3, name: "Miguel García", position: "HR Manager" },
        { id: 4, name: "Priya Patel", position: "Recruiter" }
      ],
      policies: ["policy1", "policy2"]
    }
  },
  regional_offices: {
    office1: {
      sales: {
        employees: [
          { id: 3, name: "Kwame Mensah", position: "Sales Executive" }
        ],
        revenue: 1000000
      },
      support: {
        employees: [
          { id: 6, name: "Li Wei Chen", position: "Support Specialist" }
        ],
        tickets: 300
      }
    },
    office2: {
      development: {
        employees: [
          { id: 7, name: "Emily Smith", position: "Software Engineer" },
          { id: 8, name: "Hank Grey", position: "Product Manager" }
        ],
        projects: ["Project A", "Project B"]
      }
    }
  }
}


