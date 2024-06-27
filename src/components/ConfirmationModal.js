"use client";
import React, { useEffect, useRef, useState } from "react";

export default function ConfirmationModal() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const handleShow = () => setShowModal(true);

  function handleHide() {
    setShowModal(false);

    const cleanURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.replaceState({}, document.title, cleanURL);
  }

  useEffect(() => {
    // Modal para usuarios registrados
    const urlParams = new URLSearchParams(window.location.search);
    const showModalParam = urlParams.get("showModal");
    // console.log(showModalParam);
    if (showModalParam === "true") {
      setShowModal(true);
    }
  }, []);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleHide();
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal]);

  return (
    <div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleShow}>
        Show Modal
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-[5px] flex items-center justify-center z-50">
          <div ref={modalRef} className="bg-white p-6 rounded-lg max-w-md md:max-w-full">
            <div className="max-w-[820px]">
              <svg className="top-[15px] w-10 h-10 cursor-pointer" onClick={handleHide} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
              </svg>

              <div className="bg-white">
                <div className="text-center text-3xl font-semibold capitalize mb-8">Verifica tu correo electrónico</div>
                <div className="text-center text-lg leading-loose">Te hemos enviado un correo electrónico para verificarlo y activar tu cuenta.</div>
                <div className="text-center text-lg leading-loose mb-8">Revisa tu correo electrónico.</div>
                <div className="text-center text-lg leading-loose mb-8">El enlace del correo electrónico caducará en 24 horas.</div>
                <div className="w-6 h-6 left-[24px] top-[24px] absolute"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
