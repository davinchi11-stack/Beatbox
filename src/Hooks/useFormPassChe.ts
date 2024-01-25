import { useState } from "react";

export const useCheckPass = () => {
    const [open , setOpen ] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
     
    const handleClickShowPassword = () => setShowPassword((show) => !show);

        const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
        };

        const handleOpen = () => {
            setOpen(true)
        }
    
        const handleClose = () => {
            setOpen(false)
        }
    return {open , showPassword,  handleClose , handleOpen, handleClickShowPassword , handleMouseDownPassword}
}