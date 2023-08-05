import {Switch} from "@mui/material";
import {useState} from "react";


const SwitchTwoOptions = (props) =>{

    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return(
        <div>
            <label>{props.firstOption}</label>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                sx={{
                    '& .MuiSwitch-track': {
                        background: '#800080',
                        opacity: 1,
                    },
                }}
            />
            <label>{props.secondOption}</label>
        </div>

    )
}

export default SwitchTwoOptions;