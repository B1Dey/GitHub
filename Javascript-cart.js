const btn = document.getElementsByTagName("button");

  console.log(btn)  
for (let i =0; i < btn.length; i++ ){
    btn[i].addEventListener("click", addtocart)
}

function addtocart(){
  tnode2 = this.parentElement.getElementsByTagName("img")[0].getAttribute("src");

  const textnode2 = this.parentElement.getElementsByTagName("img")[0].getAttribute("src");

  console.log(image)
  paragraph.appendChild(image).width="70"
 
  paragraph.appendChild(textnode)

  

document.querySelector(".innercart").appendChild(paragraph)
  
}

    console.log(image)
    paragraph.appendChild(image).width="7
    const paragraph = document.createElement("div")
    const textnode = document.createTextNode(this.parentElement.getElementsByTagName("p")[0].innerText);
    const image = document.createElement("img");
