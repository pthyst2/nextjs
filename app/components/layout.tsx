import styles from './layout.module.sass'
export default function Layout({ children, home }: any) {
    return (
        <>
            {
                home ? (<>
                    <p>Header navbar</p>
                    <div className={ styles.flex}>{ children }</div>
                    <p>Footer navbar</p>
                </>) : (<>
                    <p>Page header</p>
                    <div className={ styles.flex}>
                        { children }
                    </div>
                    <p>Page footer</p>
                </>)
            }
        </>
    )}