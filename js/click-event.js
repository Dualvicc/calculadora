export default (() => {
    const buttons = document.querySelectorAll("button")
    buttons.forEach(button => {
        button.addEventListener("click",(e)=>{
            const action = e.target.innerHTML;
        })
    })
});