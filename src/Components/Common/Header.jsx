import React, { useState } from "react";
// import { Layout, Menu } from "antd";
import { Anchor, Button, Drawer } from "antd";

const AppHeader = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://www.google.com">Tech</a>
        </div>
        <div className="mobileHidden">
          <Anchor
            targetOffset="65"
            items={[
              {
                key: "home",
                href: "#hero",
                title: "Home",
              },
              {
                key: "about",
                href: "#about",
                title: "About",
              },
              {
                key: "features",
                href: "#features",
                title: "Features",
              },
              {
                key: "works",
                href: "#works",
                title: "Works",
              },
              {
                key: "faq",
                href: "#faq",
                title: "Faq",
              },
              {
                key: "pricing",
                href: "#pricing",
                title: "Pricing",
              },
              {
                key: "contact",
                href: "#contact",
                title: "Contact",
              },
            ]}
          />
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer placement="right" onClose={onClose} open={open}>
            <Anchor
              targetOffset="65"
              items={[
                {
                  key: "home",
                  href: "#hero",
                  title: "Home",
                },
                {
                  key: "about",
                  href: "#about",
                  title: "About",
                },
                {
                  key: "features",
                  href: "#features",
                  title: "Features",
                },
                {
                  key: "works",
                  href: "#works",
                  title: "Works",
                },
                {
                  key: "faq",
                  href: "#faq",
                  title: "Faq",
                },
                {
                  key: "pricing",
                  href: "#pricing",
                  title: "Pricing",
                },
                {
                  key: "contact",
                  href: "#contact",
                  title: "Contact",
                },
              ]}
            />
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
