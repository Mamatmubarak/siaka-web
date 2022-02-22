import { ReactNode } from "react";


interface LayoutProps{
    children: ReactNode;
}

export default function Layout( props: LayoutProps ) {
    const { children } = props;

  return (
        <div className="body">
            { children }
        </div>
  )
}
