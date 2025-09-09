import { 
    createRouter,
    RouterProvider,
    Route,
    RootRoute
} from '@tanstack/react-router'

import App from './App'
import Join from './routes/join'
import Projects from './routes/projects'
import Members from './routes/members'
import Home from './routes/home'
import MemberBio from './routes/memberBio'
import ContactUs from './routes/contactUs'

const rootRoute = new RootRoute({
    component:App,
})

const homeRoute = new Route({ 
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home
})
const joinRoute = new Route({ 
    getParentRoute: () => rootRoute,
    path: '/join',
    component: Join
})
const membersRoute = new Route({ 
    getParentRoute: () => rootRoute,
    path: '/members',
    component: Members
})
const memberBioRoute = new Route({
    getParentRoute: () => membersRoute,
    path: '$slug',
    component: MemberBio
})
const projectsRoute = new Route({ 
    getParentRoute: () => rootRoute,
    path: '/projects',
    component: Projects
})

const contactUsRoute = new Route({ 
    getParentRoute: () => rootRoute,
    path: '/contactUs',
    component: ContactUs
})


const routeTree = rootRoute.addChildren([homeRoute,joinRoute,membersRoute.addChildren([memberBioRoute]),projectsRoute, contactUsRoute])

export const router = createRouter({routeTree})
