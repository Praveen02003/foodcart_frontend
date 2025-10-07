export const handleFile1 = (event,setEditfoodimage) => {
    const file = event.target.files[0]
    if (!file) return
    setEditfoodimage(URL.createObjectURL(file))
    const reader = new FileReader()
    reader.onloadend = () => {
        setEditfoodimage(reader.result)
    }
    reader.readAsDataURL(file)
}