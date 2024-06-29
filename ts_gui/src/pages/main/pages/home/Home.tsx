import styles from "./Home.module.scss";
import ReactSkinview3d from "react-skinview3d"
import { WalkingAnimation } from "skinview3d";

import { useLoaderData } from "react-router-dom";
import { IMainLoader } from "@/loader";


export default function Home() {

    const loaderData = useLoaderData() as IMainLoader;
    return (
        <div className={styles.homeContainer}>
          <h1 className={styles.text}>功能尚未完成</h1>
          {loaderData?.player?.uuid ? (
            <ReactSkinview3d
              skinUrl={`https://crafatar.com/skins/${loaderData.player.uuid}`}
              height="500"
              width="500"
              onReady={({ viewer }) => {
                const walkingAnimation = new WalkingAnimation();
                walkingAnimation.headBobbing = false;
                viewer.animation = walkingAnimation;
                viewer.animation.speed = 0.5;
              }}
            />
          ) : (
            <p>無法加載皮膚</p>
            )}
            
        </div>
      );
}