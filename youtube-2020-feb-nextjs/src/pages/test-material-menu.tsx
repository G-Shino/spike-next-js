import Link from "next/link";
import { Menu, MenuItem, MenuItemProps, Button } from "@material-ui/core";
import React from "react";

type LinkMenhItermProps = Omit<
  MenuItemProps<"a", { href: string }>,
  "component" | "button"
>;

const LinkmenuIterm = React.forwardRef<HTMLAnchorElement, LinkMenhItermProps>(
  function LinkMenuIterm(props, forwardedRef) {
    const { href, ...others } = props;
    return (
      <Link href={href} passHref>
        <MenuItem component="a" button ref={forwardedRef} {...others} />
      </Link>
    );
  }
);

export default function Page() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <LinkmenuIterm href="/">Home</LinkmenuIterm>
        <MenuItem>hoge</MenuItem>
        <MenuItem>fuga</MenuItem>
      </Menu>
    </>
  );
}
