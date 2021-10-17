/// <reference types="react" />
import PropTypes from 'prop-types';
import { TabProps } from './interfaces';
export declare const Tab: {
    ({ children }: TabProps): JSX.Element;
    propTypes: {
        title: PropTypes.Validator<string>;
        activeKey: PropTypes.Validator<string | number>;
        variant: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
    };
    defaultProps: {
        variant: string;
        children: null;
    };
    displayName: string;
};
//# sourceMappingURL=../../../src/app/components/Tab.d.ts.map