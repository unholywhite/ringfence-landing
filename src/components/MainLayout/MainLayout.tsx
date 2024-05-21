import cn from 'classnames';
import React from 'react';

import Footer from '@app/components/Footer';
import Header from '@app/components/Header';
import Metadata, { MetadataProps } from '@app/components/Metadata';
import FONTS from '@app/constants/fonts';

import s from './MainLayout.module.scss';

interface MainLayoutProps {
  children: React.ReactNode;
  metadata?: MetadataProps;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  metadata,
  className
}) => {
  return (
    <div className={cn(...FONTS, s.root)}>
      <Metadata {...metadata} />
      <Header />
      <div className={cn(s.main, className)}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
