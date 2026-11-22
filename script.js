const name_input=document.getElementById('name');
const age=document.getElementById('age');
const paragraph=document.getElementById('output');
const save=document.getElementById('save');
save.addEventListener('click',function(){
    let name_in=name_input.value;
    let age_in=age.value;
    const user={
        name:name_in,
        age:age_in,
    }
    paragraph.innerHTML="Name:"+user.name+",Age:"+user.age;
})

