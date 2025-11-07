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
