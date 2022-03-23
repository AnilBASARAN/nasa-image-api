




document.querySelector('#button1').addEventListener("click",getMeDate)
    function getMeDate () {

        
     let dateInput = document.querySelector('#input_id').value
     
     let setLocalStorage = localStorage.setItem("dateInput", dateInput);



    }
    
    let getLocalStorage = localStorage.getItem("dateInput");
   
    dateInput = getLocalStorage

    const url = 'https://api.nasa.gov/planetary/apod?api_key=TgCoBzbJpfKWP6W5pHxia9jMxSgmiy7CgsajypsR';
    fetch(url + "&date=" + dateInput) 
        .then(res => res.json())
        .then(data =>{
    
           
            document.querySelector('#title_id').innerText = data.title
    
            document.querySelector('#date_id').innerText = data.date
    
            document.querySelector('#explanation1').innerText = data.explanation
    
            document.querySelector('#image1').src = data.hdurl
    
            
            
    
           
            
           
        });

        