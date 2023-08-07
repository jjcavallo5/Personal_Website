/*

Main JavaScript file for jeremycavallo.com

Author: Jeremy Cavallo

Copyright 2023

*/

getIconsTabsAndPages = () => {
    /*
    Returns list of icons and tabs

    Args:
        None
    
    Returns:
        [sidebarIcons, tabs] - lists of sidebar icons and tabs
    */

    let sidebarIcons = document.querySelectorAll('.sidebar-icon')
    let tabs = document.querySelectorAll('.tab')
    let pages = document.querySelectorAll('.body-page')

    return [sidebarIcons, tabs, pages]
}

clearActive = (sidebarIcons, tabs, pages) => {
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
    pages.forEach((page, i) => {
        page.classList.remove('body-active')
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

    let [sidebarIcons, tabs, pages] = getIconsTabsAndPages()
    clearActive(sidebarIcons, tabs, pages)

    sidebarIcons[0].classList.add('sidebar-icon-active')
    tabs[0].classList.add('tab-active')
    pages[0].classList.add('body-active')
}

aboutClicked = () => {
    /*
    Handles selection of about page

    Args:
        None
    
    Returns:
        None
    */

    let [sidebarIcons, tabs, pages] = getIconsTabsAndPages()
    clearActive(sidebarIcons, tabs, pages)

    sidebarIcons[4].classList.add('sidebar-icon-active')
    tabs[2].classList.add('tab-active')
    pages[1].classList.add('body-active')

}

contactClicked = () => {
    /*
    Handles selection of contact page

    Args:
        None
    
    Returns:
        None
    */

    let [sidebarIcons, tabs, pages] = getIconsTabsAndPages()
    clearActive(sidebarIcons, tabs, pages)

    sidebarIcons[3].classList.add('sidebar-icon-active')
    tabs[4].classList.add('tab-active')
    pages[3].classList.add('body-active')
}

projectsClicked = () => {
    /*
    Handles selection of projects page

    Args:
        None
    
    Returns:
        None
    */

    let [sidebarIcons, tabs, pages] = getIconsTabsAndPages()
    clearActive(sidebarIcons, tabs, pages)

    sidebarIcons[2].classList.add('sidebar-icon-active')
    tabs[3].classList.add('tab-active')
    pages[2].classList.add('body-active')

}

githubClicked = () => {
    /*
    Handles selection of github page

    Args:
        None
    
    Returns:
        None
    */

    let [sidebarIcons, tabs, pages] = getIconsTabsAndPages()
    clearActive(sidebarIcons, tabs, pages)

    sidebarIcons[1].classList.add('sidebar-icon-active')
    tabs[1].classList.add('tab-active')
    pages[4].classList.add('body-active')

}

settingsClicked = () => {
    /*
    Handles selection of settings page

    Args:
        None
    
    Returns:
        None
    */

    let [sidebarIcons, tabs, pages] = getIconsTabsAndPages()
    clearActive(sidebarIcons, tabs, pages)

    sidebarIcons[5].classList.add('sidebar-icon-active')
    pages[5].classList.add('body-active')

}