import React from "react";
import styles from "./css/nav.module.css"
export default function Nav(props) {
   
    return (
        <div className={styles.nav}>
            <form   className={styles.caja}
                    role="search"
                    onSubmit={e => {
                        e.preventDefault();
                        props.retornar(props.nombre);
                        props.setState("")
                }}>
                <input  className="form-control me-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                        onChange={e=>props.setState(e)}
                        value={props.nombre}/>
                <button type="submit"  
                        className={styles.btn_send}>
                            Send</button>
            </form>

        </div>
    )
}