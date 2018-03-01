// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var result,ostatok;
  var coins ={};
    if (currency>10000) {
    return coins={error:"You are rich, my friend! We don't have so much coins for exchange"};
  
  } else if (currency<=0){
    return coins={};
   
  } else if (currency%50>=0) {
    result=~~(currency/50);
    if (result>0){
    coins.H=result;
    };
    ostatok=currency%50;    
    
   
    if (ostatok%25>=0){
      result=~~(ostatok/25);
      if (result>0){
      coins.Q=result;
      };       
    };
    ostatok=ostatok%25;
    
      
      
      if (ostatok%10>=0){
        result=~~(ostatok/10);
        if (result>0){
        coins.D=result;        
        };        
      };
      ostatok=ostatok%10;
      
        
        
        if (ostatok%5>=0){
          result=~~(ostatok/5);
          if (result>0){
          coins.N=result;
          };          
        };
        ostatok=ostatok%5;
          
          if (ostatok>0){
          coins.P=ostatok;
        };
        
    };
          return coins;      
        
  };
        
                 
      
    
