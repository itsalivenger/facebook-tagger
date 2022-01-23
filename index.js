var message = '';
var maxUsersInList = 49;
var onItPart1 = false;
addEventListener('keydown', (e)=>{

    // Posting
    if(e.key == "M"){
        if(message != ''){
            ///// part 2
            var people = JSON.parse(sessionStorage.getItem('members')).members;
            people = people.slice(2, people.length - 1);
            var inc = 0;
            document.getElementsByClassName('m9osqain a5q79mjw gy2v8mqq jm1wdb64 k4urcfbm qv66sw1b')[0].click();


            clickOnIcon();
            function clickOnIcon(){
                setTimeout(()=>{
                    if(document.getElementsByClassName('hu5pjgll bixrwtb6')[2]){
                        checkForIcon(0);
                    }else{
                        console.log('not loaded yet')
                        clickOnIcon();
                    }
                }, 3000)
            }

            function inserInSearchInput(isItFirstTime){
                var timer = 1000;
                setTimeout(()=>{
                    if(document.getElementsByClassName('ijkhr0an pvl4gcvk sgqwj88q bp9cbjyn j83agx80 g0qnabr5 hzruof5a h4z51re5')[0]){
                        ///search input 
                        var input = document.getElementsByClassName('ijkhr0an pvl4gcvk sgqwj88q bp9cbjyn j83agx80 g0qnabr5 hzruof5a h4z51re5')[0].parentElement.querySelector('input');
                        let peopleInside = document.getElementsByClassName('k4urcfbm scb9dxdr sj5x9vvc dflh9lhu cxgpxx05 emxnvquj lzcic4wl jy1fj58s fo6rh5oj knj5qynh jagab5yi oo9gr5id rq0escxv izx4hr6d humdl8nn bn081pho gcieejh5 g5ia77u1')[0];
                        console.log(people, inc)
                        setNativeValue(input, people[inc]);
                        input.dispatchEvent(new InputEvent('input', {bubbles: true}));
                        isMatchedName();
                        setTimeout(()=>{
                            if(inc < people.length - 1){
                                if(peopleInside){
                                    // if people are gatered to be tagged are less than 50 ... get more 
                                    if(inc <= maxUsersInList){
                                        inc++;
                                        inserInSearchInput(true);
                                    }else{
                                        handleSubmit();
                                    }
                                }else{
                                    inc++;
                                    inserInSearchInput();
                                }
                            }else{
                                if(peopleInside){
                                    if(peopleInside.children[peopleInside.children.length - 1].innerText == people[inc]){
                                        console.log(peopleInside[inc] + ' is inside and ENDED', inc);
                                    }
                                }
                            }
                        }, 4500);
                    }else{
                        console.log('no search input yet');
                        inserInSearchInput();
                    }
                }, timer)
            }



            function isMatchedName(num = 0){
                setTimeout(()=>{
                    if(document.getElementsByClassName('r1ny0uxw scb9dxdr qt6c0cv9 dflh9lhu jb3vyjys')[num]){
                        if(document.getElementsByClassName('r1ny0uxw scb9dxdr qt6c0cv9 dflh9lhu jb3vyjys')[num].innerText == people[inc]){
                            console.log('found the user');
                            //clicking on the user that is found
                            document.getElementsByClassName('r1ny0uxw scb9dxdr qt6c0cv9 dflh9lhu jb3vyjys')[num].children[0].children[0].children[0].click();
                            num = 0;
                            return true;
                        }
                    }else{
                        if(document.getElementsByClassName('r1ny0uxw scb9dxdr qt6c0cv9 dflh9lhu jb3vyjys')[num]){
                            console.log('found others');
                            return true;
                        }
                        if(num < 12){//// ila malqach ch7al mn mrra itry again
                            console.log("couldn't find the name");
                            num++;
                            isMatchedName(num);
                        }else{
                            console.log("list ended");
                            return false
                        }
                    }
                }, 3000);
            }

            function checkForIcon(num) {
                setTimeout(()=>{
                    let docIconHolder = document.getElementsByClassName('scb9dxdr sj5x9vvc dflh9lhu cxgpxx05 dhix69tm wkznzc2l i1fnvgqd j83agx80 rq0escxv ibutc8p7 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 tr4kgdav eip75gnj ccnbzhu1 dwg5866k cwj9ozl2 bp9cbjyn')[0];
                    if(docIconHolder.getElementsByClassName('hu5pjgll bixrwtb6')[num].parentElement.parentElement
                    .parentElement.parentElement.parentElement.parentElement.attributes[0].value == 'Tag people'){
                        console.log('num: ' + num);
                        docIconHolder.getElementsByClassName('hu5pjgll bixrwtb6')[num].click();
                        console.log('found icon');
                        inserInSearchInput();
                    }else{
                        num++;
                        console.log('machi raqm')
                        checkForIcon(num);
                    }
                }, 2000);
            }


            

            function handleSubmit() {
                //clicking on DONE button
                document.getElementsByClassName('jb3vyjys dflh9lhu qt6c0cv9 lt9micmv')[0].click();
                let members = people.slice(inc, people.length - 1);
                //restoring the new sliced list
                sessionStorage.setItem('members', JSON.stringify({members}));
                setTimeout(()=>{
                    //inserting text in the input in the input
                    let input = document.getElementsByClassName('_1mf _1mj')[0].children[0];
                    input.innerHTML = message;
                    input.dispatchEvent(new InputEvent('input', {bubbles: true}));
                    //clicking on the post btn
                    // checkForPostBtn(0);
                }, 1000)
            }


            function checkForPostBtn(num) {
                setTimeout(()=>{
                    let postBtn = document.getElementsByClassName('j83agx80 cbu4d94t f0kvp8a6 mfofr4af l9j0dhe7 oh7imozk ij1vhnid smbo3krw')[0].getElementsByClassName('l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t bp9cbjyn owycx6da btwxx1t3 kt9q3ron ak7q8e6j isp2s0ed ri5dt5u2 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv d1544ag0 tw6a2znq s1i5eluu tv7at329');
                    console.log(postBtn);
                    if(postBtn){//ila kayn l postBtn t post aslan
                        if(postBtn[num].innerText == 'Post'){
                            postBtn[num];
                            postBtn[num].click();
            
                            if(people.length > 0){
                                checkIfAllDoneToDoAgain();
                            }
                        }else{
                            checkForPostBtn(num + 1);
                        }
                    }else{// try again if its not there
                        checkForPostBtn(num);
                    }
                }, 1000)
            }

            function checkIfAllDoneToDoAgain() {
                setTimeout(()=>{
                    if(document.getElementsByClassName('hu5pjgll bixrwtb6')[2]){
                        console.log('is not posted yet');
                        checkIfAllDoneToDoAgain();
                    }else{
                        //removing the added members
                        let members = people.slice(inc, people.length - 1);
                        //restoring the new sliced list
                        sessionStorage.setItem('members', JSON.stringify({members}));
                        //triggering a new keydown event so it'll go over again
                        window.dispatchEvent(new KeyboardEvent('keydown',{'key':'M'}));
                        console.log('event dispatched');
                    }
                }, 2000);
            }
        }else{
            alert('please enter a message, you can check if there is a message by clicking on capital Y')
        }


    }
    if(e.key == 'L' && !onItPart1){
        //// part 1
        onItPart1 = true;
        let links = document.getElementsByClassName('oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gpro0wi8 oo9gr5id lrazzd5p');
        let timer = 100;
        var inc = 0;
        let num = 0;
        let members = [];
        var int = setInterval(()=> {
            let divsThatMightHaveMembers = document.getElementsByClassName('rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw d2edcug0 hpfvmrgz n8tt0mok hyh9befq r8blr3vg jwdofwj8');
            if(divsThatMightHaveMembers[num].innerText.split(' ')[1] == 'members'){
                let numberOfMembers = parseInt(divsThatMightHaveMembers[num].innerText.split(' ')[0]);
                if(links[inc]){
                    if(links[inc].innerText != ''){
                        members.push(links[inc].innerText);
                        console.log(links[inc].innerText);
                    }
                    window.scrollTo(0, document.body.scrollHeight);
                }
                if(inc >= numberOfMembers){// how much to gather 
                    localStorage.setItem('members', JSON.stringify({members: members.slice(1, members.length - 1)}));
                    sessionStorage.setItem('members', JSON.stringify({members: members.slice(1, members.length - 1)}));
                    console.log(members);
                    clearInterval(int);
                    onItPart1 = false;
                    download(members);
                }
                if(links[inc]){
                    inc++;
                }
            }else{
                num++;
            }
        }, timer)
    }


    if(e.key == 'D'){
        if(!document.getElementById('textHolder')){
            let input = document.createElement('input');
            input.type = 'text';
            input.style.zIndex = '99999999';
            input.placeholder = 'your message goes here';
            input.id = 'textHolder';
            let button = document.createElement('button');
            button.style.zIndex = '99999999';
            button.innerHTML = 'Set message';
            document.getElementsByClassName('rq0escxv du4w35lb rek2kq2y lpgh02oy')[0].appendChild(input);
            document.getElementsByClassName('rq0escxv du4w35lb rek2kq2y lpgh02oy')[0].appendChild(button);
            button.onclick = ()=>{
                message = document.getElementById('textHolder').value;
                input.remove();
                button.remove();
                console.log(message);
            }
        }
    }

    if(e.key == 'Y'){
        console.log(activeInput, message);
        if(message == ''){
            alert('there is no message set')
        }else{
            alert(message);
        }
    }


    //Comments
    if(e.key == 'T'){
        // startInComment();
    }
})

//make the feed listen for clicks only on comment input
let feed = document.getElementsByClassName('rq0escxv l9j0dhe7 du4w35lb hpfvmrgz g5gj957u aov4n071 oi9244e8 bi6gxh9e h676nmdw aghb5jc5 gile2uim pwa15fzy fhuww2h9')[0] || document.getElementsByClassName('pedkr2u6 tn0ko95a pnx7fd3z')[0];
console.log(feed)
feed.children[1].addEventListener('click', (e)=>{
    if(e.target.className == 'hcukyx3x oygrvhab cxmmr5t8 kvgmc6g5'){
        activeInput = e.target;
        console.log(e.target)
    }
})

// function startInComment() {
//     let timer = 2500;
//     setTimeout(()=>{
//         activeInput.innerHTML += 
//     }, timer);
// }


function setNativeValue(element, value) {
    const { set: valueSetter } = Object.getOwnPropertyDescriptor(element, 'value') || {};
    const prototype = Object.getPrototypeOf(element);
    const { set: prototypeValueSetter } = Object.getOwnPropertyDescriptor(prototype, 'value') || {};

    if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
        prototypeValueSetter.call(element, value);
    } else if (valueSetter) {
        valueSetter.call(element, value);
    } else {
        throw new Error('The given element does not have a value setter');
    }
}

function download(arr) {
    let csvContent = "data:text/csv;charset=utf-8,";

    JSON.parse(sessionStorage.members).members.forEach(function(rowArray) {
        csvContent += rowArray + "\r\n";
    });
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link); // Required for FF
    
    link.click();
    alert('i just stopped gathering the members list');
}