const companyData = {
  audi: {
    employees: [
      {
        name: "Müller Schmidt",
        position: "Baş Mühəndis",
        company: "Audi",
        companyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro cumque harum molestias quidem sint illum perferendis delectus. Veritatis, iste provident."
      },
      {
        name: "Anna Weber",
        position: "Layihə Meneceri",
        company: "Audi",
        companyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro cumque harum molestias quidem sint illum perferendis delectus. Veritatis, iste provident."
      },
      {
        name: "Ilkin Ahmadov",
        position: "Front end Dev",
        company: "Audi",
        companyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro cumque harum molestias quidem sint illum perferendis delectus. Veritatis, iste provident."
      }
    ]
  },
  adell: {
    employees: [
      {
        name: "Orxan Əhmədov",
        position: "İnsan Resurslari Meneceri",
        company: "Adell",
        companyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro cumque harum molestias quidem sint illum perferendis delectus. Veritatis, iste provident."
      },
      {
        name: "Leyla Məmmədova",
        position: "Maliyyə Direktoru",
        company: "Adell",
        companyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro cumque harum molestias quidem sint illum perferendis delectus. Veritatis, iste provident."
      },
      {
        name: "Turxan Tomayev",
        position: "Front end Dev",
        company: "Adell",
        companyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro cumque harum molestias quidem sint illum perferendis delectus. Veritatis, iste provident."
      }
    ]
  },
  seniorita: {
    employees: [
      {
        name: "Sofia Rodriguez",
        position: "Texnologiya Direktoru",
        company: "Seniorita",
        companyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro cumque harum molestias quidem sint illum perferendis delectus. Veritatis, iste provident."
      }
    ]
  },
  istanbul: {
    employees: [
      {
        name: "Prof. Dr. Mehmet Yılmaz",
        position: "Fakültə Dekanı",
        company: "İstanbul Cicekleri",
        companyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro cumque harum molestias quidem sint illum perferendis delectus. Veritatis, iste provident."
      },
      {
        name: "Dr. Ayşe Kaya",
        position: "Araşdırma Koordinatoru",
        company: "İstanbul Cicekleri",
        companyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro cumque harum molestias quidem sint illum perferendis delectus. Veritatis, iste provident."
      },
      {
        name: "Carlos Martinez",
        position: "Biznes Analitiki",
        company: "İstanbul Cicekleri",
        companyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro cumque harum molestias quidem sint illum perferendis delectus. Veritatis, iste provident."
      },
      {
        name: "Ali Ismayil",
        position: "Front end Dev",
        company: "İstanbul Cicekleri",
        companyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro cumque harum molestias quidem sint illum perferendis delectus. Veritatis, iste provident."
      }
    ]
  }
};



let currentEmployeeIndex = {};



function showcompanyText(company, index) {
  currentEmployeeIndex[company] = index || 0;
  const companyTextContainer = document.getElementById('companyText-container');
  const employees = companyData[company].employees;
  const employee = employees[currentEmployeeIndex[company]];



  const companyTextCard = `
                <article class="companyText-card">
                    <blockquote class="companyText-text">
                    <img class='quot' src="images/quot.png"/> <br>
                        ${employee.companyText}
                    </blockquote>
                    <div class="author-info">
                        <h5>${employee.name}</h5>
                        <p>${employee.position}, ${employee.company}</p>
                    </div>
                </article>
            `;

  const existingCard = companyTextContainer.querySelector('.companyText-card');
  if (existingCard) {
    existingCard.classList.add('slide-out');
    setTimeout(() => {
      companyTextContainer.innerHTML = companyTextCard;
    }, 500);
  } else {
    companyTextContainer.innerHTML = companyTextCard;
  }


}


function startWeb() {
  document.querySelectorAll('.company-logo').forEach(logo => {
    logo.addEventListener('click', function () {
      const company = this.getAttribute('data-company');
      const index = this.getAttribute('tabindex');
      showcompanyText(company, index);
    });
  });
  setTimeout(() => {
    showcompanyText('adell', 0);
  }, 1000);
}


document.addEventListener('DOMContentLoaded', function () {
  startWeb();
});

