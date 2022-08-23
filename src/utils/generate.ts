

export default function generate(length = 6, upper = false, number = false, symbol = false){


        const Letters = ['a','b','c','d','e','f','g','h','i','g','k','m','n','q','u','y','o','p','t','r','w','s','j','l','z','x','c','v','w']
        const symbols = ['/','?','$','%','&']
        const numbers = [1,2,3,4,5,6,7,8,9,0]
        let uppercase = Letters.map(i => i.toUpperCase());
        
        
        let randomChars = upper && number && symbol ? [...Letters, ...symbols, ...numbers, ...uppercase] :
        upper && !number && !symbol? [...Letters, ...uppercase] : 
        number && !upper && !symbol ? [...Letters, ...numbers] :
        symbol && !number && !upper ? [...Letters, ...symbols] : 
        upper && number ? [...Letters, ...numbers, ...uppercase]:
        upper && symbol ? [...Letters, ...uppercase, ...symbols]:
        number && symbol ? [...Letters, ...symbols] : [...Letters]
        
      
        
        
        let password = [];
        while(password.length < length){
            let index = Math.ceil(Math.random() * (randomChars.length -1)) 
                
                password.push(randomChars[index]) 
              
        }
        
        return password
    
       
    
    
}
