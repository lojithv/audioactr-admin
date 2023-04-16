import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';

export const listItems = [
  // {path:'', name: "Dashboard", icon: <DashboardIcon />},
  {path:'customers', name: "Customers", icon: <PeopleIcon />},
  {path:'subscriptions', name: "Subscriptions", icon:  <ShoppingCartIcon />},
  {path:'subscription-plans', name: "Subscription Plans", icon: <BarChartIcon />},
];