import React from 'react';
import './styles/Sidebar.css'
import SidebarRow from '../SidebarRow/SidebarRow';

// Icons
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow 
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/prince-louis-birthday-photo-1587591347.jpg?crop=1xw:1xh;center,top&resize=480:*" title="Someone Name" />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 information center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messanger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
        </div>
    )
}

export default Sidebar