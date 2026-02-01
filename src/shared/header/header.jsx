import React from 'react'
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import './header.css';
import { IoMdMenu } from "react-icons/io";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import useTheme from '../../component/contexts/theme';
import ThemeToggle from '../../component/ToggleButton';
import { Image } from '../../img-consts/img-const';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disablePadding key={email}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick('addAccount')}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

function Header({ sidebarWidth, toggleSidebar }) {

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };


  {/* //toggle button 

  const [themeMode, setThemeMode] = useState("light")
  
    const lightTheme =() =>{
      setThemeMode("light")
    }
    const darkTheme =() =>{
      setThemeMode("dark")
    }
  
    useEffect(()=> {
      document.querySelector('html').classList.remove("light", "dark")
      document.querySelector('html').classList.add(themeMode)
    }, [themeMode])
  
    const [selected, setSelected] = useState(false);
  
    const onChangeBtn =(e) => {
      const darkModeStatus = e.currentTarget.checked
      if (darkModeStatus) {
        darkTheme()
      } else{
        lightTheme ()
      }
    }

    //toogle button end*/}

    const { themeMode } = useTheme();
    

  return (
    <div className={themeMode === "dark" ? "bg-dark text-white" : "bg-light header"} >
      <div className='d-flex mx-2 auto headerMenu' style={{ marginLeft: `${sidebarWidth}px` }}>
        <Link ><img src={Image.Logo_URL} alt='logo' width={200} height={56} /></Link>
        <Link className="menu-icon ms-3" onClick={toggleSidebar}><IoMdMenu /></Link>
        <div className='d-flex ms-auto align-items-center'>
          <ThemeToggle  />
            
          <Link className='logout ms-3'>
            <Button variant="outlined" onClick={handleClickOpen}>
              <ArrowLeft />
            </Button>
            <SimpleDialog
              selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />

          </Link>

        </div>
      </div>
    </div>
  )
}

export default Header;
