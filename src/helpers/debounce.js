
export function debounce(cb, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => cb.apply(this , args) , timeout)
    }
}