const checkbox=document.getElementById('checkbox')
checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
})


(function () {
    const customerImage = document.querySelector('#projectImage')
    const customerName= document.querySelector('#heading')
    const customerText= document.querySelector('#project-Text')

    const btn = document.querySelectorAll('.btn');

    let index=0;
    const customers = [];

    function Customer(img, name, text) {
        this.img=img;
        this.name=name;
        this.text=text;
    }

    function createCustomer(img, name, text) {
        let Img =`./img/${img}.png`;
        let customer = new Customer(Img , name ,text);

        customers.push(customer);
    }
 
    createCustomer(0 , 'Ethan Blackwood', '"Triangle has been a game-changer for our business. Their innovative solutions have helped us increase efficiency and reduce costs." (Reframe: "Triangles cutting-edge approach has revolutionized our operations, resulting in significant productivity gains and expense reductions.")'); 

    createCustomer(1 , 'Julian Morales', 'The team at Triangle is incredibly knowledgeable and responsive. They have helped us navigate complex challenges and achieve our goals." (Reframe: "Triangles expert guidance and proactive support have been instrumental in our success, enabling us to overcome obstacles and drive results.');

    createCustomer(2 , 'Lila Flynn', 'Triangles unique perspective has helped us identify and capitalize on new opportunities. We were grateful for their partnership.Reframe:Triangles fresh insights and collaborative approach have uncovered new avenues for growth and success, and we value their ongoing support and expertise.'); 

    createCustomer(3 , 'Ava Morales', '"Triangle has helped us streamline our processes and improve overall performance. We were impressed with their expertise and commitment to our success." (Reframe: "Triangles process optimization expertise has transformed our organization, resulting in enhanced productivity, efficiency, and overall excellence.")'); 

    

    btn.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if(e.target.parentElement.classList.contains('prevBtn')) {
                if(index === 0) {
                    index = customers.length
                }
                index--;
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if(e.target.parentElement.classList.contains('nextBtn')) {
                index++;
                if(index === customers.length) {
                    index = 0
                }
                customerImage.src=customers[index].img
                customerName.textContent=customers[index].name
                customerText.textContent=customers[index].text
            }
        })
    });
})()