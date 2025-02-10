import styles from "../styles/FooterElement.module.css";

const FooterElement = ({ title, links }) => {
    return (
        <div className={styles.FooterElement_container}>
            <span className={styles.FooterElement_title} role="heading">{title}</span>
            <ul className={styles.FooterElement_content} role="list">
                {links.map(({ href, text, target }, index) => (
                    <li key={index} role="listitem">
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
