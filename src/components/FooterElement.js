import styles from "../styles/FooterElement.module.css";

const FooterElement = ({ title, links }) => {
    return (
        <div className={styles.FooterElement_container}>
            <span className={styles.FooterElement_title} role="heading" aria-level="2">{title}</span>
            <ul className={styles.FooterElement_content}>
                {links.map(({ href, text, target }, index) => (
                    <li key={index}>
                        <a className="transition ease-curve-a duration-250 hover:text-primary-60"
                        href={href}
                        target={target || "_self"} 
                        rel="noopener noreferrer"
                        >
                            {text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterElement;
