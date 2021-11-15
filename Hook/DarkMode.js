
export default function DarkMode() {
    useEffect(() => {
        const root = window.document.documentElement
        
        root.classList.add('dark')
    }, [])
}
