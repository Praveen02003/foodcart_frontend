export const handleFile = (event, setAddimagepreview, setFoodimage) => {
    const file = event.target.files[0]
    if (!file) return
    setAddimagepreview(URL.createObjectURL(file))
    const reader = new FileReader()
    reader.onloadend = () => {
        setFoodimage(reader.result)
    }
    reader.readAsDataURL(file)
}