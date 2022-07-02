import React, { useEffect } from 'react'

import { ProSidebar, SidebarHeader, SidebarFooter, Menu, MenuItem, SubMenu, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { BiUser, BiCheckCircle } from "react-icons/bi";
import { GoMarkGithub } from "react-icons/go";
import { Button } from 'reactstrap';

import "./sidebar.css"
import DialogComponent from '../dialog/dialog';

export default function Sidebar() {

  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    document.getElementById('insert').addEventListener('click', () => {
      setModalShow(true)
    })
  }, [])


  return (
    <>

      <ProSidebar>
        <SidebarHeader>
          <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            Alterdata
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <SubMenu title="Clientes" icon={<BiUser />}>
              <MenuItem icon={<BiCheckCircle />} id="insert">Inserir</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter style={{ textAlign: 'center' }}>
          <div>
            <a href="https://github.com/MatheusPCardoso/Alterdata">
            <Button
              style={{ margin: "15px 0", borderRadius: "20px", backgroundColor: "rgba(255,255,255,0.15)" }}
              onClick={() => {}}
            >
              <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <GoMarkGithub />
                <div style={{ marginLeft: "5px" }}>
                  View Soucer
                </div>
              </div>
            </Button>
            </a>
            
          </div>
        </SidebarFooter>
      </ProSidebar>
      <DialogComponent show={modalShow}
        onHide={() => setModalShow(false)} />
    </>
  )
}
