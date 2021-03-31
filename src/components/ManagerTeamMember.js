import React from 'react'
import {Button} from '@material-ui/core';
import 'react-intl-tel-input/dist/main.css'

export const ManagerTeamMember = ({handleManager, handleTeamMember}) => {

    return (
        <div className="mainContainer">
            <Button onClick={handleManager}><p className='managerParagraph'>Join as a Manager</p></Button>
            <Button onClick={handleTeamMember}><p className="teamMemberParagraph">Join as a Team Member</p></Button>
        </div>
    )
}

export default ManagerTeamMember