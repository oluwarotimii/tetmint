// src/TelegramMiniApp.js

import React, { useEffect, useState } from 'react';
import './mini.css'; // optional for custom styling

const TelegramMiniApp = () => {
    const [paymentStatus, setPaymentStatus] = useState('');

    useEffect(() => {
      // Initialize Telegram WebApp
      window.Telegram.WebApp.ready();
  
      // Event listeners
      window.Telegram.WebApp.onEvent('main_button_pressed', () => {
        console.log('Main button pressed event received');
      });
  
      window.Telegram.WebApp.onEvent('back_button_pressed', () => {
        console.log('Back button pressed event received');
      });
  
      window.Telegram.WebApp.onEvent('settings_button_pressed', () => {
        console.log('Settings button pressed event received');
      });
  
      window.Telegram.WebApp.onEvent('invoice_closed', (params) => {
        setPaymentStatus(`Payment Status: ${params.status}`);
      });
  
      window.Telegram.WebApp.onEvent('viewport_changed', (params) => {
        console.log(`Viewport changed: height=${params.height}, is_state_stable=${params.is_state_stable}, is_expanded=${params.is_expanded}`);
      });
  
      window.Telegram.WebApp.onEvent('theme_changed', (params) => {
        console.log(`Theme changed: ${JSON.stringify(params.theme_params)}`);
        document.body.style.backgroundColor = params.theme_params.bg_color;
        document.body.style.color = params.theme_params.text_color;
      });
  
      window.Telegram.WebApp.onEvent('clipboard_text_received', (params) => {
        console.log(`Clipboard text received: ${params.data}`);
      });
  
      window.Telegram.WebApp.onEvent('qr_text_received', (params) => {
        console.log(`QR text received: ${params.data}`);
      });
  
      window.Telegram.WebApp.onEvent('scan_qr_popup_closed', () => {
        console.log('QR scan popup closed');
      });
  
      return () => {
        // Cleanup event listeners
        window.Telegram.WebApp.offEvent('main_button_pressed');
        window.Telegram.WebApp.offEvent('back_button_pressed');
        window.Telegram.WebApp.offEvent('settings_button_pressed');
        window.Telegram.WebApp.offEvent('invoice_closed');
        window.Telegram.WebApp.offEvent('viewport_changed');
        window.Telegram.WebApp.offEvent('theme_changed');
        window.Telegram.WebApp.offEvent('clipboard_text_received');
        window.Telegram.WebApp.offEvent('qr_text_received');
        window.Telegram.WebApp.offEvent('scan_qr_popup_closed');
      };
    }, []);
  
    const handleMainButtonClick = () => {
      window.Telegram.WebApp.MainButton.show();
      window.Telegram.WebApp.MainButton.setText('Main Button');
      window.Telegram.WebApp.MainButton.onClick(() => {
        window.Telegram.WebApp.MainButton.hide();
        console.log('Main button pressed');
      });
    };
  
    const handleBackButtonClick = () => {
      window.Telegram.WebApp.BackButton.show();
      window.Telegram.WebApp.BackButton.onClick(() => {
        console.log('Back button pressed');
      });
    };
  
    const handleSettingsButtonClick = () => {
      window.Telegram.WebApp.setup_settings_button();
    };
  
    const requestPayment = () => {
      window.Telegram.WebApp.openInvoice({
        slug: 'your-invoice-slug'
      });
    };
  
    return (
      <div className="telegram-mini-app">
        <h1>Welcome to Telegram Mini App</h1>
        <button onClick={handleMainButtonClick}>Press Main Button</button>
        <button onClick={handleBackButtonClick}>Enable Back Button</button>
        <button onClick={handleSettingsButtonClick}>Enable Settings Button</button>
        <div id="paymentStatus">{paymentStatus}</div>
      </div>
    );
  };
  
export default TelegramMiniApp;
