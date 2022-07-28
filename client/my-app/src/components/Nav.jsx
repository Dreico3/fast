import React from "react";
import styles from "./css/nav.module.css"
export default function Nav(props) {
   
    return (
        <div className={styles.nav}>
            <form   class={styles.caja}
                    role="search"
                    onSubmit={e => {
                        e.preventDefault();
                        alert("me enviaste=?? no lo creo "+props.nombre);
                }}>
                <input  class="form-control me-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                        onChange={e=>props.setState(e)}/>
                <button type="submit"  
                        className={styles.btn_send}>
                            Send</button>
            </form>

        </div>
    )
}