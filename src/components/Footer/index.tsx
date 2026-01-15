import styles from './styles.module.css';

export function Footer() {
    return (
        <div className={styles.footer}>
            <a href='#' className={styles.link}>Entenda a técnica pomodoro</a>
            <a href="#" className={styles.link}>Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚</a>
        </div>
    )
}