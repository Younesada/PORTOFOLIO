
const dateDebut = document.getElementById('ddb');
const dateFin = document.getElementById('df')
const simuler = document.getElementById('sim')
const dure = document.getElementById('dure')
const name = document.getElementById('name')

simuler.addEventListener('click',function(e){
e.preventDefault()
let x;
let dateed1,dateed2;
let timediff,timeindays;
    let date1 = (dateDebut.value.split("-").reverse())
    x=date1[0]
    date1[0]=date1[1]
    date1[1]=x
    dateed1 = date1.join("/")
    let date2 = (dateFin.value.split("-").reverse())
    x=date2[0]
    date2[0]=date2[1]
    date2[1]=x
    dateed2 = date2.join("/")
    date1= new Date(date1)
    date2= new Date(date2)
timediff = date2.getTime() - date1.getTime() 
timeindays = timediff / (1000 * 3600 *  24)
dure.value=timeindays
})
