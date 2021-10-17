import React from 'react';
import PropTypes from 'prop-types';
import { TabsProps } from './interfaces';
interface State {
    tabContextId: string;
    setTabContextId: (tabId: string) => string;
}
export declare class Tabs extends React.Component<TabsProps, State> {
    static contextType: React.Context<{
        tabContextId: string;
        setTabContextId: (tabId: string) => string;
    }>;
    static defaultProps: {
        variant: string;
        children: null;
    };
    static propsTypes: {
        activeKey: PropTypes.Requireable<string | number>;
        defaultActiveKey: PropTypes.Requireable<string | number>;
        variant: PropTypes.Requireable<string>;
        children: PropTypes.Validator<PropTypes.ReactElementLike>;
    };
    constructor(props: TabsProps);
    setTabContextId(tabId: string): string;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=../../../src/app/components/Tabs.d.ts.map