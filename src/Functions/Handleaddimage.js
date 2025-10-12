export const handleaddimage = (event, setFoodimage) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
        setFoodimage(reader.result);
    };
    reader.readAsDataURL(file);
};
