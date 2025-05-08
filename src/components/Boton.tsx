import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

export default function Boton() {
    const theme = useContext(ThemeContext);
    return (
        <>
            <button className='' style={{
                backgroundColor: theme.background, color: theme.color
            }} >

                Tema claro
            </button>
        </>
    )
}
