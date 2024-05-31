import styles from "./Dropdown.module.scss";

type IProps = {
    content: string | number;
    className?: string;
    onClick?: ()=> void;
    themeColor?: "green" | "purple" | "gray"
}




export default function Dropdown(props: IProps){
    const componentClassNames =()=>{

    }

    return(
        <div className={`${componentClassNames()}`} onClick={toggleDropdown}>
            <


        </div>
    )
}
