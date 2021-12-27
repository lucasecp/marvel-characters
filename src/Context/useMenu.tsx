import React, { createContext, useState, useContext } from 'react'

 interface MenuContextI{
   showMenu: Boolean,
   openMenu: () => void, 
   closeMenu: () => void,
    
 }

const MenuContext = createContext<MenuContextI>({} as MenuContextI)

export const MenuProvider: React.FC = ({ children }) => {
  const [showMenu, setShowMenu] = useState<Boolean>(false)

  const openMenu = () => {
    setShowMenu(true)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }

  return (
    <MenuContext.Provider value={{ showMenu, openMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenu() {
  const context = useContext(MenuContext)

  return context
}
