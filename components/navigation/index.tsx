"use client";
import useToggle from "@/hooks/useToggle";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import SideDrawer from "./SideDrawer";

export default function NavigationComposer() {
  const {
    open: drawerOpen,
    toggle: toggleDrawer,
    handleOpen: openDrawer,
    handleClose: closeDrawer,
  } = useToggle({
    initial: false,
  });

  return (
    <div>
      <Desktop />
      <Mobile open={drawerOpen} onClick={toggleDrawer} />
      <SideDrawer open={drawerOpen} />
    </div>
  );
}
