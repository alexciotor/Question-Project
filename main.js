// JavaScript Functionality
//  iteration Method
// const button =document.getElementsByClassName('btn');
// for(let i =0; i <button.length; i++){
//     button[i].addEventListener('click', function(){
//         button[i].classList.toggle('is-open');
//          let content = this.nextElementSibling;
//          if(content.style.maxHeight){
//             content.style.maxHeight =null;
//                                          }
//          else{
//             content.style.maxHeight= content.scrollHeight +'px'
//                                          }
 
//                                          })
//                                          }

// ForEach Method
                const button  = document.querySelectorAll('.btn');
                        button.forEach(btn=>{
                      btn.addEventListener('click', ()=>{
                           btn.classList.toggle('is-open')
                        const content = btn.nextElementSibling;
                              if(content.style.maxHeight){
                                content.style.maxHeight=null
                                                          }
                              else{
                                 content.style.maxHeight =content.scrollHeight +'px'
                                                                                 }
                                                                                })
                        })
                    
                      