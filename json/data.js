const ul = document.getElementById("ull");

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        
        data.employees.forEach(x => {
            ul.innerHTML += `
                        <li>
                            <div>${x.firstName} ${x.lastName}</div>
                            <div>شغل: ${x.jobe}</div>
                            <div>مهارت‌ها: ${x.skills}</div>
                        </li>`;
        });
    });
