const btnBlack = document.getElementById('btnBlack');
const btn = document.getElementById('btn');
const backgrondBlak = document.querySelector('.backgrondBlak');
const x = document.querySelector('.x');
const icon = document.querySelector('.icon');
const pedd = document.querySelector('.pedd');
const learnBtn = document.getElementById('learn');
const menuBar = document.querySelector('.divMenue')

let isDivAdded = false;

btn.addEventListener('click', function () {

    if (!isDivAdded) {
        document.body.insertAdjacentHTML('beforeend', `
            <div class="pedd">
                <div class="backgroundBlack">
                    <span class="x" style="margin-top: 40px; margin-left: 19px; cursor: pointer;">X</span>
                    <p style="margin: 20px 40px 0 40px;">Website programming is the process of creating and building websites and web applications using coding languages and technologies.

It involves two main parts: front-end development (client-side) that users see and interact with, and back-end development (server-side) that handles data and logic behind the scenes.

With website programming skills, you can create various types of websites including business websites, e-commerce stores, blogs, social media platforms, educational portals, and web applications.

You can build interactive features like contact forms, shopping carts, user registration systems, payment gateways, search functions, and dynamic content displays.

Website programming allows you to create responsive designs that work perfectly on desktop computers, tablets, and mobile phones.

Businesses of all sizes need website programmers - from small local shops wanting online presence to large corporations needing complex web systems.

Educational institutions need programmers to create learning management systems, online courses, and student portals.

E-commerce companies require programmers to build and maintain online stores with secure payment processing and inventory management.

Media organizations need programmers for news websites, content management systems, and digital publishing platforms.

Even individuals like bloggers, artists, freelancers, and entrepreneurs need website programming skills to establish their online presence and reach global audiences.</p>
                </div>
            </div>
        `);

        // انتخاب المنت بعد از اضافه شدن به DOM
        const backgroundDiv = document.querySelector('.backgroundBlack');

        // اصلاح: استفاده از متغیر صحیح
        backgroundDiv.classList.add('expanded');

        isDivAdded = true;

        const xButton = backgroundDiv.querySelector('.x');

        // جلوگیری از اضافه شدن listenerهای تکراری
        xButton.addEventListener('click', function removeDiv() {
            backgroundDiv.remove();
            img.style.display = 'block';
            isDivAdded = false;
            // حذف listener پس از اجرا
            xButton.removeEventListener('click', removeDiv);
        });
    }
});


setTimeout(function () {
    btnBlack.style.display = 'block'
    btnBlack.classList.add('tran')
}, 4200);

btnBlack.addEventListener('mouseenter', function () {
    icon.style.display = 'block'
    icon.style.transform = 'scale(1)';
    btnBlack.style.paddingRight = '27px'

});

btnBlack.addEventListener('mouseleave', function () {
    icon.style.display = 'none'
    icon.style.transform = 'scale(1.1)';
    btnBlack.style.paddingRight = '12px'
});

learnBtn.addEventListener('click', function(){
    window.open('https://www.w3schools.com', '_blank')
});

function menue(){
    menuBar.classList.add('block')
}
function xx(){
    menuBar.classList.remove('block')
}

const aboutItems = [
  {
    icon: "/img/icons8-laptop-coding-64.png",
    text: "I'm a passionate programmer who lives and breathes code every day."
  },
  {
    icon: "/img/icons8-laptop-coding-64.png",
    text: "Coding is my ultimate love—nothing excites me more than solving complex problems."
  },
  {
    icon: "/img/icons8-book-64.png",
    text: "Fluent in English, I enjoy reading tech docs and contributing to global open-source projects."
  },
  {
    icon: "/img/icons8-movies-64.png",
    text: "Anime enthusiast: I binge-watch series like One Piece and analyze their storytelling techniques."
  },
  {
    icon: "/img/icons8-laptop-coding-64.png",
    text: "Graphics design is my creative outlet—I love crafting pixel art and UI mockups."
  },
  {
    icon: "/img/icons8-laptop-coding-64.png",
    text: "From algorithms to full-stack apps, programming fuels my endless curiosity."
  },
  {
    icon: "/img/icons8-laptop-coding-64.png",
    text: "I dream in code and wake up eager to debug yesterday's challenges."
  },
  {
    icon: "/img/icons8-laptop-coding-64.png",
    text: "Obsessed with visual storytelling, I blend anime inspiration into my graphic projects."
  },
  {
    icon: "/img/icons8-laptop-coding-64.png",
    text: "English proficiency helps me collaborate with international devs on cutting-edge tech."
  },
  {
    icon: "/img/icons8-laptop-coding-64.png",
    text: "Programming + Anime + Graphics = My perfect world of innovation and art."
  }
];

const container = document.getElementById('about-list');

  aboutItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'grid grid-cols-6 bg-green-400 w-[70%] h-16 max-md:h-20 max-md:w-[90%] rounded-sm mt-1.5';
    div.innerHTML = `
      <img class="col-span-1 mt-2 ml-3 max-md:ml-1" width="40px" src="${item.icon}" alt="">
      <div class="col-span-5 bg-white max-md:mt-1 max-md:mr-1 text-black mr-5 my-2 rounded-sm text-sm text-right">
        <p class="mr-1">${item.text}</p>
      </div>
    `;
    container.appendChild(div);
  });

  window.addEventListener('scroll', function(){
    const sticky = this.document.querySelector('.stickyy');
    if (this.window.scrollY > 0){
      sticky.classList.add('navv');
    } else{
      sticky.classList.remove('navv');
    }
  });


  document.getElementById('aboutMe').addEventListener('click', function(event){
    event.preventDefault();

    const about = document.getElementById('about');

    window.scrollTo({
      top:about.offsetTop,
      behavior: 'smooth',
    })
  });

  document.getElementById('resumeA').addEventListener('click', function(event){
    event.preventDefault()
    const resume = document.getElementById('resume');

    window.scrollTo({
      top:resume.offsetTop,
      behavior: 'smooth'
    })
  })
