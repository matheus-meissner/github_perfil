import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/matheus-meissner/repos')
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);
        })
    }, []);
    
    return (
        <div className="container">
            <ul className={styles.list}>
                {repos.map(repositorio => (
                    <li key={repositorio.id} className={styles.listItem}>
                        <div className={styles.listItemName}>
                            <b>Nome:</b> {repositorio.name} <br />
                        </div>
                        <div className={styles.listItemLanguage}>
                            <b>Linguagem:</b> {repositorio.language} <br />
                        </div>
                        <a className={styles.listItemLink} target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                    </li>
                ))}
            <li>Repositório</li>
            </ul>
        </div>
    )
}

export default ReposList;