import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { color } from 'chart.js/helpers'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'blue',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'Franchises',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'New Franchises',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Add New Franchises',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Landing Screen',
        to: '/landingScreen', 
      },
      {
        component: CNavItem,
        name: 'Franchises List',
        to: '/base/progress',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Franchises Outlets',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'New Franchises',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Add New Franchises',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Franchises List',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Customers',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add New',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Members',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'General Customers',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Analytics',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'System Settings',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Users',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
    ],
  },
]

export default _nav
