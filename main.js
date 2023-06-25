/*

Main JavaScript file for jeremycavallo.com

Author: Jeremy Cavallo

Copyright 2023

*/


getIconsAndTabs = () => {
    /*
    Returns list of icons and tabs

    Args:
        None
    
    Returns:
        [sidebarIcons, tabs] - lists of sidebar icons and tabs
    */

    let sidebarIcons = document.querySelectorAll('.sidebar-icon')
    let tabs = document.querySelectorAll('.tab')

    return [sidebarIcons, tabs]
}

clearActive = (sidebarIcons, tabs) => {
    /*
    Clears the active state of all icons and tabs

    Args:
        None
    
    Returns:
        None

    */
    sidebarIcons.forEach((icon, i) => {
        icon.classList.remove('sidebar-icon-active')
    })
    tabs.forEach((tab, i) => {
        tab.classList.remove('tab-active')
    })
}

homeClicked = () => {
    /*
    Handles selection of home page

    Args:
        None
    
    Returns:
        None
    */

    let [sidebarIcons, tabs] = getIconsAndTabs()
    clearActive(sidebarIcons, tabs)

    sidebarIcons[0].classList.add('sidebar-icon-active')
    tabs[0].classList.add('tab-active')
}

aboutClicked = () => {
    /*
    Handles selection of about page

    Args:
        None
    
    Returns:
        None
    */

    let [sidebarIcons, tabs] = getIconsAndTabs()
    clearActive(sidebarIcons, tabs)

    sidebarIcons[4].classList.add('sidebar-icon-active')
    tabs[1].classList.add('tab-active')
}

contactClicked = () => {
    /*
    Handles selection of contact page

    Args:
        None
    
    Returns:
        None
    */

    let [sidebarIcons, tabs] = getIconsAndTabs()
    clearActive(sidebarIcons, tabs)

    sidebarIcons[3].classList.add('sidebar-icon-active')
    tabs[3].classList.add('tab-active')
}

projectsClicked = () => {
    /*
    Handles selection of projects page

    Args:
        None
    
    Returns:
        None
    */

    let [sidebarIcons, tabs] = getIconsAndTabs()
    clearActive(sidebarIcons, tabs)

    sidebarIcons[2].classList.add('sidebar-icon-active')
    tabs[2].classList.add('tab-active')
}

githubClicked = () => {
    /*
    Handles selection of github page

    Args:
        None
    
    Returns:
        None
    */

    let [sidebarIcons, tabs] = getIconsAndTabs()
    clearActive(sidebarIcons, tabs)

    sidebarIcons[1].classList.add('sidebar-icon-active')
}

settingsClicked = () => {
    /*
    Handles selection of settings page

    Args:
        None
    
    Returns:
        None
    */

    let [sidebarIcons, tabs] = getIconsAndTabs()
    clearActive(sidebarIcons, tabs)

    sidebarIcons[5].classList.add('sidebar-icon-active')
}