import React, { useState, useEffect } from 'react';

const Modal = () => {
 
  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);
