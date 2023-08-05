'use client';
import { Timeline } from 'flowbite-react';
import styles from './TimeLineComponent.module.css'
import './TimeLineComponent.css'


const TimeLineComponent = (props) =>{
    return(
            <Timeline className='border-solid border-gray-500 border-l border-t-0 border-r-0 border-b-0 list-none'>
                {props.recentResourceData.map( data =>{
                    return (
                        <Timeline.Item className=''>
                            <Timeline.Point className=''/>
                            <Timeline.Content >
                                <Timeline.Time >
                                    {data.dateAdded}
                                </Timeline.Time>
                                <Timeline.Title >
                                    {data.departmentSection}
                                </Timeline.Title>
                                <Timeline.Body >
                                    <p>
                                        {data.resourceInfo}
                                        <br/>
                                        {data.name}
                                    </p>
                                </Timeline.Body>
                            </Timeline.Content >
                        </Timeline.Item>
                    )
                })}
            </Timeline>


    )
}

export default TimeLineComponent;