import TimeLineComponent from "../Tailwind/Flowbite/TimeLineComponent";
import styles from "./SideBarTimeLIne.module.css"

const SideBarTimeLine = (props) =>{
    return(
       <div className={styles.sidebartml}>
           <div className={styles.topTimeLine}>
               <div className={styles.topTitle}>
                   <p>
                       Last 5 Uploaded Resources
                   </p>
               </div>
               <TimeLineComponent recentResourceData={props.resourceTimeLineData}></TimeLineComponent>

               {/*
               <TimeLineComponent recentResourceData={props.resourceTimeLineData}></TimeLineComponent>

               */
               }
               {
                   /*
                   <ul>
                   <li>
                       <p>
                           Address
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           Address
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           Address
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           Address
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           Address
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           Address
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
               </ul>
                   * */
               }

           </div>
           <div className={styles.thebottom}>
               <ul>
                   <li>
                       <p>
                           Address
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
                   <li>
                       <p>
                           How many Id in your wallet
                       </p>
                   </li>
               </ul>
           </div>

       </div>
    )
}

export default SideBarTimeLine;