import { ReactNode } from 'react';

type IVerticalFooterLinksProps = {
    children: ReactNode;
};

const VerticalFooterLinks = (props: IVerticalFooterLinksProps) => (
    <ul className="vertical-footer-links grid grid-cols-2 divide-x divide-gray-300 gap-x-2 text-center">
        {props.children}
    </ul>
);

export { VerticalFooterLinks };
