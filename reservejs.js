function calculduree (){
	let db=new Date(document.getElementById('ddb').value);
	let df=new Date(document.getElementById('df').value);

	let diff=df.getTime()-db.getTime();
	let jour=1000*60*60*24;
	let n=diff/jour;
	document.getElementById('dure').value=n;
	if (db>df){
		document.getElementById("dure").value='erreur';
	}

}
	function calculmontant(){
		let db=new Date(document.getElementById('ddb').value);
	    let df=new Date(document.getElementById('df').value);

		let p;
		let c=document.getElementById('ch');
		let s=document.getElementById('sui');
		let b=document.getElementById('ban');

		if(c.checked==true)
		{
			p=250
		}
		else 
		{
			if(s.checked==true)
			{
				p=700
			}
			else 
			{
				if (b.checked==true)
				{
					p=650
				}
			}
		}	
		let a=document.getElementById('pi');
		let z=document.getElementById('sau');
		let y=document.getElementById('dis');
		let u=document.getElementById('sds');
		so=0
			if (a.checked==true)
			{
				so=so+100
			}	
				if (z.checked==true)
				{
					so=so+150
				}
				if (y.checked==true)
				{
				so=so+50
				}
				if (u.checked==true)
				{
					so=so+200
				}

		
				prices=[0,0.07,0.14,0.20]
				tvaa=document.getElementById('tva')
				let x=prices[tva.selectedIndex]
				let mtva=document.getElementById('mtva')
		
		let j=document.getElementById("dure").value;
		let m=j*p+so;
		mtva.value=x*m
		document.getElementById('map').value=m+m*x+"DH"
		if (db>df){
		document.getElementById("map").value='erreur';
					}

	}
