import Drawer from '@mui/material/Drawer';
import { DrawerContent } from './DrawerContent';

export function TemporaryDrawer({ isOpen, toggleDrawer }) {
  
  return (
    <Drawer
        anchor='left'
        open={isOpen}
        onClose={toggleDrawer}
    >
        <DrawerContent toggleDrawer={toggleDrawer}/>    
    </Drawer>
  );
}