const styleButtonFooter = `no-underline font-bold hover:text-black/[0.4] mb-2`

const Footer = () => {
    return (
        <div className="bg-white text-black">
            <div className="flex flex-col md:flex-row w-full md:w-3/4 lg:w-2/4 m-auto items-center justify-between pt-4 mb-4 px-4">
                <div className="w-full md:w-3/4 text-justify mb-4 md:mb-0">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatum molestias obcaecati magni alias? Magnam blanditiis fuga quisquam expedita quaerat facere saepe. Quas dolorem pariatur voluptates ab impedit recusandae facere?
                    </p>
                </div>
                <div className="w-full md:w-1/4 flex justify-center md:justify-end">
                    <ul className="flex flex-col items-center md:items-end">
                        <li className={styleButtonFooter}>
                            <a href='/'>Accueil</a>
                        </li>
                        <li className={styleButtonFooter}>
                            <a href='/tableau'>Tableaux</a>
                        </li>
                        <li className={styleButtonFooter}>
                            <a href='/contact'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-black h-0.5"></div>
            <div className="p-3 text-center">
                <h6>This is a ORTEGA Pablo creation - Copyright © 2024</h6>
            </div>
        </div>
    )
}

export default Footer;
