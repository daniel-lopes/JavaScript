function salario(){
		var ss= Number(document.dados.ss.value);
		var ganha= Number(ss/880);
		document.dados.ganha.value=ganha.toFixed(1);

		if(ss < 2195){ inss = 9;
			var inss =((inss/100)*ss);
			var calculoinss=inss;
			document.dados.calculoinss.value= calculoinss.toFixed(2);

		}
		if(ss >= 2195){ inss = 11;
			var inss = Number((inss/100)*ss.toFixed(2));
			var calculoinss=inss;
			document.dados.calculoinss.value= calculoinss;
		}

		var ir;
		if(ss<=1787.77){
			ir = "0%";
			document.dados.ir.value= ir;
			imposto=0;

		}
		if((ss>=1787.78) && (ss<=2679.29)){
			ir = "7,5%";
			document.dados.ir.value=ir;
			imposto=(0.075*ss);

		}
		if((ss>=2679.30) && (ss<=3572.43)){
			ir = "15%";
			document.dados.ir.value=ir;
			imposto=(0.15*ss);

		}

		if((ss>=3572.44) && (ss<=4463.81)){
			ir = "22,5%";
			document.dados.ir.value=ir;
			imposto=(0.225*ss);

		}

		if(ss>4463.81){
			ir = "27,5%";
			document.dados.ir.value=ir;
			imposto=(0.275*ss);

		}

		var fgts= Number((8/100)*ss);
		document.dados.fgts.value=fgts.toFixed(2);

		var vt= Number(88);
		document.dados.vt.value=vt;

		var sl= Number(ss-calculoinss-imposto-fgts-vt);
		document.dados.sl.value=sl.toFixed(2);


		var calculoinss= Number((inss/100)*ss.toFixed(2));

}

	function mouse_in(){
		document.getElementById("texto").style.color="#074F07";

	}
	
	function mouse_out(){
		document.getElementById("texto").style.color="#000000";
	}