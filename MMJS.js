//1
const friends = ["mango", "poly", "ajax", "kivi"]
let string = "" 
let h = 0
//1.1
for (h = 0; h < friends.length; h++){
    string += friends[h]
   if(h !== friends.length - 1){
    string += ","
   }
}

    console.log(string)
    //1.2
console.log(friends.join(","))
//2
// Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)
const cards = ["карточка1", "карточка2", "карточка3", "карточка4", "карточка5"]
 const cardToRemote = "карточка3"
 console.log(cards.slice(2, ))
