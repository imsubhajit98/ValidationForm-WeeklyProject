
// function user(e){
//     e.preventDefault();
//     var inputName=$('#textName').val();
//     var inputProf=$('#textProf').val();
//     var inputAge=$('#textAge').val();

//     let customText=document.getElementById("custom");

//     jsonObject={
//         "Name":"",
//         "Prof":"",
//         "Age":""
//     };
//     jsonObject.Name=inputName;
//     jsonObject.Prof=inputProf;
//     jsonObject.Age=inputAge;

//     var str=JSON.stringify(jsonObject);
//     // customText.innerHTML=str;
//     document.write(str);
// }



const l = []

addEventListener('click',function user(event) {
    event.preventDefault();
    const name = document.getElementById('textName').value;
    const proffession = document.getElementById('textProf').value;
    const age = document.getElementById('textAge').value;

    // console.log(name, proffession, age);


    if (name === '' || proffession === '' || age === '') {
        const m = document.getElementById('m')
        m.style.color = 'red';

        m.innerHTML = 'Error : Please Make sure All the fields are filled before adding in an employee !'
        m.style.marginLeft = '30px';
    } else {
        m.innerHTML = 'Success : Employee Added!'
        m.style.color = 'green';
        m.style.marginLeft = '30px';


        
        const a = document.getElementById('a')
        a.style.display = 'none';

        l.push({
            name: name,
            proffession: proffession,
            age: age,})
    }

    let tb = document.getElementById('tb')
    tb.innerHTML = '';

    l.map((el, i)=> {

        tb.innerHTML += `
        <tbody>
        <tr>
        <td>${i+1}.</td>
        <td>Name: ${el.name}</td>
        <td>Profession: ${el.proffession}</td>
        <td>Age: ${el.age}</td>
        <td><button onclick=d(${i}) type="button" class="btn">Delete User</button></td>
        </tr>
        </tbody>
        
`
    })

    function d(){
        
    }

});

