import { useEffect, useState } from "react";
import styles from "./ChildrenServer.module.scss";
import { loading_listener } from "@/invoke/events";

type IProps = {
    serverId: string;
    imageUrl: string;
    name: string;
    onClick?: (serverId: string) => void;
}

export default function ChildrenServer(props: IProps) {

    useEffect(() => {
        init();
    }, []);

    const [barValue, setBarValue] = useState<number>(0);

    const init = async () => {

        await loading_listener((payload) => {
            if (payload.event.type === "process_children" && payload.event.server_id === props.serverId) {
                setBarValue(Math.round(payload.fraction));
            }
        });

    }

    return (
        <div
            className={styles.childrenServerContainer}
            onClick={() => {
                if (props.onClick) props.onClick(props.serverId);
            }}
        >

            <div className={styles.serverBorderDiv}>

                <div className={styles.serverBorderContainer}>
                    <div
                        className={styles.bar}
                        style={{ height: `${barValue}%` }}
                    ></div>
                    <img className={styles.serverBorderContainer} src={props.imageUrl} />
                </div>

            </div>
            
            <div className={styles.titleContainer}>
                <div className={styles.leftTitleDiv}>
                    <h1>{props.name}</h1>
                </div>
                <div className={styles.rightTitleDiv}>
                    {/* <div className={styles.serverState}></div>
                                            <h1>在線人數: {5}</h1> */}
                </div>
            </div>

        </div>
    )
}