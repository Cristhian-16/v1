import { useEffect, useRef } from 'react'
import './Navegacion.css'

export const Navegacion = ({ nav }) => {

    const ref = useRef(null);

    useEffect(() => {
        const scrollBorder = () => {
            ref.current.classList.add('border-aparence')
        }
        window.addEventListener('scroll', scrollBorder)
        return () => {
            window.removeEventListener('scroll', scrollBorder)
        };
    }, [])

    return (
        <section ref={ref} className='container'>
            <p>Cristhian Espiritu</p>
            <nav className='nav-bar'>
                <a href={nav}>Home</a>
                <a href={nav}>About</a>
                <a href={nav}>Contact</a>
            </nav>
        </section>

    )
}
