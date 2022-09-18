/**
 * 
 * @param {String | String[]} selector css selector or array of css selector
 * @param {Object} option options for scrollObserver
 */


export default function scrollObserver(selector, option) {
    let showCount = 0
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (option?.once) {
                if (showCount === 0 && entry.isIntersecting) {
                    entry.target.classList.add('shown')
                    option.onshow ? option.onshow(entry) : false
                    showCount++
                }
            }
            else {
                if (entry.isIntersecting) {
                    entry.target.classList.add('shown')
                    if (option && option.onshow) option.onshow(entry)
                }
                else {
                    entry.target.classList.remove('shown')
                    if (option && option.onhide) option.onhide(entry)
                }
            }
        })
    }, option)

    if (Array.isArray(selector))
        selector.forEach(qAll)
    else
        qAll(selector)


    function qAll(selector) {
        const item = document.querySelectorAll(selector)
        item.forEach(i => observer.observe(i))
    }
}