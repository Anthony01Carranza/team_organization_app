import "./footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://www.facebook.com/t7o7n7y8'>
            <img src="/img/facebook.png" alt='Facebook' />
        </a>
        <a href='https://www.linkedin.com/in/anthony-alexander-carranza-ramirez-6a77ab25a/'>
            <img src="/img/link.png" alt='linkedin' />
        </a>
    </div>
    <img src='/img/Logo.png' className="footer_logo" alt='org' />
    <strong className="footer-titulo">Developed by<br/>Anthony Carranza</strong>
</footer>
}

export default Footer