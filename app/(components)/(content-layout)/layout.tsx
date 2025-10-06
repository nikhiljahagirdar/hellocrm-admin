"use client"
import Backtotop from '@/shared/layouts-components/backtotop/backtotop'
import Footer from '@/shared/layouts-components/footer/footer'
import Header from '@/shared/layouts-components/header/header'
import { data$, getState } from '@/shared/layouts-components/services/switcherServices'
import Sidebar from '@/shared/layouts-components/sidebar/sidebar'
import Switcher from '@/shared/layouts-components/switcher/switcher'
import React, { Fragment, useEffect, useRef, useState } from 'react'

const layout = ({ children }: any) => {

  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;

      if (progressRef.current) {
        progressRef.current.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let [variable, setVariable] = useState(getState());
  useEffect(() => {
    const subscription = data$.subscribe((e) => {
      setVariable(e);
    });

    return () => subscription.unsubscribe();
  }, []);

  let containerclass = variable.dataPageStyle === 'flat' ? "main-body-container" : ""

  return (
    <Fragment>
      <div ref={progressRef} className="progress-top-bar"></div>
      <Switcher />
      <div className='page'>
        <Header />
        <Sidebar />
        <div className='main-content app-content'>
        <div className={`container-fluid page-container ${containerclass}`}>
            {children}
          </div>
        </div>
        <Footer />
      </div>
      <Backtotop />
    </Fragment>
  )
}

export default layout