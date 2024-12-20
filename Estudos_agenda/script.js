const  searchInput = document.getElementById('a')
searchInput.addEventListener('input', (event) =>{
    const value= event.target.value
    format_string(value)
    const items=document.querySelectorAll('.Assuntos')
    const none = document.getElementById('noResult')
    let hasResult= false
    items.forEach(item => {
        if (format_string(item.textContent).indexOf(value) !== -1){    // Pega o texto dos items //formatamos os dois para melhor comparação
            item.style.display='flex'
            hasResult=true
        }else {
            item.style.display='none'
        }
    })
    if (hasResult){
        none.style.display='none'
    }else{
        none.style.display='block'
    }
})
function format_string(value){
    return value.toLowerCase().trim()
}