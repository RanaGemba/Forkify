import React from 'react'
import { NavLink, useLocation, matchPath } from 'react-router-dom'
import PropTypes from 'prop-types'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

import { CBadge, CNavLink, CSidebarNav } from '@coreui/react'

// Custom Text component
const Text = ({ children }) => {
  return <span style={{ fontSize: '1rem', color: 'gray' }}>{children}</span>
}

Text.propTypes = {
  children: PropTypes.node
}

export const AppSidebarNav = ({ items }) => {
  const location = useLocation()

  // Helper function to determine if route is active
  const isRouteActive = (to) => {
    if (!to) return false
    return matchPath({ path: to, end: false }, location.pathname) !== null
  }

  // Helper function to render nav link content
  const navLink = (name, icon, badge, indent = false) => {
    return (
      <>
        {icon
          ? icon
          : indent && (
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
            )}
        {name && <Text>{name}</Text>}
        {badge && (
          <CBadge color={badge.color} className="ms-auto" size="sm">
            {badge.text}
          </CBadge>
        )}
      </>
    )
  }

  // Render individual nav item
  const navItem = (item, index, indent = false) => {
    const { component, name, badge, icon, ...rest } = item
    const Component = component || 'div'
    
    // Check if route is active
    const active = rest.to ? isRouteActive(rest.to) : false

    // If item has a route or href
    if (rest.to || rest.href) {
      return (
        <Component key={index} className="nav-item">
          <CNavLink
            {...(rest.to && { 
              as: NavLink,
              to: rest.to
            })}
            {...(rest.href && { 
              href: rest.href,
              target: '_blank', 
              rel: 'noopener noreferrer' 
            })}
            className={`custom-nav-link color:white ${active ? 'active-nav-item' : ''}`}
            {...rest}
          >
            {navLink(name, icon, badge, indent)}
          </CNavLink>
        </Component>
      )
    }

    // For non-link items
    return (
      <Component key={index}>
        {navLink(name, icon, badge, indent)}
      </Component>
    )
  }

  // Render nested nav groups
  const navGroup = (item, index) => {
    const { component, name, icon, items, ...rest } = item
    const Component = component
    
    return (
      <Component 
        compact 
        as="div" 
        key={index} 
        toggler={navLink(name, icon)} 
        {...rest}
      >
        {item.items?.map((subItem, subIndex) =>
          subItem.items 
            ? navGroup(subItem, subIndex) 
            : navItem(subItem, subIndex, true)
        )}
      </Component>
    )
  }

  // Main render method
  return (
    <CSidebarNav as={SimpleBar}>
      {items &&
        items.map((item, index) => 
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
    </CSidebarNav>
  )
}

// Add some CSS to ensure the hover and active states are clear
const styleSheet = document.createElement('style')
styleSheet.type = 'text/css'
styleSheet.innerHTML = `
  .custom-nav-link {
    transition: background-color 0.3s ease, color 0.3s ease;
    color: white !important;
  }

  .custom-nav-link:hover {
    background-color: #467835 !important;
    color: white !important;
  }

  .active-nav-item {
    background-color: #467835 !important;
    color: white !important;
  }

  .active-nav-item span,
  .active-nav-item .nav-icon {
    color: white !important; /* Ensures text within spans or icons is white */
  }
  .nav-item {
    color: #AEDCB6 !important; /* Ensures text within spans or icons is white */
  }
  .nav-icon {
    color: #AEDCB6 !important; /* Ensures text within spans or icons is white */
  }
`;

document.head.appendChild(styleSheet)

// PropTypes for type checking
AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.elementType,
      name: PropTypes.string,
      icon: PropTypes.node,
      badge: PropTypes.shape({
        color: PropTypes.string,
        text: PropTypes.string
      }),
      to: PropTypes.string,
      href: PropTypes.string,
      items: PropTypes.array
    })
  ).isRequired,
}

export default AppSidebarNav