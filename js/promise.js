window.onload = ()=>{
  init()
}
let url = "/js/jsonHW.json";
let mytest = "";

//fetch or async await

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     takeObj1(data);
//   })
//   .catch();

  const init = async ( ) =>{
    let resp = await fetch(url)
    let data = await resp.json()
    takeObj1(data)
    console.log(data)
  return data
  }


// taking data func
const takeObj1 = (data) => {
  mytest = data
  console.log(mytest);
};


// elazar's resolve or reject promise function, using only after fetching the adata from the url
//the vocation of this function to check if there is a specific data inside the api data, like here
// checking if  pages[url]  is true - this king of function is specific to the url json data
const fakeApi = (url) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let { pages } = mytest;
      if (pages[url]) {
        res(pages[url]);
      } else {
        rej();
      }
    }, 2000);
  });
};

// another taking data function
let myObj = ''

const takeObj2 = (data) => {
  myObj = data
};


// simple render function
const myRender = (one,two,three) =>{
let myP = document.getElementById('root')
myP.innerHTML = `
data number one : ${one}
data number two : ${two}
data number two : ${three}
`
}


// calling the fakeAPI elazar's function, using the render app, also can use data.map() method, 
//build it inside class, and more.
fakeApi("/post/101")
.then((data)=>{ myRender(data['title'],data['content'],data['like'])
console.log(myObj)
}).catch









// const myRender=(mydata)=>{
//   let myP = document.getElementById('root')
//   myP.innerHTML = `Helllo i love this line ${mydata}`
// }

myRender(myObj)

