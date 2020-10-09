interface IMenuItem {
    translation : string,
    targetUrlPath: string,
}

export const menuItems: IMenuItem[] = [
    {translation: "navBar_home", targetUrlPath: "/home"},
    {translation: "navBar_aboutMe", targetUrlPath: "/aboutme"},
    {translation: "navBar_projects", targetUrlPath: "/projects"}
]

