const tabs = document.querySelectorAll('[data-tab-target]')
const tab_contents = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const mytarget = document.querySelector(tab.dataset.tabTarget)
        tab_contents.forEach(tab_content =>{
            tab_content.classList.remove('active')

            })
            tabs.forEach(tab => {
                tab.classList.remove('active')
        })
        tab.classList.add('active')
        mytarget.classList.add('active')
    })
})