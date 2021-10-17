import React from 'react';
interface INavLink {
    children?: any;
    isActive: boolean;
    activeKey: string;
}
declare class NavLink extends React.Component<INavLink> {
    static contextType: React.Context<{
        tabContextId: string;
        setTabContextId: (tabId: string) => string;
    }>;
    constructor(props: INavLink);
    handleClick(): void;
    render(): JSX.Element;
}
export default NavLink;
//# sourceMappingURL=../../../src/app/components/NavLink.d.ts.map