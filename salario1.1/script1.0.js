function folhaPagamento(){
   let salary = document.getElementById('salario').value; 
    const outrosDesc= document.getElementById('OutrosDescontos').value;
    descontarINSS();
    calcularIR();
    calcularSalarioLiquido();
    Mudarestado();
   salarioBruto();
   
function salarioBruto(){
    salarioBruto= salary
    if(salarioBruto===""){
       salarioBruto=0
    } else {
        salarioBruto=parseFloat(salarioBruto)//coverte string em numero;
    
    }
    
}

function descontarINSS(){

   
if (salary <=1045) {
        
       inss =  1045 * 0.075
       
        }
        if (salary >=1045.01 && salary <=2089.60) {
          
        
           inss= (salary - 1045) * 0.09 + 78.38 
           
            }

            if(salary >=2089.61 && salary <=3134.40) {
              
                faixa1 = 78.38
                faixa2 = 94.01
                faixa3 = (salary - 2089.60) *0.12

                inss = faixa1 + faixa2 + faixa3
               
                }

                if(salary >=3134.41 && salary <=6101.06) {
                  
                    faixa1 = 78.38
                    faixa2 = 94.01
                    faixa3 =125.38
                    faixa4 = (salary- 3134.40) *0.14
                    inss = faixa1 + faixa2 + faixa3 + faixa4
                   
                    }
                if(salary>=6101.07){
                
                inss= 713.09
               
                }
              
            }

function calcularIR(){ 
const salaryIr=salary
             
                    if(salaryIr <= 2075.16){
                        baseCalc1 = 0
                        
                    }
             
                    if(salaryIr >= 2075.17 && salaryIr <= 2826.65 ) {
                        baseCalc1= salary-inss
                        baseCalc1= baseCalc1 *7.5 /100 - 142.80
                    }

                    if(salaryIr >= 2826.66 && salaryIr <= 3751.05 ) {
                        baseCalc1= salary-inss
                        baseCalc1= baseCalc1 *15 /100 - 354.80
                    }

                    if(salaryIr >= 3751.06 && salaryIr <= 4664.68 ) {
                        baseCalc1= salary-inss
                        baseCalc1= baseCalc1 *22.5 /100 - 636.13
                    }

                    if(salaryIr >= 4664.69) {
                        baseCalc1= salary-inss
                        baseCalc1= baseCalc1 * 27.5 /100 - 869.36
                    }
                                      
                }

  function calcularSalarioLiquido(){
         vale = salary/100 * 40
         salarioLiquido = salary

                   if(salarioLiquido <= 1045 ){
                       salarioLiquido= salary-vale-outrosDesc-inss
                   }
                   else{
                    salarioLiquido= salary-outrosDesc-vale-inss-baseCalc1
                   }
                           
                }
                function Mudarestado() {/* alterar elemento CSS através do CSS */
                 display= document.getElementById('tableResult').style.visibility='visible';
                 
                  }
                  document.getElementById('Demo1').innerHTML =  salarioBruto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); 
                  document.getElementById('Demo2').innerHTML =  inss.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                  document.getElementById('Demo3').innerHTML = baseCalc1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); 
                  document.getElementById('Demo4').innerHTML = vale.toLocaleString('pt-br' ,{style: 'currency', currency: 'BRL'});
                  document.getElementById('Demo5').innerHTML = salarioLiquido.toLocaleString('pt-br' ,{style: 'currency', currency: 'BRL'});         
                

                }


          
           
 /* document.getElementById('Demo').innerHTML = salarioBruto; 
    document.getElementById('Demo2').innerHTML = inss; 
    document.getElementById('Demo3').innerHTML = salarioLiquido;*/ 

//teste git





    



